package rc.bootsecurity.userModule.dto;

import lombok.Data;
import rc.bootsecurity.requestModule.commonModule.dto.ApplicationPrivilegeDTO;

import java.sql.Timestamp;

@Data
public class UserDTO {
    private Integer id;

    private String username;

    private String firstName;

    private String lastName;

    private String fullName;

    private String photo;

    private String email;

    private Boolean active;

    private Timestamp dateCreation;

    private Timestamp dateEnding;

    private byte[] photoBytes;

    private String[]  groupsToManage;

    private String[]  groupsActivityWatched;

    private String[]  groupsInvolved;

    private ApplicationPrivilegeDTO applicationPrivilegeDTO;

}
