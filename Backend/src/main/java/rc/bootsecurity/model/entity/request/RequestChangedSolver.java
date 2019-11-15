package rc.bootsecurity.model.entity.request;

import lombok.Data;
import rc.bootsecurity.model.entity.User;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "tbl_request_changed_solver")
@Data
public class RequestChangedSolver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id_from")
    private User changedFromUser;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id_to")
    private User changedToUser;

    @Column(name = "timestamp")
    private Timestamp timestamp;





}
