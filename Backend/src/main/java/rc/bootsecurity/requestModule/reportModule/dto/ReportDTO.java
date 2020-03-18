package rc.bootsecurity.requestModule.reportModule.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDTO;
import rc.bootsecurity.requestModule.ticketModule.dto.TicketExtendedInformationDTO;

import java.sql.Timestamp;

@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = false)
public class ReportDTO extends RequestDTO {
    protected ReportExtendedInformationDTO extendedInformation;

}
