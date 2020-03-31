package rc.bootsecurity.groupModule.dto;

import lombok.*;
import rc.bootsecurity.requestModule.commonModule.dto.ApplicationPrivilegeDTO;
import rc.bootsecurity.userModule.dto.UserDTO;

import java.util.List;

@Data
public class GroupDTO {
    private Integer id;

    private String name;

    private String email;

    private String description;

    private UserDTO groupManager;

    private List<UserDTO> usersInGroup;

    private List<UserDTO> usersWatchGroup;

    private ApplicationPrivilegeDTO applicationPrivilegeDTO;

    private ApplicationPrivilegeDTO unsetApplicationPrivilegeDTO;
}
