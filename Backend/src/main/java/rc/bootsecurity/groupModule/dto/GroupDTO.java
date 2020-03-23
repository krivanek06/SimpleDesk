package rc.bootsecurity.groupModule.dto;

import lombok.*;
import rc.bootsecurity.requestModule.commonModule.dto.ApplicationPrivilegeDTO;
import rc.bootsecurity.userModule.dto.UserSimpleDTO;

import java.util.List;

@Data
public class GroupDTO {
    private Integer id;

    private String name;

    private String email;

    private String description;

    private UserSimpleDTO groupManager;

    private List<UserSimpleDTO> usersInGroup;

    private List<UserSimpleDTO> usersWatchGroup;

    private ApplicationPrivilegeDTO applicationPrivilegeDTO;

    private ApplicationPrivilegeDTO unsetApplicationPrivilegeDTO;
}
