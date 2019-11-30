package rc.bootsecurity.service.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestLog;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.request.*;
import rc.bootsecurity.repository.ticket.TicketRepository;
import rc.bootsecurity.repository.ticket.TicketTypeRepository;
import rc.bootsecurity.test.creator.Creator;

import java.util.List;

@Service
public class RequestService {
    @Autowired
    protected RequestRepository requestRepository;
    @Autowired
    protected UserRepository userRepository;
    @Autowired
    protected GroupRepository groupRepository;
    @Autowired
    protected RequestTypeRepository requestTypeRepository;
    @Autowired
    protected TicketTypeRepository ticketTypeRepository;
    @Autowired
    protected TicketRepository ticketRepository;
    @Autowired
    protected RequestLogRepository requestLogRepository;
    @Autowired
    protected RequestPriorityRepository requestPriorityRepository;
    @Autowired
    protected RequestPositionRepository requestPositionRepository;


    public List<RequestLog> getLogsForRequest(Request request){
        return this.requestLogRepository.findAllByRequestOrderByTimestampAsc(request);
    }

    /**
     * @param request which will be changed
     * @param user who initialise some changing on request
     * @param changingObject which column in tbl_request is updated
     * @param oldState what value was present in that column
     * @param newState what value will be present in that column
     */
    protected void logRequestModification(Request request, User user, String changingObject, String oldState, String newState){
        String log =  "Stav " + changingObject + " sa zmenil z " + oldState + " na " + newState + ". "+ "Požiadavka bola inicializovaná uživateľom : " + user.getFullName();
        this.requestLogRepository.save(Creator.createRequestLog(log, user, request));
    }

    /*public RequestContainerDTO getAllOpenRequests(String username, UserPrivilegeDTO userPrivilegeDTO){
        RequestContainerDTO requestContainerDTO = new RequestContainerDTO();
        User currentlyLoggedInUser = this.userRepository.findByUsername(username).get();

        List<Request> openRequestWhichICreated = this.requestRepository.findAllByCreatorAndClosedIsNull(currentlyLoggedInUser);
        List<Request> openRequestsAssignedToMe = this.requestRepository.findAllByAssignedAndClosedIsNull(currentlyLoggedInUser);
        List<Request> watchedRequestsByUser = this.requestRepository.findAllByUserWhoWatchThisRequestContains(currentlyLoggedInUser);
        Map<String, List<Request>> requestsAssignedToMyTeam = new HashMap<>();
        Map<String, List<Request>> requestSendByMyTeam = new HashMap<>();
        List<Request> openRequests = new ArrayList<>();
        requestContainerDTO.setRequestsOpen(openRequests);

        // get open requests which users of my team created or are assigned to
        List<Group> managedGroups = this.groupRepository.findAllByGroupManager(currentlyLoggedInUser).orElse(new ArrayList<>());
        if(!managedGroups.isEmpty()){
            managedGroups.forEach(group -> this.userRepository.findAllByGroupsInvolved(group).stream()
                .filter(user -> !user.getUsername().equalsIgnoreCase(currentlyLoggedInUser.getUsername())) // except me
                .forEach(user -> {
                    if(!requestSendByMyTeam.containsKey(group.getGroupName())){
                        requestSendByMyTeam.put(group.getGroupName() , new ArrayList<>());
                        requestsAssignedToMyTeam.put(group.getGroupName() , new ArrayList<>());
                    }
                    requestSendByMyTeam.get(group.getGroupName()).addAll(this.requestRepository.findAllByCreatorAndClosedIsNull(user));
                    requestsAssignedToMyTeam.get(group.getGroupName()).addAll(this.requestRepository.findAllByAssignedAndClosedIsNull(user));
                })
            );
        }

        if(!userPrivilegeDTO.getSolveRequests().isEmpty()) {
            List<RequestType> requestTypesAllowedToSolve = this.requestTypeRepository.findAllByNameIn(userPrivilegeDTO.getSolveRequests());

            // only if solver can solve request type ticket -> then load privilege to solve tickets -> software, user, server etc.
            if(requestTypesAllowedToSolve.stream().anyMatch(requestType -> requestType.getName().equalsIgnoreCase(REQUEST_TYPE.TICKET.toString()))){
                List<TicketType> ticketTypePrivileges = this.ticketTypeRepository.findAllByNameIn(userPrivilegeDTO.getSolveTickets().keySet());
                openRequests = this.ticketRepository.findAllByTicketTypeInAndClosedIsNull(ticketTypePrivileges).stream().filter(
                        ticket -> ticket.getTicketType().getName().equalsIgnoreCase(TICKET_TYPE.OTHER.toString()) ||
                                ticket.getTicketType().getName().equalsIgnoreCase(TICKET_TYPE.USER.toString()) ||
                                (userPrivilegeDTO.getSolveTickets().containsKey(ticket.getTicketType().getName()) &&
                                        userPrivilegeDTO.getSolveTickets().get(ticket.getTicketType().getName()).contains(ticket.getTicketSubtypeName()))
                ).collect(Collectors.toList());
            }
            // fetch rest of open requests -> reports , finance
            List<Request>  finalOpenRequests = openRequests;
            requestTypesAllowedToSolve.stream().filter(requestType -> !requestType.getName().equalsIgnoreCase(REQUEST_TYPE.TICKET.toString())).
                    forEach(requestType -> finalOpenRequests.addAll(this.requestRepository.findAllByRequestTypeAndClosedIsNull(requestType)
                            .orElse(new ArrayList<>())));

            requestContainerDTO.setRequestsOpen(finalOpenRequests);
        }

        requestContainerDTO.setRequestsWatchedByUser(watchedRequestsByUser);
        requestContainerDTO.setRequestsAssignedToUser(openRequestsAssignedToMe);
        requestContainerDTO.setRequestsCreatedByUser(openRequestWhichICreated);
        requestContainerDTO.setRequestsAssignedToMyTeam(requestsAssignedToMyTeam);
        requestContainerDTO.setRequestSendByMyTeam(requestSendByMyTeam);

        return requestContainerDTO;
    }*/

}
