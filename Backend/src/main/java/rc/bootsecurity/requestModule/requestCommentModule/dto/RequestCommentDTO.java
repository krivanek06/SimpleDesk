package rc.bootsecurity.requestModule.requestCommentModule.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import rc.bootsecurity.userModule.dto.UserDTO;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@ToString
@Getter
@Setter
@EqualsAndHashCode(callSuper = false)
public class RequestCommentDTO {
    private Integer id;
    private Integer requestId;
    private String comment;
    private UserDTO creator;
    private Boolean isPrivate;
    private List<String> groupsToShare = new ArrayList<>();
    private Timestamp timestamp;
}
