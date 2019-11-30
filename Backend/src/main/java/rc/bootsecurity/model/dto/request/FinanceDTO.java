package rc.bootsecurity.model.dto.request;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = false)
public class FinanceDTO extends  RequestDTO {
    private String financeType;
}
