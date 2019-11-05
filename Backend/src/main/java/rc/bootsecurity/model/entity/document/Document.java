package rc.bootsecurity.model.entity.document;

import lombok.Data;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.request.Request;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tbl_document")
@Data
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable=false)
    private Integer id;

    @Column(name = "path")
    private String path;

    @Column(name = "title")
    private String title;

    @Column(name  = "description")
    private String description;

    @ManyToMany(fetch = FetchType.LAZY ,mappedBy = "documents")
    private List<Request> requestsDocumentIsShared;

}
