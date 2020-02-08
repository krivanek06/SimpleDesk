package rc.bootsecurity.notificationModule.reminderModule;


import lombok.Data;
import rc.bootsecurity.userModule.entity.User;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "tbl_reminders")
@Data
public class Reminder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "timestamp_creation")
    private Timestamp timestampCreation;

    @Column(name = "timestamp_reminder")
    private Timestamp timestampReminder;

    @Column(name = "subject")
    private String subject;

    @Column(name = "description")
    private String description;

    @Column(name = "allow_commenting")
    private Boolean allowCommenting;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "reminder")
    private List<ReminderComment> reminderComments;

    /**
     * get all users whom I shared this reminder to
     */
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_shared_reminders",
            joinColumns = { @JoinColumn(name = "reminder_id")},
            inverseJoinColumns = { @JoinColumn(name = "user_id")})
    @OrderBy("id ASC")
    private Set<User> usersToViewReminder;
}
