package rc.bootsecurity.requestModule.commonModule.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import rc.bootsecurity.groupModule.entity.Group;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.List;
import java.util.Set;

/**
 * tickets, reports, finance, module privilege, document sharing ets.
 */
@Entity
@Table(name = "tbl_module_type")
@Data
public class ModuleType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "active")
    private Boolean active;

    @EqualsAndHashCode.Exclude
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "moduleType")
    private List<Request> requests;

    /**
     * which group can what request submit
     */
    @EqualsAndHashCode.Exclude
    @ManyToMany(fetch = FetchType.LAZY ,mappedBy = "moduleTypesToUse")
    private Set<Group> groupsToSubmitDifferentRequests;

    /**
     * which group can what request solve
     */
    @EqualsAndHashCode.Exclude
    @ManyToMany(fetch = FetchType.LAZY ,mappedBy = "requestTypesToSolve")
    private Set<Group> groupsToManageDifferentModules;



}
