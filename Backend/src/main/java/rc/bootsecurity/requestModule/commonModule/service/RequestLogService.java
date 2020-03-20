package rc.bootsecurity.requestModule.commonModule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.requestModule.commonModule.entity.RequestLog;
import rc.bootsecurity.requestModule.commonModule.repository.RequestLogRepository;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.userModule.service.UserService;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RequestLogService {
    @Autowired
    private RequestLogRepository requestLogRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private RequestWebsockets requestWebsockets;


    private RequestLog createRequestLog(Request request, User user, String message){
        RequestLog requestLog = new RequestLog();
        requestLog.setRequest(request);
        requestLog.setUser(user);
        requestLog.setLogMessage(message);
        requestLog.setTimestampCreation(new Timestamp(System.currentTimeMillis()));
        return requestLog;
    }


    public void BroadcastRequest(Request request, String message){
        User principal = this.userService.loadUserByUsername(this.userService.getPrincipalUsername());
        List<User> users = this.userService.loadUsersByUsername(this.userService.getUsersToSendRequestChange(request.getId())).stream()
                .filter(x -> !x.getUsername().equalsIgnoreCase(principal.getUsername())).collect(Collectors.toList());

        String finalMessage = message + principal.getFullName();
        users.forEach(x -> this.requestWebsockets.sendRequest(x, request , finalMessage));
        List<RequestLog> requestLogs = users.stream().map(x -> this.createRequestLog(request, x, finalMessage)).collect(Collectors.toList());
        this.requestLogRepository.saveAll(requestLogs);
    }

    public void BroadcastRequest(Request request){
        User principal = this.userService.loadUserByUsername(this.userService.getPrincipalUsername());
        List<User> users = this.userService.loadUsersByUsername(this.userService.getUsersToSendRequestChange(request.getId())).stream()
                .filter(x -> !x.getUsername().equalsIgnoreCase(principal.getUsername())).collect(Collectors.toList());

        users.forEach(x -> this.requestWebsockets.sendRequest(x, request));
    }

    @Transactional
    public void deleteLogsAndBroadCast(Request request){
        User principal = this.userService.loadUserByUsername(this.userService.getPrincipalUsername());
        List<User> users = this.userService.loadUsersByUsername(this.userService.getUsersToSendRequestChange(request.getId())).stream()
                .filter(x -> !x.getUsername().equalsIgnoreCase(principal.getUsername())).collect(Collectors.toList());

        this.requestLogRepository.deleteAllByRequest(request);
        users.forEach(x -> this.requestWebsockets.sendRequest(x, request , this.requestWebsockets.CLOSED_REQUEST + principal.getFullName()));
    }

    @Transactional
    public void deleteLogsForUser(Request request, User user){
        this.requestLogRepository.deleteAllByRequestAndUser(request, user);
    }


}
