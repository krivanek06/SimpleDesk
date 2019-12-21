package rc.bootsecurity.model.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import rc.bootsecurity.model.entity.finance.FinanceType;
import rc.bootsecurity.model.entity.ticket.TicketPrivileges;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "tbl_groups")
@Data
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String groupName;

    @Column(name = "email")
    private String email;

    @Column(name = "description")
    private String description;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "manager_id")
    private User groupManager;

    /**
     * users who are part of this group
     */
    @EqualsAndHashCode.Exclude
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_user_groups",
            joinColumns = { @JoinColumn(name = "group_id")},
            inverseJoinColumns = { @JoinColumn(name = "user_id")})
    private Set<User> usersInGroup;

    /**
     *  one group has what privileges to solve tickets
     */
    @EqualsAndHashCode.Exclude
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "group") // orphanRemoval=true, cascade = CascadeType.PERSIST
    private List<TicketPrivileges> ticketPrivilegesList;

    /**
     * which application can a group use
     */
    /*@ManyToMany(fetch = FetchType.LAZY ,mappedBy = "groupsToSubmitDifferentRequests")
    private Set<RequestType> requestTypesToSubmit;*/
    @EqualsAndHashCode.Exclude
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_module_type_to_use",
            joinColumns = { @JoinColumn(name = "group_id")},
            inverseJoinColumns = { @JoinColumn(name = "request_type_id")})
    private Set<ModuleType> moduleTypesToUse;

    /**
     * which application can a group solve
     */
    @EqualsAndHashCode.Exclude
    @ManyToMany(fetch = FetchType.LAZY) // cascade = CascadeType.DETACH
    @JoinTable(name = "tbl_request_type_to_solve",
            joinColumns = { @JoinColumn(name = "group_id")},
            inverseJoinColumns = { @JoinColumn(name = "request_type_id")})
    private Set<ModuleType> requestTypesToSolve;

    /**
     * which finance types can a group submit
     */
    @EqualsAndHashCode.Exclude
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_finance_type_privileges",
            joinColumns = { @JoinColumn(name = "group_id")},
            inverseJoinColumns = { @JoinColumn(name = "finance_type_id")})
    private Set<FinanceType> financeTypes;

}
