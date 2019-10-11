package rc.bootsecurity.model.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "tbl_groups")
@Data
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "manager_id")
    private User GroupManager;

    @Column(name = "name")
    private String groupName;

    @Column(name = "email")
    private String email;

    @ManyToMany(fetch = FetchType.LAZY ,mappedBy = "groups")
    private Set<User> usersInGroup;

}
