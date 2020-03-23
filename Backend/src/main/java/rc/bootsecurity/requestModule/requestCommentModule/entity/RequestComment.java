package rc.bootsecurity.requestModule.requestCommentModule.entity;

import lombok.Data;
import rc.bootsecurity.groupModule.entity.Group;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.userModule.entity.User;

import javax.persistence.*;
import java.sql.Timestamp;
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

    @Column(name = "timestamp", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp timestamp;

    @Column(name = "is_private", columnDefinition = "boolean default false")
    private Boolean isPrivate;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "request_id")
    private Request request;

    /**
     * if isPrivate is false I have to load all groups which is this comment shared
     */
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "tbl_request_comments_shared",
            joinColumns = { @JoinColumn(name = "request_comment_id")},
            inverseJoinColumns = { @JoinColumn(name = "group_id")})
    private Set<Group> groupsToViewRequestComment;


}
