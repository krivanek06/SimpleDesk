package rc.bootsecurity.model.dto.request;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class RequestTableDTO {
    private Integer id;

    private Timestamp timestampCreation;

    private Timestamp timestampClosed;

    private String name;

    private String requestPriority;

    private String requestPosition;

    private String requestType;

    private String creator;

    private String assigned;

    private String closed;

    private Boolean watched;
}
