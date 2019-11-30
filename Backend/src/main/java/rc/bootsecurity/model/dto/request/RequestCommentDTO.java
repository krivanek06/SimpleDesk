package rc.bootsecurity.model.dto.request;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@ToString
@Getter
@Setter
@EqualsAndHashCode(callSuper = false)
public class RequestCommentDTO {
    private Integer id;
    private Integer requestId;
    private String comment;
    private String creatorFullName;
    private String creatorUserName;
    private Boolean isPrivate;
    private List<String> groupsToShare;
}
