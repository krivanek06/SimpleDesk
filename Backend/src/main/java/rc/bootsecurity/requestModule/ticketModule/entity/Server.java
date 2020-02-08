package rc.bootsecurity.requestModule.ticketModule.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "tbl_servers")
@Data
public class Server extends TicketSubtype {

    //@OneToMany(fetch = FetchType.LAZY, mappedBy = "server")
    //private List<ServerContact> serverContactList;
}
