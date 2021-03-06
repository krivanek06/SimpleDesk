package rc.bootsecurity.userModule.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import rc.bootsecurity.groupModule.entity.Group;
import rc.bootsecurity.documentModule.DocumentsToUsers;
import rc.bootsecurity.notificationModule.calendarModule.entity.Reminder;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Table(name = "tbl_users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "username" , nullable = false)
    private String username;

    @Column(name = "password" , nullable = false)
    private String password;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "photo")
    private String photo;

    @Column(name = "email")
    private String email;

    @Column(name = "active")
    private Boolean active;

    @Column(name = "timestamp_creation")
    private Timestamp dateCreation;

    @Column(name = "timestamp_ending")
    private Timestamp dateEnding;

    public String getFullName(){ return getFirstName() + " " + getLastName(); }


    @OneToMany(fetch = FetchType.LAZY, mappedBy = "groupManager")
    @EqualsAndHashCode.Exclude
    private List<Group> groupsToManage;

    /**
     *  all groups where I am just a member
     */
    @ManyToMany(fetch = FetchType.LAZY ,mappedBy = "usersInGroup")
    @EqualsAndHashCode.Exclude
    private List<Group> groupsInvolved;

    /**
     *  all groups I can watch activity
     */
    @ManyToMany(fetch = FetchType.LAZY ,mappedBy = "usersWatchingGroupActivity")
    @EqualsAndHashCode.Exclude
    private List<Group> groupsActivityWatched;




}
