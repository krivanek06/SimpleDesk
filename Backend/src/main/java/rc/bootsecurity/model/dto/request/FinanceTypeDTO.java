package rc.bootsecurity.model.dto.request;

import lombok.Data;
import rc.bootsecurity.model.entity.Group;
import java.util.List;

@Data
public class FinanceTypeDTO {
    private Integer id;

    private String name;

    private List<Group> groupsToSubmitSpecificFinanceType;
}
