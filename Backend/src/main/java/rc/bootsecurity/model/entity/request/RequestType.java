package rc.bootsecurity.model.entity.request;

import lombok.Data;
import org.hibernate.annotations.*;
import rc.bootsecurity.model.entity.Group;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.List;
import java.util.Set;

/**
 * tickets, reports, ets.
 */
@Entity
@Table(name = "tbl_request_types")
@Data
public class RequestType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "active")
    private Boolean active;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "requestType")
    private List<Request> requests;

    /**
     * which group can what request submit
     */
   /* @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_request_type_to_submit",
            joinColumns = { @JoinColumn(name = "request_type_id")},
            inverseJoinColumns = { @JoinColumn(name = "group_id")})*/
    @ManyToMany(fetch = FetchType.LAZY ,mappedBy = "requestTypesToSubmit")
    private Set<Group> groupsToSubmitDifferentRequests;

    /**
     * which group can what request solve
     */
    /*@ManyToMany(fetch = FetchType.LAZY) // cascade = CascadeType.DETACH
    @JoinTable(name = "tbl_request_type_to_solve",
            joinColumns = { @JoinColumn(name = "request_type_id")},
            inverseJoinColumns = { @JoinColumn(name = "group_id")})*/
    @ManyToMany(fetch = FetchType.LAZY ,mappedBy = "requestTypesToSolve")
    private Set<Group> groupsToSolveDifferentRequests;



}
