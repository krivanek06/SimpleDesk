package rc.bootsecurity.requestModule.commonModule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDTO;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.requestModule.commonModule.entity.RequestLog;
import rc.bootsecurity.requestModule.commonModule.repository.RequestLogRepository;
import rc.bootsecurity.requestModule.commonModule.utils.RequestConverter;
import rc.bootsecurity.requestModule.requestCommentModule.service.RequestCommentService;
import rc.bootsecurity.userModule.entity.User;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class RequestWebsockets {
    @Autowired
    protected SimpMessageSendingOperations messagingTemplate;
    @Autowired
    protected RequestLogRepository requestLogRepository;
    @Autowired
    protected RequestCommentService requestCommentService;

    protected final String DESTINATION_PREFIX = "/request/";

    public final String NEW_REQUEST = "Nová požiadavka vytvorená užívateľom ";
    public final String CHANGED_PRIORITY = "Zmena priority uživateľom ";

    public final String ADDED_SOLVER = "Priradenie riešiteľa užívateľa ";
    public final String REMOVED_SOLVER = "Odstránenie rešiteľa užívateľom ";

    public final String REOPEN_REQUEST = "Otvorenie požiadavky užívateľom ";
    public final String CLOSED_REQUEST = "Požiadavka uzavretá užívateľom ";

    public final String ADDED_ATTACHMENT = "Pridanie prílohy užívateľom ";
    public final String ADDED_COMMENT = "Pridanie komentára užívateľom ";
    public final String SHARED_COMMENT = "Vyzdieľaný komentára užívateľom ";
    public final String ADDED_EVALUATION = "Nacenenie reportu užívateľom ";

    public final String DELETE = "DELETE";

    private RequestDTO constructRequestTableWebsocketsDTO(String message, Request request, User user){
        RequestConverter requestConverter = new RequestConverter();

        // request.setRequestComments(this.requestCommentService.getRequestCommentsForRequest(request, user.getUsername()));
        RequestDTO requestDTO = requestConverter.convertRequestToRequestDTO(request);
        requestDTO.setRequestCommentDTOS(this.requestCommentService.getRequestCommentDTOForRequest(request, user.getUsername()));
        // get all previous logs and add new log
        List<String> logs = this.requestLogRepository.findAllByRequestAndUser(request, user).stream().map(RequestLog::getLogMessage).collect(Collectors.toList());
        logs.add(message);

        String[] logsArray = new String[logs.size()];
        logs.toArray(logsArray);
        requestDTO.setLogs(logsArray);
        return requestDTO;
    }

    public void sendRequest(User user, Request request, String message){
        this.messagingTemplate.convertAndSend(DESTINATION_PREFIX + user.getUsername(), this.constructRequestTableWebsocketsDTO(message, request, user));
    }

    public void sendRequest(User user, Request request){
        RequestConverter requestConverter = new RequestConverter();
        RequestDTO requestDTO = requestConverter.convertRequestToRequestDTO(request);
        requestDTO.setRequestCommentDTOS(this.requestCommentService.getRequestCommentDTOForRequest(request, user.getUsername()));

        this.messagingTemplate.convertAndSend(DESTINATION_PREFIX + user.getUsername(), requestDTO);
    }

}
