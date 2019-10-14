package rc.bootsecurity.model.entity;

import lombok.Data;

import javax.persistence.*;

/**
 * tickets, reports, ets.
 */
@Entity
@Table(name = "tbl_request_types")
@Data
public class RequestType {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "active")
    private Boolean active;


}
