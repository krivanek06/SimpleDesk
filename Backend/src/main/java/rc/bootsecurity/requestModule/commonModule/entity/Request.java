package rc.bootsecurity.requestModule.commonModule.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import rc.bootsecurity.userModule.entity.User;

import javax.persistence.*;
import java.sql.Timestamp;



@Inheritance(strategy=InheritanceType.JOINED)
@Entity
@Table(name = "tbl_requests")
@Getter
@Setter
@ToString
public abstract class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer id;

    @Column(name = "timestamp_creation")
    private Timestamp timestampCreation;

    @Column(name = "timestamp_closed")
    private Timestamp timestampClosed;

    @Column(name = "subject")
    private String name;

    @Column(name = "allow_commenting")
    private Boolean allowCommenting;

    @EqualsAndHashCode.Exclude
    @Column(name = "solution_comment_id")
    private Integer solutionComment;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "priority_id")
    private RequestPriority requestPriority;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "position_id")
    private RequestPosition requestPosition;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "type_id")
    private ModuleType moduleType;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "creator_uid")
    private User creator;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "assigned_uid")
    private User assigned;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "closed_uid")
    private User closed;

}
