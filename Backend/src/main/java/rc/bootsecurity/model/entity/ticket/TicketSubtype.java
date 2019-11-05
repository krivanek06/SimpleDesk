package rc.bootsecurity.model.entity.ticket;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Data
public abstract class TicketSubtype {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable=false)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "sequence")
    private Integer sequence;

    @Column(name = "active")
    private Boolean active;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "task_type_id")
    private TicketType ticketType;



}
