package rc.bootsecurity.userModule.dto;

import lombok.Data;
import rc.bootsecurity.groupModule.dto.GroupContainerDTO;
import rc.bootsecurity.requestModule.commonModule.dto.ApplicationPrivilegeDTO;


@Data
public class UserDTO extends UserDTOSimple{
    // private byte[] userImageByte;

    private GroupContainerDTO groupContainerDTO;

    private ApplicationPrivilegeDTO applicationPrivilegeDTO;

}
