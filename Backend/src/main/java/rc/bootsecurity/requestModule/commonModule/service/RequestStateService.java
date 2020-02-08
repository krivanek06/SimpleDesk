package rc.bootsecurity.requestModule.commonModule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.requestModule.commonModule.exception.RequestNotFoundException;
import rc.bootsecurity.requestModule.requestCommentModule.service.RequestCommentService;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.requestModule.commonModule.entity.RequestPriority;
import rc.bootsecurity.requestModule.commonModule.enums.REQUEST_POSITION;
import rc.bootsecurity.requestModule.commonModule.repository.ModuleTypeRepository;
import rc.bootsecurity.requestModule.commonModule.repository.RequestPositionRepository;
import rc.bootsecurity.requestModule.commonModule.repository.RequestPriorityRepository;
import rc.bootsecurity.requestModule.commonModule.repository.RequestRepository;
import rc.bootsecurity.userModule.service.UserService;
import rc.bootsecurity.notificationModule.emailModule.EmailService;

import java.sql.Timestamp;
import java.util.*;

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
        request.setRequestPosition(this.requestPositionRepository.findByName(REQUEST_POSITION.Uzatvorené.name()));

        this.saveOrUpdateRequest(request);
        // send information email
        String assigned = request.getAssigned() != null ? request.getAssigned().getEmail() : "";
        String creator = request.getCreator().getEmail();
        String closed = request.getClosed().getEmail();

        this.emailService.sendClosedRequestEmail(request, user, assigned, creator, closed);
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

    /**
     * @return emails of assigned / creator / closed / watched users
     */
    public String[] getEngagedUsersEmails(Request request){
     /*  String assigned = request.getAssigned() != null ? request.getAssigned().getEmail() : "";
       String solver = "";
       if(request.getSolutionComment() != null)
           solver = this.requestCommentService.getRequestComment(request.getSolutionComment()).getUser().getEmail();

       String closed = request.getClosed() != null ? request.getClosed().getEmail() : "";
       List<String> watched = new ArrayList<>(this.userService.getUsersWatchedRequest(request).stream().map(User::getEmail).collect(Collectors.toList()));
       watched.addAll(new ArrayList<>(Arrays.asList(closed, solver, assigned)));
       return (String[]) new HashSet(watched).toArray(String[]::new);*/
        String assigned = request.getAssigned() != null ? request.getAssigned().getEmail() : "";
        String creator = request.getCreator().getEmail();
        String closed = request.getClosed().getEmail();

        return  (String[])  new HashSet(Arrays.asList(creator,assigned,closed)).toArray(String[]::new);

    }
}
