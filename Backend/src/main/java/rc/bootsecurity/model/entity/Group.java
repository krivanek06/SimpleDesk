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

    @EqualsAndHashCode.Exclude
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_user_groups",
            joinColumns = { @JoinColumn(name = "group_id")},
            inverseJoinColumns = { @JoinColumn(name = "user_id")})
    private Set<User> usersInGroup;

    @EqualsAndHashCode.Exclude
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "tbl_group_activity_watched_by_user",
            joinColumns = { @JoinColumn(name = "group_id")},
            inverseJoinColumns = { @JoinColumn(name = "user_id")})
    private Set<User> usersWatchingGroupActivity;

    @EqualsAndHashCode.Exclude
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "group") // orphanRemoval=true, cascade = CascadeType.PERSIST
    private List<TicketPrivileges> ticketPrivilegesList;

    @EqualsAndHashCode.Exclude
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_module_type_to_use",
            joinColumns = { @JoinColumn(name = "group_id")},
            inverseJoinColumns = { @JoinColumn(name = "request_type_id")})
    private Set<ModuleType> moduleTypesToUse;

    @EqualsAndHashCode.Exclude
    @ManyToMany(fetch = FetchType.LAZY) // cascade = CascadeType.DETACH
    @JoinTable(name = "tbl_request_type_to_solve",
            joinColumns = { @JoinColumn(name = "group_id")},
            inverseJoinColumns = { @JoinColumn(name = "request_type_id")})
    private Set<ModuleType> requestTypesToSolve;

    @EqualsAndHashCode.Exclude
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_finance_type_privileges",
            joinColumns = { @JoinColumn(name = "group_id")},
            inverseJoinColumns = { @JoinColumn(name = "finance_type_id")})
    private Set<FinanceType> financeTypes;

}
