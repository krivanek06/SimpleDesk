package rc.bootsecurity.requestModule.commonModule.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.requestModule.commonModule.exception.RequestNotFoundException;
import rc.bootsecurity.requestModule.commonModule.repository.RequestPositionRepository;
import rc.bootsecurity.requestModule.commonModule.repository.RequestRepository;
import rc.bootsecurity.userModule.dto.UserSimpleDTO;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.requestModule.commonModule.enums.REQUEST_POSITION;
import rc.bootsecurity.userModule.service.UserService;
import rc.bootsecurity.userModule.util.UserConverter;
import rc.bootsecurity.notificationModule.emailModule.EmailService;

import java.util.HashSet;


@Service
public class RequestManagementService{
    @Autowired
    private RequestRepository requestRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private RequestPositionRepository requestPositionRepository;
    @Autowired
    private EmailService emailService;


    private UserConverter userConverter = new UserConverter();

    public void saveOrUpdateRequest(Request request){
        this.requestRepository.save(request);
    }


    private Request findRequest(Integer requestId){
        return this.requestRepository.findById(requestId)
                .orElseThrow(() -> new RequestNotFoundException("Not found request with id : " + requestId));
    }

    public void removeMeAsAssignUserAndSave(Integer requestId){
        Request request = this.findRequest(requestId);
        String username = this.userService.getPrincipalUsername();
        if(request.getAssigned().getUsername().equalsIgnoreCase(username)) {
            request.setAssigned(null);
            request.setRequestPosition(this.requestPositionRepository.findByName(REQUEST_POSITION.Nepriradené.name()));
            this.saveOrUpdateRequest(request);
        }
    }

    public void removeAssignUserAndSave(Integer requestId){
        Request request = this.findRequest(requestId);
        request.setAssigned(null);
        request.setRequestPosition(this.requestPositionRepository.findByName(REQUEST_POSITION.Nepriradené.name()));
        this.saveOrUpdateRequest(request);
    }

    public void setAssignUserAndSave(Integer requestId){
        User user = this.userService.loadUserByUsername(this.userService.getPrincipalUsername());
        Request request = this.findRequest(requestId);
        request.setAssigned(user);
        request.setRequestPosition(this.requestPositionRepository.findByName(REQUEST_POSITION.Priradené.name()));
        this.saveOrUpdateRequest(request);
    }

    public UserSimpleDTO setAssignUserAndSave(Integer requestId, UserSimpleDTO userSimpleDTO){
        User user = this.userService.loadUserByUsername(userSimpleDTO.getUsername());
        User principal = this.userService.loadUserByUsername(this.userService.getPrincipalUsername());
        Request request = this.findRequest(requestId);
        request.setAssigned(user);
        request.setRequestPosition(this.requestPositionRepository.findByName(REQUEST_POSITION.Priradené.name()));
        this.saveOrUpdateRequest(request);
        this.emailService.sendAssignRequestEmail(request, principal,user.getEmail() );
        return this.userConverter.convertUserToSimpleDTO(user);
    }


    public void setWatchRequestAndSave(Integer requestId, UserSimpleDTO userSimpleDTO){
        Request request = this.findRequest(requestId);
        request.setUserWhoWatchThisRequest(new HashSet<>(this.userService.getUsersWatchedRequest(request)));
        request.getUserWhoWatchThisRequest().add(this.userService.loadUserByUsername(userSimpleDTO.getUsername()));
        this.saveOrUpdateRequest(request);
    }

    public void removeWatchRequestAndSave(Integer requestId, UserSimpleDTO userSimpleDTO){
        Request request = this.findRequest(requestId);
        request.setUserWhoWatchThisRequest(new HashSet<>(this.userService.getUsersWatchedRequest(request)));
        User user = this.userService.loadUserByUsername(userSimpleDTO.getUsername());
        request.getUserWhoWatchThisRequest().remove(user);
        this.saveOrUpdateRequest(request);
    }


}
