package rc.bootsecurity.model.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import rc.bootsecurity.model.entity.request.Request;

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


    @OneToMany(fetch = FetchType.LAZY, mappedBy = "groupManager")
    private List<Group> groupsToManage;

    /**
     *  all groups where I am just a member
     */
    @ManyToMany(fetch = FetchType.LAZY ,mappedBy = "usersInGroup")
    private List<Group> groupsInvolved;
    //-----------------------------------------------------------------


    // requests - will be fetched by principal
    /*@OneToMany(mappedBy = "creator", fetch = FetchType.LAZY)
    private List<Request> requestsICreated;

    @OneToMany(mappedBy = "assigned", fetch = FetchType.LAZY)
    private List<Request> requestsIamAssignedTo;

    @OneToMany(mappedBy = "solver", fetch = FetchType.LAZY)
    private List<Request> requestsISolved;

    @OneToMany(mappedBy = "closed", fetch = FetchType.LAZY)
    private List<Request> requestsIClosed;*/

    // -----------------------------------


}
