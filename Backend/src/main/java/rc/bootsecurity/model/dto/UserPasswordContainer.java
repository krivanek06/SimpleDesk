package rc.bootsecurity.model.dto;

import lombok.Data;

@Data
public class UserPasswordContainer {
    private String oldPassword;
    private String newPassword1;
    private String newPassword2;
}
