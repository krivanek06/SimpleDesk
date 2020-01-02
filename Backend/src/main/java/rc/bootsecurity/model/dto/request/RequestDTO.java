package rc.bootsecurity.model.dto.request;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import rc.bootsecurity.model.dto.NameFileDTO;
import rc.bootsecurity.model.dto.UserSimpleDTO;

import java.sql.Timestamp;
import java.util.List;

@Getter
@Setter
@ToString
@EqualsAndHashCode
public abstract class RequestDTO {
    private Integer id;

    private Timestamp timestampCreation;

    private Timestamp timestampClosed;

    private String name;

    private String solution;

    private Boolean allowCommenting;

    private String requestPriority;

    private String requestPosition;

    private String requestType;

    private UserSimpleDTO creator;

    private UserSimpleDTO assigned;

    private UserSimpleDTO solver;

    private UserSimpleDTO closed;

    private List<UserSimpleDTO> userToWatchRequest;

    private List<RequestCommentDTO> requestCommentDTOS;

    private List<NameFileDTO> documents;
}
