package rc.bootsecurity.model.dto;

import lombok.Data;

import java.util.List;

@Data
public class GroupContainerDTO {
    private List<String> userInGroups;
    private List<String> watchedGroupActivity;
    private List<String> managerOfGroups;
}
