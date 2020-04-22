package rc.bootsecurity.notificationModule.calendarModule.DTO;

import lombok.Data;

import java.util.Date;


@Data
public class ReminderDTO {
    private Integer id;
    private Date start;
    private Date  end;
    private String title;
    private String description;
}
