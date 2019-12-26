package rc.bootsecurity.utils.converter;

import rc.bootsecurity.model.dto.UserDTO;
import rc.bootsecurity.model.dto.UserSimpleDTO;
import rc.bootsecurity.model.entity.User;

public class UserConverter {
    public UserSimpleDTO convertUserToSimpleDTO(User user){
        UserSimpleDTO userSimpleDTO = new UserSimpleDTO();
        userSimpleDTO.setId(user.getId());
        userSimpleDTO.setUsername(user.getUsername());
        userSimpleDTO.setFirstName(user.getFirstName());
        userSimpleDTO.setLastName(user.getLastName());

        return userSimpleDTO;
    }

    public UserDTO convertUserToUserDTO(User user){
        UserDTO userDTOSimple = new UserDTO();

        userDTOSimple.setId(user.getId());
        userDTOSimple.setUsername(user.getUsername());
        userDTOSimple.setLastName(user.getLastName());
        userDTOSimple.setFirstName(user.getFirstName());
        userDTOSimple.setFullname(user.getFirstName() + " " + user.getLastName());
        userDTOSimple.setEmail(user.getEmail());
        userDTOSimple.setActive(user.getActive());
        userDTOSimple.setPhoto(user.getPhoto());
        userDTOSimple.setDateCreation(user.getDateCreation());
        userDTOSimple.setDateEnding(user.getDateEnding());



        return  userDTOSimple;
    }
}
