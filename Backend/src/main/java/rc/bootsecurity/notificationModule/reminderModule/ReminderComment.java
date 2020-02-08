package rc.bootsecurity.notificationModule.reminderModule;

import lombok.Data;
import rc.bootsecurity.userModule.entity.User;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "tbl_reminder_comments")
@Data
public class ReminderComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "timestamp")
    private Timestamp timestamp;

    @Column(name = "comment")
    private String comment;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "reminder_id")
    private Reminder reminder;


}
