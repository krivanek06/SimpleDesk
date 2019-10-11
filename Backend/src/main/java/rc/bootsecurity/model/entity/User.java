package rc.bootsecurity.model.entity;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Data
@Table(name = "tbl_users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(name = "department_id")
    private Integer departmentId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "foto")
    private String foto;

    @Column(name = "email")
    private String email;

    @Column(name = "active")
    private Boolean active;

    @Column(name = "date_creation")
    private Timestamp dateCreation;

    @Column(name = "date_ending")
    private Timestamp dateEnding;

    // all groups where I am a manager
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "groupManager", cascade = CascadeType.ALL)
    private List<Group> groupsToManage;

    // all groups where I am just a member
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_user_groups",
        joinColumns = { @JoinColumn(name = "user_id")},
        inverseJoinColumns = { @JoinColumn(name = "group_id")})
    private List<Group> groupsInvolved;



}
