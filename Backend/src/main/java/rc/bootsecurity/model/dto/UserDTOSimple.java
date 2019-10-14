package rc.bootsecurity.model.dto;

import lombok.Data;

import java.sql.Timestamp;
@Data
public class UserDTOSimple {
    private Integer id;

    private String username;

    private String password;

    private Integer departmentId;

    private String firstName;

    private String lastName;

    private String foto;

    private String email;

    private Boolean active;

    private Timestamp dateCreation;

    private Timestamp dateEnding;

    private Boolean isAdmin;
}
