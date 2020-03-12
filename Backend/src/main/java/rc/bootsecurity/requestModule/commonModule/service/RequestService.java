package rc.bootsecurity.requestModule.commonModule.service;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.requestModule.commonModule.entity.RequestLog;
import rc.bootsecurity.requestModule.commonModule.exception.RequestNotFoundException;
import rc.bootsecurity.requestModule.commonModule.repository.RequestLogRepository;
import rc.bootsecurity.requestModule.commonModule.repository.RequestRepository;
import rc.bootsecurity.requestModule.requestCommentModule.service.RequestCommentService;
import rc.bootsecurity.userModule.exception.UnauthorizedException;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDTO;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDashboardDTO;
import rc.bootsecurity.requestModule.commonModule.dto.RequestTableDTO;
import rc.bootsecurity.groupModule.entity.Group;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.userModule.enums.USER_TYPE;
import rc.bootsecurity.groupModule.service.GroupService;
import rc.bootsecurity.userModule.service.UserService;
import rc.bootsecurity.requestModule.commonModule.utils.RequestConverter;
import rc.bootsecurity.util.fileModule.FileService;
import rc.bootsecurity.util.JsonStringParser;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class RequestService {
    private JsonStringParser jsonStringParser = new JsonStringParser();
    private RequestConverter requestConverter = new RequestConverter();
    private FileService fileService = new FileService();

    @Autowired
    protected RequestLogRepository requestLogRepository;
    @Autowired
    private RequestRepository requestRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private RequestCommentService requestCommentService;
    @Autowired
    private GroupService groupService;


    public void saveRequest(Request request){
        this.requestRepository.save(request);
    }

    public Request loadRequestById(Integer requestId){
        return this.requestRepository.findById(requestId).orElseThrow(() -> new RequestNotFoundException("Could not found request with id : " + requestId));
    }


    public RequestDashboardDTO getRequestOnDashboard(){
        String username = this.userService.getPrincipalUsername();

        String rawJson = (username.equalsIgnoreCase(USER_TYPE.Ghost.name()) || username.equalsIgnoreCase(USER_TYPE.Admin.name())) ?
                      this.requestRepository.findAllOpenRequestOnDashboard() : this.requestRepository.findOpenRequestOnDashboard(username);

        RequestDashboardDTO requestDashboardDTO = this.jsonStringParser.parseFromRawJsonToRequestDashboardDTO(rawJson);

        requestDashboardDTO.getMyOpen().forEach(requestTableDTO -> this.requestConverter.addImage(requestTableDTO));
        requestDashboardDTO.getAssignedOnMe().forEach(requestTableDTO -> this.requestConverter.addImage(requestTableDTO));
        requestDashboardDTO.getOtherOpen().forEach(requestTableDTO -> this.requestConverter.addImage(requestTableDTO));

        return requestDashboardDTO;
    }

    public List<RequestTableDTO> getClosedRequests(String dateClosed1, String dateClosed2){
        User user = this.userService.loadUserByUsername(this.userService.getPrincipalUsername());
        String rawJson = (user.getUsername().equalsIgnoreCase(USER_TYPE.Ghost.name()) || user.getUsername().equalsIgnoreCase(USER_TYPE.Admin.name())) ?
                 this.requestRepository.findAllClosedRequestsBetweenDate(dateClosed1, dateClosed2) :
                    this.requestRepository.findClosedRequestsBetweenDate(user.getId(), user.getUsername(), dateClosed1, dateClosed2);

        JSONObject requestJsonObject = new JSONObject(rawJson);
        List<RequestTableDTO> requestTableDTOS = this.jsonStringParser.convertRawJsonToRequestTableDTO(requestJsonObject,"closed_requests" );
        requestTableDTOS.forEach(requestTableDTO -> this.requestConverter.addImage(requestTableDTO));

        return requestTableDTOS;
    }

   public byte[] getFileForRequest(Integer id, String name){
        return this.fileService.getFileForRequest(id, name);
   }

   public RequestDTO getRequestDetails(Integer requestId) throws UnauthorizedException{
       Request request =  this.loadRequestById(requestId);
       String username = this.userService.getPrincipalUsername();
       Boolean access = this.hasAccessForDetails(request, username);
       if(access == null || !access){
            throw new UnauthorizedException("User " + username + " does not have access for request " + request.getId());
       }

     //  request.setUserWhoWatchThisRequest(new HashSet<>(this.userService.getUsersWatchedRequest(request)));
       request.setRequestComments(this.requestCommentService.getRequestCommentsForRequest(request, username));

       RequestDTO requestDTO =  this.requestConverter.convertRequestToRequestDTO(request);
       requestDTO.setDocuments(this.fileService.getFileForRequest(requestId));

       return requestDTO;
   }

    /**
     * return true only if user is  admin or ghost
     * I am the creator / assigned / closed
     * I am a manager / has view access for groups where creator / assigned / closed belongs
     * I have privileges
     */
   private Boolean hasAccessForDetails(Request request, String username ){
        if(username.equalsIgnoreCase("admin") || username.equalsIgnoreCase("ghost")){
            return true;
        }
        if(request.getCreator().getUsername().equalsIgnoreCase(username) ||
                (request.getAssigned() != null && request.getAssigned().getUsername().equalsIgnoreCase(username)) )     {
            return true;
        }

        List<Group> creatorGroups  = this.groupService.getGroupsWhereUserIsInvolved(request.getCreator());
        List<Group> assignedGroups  = this.groupService.getGroupsWhereUserIsInvolved(request.getAssigned());
        List<Group> closedGroups  = this.groupService.getGroupsWhereUserIsInvolved(request.getClosed());
        Set<Group> groups  =  Stream.of(creatorGroups, assignedGroups, closedGroups).flatMap(Collection::stream).collect(Collectors.toSet());

        User user = this.userService.loadUserByUsername(username);
        List<Group> myGroupsToManage = this.groupService.getGroupsToManageForUser(user);
        List<Group> groupsToWatch = this.groupService.getGroupsToWatchActivity(user);
        Set<Group> availableGroups  =  Stream.of(myGroupsToManage, groupsToWatch).flatMap(Collection::stream).collect(Collectors.toSet());

        if(groups.stream().anyMatch(availableGroups::contains)){
            return true;
        }

        return this.requestRepository.hasAccessForRequest(request.getId(), request.getModuleType().getName(), username);
   }

}
