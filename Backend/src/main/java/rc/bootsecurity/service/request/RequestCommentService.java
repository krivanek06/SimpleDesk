package rc.bootsecurity.service.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.exception.CommentNotFoundException;
import rc.bootsecurity.exception.RequestNotFoundException;
import rc.bootsecurity.exception.UserNotFoundException;
import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.dto.request.RequestCommentDTO;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestComment;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.request.RequestCommentRepository;
import rc.bootsecurity.repository.request.RequestRepository;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;

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


    public void saveOrUpdateComment(RequestComment requestComment){ this.requestCommentRepository.save(requestComment); }
    public void saveOrUpdateComment(List<RequestComment> requestComments){ this.requestCommentRepository.saveAll(requestComments); }

    public List<RequestComment> getRequestCommentsForRequest(Request request){
        return this.requestCommentRepository.findAllByRequestOrderByTimestampAsc(request).orElseGet(ArrayList::new);
    }

    public void deleteComment(RequestCommentDTO requestCommentDTO){
        RequestComment requestComment = this.getRequestComment(requestCommentDTO);
        this.requestCommentRepository.delete(requestComment);
    }

    private RequestComment getRequestComment(RequestCommentDTO requestCommentDTO){
        return this.requestCommentRepository.findById(requestCommentDTO.getId())
                .orElseThrow(() -> new  CommentNotFoundException("Could not find comment with id : " + requestCommentDTO.getId()));
    }

    public RequestComment createRequestComment(RequestCommentDTO requestCommentDTO){
        RequestComment requestComment = new RequestComment();
        requestComment.setComment(requestCommentDTO.getComment());
        requestComment.setIsPrivate(requestCommentDTO.getIsPrivate());

        requestComment.setUser(this.userRepository.findByUsername(requestCommentDTO.getCreator().getUsername())
                .orElseThrow(() -> new UserNotFoundException("Not found user when creating request comment : " + requestCommentDTO.getCreator().getUsername())));
        requestComment.setRequest(this.requestRepository.findById(requestCommentDTO.getRequestId())
                .orElseThrow(() -> new RequestNotFoundException("Not found request when creating comment : " + requestCommentDTO.getRequestId())));

        requestComment.setTimestamp(new Timestamp(new Date().getTime()));
        return requestComment;
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
        requestComment.getGroupsToViewRequestComment().add(this.groupRepository.findByGroupName(lastGroupNameInserted));
        this.saveOrUpdateComment(requestComment);
    }

}
