package rc.bootsecurity.model.entity.report;

import lombok.Data;

import javax.persistence.*;


@Entity
@Table(name = "tbl_report_access_stored")
@Data
public class ReportAccessStored {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "path")
    private String path;

    /**
     * correct path, lets say for SFTP
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "access_id")
    private ReportAccess reportAccess;
}
