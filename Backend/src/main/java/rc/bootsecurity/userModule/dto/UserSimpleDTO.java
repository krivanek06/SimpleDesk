package rc.bootsecurity.userModule.dto;

import lombok.Data;

import java.util.Optional;

@Data
public class UserSimpleDTO {
    private String username;
    private String firstName;
    private String lastName;
    private String userShortedName;
    private String userImageString;
    private byte[] userImageByte; // loaded from disk

    private String email; // optional
}
