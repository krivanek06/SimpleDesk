package rc.bootsecurity.requestModule.financeModule.dto;

import lombok.Data;
import rc.bootsecurity.groupModule.entity.Group;
import java.util.List;

@Data
public class FinanceTypeDTO {
    private Integer id;

    private String name;

    private List<Group> groupsToSubmitSpecificFinanceType;
}
