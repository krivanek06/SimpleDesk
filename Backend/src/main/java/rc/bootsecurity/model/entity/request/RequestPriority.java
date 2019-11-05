package rc.bootsecurity.model.entity.request;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tbl_request_priorities")
@Data
public class RequestPriority {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable=false)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "color")
    private String color;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "requestPriority")
    private List<Request> requests;

}
