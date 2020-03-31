package rc.bootsecurity.userModule.dto;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class UserDTOSimple {
    private Integer id;

    private String username;

    private String firstName;

    private String lastName;

    private String fullName;

    private String userShortedName;

    private String email;

    private Boolean active;

    private Timestamp dateCreation;

    private Timestamp dateEnding;
}
