package rc.bootsecurity.requestModule.financeModule.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDTO;

@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = false)
public class FinanceDTO extends RequestDTO {
    private String financeType;
}
