package rc.bootsecurity.model.entity.task;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tbl_servers")
@Data
public class Server extends Application {

    // unidirectional
    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "server_id")
    private List<ServerContact> serverContactList;
}
