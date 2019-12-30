package rc.bootsecurity.model.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@EqualsAndHashCode
@ToString
public class GroupDTO {
    private Integer id;

    private String name;

    private String email;

    private String description;

    private UserSimpleDTO groupManager;

    private List<UserSimpleDTO> usersInGroup;

    private List<UserSimpleDTO> usersWatchGroup;

    private ApplicationPrivilegeDTO applicationPrivilegeDTO;
}
