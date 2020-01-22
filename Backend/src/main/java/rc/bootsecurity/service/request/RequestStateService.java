package rc.bootsecurity.service.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.exception.RequestNotFoundException;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestPriority;
import rc.bootsecurity.model.enums.REQUEST_POSITION;
import rc.bootsecurity.repository.ModuleTypeRepository;
import rc.bootsecurity.repository.request.RequestPositionRepository;
import rc.bootsecurity.repository.request.RequestPriorityRepository;
import rc.bootsecurity.repository.request.RequestRepository;
import rc.bootsecurity.service.UserService;
import rc.bootsecurity.utils.service.EmailService;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class RequestStateService {
    @Autowired
    private RequestPositionRepository requestPositionRepository;
    @Autowired
    private RequestPriorityRepository requestPriorityRepository;
    @Autowired
    private ModuleTypeRepository moduleTypeRepository;
    @Autowired
    private RequestRepository requestRepository;
    @Autowired
    protected UserService userService;
    @Autowired
    private EmailService emailService;
    @Autowired
    private RequestCommentService requestCommentService;

    protected Request findRequest(Integer requestId){
        return this.requestRepository.findById(requestId).orElseThrow(() -> new RequestNotFoundException("Not found request with id : " + requestId));
    }

    public void saveOrUpdateRequest(Request request){
        this.requestRepository.save(request);
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

    public void closeRequest(Integer requestId){
        User user = this.userService.loadUserByUsername(this.userService.getPrincipalUsername());
        Request request = this.findRequest(requestId);
        request.setClosed(user);
        request.setTimestampClosed(new Timestamp(System.currentTimeMillis()));
        this.saveOrUpdateRequest(request);

        // send information email
        String[] emails = this.getEngagedUsersEmails(request);
        this.emailService.sendClosedRequestEmail(request, user, emails);
    }

    public void reopenRequest(Integer requestId){
        Request request = this.findRequest(requestId);
        request.setClosed(null);
        request.setTimestampClosed(null);
        this.saveOrUpdateRequest(request);

        // send information email
        User user = this.userService.loadUserByUsername(this.userService.getPrincipalUsername());
        String[] emails = this.getEngagedUsersEmails(request);
        this.emailService.sendReopenRequestEmail(request, user, emails);
    }

    public void changePriority(Integer requestId, String priority){
        RequestPriority requestPriority = this.requestPriorityRepository.findByName(priority);
        Request request = this.findRequest(requestId);

        request.setRequestPriority(requestPriority);
        this.saveOrUpdateRequest(request);
    }

    public void changeCommenting(Integer requestId){
        Request request = this.findRequest(requestId);
        request.setAllowCommenting(!request.getAllowCommenting());
        this.saveOrUpdateRequest(request);
    }


    public String[] getEngagedUsersEmails(Request request){
       String assigned = request.getAssigned() != null ? request.getAssigned().getEmail() : "";
       String solver = "";
       if(request.getSolutionComment() != null)
           solver = this.requestCommentService.getRequestComment(request.getSolutionComment()).getUser().getEmail();

       String closed = request.getClosed() != null ? request.getClosed().getEmail() : "";
       List<String> watched = new ArrayList<>(this.userService.getUsersWatchedRequest(request).stream().map(User::getEmail).collect(Collectors.toList()));
       watched.addAll(new ArrayList<>(Arrays.asList(closed, solver, assigned)));
       return (String[]) new HashSet(watched).toArray(String[]::new);
    }
}
