package rc.bootsecurity.service.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import rc.bootsecurity.exception.PrivilegeException;
import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.dto.TicketPrivilegeDTO;
import rc.bootsecurity.model.dto.request.RequestCommentDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.request.RequestComment;
import rc.bootsecurity.model.entity.request.RequestType;
import rc.bootsecurity.model.entity.ticket.TicketPrivileges;
import rc.bootsecurity.model.enums.REQUEST_TYPE;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.finance.FinanceTypeRepository;
import rc.bootsecurity.repository.request.RequestTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.repository.ticket.TicketTypeRepository;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class RequestPrivilegeService {
    @Autowired
    private RequestTypeRepository requestTypeRepository;
    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private TicketTypeRepository ticketTypeRepository;
    @Autowired
    private TicketPrivilegesRepository ticketPrivilegesRepository;
    @Autowired
    private FinanceTypeRepository financeTypeRepository;
    @Autowired
    private RequestConverterService requestConverterService;

    private TicketPrivileges convertTicketPrivilegeDTOtoEntity(Group group, TicketPrivilegeDTO ticketPrivilegeDTO){
        TicketPrivileges ticketPrivileges = new TicketPrivileges();
        ticketPrivileges.setId(ticketPrivilegeDTO.getId());
        ticketPrivileges.setGroup(group);
        ticketPrivileges.setTicketType(this.ticketTypeRepository.findByName(ticketPrivilegeDTO.getTicketType()));
        ticketPrivileges.setApplicationName(ticketPrivilegeDTO.getApplicationName());

        return ticketPrivileges;
    }

    public Boolean checkIfGroupCanSolveRequestType(Group group, String requestType){
        Optional<List<RequestType>> requestTypesToSolve = this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(group);
        return requestTypesToSolve.isPresent() && requestTypesToSolve.get().stream()
                .anyMatch(requestTypes -> requestTypes.getName().equalsIgnoreCase(requestType));
    }

    public Boolean checkIfGroupCanSubmitRequestType(Group group, String requestType){
        Optional<List<RequestType>> requestTypesToSubmit = this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(group);
        return requestTypesToSubmit.isPresent() &&  requestTypesToSubmit.get().stream()
                .anyMatch(requestTypes -> requestTypes.getName().equalsIgnoreCase(requestType));
    }


    public void modifyRequestTypeForGroupToSubmit(GroupDTO groupDTO){
        Group group = this.groupRepository.findByGroupName(groupDTO.getName());
        group.setRequestTypesToSubmit(new HashSet<>(this.requestTypeRepository.findAllByNameIn(groupDTO.getRequestTypesToSubmit())));

        this.groupRepository.save(group);
    }


    public void modifyRequestTypeForGroupToSolve(GroupDTO groupDTO){
        Group group = this.groupRepository.findByGroupName(groupDTO.getName());
        group.setRequestTypesToSolve(new HashSet<>(this.requestTypeRepository.findAllByNameIn(groupDTO.getRequestTypesToSolve())));

        this.groupRepository.save(group);
    }

    /**
     * @param groupDTO must contain previous ticketPrivileges or they will be deleted
     */
    @Transactional
    public void modifyTicketTypeToSolve(GroupDTO groupDTO){
        Group group = this.groupRepository.findByGroupName(groupDTO.getName());

        // if no Request Type Ticket has been set for the group, throw error
        if(!checkIfGroupCanSolveRequestType(group , REQUEST_TYPE.TICKET.toString()))
            throw new PrivilegeException("Request type 'Ticket' not set for solver, can't give him rights for subtickets. ");

        // current Ticket privileges for Group
        List<TicketPrivilegeDTO> currentPrivilegesForUser = this.ticketPrivilegesRepository.findAllByGroup(group).orElse(new ArrayList<>())
                .stream().map(ticketPrivileges -> this.requestConverterService.convertTicketPrivilegeToDTO(ticketPrivileges)).collect(Collectors.toList());

        // new privileges which will be saved
        List<TicketPrivileges> privilegesSave = groupDTO.getTicketPrivilegesList().stream().filter(ticketPrivilegeDTO ->
                !currentPrivilegesForUser.contains(ticketPrivilegeDTO)).map(ticketPrivilegeDTO ->
                convertTicketPrivilegeDTOtoEntity(group, ticketPrivilegeDTO)).collect(Collectors.toList());

        // old privileges which are not in DTO then will be removed
        List<TicketPrivileges> privilegesRemove = currentPrivilegesForUser.stream().filter(ticketPrivilegeDTO ->
                !groupDTO.getTicketPrivilegesList().contains(ticketPrivilegeDTO)).map(ticketPrivilegeDTO ->
                convertTicketPrivilegeDTOtoEntity(group, ticketPrivilegeDTO)).collect(Collectors.toList());

        if(!privilegesSave.isEmpty())
            this.ticketPrivilegesRepository.saveAll(privilegesSave);

        if(!privilegesRemove.isEmpty())
            this.ticketPrivilegesRepository.deleteAll(privilegesRemove);
          //  this.ticketPrivilegesRepository.deleteByIdIn(privilegesRemove.stream().map(TicketPrivileges::getId).collect(Collectors.toList()));


    }

    public void modifyFinanceTypeToSubmit(GroupDTO groupDTO){
        Group group = this.groupRepository.findByGroupName(groupDTO.getName());

        if(!checkIfGroupCanSubmitRequestType(group , REQUEST_TYPE.FINANCE.toString())){
            throw new PrivilegeException("Request type 'Finance' not set for user, can't give him rights for Finance types.");
        }
        group.setFinanceTypes(new HashSet<>(this.financeTypeRepository.findAllByNameIn(groupDTO.getFinanceTypes())));

        this.groupRepository.save(group);
    }
}
