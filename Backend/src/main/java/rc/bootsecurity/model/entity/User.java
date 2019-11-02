package rc.bootsecurity.model.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
    private String photo;

    @Column(name = "email")
    private String email;

    @Column(name = "active")
    private Boolean active;

    @Column(name = "date_creation")
    private Timestamp dateCreation;

    @Column(name = "date_ending")
    private Timestamp dateEnding;

    @Column(name = "is_admin")
    private Boolean isAdmin;

    // all groups where I am a manager
    //@OneToMany(fetch = FetchType.EAGER, mappedBy = "groupManager", cascade = CascadeType.ALL)
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "groupManager")
    private List<Group> groupsToManage;

    // all groups where I am just a member
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_user_groups",
        joinColumns = { @JoinColumn(name = "user_id")},
        inverseJoinColumns = { @JoinColumn(name = "group_id")})
    private List<Group> groupsInvolved;


}
