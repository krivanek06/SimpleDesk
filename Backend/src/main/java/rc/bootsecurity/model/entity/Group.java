package rc.bootsecurity.model.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import rc.bootsecurity.model.entity.task.TaskPrivileges;

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

    @ManyToMany(fetch = FetchType.LAZY ,mappedBy = "groupsInvolved")
    private Set<User> usersInGroup;

    // one group has what privileges
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "group")
    private List<TaskPrivileges> taskPrivilegesList;

}
