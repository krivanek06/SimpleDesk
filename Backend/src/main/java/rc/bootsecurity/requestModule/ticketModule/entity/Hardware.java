package rc.bootsecurity.requestModule.ticketModule.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "tbl_hardwares")
@Data
public class Hardware extends TicketSubtype {

}
