package rc.bootsecurity.service.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rc.bootsecurity.exception.PrivilegeException;
import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.dto.TicketPrivilegeDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.ModuleType;
import rc.bootsecurity.model.entity.ticket.TicketPrivileges;
import rc.bootsecurity.model.enums.MODULE_TYPE;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.finance.FinanceTypeRepository;
import rc.bootsecurity.repository.ModuleTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.repository.ticket.TicketTypeRepository;
import rc.bootsecurity.utils.converter.RequestConverter;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class RequestPrivilegeService {
    @Autowired
    private ModuleTypeRepository moduleTypeRepository;
    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private TicketTypeRepository ticketTypeRepository;
    @Autowired
    private TicketPrivilegesRepository ticketPrivilegesRepository;
    @Autowired
    private FinanceTypeRepository financeTypeRepository;

    private RequestConverter requestConverter = new RequestConverter();

    private TicketPrivileges convertTicketPrivilegeDTOtoEntity(Group group, TicketPrivilegeDTO ticketPrivilegeDTO){
        TicketPrivileges ticketPrivileges = new TicketPrivileges();
        ticketPrivileges.setId(ticketPrivilegeDTO.getId());
        ticketPrivileges.setGroup(group);
        ticketPrivileges.setTicketType(this.ticketTypeRepository.findByName(ticketPrivilegeDTO.getTicketType()));
        ticketPrivileges.setApplicationName(ticketPrivilegeDTO.getApplicationName());

        return ticketPrivileges;
    }

    public Boolean checkIfGroupCanSolveRequestType(Group group, String requestType){
        Optional<List<ModuleType>> requestTypesToSolve = this.moduleTypeRepository.findAllByGroupsToManageDifferentModules(group);
        return requestTypesToSolve.isPresent() && requestTypesToSolve.get().stream()
                .anyMatch(requestTypes -> requestTypes.getName().equalsIgnoreCase(requestType));
    }

    public Boolean checkIfGroupCanSubmitRequestType(Group group, String requestType){
        Optional<List<ModuleType>> requestTypesToSubmit = this.moduleTypeRepository.findAllByGroupsToSubmitDifferentRequests(group);
        return requestTypesToSubmit.isPresent() &&  requestTypesToSubmit.get().stream()
                .anyMatch(requestTypes -> requestTypes.getName().equalsIgnoreCase(requestType));
    }


    public void modifyModuleTypesToUse(GroupDTO groupDTO){
        Group group = this.groupRepository.findByGroupName(groupDTO.getName());
        group.setModuleTypesToUse(new HashSet<>(this.moduleTypeRepository.findAllByNameIn(groupDTO.getApplicationPrivilegeDTO().getModuleTypesToUse())));

        this.groupRepository.save(group);
    }


    public void modifyRequestTypeToSolve(GroupDTO groupDTO){
        Group group = this.groupRepository.findByGroupName(groupDTO.getName());
        group.setRequestTypesToSolve(new HashSet<>(this.moduleTypeRepository.findAllByNameIn(groupDTO.getApplicationPrivilegeDTO().getRequestTypesToSolve())));

        this.groupRepository.save(group);
    }

    private TicketPrivilegeDTO createTicketPrivilegeDTO(String ticketType, String applicationSubtype){
        TicketPrivilegeDTO ticketPrivilegeDTO = new TicketPrivilegeDTO();
        ticketPrivilegeDTO.setApplicationName(applicationSubtype);
        ticketPrivilegeDTO.setTicketType(ticketType);
        return ticketPrivilegeDTO;
    }

    /**
     * @param groupDTO must contain previous ticketPrivileges or they will be deleted
     */
    @Transactional
    public void modifyTicketTypeToSolve(GroupDTO groupDTO){
        Group group = this.groupRepository.findByGroupName(groupDTO.getName());

        // if no Request Type Ticket has been set for the group, throw error
        if(!checkIfGroupCanSolveRequestType(group , MODULE_TYPE.Ticket.toString()))
            throw new PrivilegeException("Request type 'Ticket' not set for solver, can't give him rights for subtickets. ");

        // current Ticket privileges for Group
        List<TicketPrivilegeDTO> currentPrivilegesForUser = this.ticketPrivilegesRepository.findAllByGroup(group).orElse(new ArrayList<>())
                .stream().map(ticketPrivileges -> this.requestConverter.convertTicketPrivilegeToDTO(ticketPrivileges)).collect(Collectors.toList());

        // new privileges which will be saved
        List<TicketPrivileges> privilegesSave = new ArrayList<>();
        List<TicketPrivileges> privilegesRemove = new ArrayList<>();
        for(String ticketType : groupDTO.getApplicationPrivilegeDTO().getSolveTickets().keySet()){
            for(String ticketSubtypeName: groupDTO.getApplicationPrivilegeDTO().getSolveTickets().get(ticketType)){
                TicketPrivilegeDTO ticketPrivilegeDTO = this.createTicketPrivilegeDTO(ticketType, ticketSubtypeName);
                // new privileges which will be saved into DB
                if( !currentPrivilegesForUser.contains(ticketPrivilegeDTO)){
                    privilegesSave.add(convertTicketPrivilegeDTOtoEntity(group, ticketPrivilegeDTO));
                }
                // old privileges which are not in DTO then will be removed
                if(currentPrivilegesForUser.contains(ticketPrivilegeDTO)){
                    privilegesRemove.remove(convertTicketPrivilegeDTOtoEntity(group, ticketPrivilegeDTO));
                }
            }
        }
       /* List<TicketPrivileges> privilegesSave = groupDTO.getApplicationPrivilegeDTO().getSolveTickets().keySet().stream()
                .flatMap(ticketType -> groupDTO.getApplicationPrivilegeDTO().getSolveTickets().get(ticketType).stream()
                        .map(ticketSubtypeName -> this.createTicketPrivilegeDTO(ticketType, ticketSubtypeName))
                        .filter(ticketPrivilegeDTO -> !currentPrivilegesForUser.contains(ticketPrivilegeDTO))
                        .map(ticketPrivilegeDTO -> convertTicketPrivilegeDTOtoEntity(group, ticketPrivilegeDTO))
                        .collect(Collectors.toList()));*/



        // old privileges which are not in DTO then will be removed
       /* List<TicketPrivileges> privilegesRemove = currentPrivilegesForUser.stream().filter(ticketPrivilegeDTO ->
                !groupDTO.getTicketPrivilegesList().contains(ticketPrivilegeDTO)).map(ticketPrivilegeDTO ->
                convertTicketPrivilegeDTOtoEntity(group, ticketPrivilegeDTO)).collect(Collectors.toList());*/


        if(!privilegesSave.isEmpty())
            this.ticketPrivilegesRepository.saveAll(privilegesSave);

        if(!privilegesRemove.isEmpty())
            this.ticketPrivilegesRepository.deleteAll(privilegesRemove);
    }

    public void modifyFinanceTypeToSubmit(GroupDTO groupDTO){
        Group group = this.groupRepository.findByGroupName(groupDTO.getName());

        if(!checkIfGroupCanSubmitRequestType(group , MODULE_TYPE.Financie.toString())){
            throw new PrivilegeException("Request type 'Finance' not set for user, can't give him rights for Finance types.");
        }
        group.setFinanceTypes(new HashSet<>(this.financeTypeRepository.findAllByNameIn(groupDTO.getApplicationPrivilegeDTO().getSubmitFinanceRequests())));

        this.groupRepository.save(group);
    }



}
