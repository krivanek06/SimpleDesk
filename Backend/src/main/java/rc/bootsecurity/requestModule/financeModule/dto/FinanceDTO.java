package rc.bootsecurity.requestModule.financeModule.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDTO;
import rc.bootsecurity.requestModule.reportModule.dto.ReportExtendedInformationDTO;

@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = false)
public class FinanceDTO extends RequestDTO {
    protected FinanceExtendedInformationDTO extendedInformation;
}
