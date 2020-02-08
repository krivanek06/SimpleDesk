package rc.bootsecurity.requestModule.requestCommentModule.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import rc.bootsecurity.userModule.dto.UserSimpleDTO;

import java.sql.Timestamp;
import java.util.List;

@ToString
@Getter
@Setter
@EqualsAndHashCode(callSuper = false)
public class RequestCommentDTO {
    private Integer id;
    private Integer requestId;
    private String comment;
    private UserSimpleDTO creator;
    private Boolean isPrivate;
    private List<String> groupsToShare;
    private Timestamp timestamp;
}
