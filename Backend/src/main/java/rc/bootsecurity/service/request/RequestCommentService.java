package rc.bootsecurity.service.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.exception.CommentNotFoundException;
import rc.bootsecurity.exception.RequestNotFoundException;
import rc.bootsecurity.exception.UserNotFoundException;
import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.dto.UserSimpleDTO;
import rc.bootsecurity.model.dto.request.RequestCommentDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.request.RequestComment;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.request.RequestCommentRepository;
import rc.bootsecurity.repository.request.RequestRepository;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RequestCommentService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RequestCommentRepository requestCommentRepository;
    @Autowired
    private RequestRepository requestRepository;
    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private RequestConverterService requestConverterService;

    public void saveOrUpdateComment(RequestComment requestComment){ this.requestCommentRepository.save(requestComment); }
    public void saveOrUpdateComment(List<RequestComment> requestComments){ this.requestCommentRepository.saveAll(requestComments); }

    private RequestComment findRequestComment(RequestCommentDTO requestCommentDTO){
        return this.requestCommentRepository.findById(requestCommentDTO.getId())
                .orElseThrow(() -> new  CommentNotFoundException("Could not find comment with id : " + requestCommentDTO.getId()));
    }

    public RequestComment createRequestComment(RequestCommentDTO requestCommentDTO){
        RequestComment requestComment = new RequestComment();
        this.setValuesToRequestComment(requestComment,requestCommentDTO);

        requestComment.setUser(this.userRepository.findByUsername(requestCommentDTO.getCreatorUserName())
                .orElseThrow(() -> new UserNotFoundException("Not found user when creating request comment : " + requestCommentDTO.getCreatorUserName())));
        requestComment.setRequest(this.requestRepository.findById(requestCommentDTO.getRequestId())
                .orElseThrow(() -> new RequestNotFoundException("Not found request when creating comment : " + requestCommentDTO.getRequestId())));

        requestComment.setTimestamp(new Timestamp(new Date().getTime()));
        return requestComment;
    }

    public void modifyComment(RequestCommentDTO requestCommentDTO){
        RequestComment requestComment = this.findRequestComment(requestCommentDTO);
        this.setValuesToRequestComment(requestComment,requestCommentDTO);
        this.saveOrUpdateComment(requestComment);
    }

    public void shareCommentWith(RequestCommentDTO requestCommentDTO, GroupDTO groupDTO){
        RequestComment requestComment = this.findRequestComment(requestCommentDTO);
        if(requestComment.getGroupsToViewRequestComment() == null){
            requestComment.setGroupsToViewRequestComment(new HashSet<>());
        }
        requestComment.getGroupsToViewRequestComment().add(this.groupRepository.findByGroupName(groupDTO.getName()));
        this.saveOrUpdateComment(requestComment);
    }

    private void setValuesToRequestComment(RequestComment requestComment , RequestCommentDTO requestCommentDTO){
        requestComment.setComment(requestCommentDTO.getComment());
        requestComment.setIsPrivate(requestCommentDTO.getIsPrivate());

        // requestCommentDTO.getGroupsToShare() will contains existing groups which already can see comment
        if(requestCommentDTO.getIsPrivate() && requestCommentDTO.getGroupsToShare() != null && !requestCommentDTO.getGroupsToShare().isEmpty()){
            requestComment.setGroupsToViewRequestComment(new HashSet<>(this.groupRepository.findAllByGroupNameIn(requestCommentDTO.getGroupsToShare())));
        }
    }





}
