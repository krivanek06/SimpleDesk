package rc.bootsecurity.model.entity.report;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tbl_report_refreshes")
@Data
public class ReportRefresh {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "reportRefresh")
    private List<Report> reports;
}
