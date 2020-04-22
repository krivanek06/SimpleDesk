package rc.bootsecurity.notificationModule.calendarModule.entity;


import lombok.Data;
import rc.bootsecurity.userModule.entity.User;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "tbl_calendar")
@Data
public class Reminder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "timestamp_creation")
    private Timestamp timestampCreation;

    @Column(name = "timestamp_start")
    private Timestamp timestampStart;

    @Column(name = "timestamp_end")
    private Timestamp timestampEnd;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

}
