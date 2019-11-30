package rc.bootsecurity.model.dto.request;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;

@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = false)
public class ReportDTO extends RequestDTO {
    private String owner;

    private String purpose;

    private String criteria;

    private String visibleData;

    private String otherInformation;

    private String accessBy;

    private Timestamp deadline;

    private Double evaluation;

    private String reportRefresh;

    private String reportType;
}
