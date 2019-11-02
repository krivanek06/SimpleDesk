package rc.bootsecurity.model.entity.task;

import lombok.Data;
import rc.bootsecurity.model.entity.Group;

import javax.persistence.*;

/**
 * contains information which user has what rights to see tickets
 * based on task_privileges.
 * i.e. group 2 want to see X element in ticket(1) then -> [2,1,X].
 * application_id gets if from tables: hardware, software, servers
 */
@Entity
@Data
@Table(name = "tbl_tasks_privileges")
public class TicketPrivileges {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable=false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id")
    private Group group;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "task_type_id")
    private TicketType taskType;

    @Column(name = "application_name")
    private String applicationName;


}
