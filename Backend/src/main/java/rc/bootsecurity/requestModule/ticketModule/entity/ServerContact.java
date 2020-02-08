package rc.bootsecurity.requestModule.ticketModule.entity;

import lombok.Data;

import javax.persistence.*;


@Entity
@Table(name = "tbl_server_contacts")
@Data
// unidirectional mapping to server entity
public class ServerContact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer id;

    @Column(name = "contact_name")
    private String name;

    @Column(name = "contact_email")
    private String email;

    @Column(name = "contact_mobile")
    private String mobile;

    @Column(name = "active")
    private Boolean active;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "server_id")
    private Server server;

}
