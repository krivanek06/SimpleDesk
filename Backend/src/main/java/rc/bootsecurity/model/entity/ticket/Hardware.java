package rc.bootsecurity.model.entity.ticket;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "tbl_hardwares")
@Data
public class Hardware extends TicketSubtype {

}
