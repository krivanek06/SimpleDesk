package rc.bootsecurity.service.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.exception.CommentNotFoundException;
import rc.bootsecurity.exception.RequestNotFoundException;
import rc.bootsecurity.exception.UserNotFoundException;
import rc.bootsecurity.model.dto.GroupContainerDTO;
import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.dto.request.RequestCommentDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestComment;
import rc.bootsecurity.model.enums.USER_TYPE;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.request.RequestCommentRepository;
import rc.bootsecurity.repository.request.RequestRepository;
import rc.bootsecurity.service.GroupService;

import java.sql.Timestamp;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class RequestCommentService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RequestCommentRepository requestCommentRepository;
    @Autowired
    private RequestRepository requestRepository;
    @Autowired
    private GroupService groupService;


    public void saveOrUpdateComment(RequestComment requestComment){ this.requestCommentRepository.save(requestComment); }
    public void saveOrUpdateComment(List<RequestComment> requestComments){ this.requestCommentRepository.saveAll(requestComments); }

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
        requestComment.getGroupsToViewRequestComment().add(this.groupService.getGroupByGroupName(lastGroupNameInserted));
        this.saveOrUpdateComment(requestComment);
    }

    /**
     * filters out private comment which are not shared with my groups
     */
    public List<RequestComment> getRequestCommentsForRequest(Request request, String username){
        List<RequestComment> requestComments = this.requestCommentRepository.findAllByRequestOrderByTimestampAsc(request).orElseGet(ArrayList::new);;
        List<RequestComment> filtered = new ArrayList<>();

        GroupContainerDTO groupContainerDTO = this.groupService.getAllGroupsDTOForLoggedInUser();
        Set<String> groups  =  Stream.of(groupContainerDTO.getManagerOfGroups(), groupContainerDTO.getUserInGroups(), groupContainerDTO.getWatchedGroupActivity()).flatMap(Collection::stream).collect(Collectors.toSet());

        for(RequestComment requestComment : requestComments){
            if(requestComment.getIsPrivate()){
                if(requestComment.getUser().getUsername().equalsIgnoreCase(username) ||
                        username.equalsIgnoreCase(USER_TYPE.Admin.name()) || username.equalsIgnoreCase(USER_TYPE.Ghost.name())){
                    filtered.add(requestComment);
                }else {
                    List<String> requestCommentGroupNames = requestComment.getGroupsToViewRequestComment().stream().map(Group::getGroupName).collect(Collectors.toList());
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
