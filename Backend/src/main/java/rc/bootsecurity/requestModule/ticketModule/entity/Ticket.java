package rc.bootsecurity.requestModule.ticketModule.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import rc.bootsecurity.requestModule.commonModule.entity.Request;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "tbl_tickets")
@Data
@PrimaryKeyJoinColumn(name="request_id")
public class Ticket extends Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * May contain software specific name, but also user's name or "other" type
     */
    @Column(name = "t_application_name")
    private String ticketSubtypeName;

    @Column(name = "t_request")
    private String problem;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "t_type_id")
    private TicketType ticketType;
}
