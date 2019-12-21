package rc.bootsecurity.service.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestLog;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.ModuleTypeRepository;
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
    protected ModuleTypeRepository moduleTypeRepository;
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



}
