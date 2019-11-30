package rc.bootsecurity.model.entity.request;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import org.springframework.beans.factory.annotation.Value;
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

    //@CreationTimestamp
    @Column(name = "timestamp", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp timestamp;

    @Column(name = "is_private", columnDefinition = "boolean default false")
    private Boolean isPrivate;

    /**
     * User who submitted the comment
     */
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
