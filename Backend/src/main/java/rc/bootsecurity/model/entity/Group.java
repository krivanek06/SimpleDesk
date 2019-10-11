package rc.bootsecurity.model.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tbl_groups")
@Data
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "manager_id")
    private User groupManager;

    @Column(name = "name")
    private String groupName;

    @Column(name = "email")
    private String email;

    @ManyToMany(fetch = FetchType.LAZY ,mappedBy = "groupsInvolved")
    private List<User> usersInGroup;

}
