package rc.bootsecurity.requestModule.commonModule.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import rc.bootsecurity.requestModule.commonModule.entity.RequestPriority;
import rc.bootsecurity.requestModule.commonModule.exception.RequestNotFoundException;
import rc.bootsecurity.requestModule.commonModule.repository.*;
import rc.bootsecurity.userModule.dto.UserSimpleDTO;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.requestModule.commonModule.enums.REQUEST_POSITION;
import rc.bootsecurity.userModule.service.UserService;
import rc.bootsecurity.userModule.util.UserConverter;
import rc.bootsecurity.notificationModule.emailModule.EmailService;
import rc.bootsecurity.util.fileModule.FileService;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class RequestManagementService{
    @Autowired
    protected RequestRepository requestRepository;
    @Autowired
    protected UserService userService;
    @Autowired
    private RequestPositionRepository requestPositionRepository;
    @Autowired
    private EmailService emailService;
    @Autowired
    private RequestPriorityRepository requestPriorityRepository;
    @Autowired
    private ModuleTypeRepository moduleTypeRepository;
    @Autowired
    protected RequestWebsockets requestWebsockets;
    @Autowired
    protected RequestLogService requestLogService;


    private UserConverter userConverter = new UserConverter();

    public void saveOrUpdateRequest(Request request){
        this.requestRepository.save(request);
    }


    protected Request findRequest(Integer requestId){
        return this.requestRepository.findById(requestId).orElseThrow(() -> new RequestNotFoundException("Not found request with id : " + requestId));
    }

    private void setUserAndInform(Request request, User user, String message, String position){
        // load users who can see changes
        List<User> usersBefore = this.userService.loadUsersByUsername(this.userService.getUsersToSendRequestChange(request.getId())).stream()
                .filter(x -> !x.getUsername().equalsIgnoreCase(this.userService.getPrincipalUsername())).collect(Collectors.toList());

        request.setAssigned(user);
        request.setRequestPosition(this.requestPositionRepository.findByName(position));
        this.saveOrUpdateRequest(request);

        // inform new users
        this.requestLogService.saveLogAndBroadCast(request,  message);

        // remove request from old users
        List<User> usersAfter = this.userService.loadUsersByUsername(this.userService.getUsersToSendRequestChange(request.getId())).stream()
                .filter(x -> !x.getUsername().equalsIgnoreCase(this.userService.getPrincipalUsername())).collect(Collectors.toList());
        usersBefore.removeAll(usersAfter);

        usersBefore.forEach(x -> this.requestWebsockets.sendRequest(x, request , "DELETE"));
    }

    public void removeMeAsAssignUserAndSave(Integer requestId){
        Request request = this.findRequest(requestId);
        String username = this.userService.getPrincipalUsername();
        if(request.getAssigned().getUsername().equalsIgnoreCase(username)) {
            this.setUserAndInform(request, null, this.requestWebsockets.REMOVED_SOLVER, REQUEST_POSITION.Nepriradené.name());
        }
    }

    public void removeAssignUserAndSave(Integer requestId){
        this.setUserAndInform( this.findRequest(requestId), null, this.requestWebsockets.REMOVED_SOLVER, REQUEST_POSITION.Nepriradené.name());
    }

    public void setAssignUserAndSave(Integer requestId){
        User user = this.userService.loadUserByUsername(this.userService.getPrincipalUsername());
        Request request = this.findRequest(requestId);

        this.setUserAndInform(request, user, this.requestWebsockets.ADDED_SOLVER, REQUEST_POSITION.Priradené.name());
    }

    public UserSimpleDTO setAssignUserAndSave(Integer requestId, UserSimpleDTO userSimpleDTO){
        User user = this.userService.loadUserByUsername(userSimpleDTO.getUsername());
        User principal = this.userService.loadUserByUsername(this.userService.getPrincipalUsername());
        Request request = this.findRequest(requestId);

        this.setUserAndInform(request, user, this.requestWebsockets.ADDED_SOLVER, REQUEST_POSITION.Priradené.name());
        this.emailService.sendAssignRequestEmail(request, principal,user.getEmail() );

        return this.userConverter.convertUserToSimpleDTO(user);
    }


    protected void setAttributesForRequest(Request request,String requestType, String name,  String priority ){
        request.setTimestampCreation(new Timestamp(System.currentTimeMillis()));
        request.setCreator(this.userService.loadUserByUsername(this.userService.getPrincipalUsername()));
        request.setName(name);
        request.setRequestPosition(this.requestPositionRepository.findByName(REQUEST_POSITION.Vytvorené.name()));
        request.setModuleType(this.moduleTypeRepository.findByName(requestType));
        request.setRequestPriority(this.requestPriorityRepository.findByName(priority));
        request.setAllowCommenting(true);
    }

    public void uploadFiles(Integer requestId, MultipartFile[] uploadingFiles){
        FileService fileService = new FileService();
        fileService.uploadFileForRequest(requestId , uploadingFiles);
        Request request = this.findRequest(requestId);

        this.requestLogService.saveLogAndBroadCast(request,  this.requestWebsockets.ADDED_ATTACHMENT);
    }

    public void closeRequest(Integer requestId){
        User user = this.userService.loadUserByUsername(this.userService.getPrincipalUsername());
        Request request = this.findRequest(requestId);
        request.setClosed(user);
        request.setTimestampClosed(new Timestamp(System.currentTimeMillis()));
        request.setRequestPosition(this.requestPositionRepository.findByName(REQUEST_POSITION.Uzatvorené.name()));

        this.saveOrUpdateRequest(request);
        // send information email
        String assigned = request.getAssigned() != null ? request.getAssigned().getEmail() : "";
        String creator = request.getCreator().getEmail();
        String closed = request.getClosed().getEmail();

        this.emailService.sendClosedRequestEmail(request, user, assigned, creator, closed);

        this.requestLogService.deleteLogsAndBroadCast(request);
    }

    public void reopenRequest(Integer requestId){
        Request request = this.findRequest(requestId);

        // send information email
        User user = this.userService.loadUserByUsername(this.userService.getPrincipalUsername());
        //String[] emails = this.getEngagedUsersEmails(request);
        String assigned = request.getAssigned() != null ? request.getAssigned().getEmail() : "";
        String creator = request.getCreator().getEmail();
        String closed = request.getClosed().getEmail();

        this.emailService.sendReopenRequestEmail(request, user, creator, assigned, closed);

        request.setClosed(null);
        request.setTimestampClosed(null);
        request.setRequestPosition(this.requestPositionRepository.findByName(REQUEST_POSITION.Priradené.name()));
        this.saveOrUpdateRequest(request);

        this.requestLogService.saveLogAndBroadCast(request,  this.requestWebsockets.REOPEN_REQUEST);
    }


    public void changePriority(Integer requestId, String priority){
        RequestPriority requestPriority = this.requestPriorityRepository.findByName(priority);
        Request request = this.findRequest(requestId);

        request.setRequestPriority(requestPriority);
        this.saveOrUpdateRequest(request);

        this.requestLogService.saveLogAndBroadCast(request,  this.requestWebsockets.CHANGED_PRIORITY);
    }

    public void changeCommenting(Integer requestId){
        Request request = this.findRequest(requestId);
        request.setAllowCommenting(!request.getAllowCommenting());
        this.saveOrUpdateRequest(request);
    }

    public void removeLogsOnRequestForPrincipal(Integer requestId){
        Request request = this.findRequest(requestId);
        User principal = this.userService.loadUserByUsername(this.userService.getPrincipalUsername());
        this.requestLogService.deleteLogsForUser(request, principal);
    }

}
