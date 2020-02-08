package rc.bootsecurity.requestModule.ticketModule.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import rc.bootsecurity.groupModule.entity.Group;

import javax.persistence.*;

/**
 * contains information which user has what rights to solve tickets
 * based on task_privileges.
 * i.e. group 2 want to solve X element in ticket(1) then -> [2,1,X].
 * application_id gets if from tables: hardware, software, servers, but may be empty
 * if option is "OTHER" , or "USER"
 */
@Entity
@Data
@Table(name = "tbl_ticket_privileges")
public class TicketPrivileges {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Exclude
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "group_id")
    private Group group;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ticket_type_id")
    private TicketType ticketType;

    /**
     * May contains name of software from Software.class, but also be null if TicketType is "user" or "other"
     */
    @Column(name = "application_name")
    private String applicationName;

}
