package rc.bootsecurity.requestModule.commonModule.entity;


import lombok.Data;
import rc.bootsecurity.userModule.entity.User;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "tbl_request_logs")
@Data
public class RequestLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "request_id")
    private Request request;

    /**
     * user who should see the log
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "log_message")
    private String logMessage;

    @Column(name = "timestamp_creation")
    private Timestamp timestampCreation;

}
