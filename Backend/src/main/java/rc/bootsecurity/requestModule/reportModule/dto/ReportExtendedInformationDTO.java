package rc.bootsecurity.requestModule.reportModule.dto;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class ReportExtendedInformationDTO {
    private String owner;

    private String purpose;

    private String criteria;

    private String visibleData;

    private String otherInformation;

    private String accessByPeople;

    private String accessMethods;

    private Timestamp deadline;

    private Double evaluation;

    private String reportRefresh;

    private String reportType;
}
