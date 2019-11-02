package rc.bootsecurity.model.entity;

import lombok.Data;

import javax.persistence.*;
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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "active")
    private Boolean active;

    // which group can what request submit
    @ManyToMany(fetch = FetchType.LAZY ,mappedBy = "requestTypesToSubmit")
    private List<Group> groupsToSubmitDifferentRequests;

    // which group can what request solve
    @ManyToMany(fetch = FetchType.LAZY ,mappedBy = "requestTypesToSolve")
    private List<Group> groupsToSolveDifferentRequests;

}
