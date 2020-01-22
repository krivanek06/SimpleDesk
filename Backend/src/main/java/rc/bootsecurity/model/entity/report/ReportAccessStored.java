package rc.bootsecurity.model.entity.report;

import lombok.Data;
import org.hibernate.engine.profile.Fetch;
import rc.bootsecurity.model.entity.request.Request;

import javax.persistence.*;


@Entity
@Table(name = "tbl_report_access_stored")
@Data
public class ReportAccessStored {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * correct path, lets say for SFTP
     */
    @Column(name = "path")
    private String path;

    /**
     * SFTP, Email, etc.
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "access_id")
    private ReportAccess reportAccess;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "request_id")
    private Request request;

}
