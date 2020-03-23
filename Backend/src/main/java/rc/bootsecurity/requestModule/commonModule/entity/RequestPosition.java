package rc.bootsecurity.requestModule.commonModule.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tbl_request_positions")
@Data
public class RequestPosition {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer id;

    @Column(name = "name")
    private String name;

   // @OneToMany(fetch = FetchType.LAZY, mappedBy = "requestPosition")
   // private List<Request> requests;
}
