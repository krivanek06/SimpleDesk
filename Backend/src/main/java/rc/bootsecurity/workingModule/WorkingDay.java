package rc.bootsecurity.workingModule;

import lombok.Data;
import rc.bootsecurity.userModule.entity.User;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "tbl_working_days")
@Data
public class WorkingDay {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "timestamp_from")
    private Timestamp timestampFrom;

    @Column(name = "timestamp_to")
    private Timestamp timestampTo;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "working_day_type_id")
    private WorkingDayType workingDayType;
}
