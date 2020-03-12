package rc.bootsecurity.requestModule.commonModule.dto;

import lombok.Data;
import rc.bootsecurity.userModule.dto.UserImageDTO;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.sql.Timestamp;

@Data
public class RequestTableDTO {
    private Integer id;

    private Timestamp timestampCreation;

    private Timestamp timestampClosed;

    private String additionalInformation;

    private String name;

    private String requestPriority;

    private String requestPosition;

    private String requestType;

    private UserImageDTO creator;

    private UserImageDTO assigned;

    private UserImageDTO closed;

    private String[] logs;

}
