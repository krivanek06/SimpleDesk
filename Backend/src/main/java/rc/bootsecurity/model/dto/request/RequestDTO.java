package rc.bootsecurity.model.dto.request;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
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

    private String creator;

    private String assigned;

    private String solver;

    private String closed;

    /**
     * will contain username of users who watch this request
     */
    private List<UserSimpleDTO> userToWatchRequest;
}
