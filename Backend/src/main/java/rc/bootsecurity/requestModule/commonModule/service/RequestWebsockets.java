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
    public final String CHANGED_PRIORITY = " zmenil prioritu na požiadavku s id: ";
    public final String ADDED_SOLVER = " bol pridelený na požiadavku s id: ";
    public final String CLOSED_REQUEST = " uzatvoril požiadavku s id: ";
    public final String REOPEN_REQUEST = " uzatvoril požiadavku s id: ";
    public final String REMOVED_SOLVER = " sa vzdal požiadavku s id: ";
    public final String ADDED_ATTACHMENT = " pridal prílohu na požiadavku s id: ";
    public final String ADDED_COMMENT = " pridal komentár na požiadavku s id: ";
    public final String ADDED_EVALUATION = " nacenil požiadavku s id: ";

    private RequestTableDTO constructRequestTableWebsocketsDTO(String message, Request request, User user){
        RequestConverter requestConverter = new RequestConverter();
        RequestTableDTO requestTableDTO = requestConverter.convertRequestToRequestTableDTO(request);
        List<String> logs = this.requestLogRepository.findAllByRequestAndUserAndTimestampClosedIsNotNull(request, user).stream().map(RequestLog::getLogMessage).collect(Collectors.toList());
        logs.add(message);

        String[] logsArray = new String[logs.size()];
        logs.toArray(logsArray);
        requestTableDTO.setLogMessage(logsArray);
        return requestTableDTO;
    }

    public void sendRequest(User user, Request request, String message){
        this.messagingTemplate.convertAndSend(DESTINATION_PREFIX + user.getUsername(), this.constructRequestTableWebsocketsDTO(message, request, user));
    }

}
