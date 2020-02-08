package rc.bootsecurity.userModule.dto;

import lombok.Data;

@Data
public class UserSimpleDTO {
    private String username;
    private String firstName;
    private String lastName;
    private byte[] photoBytes;
}
