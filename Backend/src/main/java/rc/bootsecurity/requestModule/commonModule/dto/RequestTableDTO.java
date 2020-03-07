package rc.bootsecurity.requestModule.commonModule.dto;

import lombok.Data;

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

    private byte[] creatorImageByte;
    private String creatorImageString;
    private String creator;

    private byte[] assignedImageByte;
    private String assignedImageString;
    private String assigned;

    private byte[] closedImageByte;
    private String closedImageString;
    private String closed;

    private String[] logs;

}
