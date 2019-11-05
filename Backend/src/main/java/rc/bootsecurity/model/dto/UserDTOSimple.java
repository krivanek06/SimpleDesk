package rc.bootsecurity.model.dto;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class UserDTOSimple {
    private String username;

    private String firstName;

    private String lastName;

    private String photo;

    private String email;

    private Boolean active;

    private Timestamp dateCreation;

    private Timestamp dateEnding;

    private String[] groupsInvolved;

    private String[] groupsToMange;

}
