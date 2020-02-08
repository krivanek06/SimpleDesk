package rc.bootsecurity.model.entity.document;

import lombok.Data;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.request.Request;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tbl_documents")
@Data
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "path")
    private String path;

    @Column(name = "title")
    private String title;

    @Column(name  = "description")
    private String description;

    /**
     * Users who can see this document.
     * Empty if document was uploaded from Request.
     */
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "document")
    private List<DocumentsToUsers> documents;

}
