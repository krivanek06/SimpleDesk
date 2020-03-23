package rc.bootsecurity.requestModule.requestCommentModule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rc.bootsecurity.requestModule.commonModule.service.RequestLogService;
import rc.bootsecurity.requestModule.commonModule.service.RequestWebsockets;
import rc.bootsecurity.requestModule.commonModule.utils.RequestConverter;
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
import rc.bootsecurity.util.JsonStringParser;
import rc.bootsecurity.util.fileModule.FileService;

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
    @Autowired
    private RequestWebsockets requestWebsockets;
    @Autowired
    private RequestLogService requestLogService;


    private RequestComment getRequestComment(RequestCommentDTO requestCommentDTO){
        return this.getRequestComment(requestCommentDTO.getId());
    }

    private RequestComment createRequestComment(RequestCommentDTO requestCommentDTO){
        RequestComment requestComment = new RequestComment();
        requestComment.setComment(requestCommentDTO.getComment());
        requestComment.setIsPrivate(requestCommentDTO.getIsPrivate());

        requestComment.setUser(this.userService.loadUserByUsername(requestCommentDTO.getCreator().getUsername()));
        requestComment.setRequest(this.requestService.loadRequestById(requestCommentDTO.getRequestId()));

        requestComment.setTimestamp(new Timestamp(new Date().getTime()));
        return requestComment;
    }

    private void informCreatorAndAssignedAboutComment(RequestComment requestComment){
        User user = this.userService.loadUserByUsername(this.userService.getPrincipalUsername());
        String creatorEmail  = requestComment.getRequest().getCreator().getEmail();

        if(requestComment.getRequest().getAssigned() != null){
            String assignedEmail = requestComment.getRequest().getAssigned().getEmail();
            this.emailService.sendRequestCommentEmail(requestComment.getRequest(), user, requestComment.getComment(), assignedEmail);
        }
        this.emailService.sendRequestCommentEmail(requestComment.getRequest(), user, requestComment.getComment(),creatorEmail);

    }

    public void saveOrUpdateComment(RequestComment requestComment){ this.requestCommentRepository.save(requestComment); }

    public RequestComment getRequestComment(Integer id){
        return this.requestCommentRepository.findById(id).orElseThrow(() -> new  CommentNotFoundException("Could not find comment with id : " + id));
    }

    @Transactional
    public RequestCommentDTO addRequestComment(RequestCommentDTO requestCommentDTO, boolean sendEmail, boolean solution){
        RequestComment requestComment = this.createRequestComment(requestCommentDTO);
        this.saveOrUpdateComment(requestComment);

        if(solution) {
            requestComment.getRequest().setSolutionComment(requestComment.getId());
            this.requestService.saveRequest(requestComment.getRequest());
        }

        if(sendEmail || solution)
            this.informCreatorAndAssignedAboutComment(requestComment);

        if(!requestCommentDTO.getIsPrivate())
            this.requestLogService.BroadcastRequest(requestComment.getRequest(),  this.requestWebsockets.ADDED_COMMENT);

        requestCommentDTO.setId(requestComment.getId());

        return requestCommentDTO;
    }

    @Transactional
    public void deleteComment(RequestCommentDTO requestCommentDTO){
        RequestComment requestComment = this.getRequestComment(requestCommentDTO);
        Integer solutionCommentId = requestComment.getRequest().getSolutionComment();
        if( solutionCommentId != null && solutionCommentId.equals(requestComment.getId())){
            requestComment.getRequest().setSolutionComment(null);
            this.requestService.saveRequest(requestComment.getRequest());
        }
        Request request = requestComment.getRequest();
        this.requestCommentRepository.delete(requestComment);
        this.requestLogService.BroadcastRequest(request);
    }

    public void editComment(Integer requestId, Integer commentId, String comment){
        RequestComment requestComment = this.getRequestComment(commentId);
        requestComment.setComment(comment);
        this.saveOrUpdateComment(requestComment);
        this.requestLogService.BroadcastRequest(this.requestService.loadRequestById(requestId));
    }

    public void changePrivacy(RequestCommentDTO requestCommentDTO){
        RequestComment requestComment = this.getRequestComment(requestCommentDTO);
        requestComment.setIsPrivate(!requestCommentDTO.getIsPrivate());
        if(!requestCommentDTO.getIsPrivate()){
            requestComment.setGroupsToViewRequestComment(null);
        }
        this.saveOrUpdateComment(requestComment);
        this.requestLogService.BroadcastRequest(this.requestService.loadRequestById(requestCommentDTO.getRequestId()));
    }

    public void shareCommentWith(RequestCommentDTO requestCommentDTO, String groupName){
        if(requestCommentDTO == null || groupName == null)
            return;

        RequestComment requestComment = this.getRequestComment(requestCommentDTO);
        requestComment.getGroupsToViewRequestComment().add(this.groupService.getGroupByGroupName(groupName));
        this.saveOrUpdateComment(requestComment);
        this.requestLogService.BroadcastRequest(this.requestService.loadRequestById(requestCommentDTO.getRequestId()));
    }


    public List<RequestCommentDTO> getRequestCommentDTOForRequest(Request request, String username){
        JsonStringParser jsonStringParser = new JsonStringParser();
        FileService fileService = new FileService();

        String rawJson = (username.equalsIgnoreCase(USER_TYPE.Ghost.name()) || username.equalsIgnoreCase(USER_TYPE.Admin.name())) ?
                this.requestCommentRepository.getAllRequestCommentDto(request.getId()):
                this.requestCommentRepository.getRequestCommentDtoForUser(request.getId(), username);
        List<RequestCommentDTO> comments = jsonStringParser.convertRawJsonToRequestCommentDTO(rawJson);
        comments.forEach(comment -> comment.getCreator().setUserImageByte(fileService.getUserImage(comment.getCreator().getUserImageString())));

        return comments;

    }
}
