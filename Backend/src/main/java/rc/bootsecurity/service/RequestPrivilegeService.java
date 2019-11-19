package rc.bootsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.exception.PrivilegeException;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.finance.FinanceType;
import rc.bootsecurity.model.entity.request.RequestType;
import rc.bootsecurity.model.entity.ticket.TicketPrivileges;
import rc.bootsecurity.model.enums.REQUEST_TYPE;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.finance.FinanceTypeRepository;
import rc.bootsecurity.repository.request.RequestTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.repository.ticket.TicketTypeRepository;

import java.util.*;

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

    /**
     * Inserts request types for groups which its members will be able to submit
     * @param requestTypeName - Ticket, Report, Finance
     */
    public void insertRequestTypeForGroupToSubmit(String groupName, List<String> requestTypeName){
        List<RequestType> requestType = this.requestTypeRepository.findAllByNameIn(requestTypeName);
        Group group = this.groupRepository.findByGroupName(groupName);
        group.setRequestTypesToSubmit(new HashSet<>(requestType));

        this.groupRepository.save(group);
    }

    /**
     * Inserts RequestTypes for groups which user's will be able to solve.
     * Additional configuration is required for Tickets.
     * @param requestTypeName - Ticket, Report, Finance
     */
    public void insertRequestTypeForGroupToSolve(String groupName, List<String> requestTypeName){
        List<RequestType> requestType = this.requestTypeRepository.findAllByNameIn(requestTypeName);
        Group group = this.groupRepository.findByGroupName(groupName);
        group.setRequestTypesToSolve(new HashSet<>(requestType));

        this.groupRepository.save(group);
    }

    /**
     * checks if given group has privilege to solve request type
     */
    public Boolean checkIfGroupCanSolveRequestType(Group group, String requestType){
        Optional<List<RequestType>> requestTypesToSolve = this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(group);
        return requestTypesToSolve.isEmpty() || requestTypesToSolve.get().stream()
                .noneMatch(requestTypes -> requestTypes.getName().equalsIgnoreCase(requestType));
    }

    /**
     * checks if given group has privilege to submit request type,
     * mainly used when giving privileges for Finance subtypes
     */
    public Boolean checkIfGroupCanSubmitRequestType(Group group, String requestType){
        Optional<List<RequestType>> requestTypesToSolve = this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(group);
        return requestTypesToSolve.isEmpty() || requestTypesToSolve.get().stream()
                .noneMatch(requestTypes -> requestTypes.getName().equalsIgnoreCase(requestType));
    }

    /**
     * Inserts ticket privilege for given group
     * If group does not have allowed to solve Ticket then throw error
     * @param ticketTypeName Software, Hardware, Server, User, Other
     * @param applicationName Subtypes From Software, Hardware, Server.
     *                        if User or Other is selected then Optional.Empty()
     */
    public void insertTicketTypeToSolve(String groupName, String ticketTypeName, Optional<String> applicationName){
        Group group = this.groupRepository.findByGroupName(groupName);

        // if no Request Type Ticket has been set for the group, throw error
        if(checkIfGroupCanSolveRequestType(group , REQUEST_TYPE.TICKET.toString())){
            throw new PrivilegeException("Request type 'Ticket' not set for solver, can't give him rights for subtickets. ");
        }

        TicketPrivileges ticketPrivileges = new TicketPrivileges();
        ticketPrivileges.setGroup(group);
        ticketPrivileges.setTicketType(this.ticketTypeRepository.findByName(ticketTypeName));
        applicationName.ifPresent(ticketPrivileges::setApplicationName);

        this.ticketPrivilegesRepository.save(ticketPrivileges);
    }

    public void insertFinanceTypeToSubmit(String groupName, String financeTypeName){
        Group group = this.groupRepository.findByGroupName(groupName);

        if(checkIfGroupCanSubmitRequestType(group , REQUEST_TYPE.FINANCE.toString())){
            throw new PrivilegeException("Request type 'Finance' not set for user, can't give him rights for Finance types.");
        }
        group.setFinanceTypes(new HashSet<>(this.financeTypeRepository.findAllByGroupsToSubmitSpecificFinanceType(group).orElse(new ArrayList<>())));
        group.getFinanceTypes().add(this.financeTypeRepository.findByName(financeTypeName));

        this.groupRepository.save(group);
    }
}
