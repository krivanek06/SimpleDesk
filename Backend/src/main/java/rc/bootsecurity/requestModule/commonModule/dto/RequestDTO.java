package rc.bootsecurity.requestModule.commonModule.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import rc.bootsecurity.util.fileModule.NameFileDTO;
import rc.bootsecurity.requestModule.requestCommentModule.dto.RequestCommentDTO;
import rc.bootsecurity.userModule.dto.UserSimpleDTO;

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

    private UserSimpleDTO creator;

    private UserSimpleDTO assigned;

    private UserSimpleDTO closed;

    private Integer solutionComment;

    private List<RequestCommentDTO> requestCommentDTOS;

    private List<NameFileDTO> documents;

    private String[] logs;

    protected Object extendedInformation;
}
