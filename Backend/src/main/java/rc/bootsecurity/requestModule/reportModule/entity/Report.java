package rc.bootsecurity.requestModule.reportModule.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import rc.bootsecurity.requestModule.commonModule.entity.Request;

import javax.persistence.*;
import java.sql.Timestamp;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "tbl_reports")
@Data
@PrimaryKeyJoinColumn(name="request_id")
public class Report extends Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "r_owner")
    private String owner;

    @Column(name = "r_purpose")
    private String purpose;

    @Column(name = "r_criteria")
    private String criteria;

    @Column(name = "r_visible_data")
    private String visibleData;

    @Column(name = "r_other_info")
    private String otherInformation;

    @Column(name = "r_access_people")
    private String accessByPeople;

    @Column(name = "r_access_method")
    private String accessMethods;

    @Column(name = "r_deadline")
    private Timestamp deadline;

    @Column(name = "r_evaluation")
    private Double evaluation;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "r_refresh_id")
    private ReportRefresh reportRefresh;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "r_type_id")
    private ReportType reportType;


}
