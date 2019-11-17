package rc.bootsecurity.model.entity.request;

import lombok.Data;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Table(name = "tbl_request_comments")
public class RequestComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "comment")
    private String comment;

    @Column(name = "timestamp")
    private Timestamp date;

    @Column(name = "is_private")
    private Boolean isPrivate = false;

    /**
     * User who submitted the comment
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    /**
     * if isPrivate is false I have to load all groups which is this comment shared
     */
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_request_comments_shared",
            joinColumns = { @JoinColumn(name = "request_comment_id")},
            inverseJoinColumns = { @JoinColumn(name = "group_id")})
    private Set<Group> groupsToViewRequestComment;


}
