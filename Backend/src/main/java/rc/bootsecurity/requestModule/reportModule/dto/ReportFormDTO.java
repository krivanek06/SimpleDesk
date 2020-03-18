package rc.bootsecurity.requestModule.reportModule.dto;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class ReportFormDTO {
    private String name;
    private String requestPriority;
    private String owner;
    private String reportType;
    private String reportRefresh;
    private String purpose;
    private String criteria;
    private String visibleData;
    private String otherInformation;
    private String accessMethods;
    private String accessByPeople;
    private Timestamp deadline;
}
