package rc.bootsecurity.requestModule.commonModule.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import rc.bootsecurity.userModule.dto.UserDTO;
import rc.bootsecurity.util.fileModule.NameFileDTO;
import rc.bootsecurity.requestModule.requestCommentModule.dto.RequestCommentDTO;

import java.sql.Timestamp;
import java.util.List;

@Getter
@Setter
@ToString
@EqualsAndHashCode
public class RequestDTO {
    private Integer id;

    private Timestamp timestampCreation;

    private Timestamp timestampClosed;

    private String name;

    private Boolean allowCommenting;

    private String requestPriority;

    private String requestPosition;

    private String requestType;

    private UserDTO creator;

    private UserDTO assigned;

    private UserDTO closed;

    private Integer solutionComment;

    private List<RequestCommentDTO> requestCommentDTOS;

    private List<NameFileDTO> documents;

    private String[] logs;

    protected Object extendedInformation;
}
