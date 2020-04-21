package rc.bootsecurity.notificationModule.calendarModule.DTO;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class ReminderDTO {
    private Integer id;
    private Timestamp timestampStart;
    private Timestamp timestampEnd;
    private String title;
    private String description;
}
