package rc.bootsecurity.model.entity.request;


import lombok.Data;
import rc.bootsecurity.model.entity.User;

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
     * user who triggered this log
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "log")
    private String log;

    @Column(name = "timestamp")
    private Timestamp timestamp;

}
