package rc.bootsecurity.model.entity;

import lombok.Data;
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

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "manager_id")
    private User groupManager;


    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_user_groups",
            joinColumns = { @JoinColumn(name = "group_id")},
            inverseJoinColumns = { @JoinColumn(name = "user_id")})
    private Set<User> usersInGroup;

    /**
     *  one group has what privileges to see tickets
     */
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "group")
    private List<TicketPrivileges> ticketPrivilegesList;

    /**
     * which application can I group use
     */
    @ManyToMany(fetch = FetchType.LAZY ,mappedBy = "groupsToSubmitDifferentRequests")
    private Set<RequestType> requestTypesToSubmit;

    /**
     * which application can I group use
     */
    @ManyToMany(fetch = FetchType.LAZY ,mappedBy = "groupsToSolveDifferentRequests")
    private Set<RequestType> requestTypesToSolve;

}
