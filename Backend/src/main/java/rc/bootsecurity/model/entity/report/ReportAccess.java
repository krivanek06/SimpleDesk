package rc.bootsecurity.model.entity.report;

import lombok.Data;

import javax.persistence.*;

/**
 * for example SFTP, email, etc.
 */
@Entity
@Table(name = "tbl_report_access")
@Data
public class ReportAccess {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;
}
