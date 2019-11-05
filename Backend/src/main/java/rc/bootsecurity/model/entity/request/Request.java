package rc.bootsecurity.model.entity.request;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.Fetch;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.document.Document;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;


/*@JsonTypeInfo(
  use = JsonTypeInfo.Id.NAME,
  include = JsonTypeInfo.As.PROPERTY, property = "type"
)
@JsonSubTypes({
    @JsonSubTypes.Type(value = Coke.class, name = "coke"),
    @JsonSubTypes.Type(value = Sprite.class, name = "sprite")
})*/
//@MappedSuperclass
@Inheritance(strategy=InheritanceType.JOINED)
@Entity
@Table(name = "tbl_request")
@Getter
@Setter
@ToString
public abstract class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable=false)
    private Integer id;

    @Column(name = "date_creation")
    private Timestamp dateCreation;

    @Column(name = "date_accepted")
    private Timestamp dateAccepted;

    @Column(name = "date_solved")
    private Timestamp dateSolved;

    @Column(name = "date_closed")
    private Timestamp dateClosed;

    @Column(name = "subject")
    private String subject;

    @Column(name = "solution")
    private String solution;

    @Column(name = "commenting")
    private Boolean commenting;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "priority_id")
    private RequestPriority requestPriority;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "position_id")
    private RequestPosition requestPosition;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "type_id")
    private RequestType requestType;


    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_document_to_requests",
            joinColumns = { @JoinColumn(name = "request_id")},
            inverseJoinColumns = { @JoinColumn(name = "document_id")})
    private List<Document> documents;

    // users ------------------------
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "creator_uid")
    private User creator;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "assigned_uid")
    private User assigned;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "solver_uid")
    private User solver;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "closed_uid")
    private User closed;
    // -------------------------





}
