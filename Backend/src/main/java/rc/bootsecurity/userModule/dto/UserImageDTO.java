package rc.bootsecurity.userModule.dto;

import lombok.Data;

@Data
public class UserImageDTO {
    private byte[] userImageByte;
    private String userImageString;
    private String userShortedName;
}
