package rc.bootsecurity.requestModule.requestCommentModule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rc.bootsecurity.requestModule.requestCommentModule.exception.CommentNotFoundException;
import rc.bootsecurity.groupModule.dto.GroupContainerDTO;
import rc.bootsecurity.requestModule.requestCommentModule.dto.RequestCommentDTO;
import rc.bootsecurity.groupModule.entity.Group;
import rc.bootsecurity.requestModule.commonModule.service.RequestService;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.requestModule.requestCommentModule.entity.RequestComment;
import rc.bootsecurity.userModule.enums.USER_TYPE;
import rc.bootsecurity.requestModule.requestCommentModule.repository.RequestCommentRepository;
import rc.bootsecurity.groupModule.service.GroupService;
import rc.bootsecurity.userModule.service.UserService;
import rc.bootsecurity.notificationModule.emailModule.EmailService;

import java.sql.Timestamp;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class RequestCommentService {
    @Autowired
    private UserService userService;
    @Autowired
    private RequestCommentRepository requestCommentRepository;
    @Autowired
    private RequestService requestService;
    @Autowired
    private GroupService groupService;
    @Autowired
    private EmailService emailService;


    public void saveOrUpdateComment(RequestComment requestComment){ this.requestCommentRepository.save(requestComment); }

    @Transactional
    public void deleteComment(RequestCommentDTO requestCommentDTO){
        RequestComment requestComment = this.getRequestComment(requestCommentDTO);
        Integer solutionCommentId = requestComment.getRequest().getSolutionComment();
        if( solutionCommentId != null && solutionCommentId.equals(requestComment.getId())){
            requestComment.getRequest().setSolutionComment(null);
            this.requestService.saveRequest(requestComment.getRequest());
        }
        this.requestCommentRepository.delete(requestComment);
    }

    private RequestComment getRequestComment(RequestCommentDTO requestCommentDTO){
        return this.getRequestComment(requestCommentDTO.getId());
    }

    public RequestComment getRequestComment(Integer id){
        return this.requestCommentRepository.findById(id).orElseThrow(() -> new  CommentNotFoundException("Could not find comment with id : " + id));
    }

    public RequestComment createRequestComment(RequestCommentDTO requestCommentDTO){
        RequestComment requestComment = new RequestComment();
        requestComment.setComment(requestCommentDTO.getComment());
        requestComment.setIsPrivate(requestCommentDTO.getIsPrivate());

        requestComment.setUser(this.userService.loadUserByUsername(requestCommentDTO.getCreator().getUsername()));
        requestComment.setRequest(this.requestService.loadRequestById(requestCommentDTO.getRequestId()));

        requestComment.setTimestamp(new Timestamp(new Date().getTime()));
        return requestComment;
    }

    @Transactional
    public RequestCommentDTO addRequestComment(RequestCommentDTO requestCommentDTO, boolean sendEmail, boolean solution){
        RequestComment requestComment = this.createRequestComment(requestCommentDTO);
        this.saveOrUpdateComment(requestComment);

        if(solution) {
            requestComment.getRequest().setSolutionComment(requestComment.getId());
            this.requestService.saveRequest(requestComment.getRequest());
        }
        //getting nested exception
        if(sendEmail || solution)
            this.informCreatorAndAssignedAboutComment(requestComment);

        requestCommentDTO.setId(requestComment.getId());
        return requestCommentDTO;
    }

    public void informCreatorAndAssignedAboutComment(RequestComment requestComment){
        User user = this.userService.loadUserByUsername(this.userService.getPrincipalUsername());
        String assignedEmail  = requestComment.getRequest().getAssigned() != null ? requestComment.getRequest().getAssigned().getEmail() : "";
        String creatorEmail  = requestComment.getRequest().getCreator().getEmail();
        this.emailService.sendRequestCommentEmail(requestComment.getRequest(), user, requestComment.getComment(), assignedEmail,creatorEmail);

    }

    public void modifyComment(RequestCommentDTO requestCommentDTO){
        RequestComment requestComment = this.getRequestComment(requestCommentDTO);
        requestComment.setComment(requestCommentDTO.getComment());
        requestComment.setIsPrivate(requestCommentDTO.getIsPrivate());
        if(!requestCommentDTO.getIsPrivate()){
            requestComment.setGroupsToViewRequestComment(null);
        }

        this.saveOrUpdateComment(requestComment);
    }

    public void shareCommentWith(RequestCommentDTO requestCommentDTO){
        if(requestCommentDTO.getGroupsToShare().size() == 0)
            return;

        RequestComment requestComment = this.getRequestComment(requestCommentDTO);

        String lastGroupNameInserted = requestCommentDTO.getGroupsToShare().get(requestCommentDTO.getGroupsToShare().size() -1);
        requestComment.getGroupsToViewRequestComment().add(this.groupService.getGroupByGroupName(lastGroupNameInserted));
        this.saveOrUpdateComment(requestComment);
    }

    /**
     * filters out private comment which are not shared with my groups
     */
    public List<RequestComment> getRequestCommentsForRequest(Request request, String username){
        List<RequestComment> requestComments = this.requestCommentRepository.findAllByRequestOrderByTimestampAsc(request).orElseGet(ArrayList::new);
        if(username.equalsIgnoreCase(USER_TYPE.Admin.name()) || username.equalsIgnoreCase(USER_TYPE.Ghost.name())){
            return requestComments;
        }

        List<RequestComment> filtered = new ArrayList<>();

        GroupContainerDTO groupContainerDTO = this.groupService.getAllGroupsDTOForLoggedInUser();
        Set<String> groups  =  Stream.of(groupContainerDTO.getManagerOfGroups(), groupContainerDTO.getUserInGroups(),
                groupContainerDTO.getWatchedGroupActivity()).flatMap(Collection::stream).collect(Collectors.toSet());

        for(RequestComment requestComment : requestComments){
            if(requestComment.getIsPrivate()){
                if(requestComment.getUser().getUsername().equalsIgnoreCase(username) ||
                        username.equalsIgnoreCase(USER_TYPE.Admin.name()) || username.equalsIgnoreCase(USER_TYPE.Ghost.name())){
                    filtered.add(requestComment);
                }else {
                    List<String> requestCommentGroupNames = requestComment.getGroupsToViewRequestComment().stream()
                            .map(Group::getGroupName).collect(Collectors.toList());

                    requestCommentGroupNames.retainAll(groups);
                    if (requestCommentGroupNames.size() > 0) {
                        filtered.add(requestComment);
                    }
                }
                continue;
            }
            filtered.add(requestComment);
        }
        return filtered;
    }

}
