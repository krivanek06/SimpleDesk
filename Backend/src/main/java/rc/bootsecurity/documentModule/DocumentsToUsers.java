package rc.bootsecurity.documentModule;

import lombok.Data;
import rc.bootsecurity.userModule.entity.User;

import javax.persistence.*;

@Entity
@Table(name = "tbl_document_to_users")
@Data
public class DocumentsToUsers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * True / False if user saw this document
     */
    @Column(name = "seen")
    private Boolean seen;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "document_id")
    private Document document;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;


}
