package rc.bootsecurity.model.dto;

import lombok.Data;

import java.sql.Date;
import java.sql.Timestamp;

@Data
public class UserDTO {
    private Integer id;

    private String username;

    private String firstName;

    private String lastName;

    private String Fullname;

    private String photo;

    private String email;

    private Boolean active;

    private Timestamp dateCreation;

    private Timestamp dateEnding;

    private byte[] photoBytes;

}
