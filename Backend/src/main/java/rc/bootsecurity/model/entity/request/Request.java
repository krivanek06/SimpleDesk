package rc.bootsecurity.model.entity.request;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import rc.bootsecurity.model.entity.ModuleType;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.document.Document;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;
import java.util.Set;



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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "priority_id")
    private RequestPriority requestPriority;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "position_id")
    private RequestPosition requestPosition;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "type_id")
    private ModuleType moduleType;

    /*@ManyToMany(fetch = FetchType.LAZY)
    @EqualsAndHashCode.Exclude
    @JoinTable(name = "tbl_document_to_requests",
            joinColumns = { @JoinColumn(name = "request_id")},
            inverseJoinColumns = { @JoinColumn(name = "document_id")})
    private List<Document> documents;*/

    // users ------------------------
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "creator_uid")
    private User creator;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "assigned_uid")
    private User assigned;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "closed_uid")
    private User closed;
    // -------------------------

    @EqualsAndHashCode.Exclude
    private Integer solutionComment;

    /**
     * comments to request
     */
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "request")
    @EqualsAndHashCode.Exclude
    private List<RequestComment> requestComments;

    /**
     * get users who watch this request
     */
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_request_watched_by_user",
            joinColumns = { @JoinColumn(name = "request_id")},
            inverseJoinColumns = { @JoinColumn(name = "user_id")})
    @OrderBy("id ASC")
    @EqualsAndHashCode.Exclude
    private Set<User> userWhoWatchThisRequest;






}
