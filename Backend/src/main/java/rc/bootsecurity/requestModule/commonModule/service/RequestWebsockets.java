package rc.bootsecurity.requestModule.commonModule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;
import rc.bootsecurity.requestModule.commonModule.dto.RequestTableDTO;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.requestModule.commonModule.entity.RequestLog;
import rc.bootsecurity.requestModule.commonModule.repository.RequestLogRepository;
import rc.bootsecurity.requestModule.commonModule.utils.RequestConverter;
import rc.bootsecurity.userModule.entity.User;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class RequestWebsockets {
    @Autowired
    protected SimpMessageSendingOperations messagingTemplate;
    @Autowired
    protected RequestLogRepository requestLogRepository;

    protected final String DESTINATION_PREFIX = "/request/";

    public final String NEW_REQUEST = "Nová požiadavka v schránke";
    public final String CHANGED_PRIORITY = "Zmena priority uživateľom ";
    public final String ADDED_SOLVER = "Priradenie uživateľa ";
    public final String REOPEN_REQUEST = "Otvorenie požiadavky uživateľom ";
    public final String REMOVED_SOLVER = "Odstránenie rešiteľa uživateľom ";
    public final String ADDED_ATTACHMENT = "Pridanie prílohy uživateľom ";
    public final String ADDED_COMMENT = "Pridanie komentára uživateľom ";
    public final String ADDED_EVALUATION = "Nacenenie reportu uživateľom ";
    public final String DELETE = "DELETE";

    private RequestTableDTO constructRequestTableWebsocketsDTO(String message, Request request, User user){
        RequestConverter requestConverter = new RequestConverter();
        RequestTableDTO requestTableDTO = requestConverter.convertRequestToRequestTableDTO(request);
        // get all previous logs and add new log
        List<String> logs = this.requestLogRepository.findAllByRequestAndUser(request, user).stream().map(RequestLog::getLogMessage).collect(Collectors.toList());
        logs.add(message);

        String[] logsArray = new String[logs.size()];
        logs.toArray(logsArray);
        requestTableDTO.setLogs(logsArray);
        return requestTableDTO;
    }

    public void sendRequest(User user, Request request, String message){
        this.messagingTemplate.convertAndSend(DESTINATION_PREFIX + user.getUsername(), this.constructRequestTableWebsocketsDTO(message, request, user));
    }

}
