package rc.bootsecurity.model.entity.ticket;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "tbl_servers")
@Data
public class Server extends TicketSubtype {

    // unidirectional
    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "server_id")
    private List<ServerContact> serverContactList;
}
