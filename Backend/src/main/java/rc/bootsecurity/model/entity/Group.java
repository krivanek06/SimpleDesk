package rc.bootsecurity.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import rc.bootsecurity.model.entity.finance.FinanceType;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestComment;
import rc.bootsecurity.model.entity.request.RequestType;
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

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "manager_id")
    private User groupManager;

    /**
     * users who are part of this group
     */
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_user_groups",
            joinColumns = { @JoinColumn(name = "group_id")},
            inverseJoinColumns = { @JoinColumn(name = "user_id")})
    private Set<User> usersInGroup;

    /**
     *  one group has what privileges to solve tickets
     */
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "group")
    private List<TicketPrivileges> ticketPrivilegesList;

    /**
     * which application can a group use
     */
    /*@ManyToMany(fetch = FetchType.LAZY ,mappedBy = "groupsToSubmitDifferentRequests")
    private Set<RequestType> requestTypesToSubmit;*/
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_request_type_to_submit",
            joinColumns = { @JoinColumn(name = "group_id")},
            inverseJoinColumns = { @JoinColumn(name = "request_type_id")})
    private Set<RequestType> requestTypesToSubmit;

    /**
     * which application can a group solve
     */
    /*@ManyToMany(fetch = FetchType.LAZY ,mappedBy = "groupsToSolveDifferentRequests")
    private Set<RequestType> requestTypesToSolve;*/
    @ManyToMany(fetch = FetchType.LAZY) // cascade = CascadeType.DETACH
    @JoinTable(name = "tbl_request_type_to_solve",
            joinColumns = { @JoinColumn(name = "group_id")},
            inverseJoinColumns = { @JoinColumn(name = "request_type_id")})
    private Set<RequestType> requestTypesToSolve;

    /**
     * which finance types can a group submit
     */
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_finance_type_privileges",
            joinColumns = { @JoinColumn(name = "group_id")},
            inverseJoinColumns = { @JoinColumn(name = "finance_type_id")})
    private Set<FinanceType> financeTypes;

}
