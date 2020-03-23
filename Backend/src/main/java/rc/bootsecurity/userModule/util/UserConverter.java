package rc.bootsecurity.userModule.util;

import rc.bootsecurity.userModule.dto.UserDTO;
import rc.bootsecurity.userModule.dto.UserSimpleDTO;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.util.fileModule.FileService;
import rc.bootsecurity.util.RandomGenerator;

import java.sql.Timestamp;
import java.util.Optional;

public class UserConverter {
    private FileService fileService = new FileService();

    public UserSimpleDTO convertUserToSimpleDTO(User user){
        UserSimpleDTO userSimpleDTO = new UserSimpleDTO();
        userSimpleDTO.setUsername(user.getUsername());
        userSimpleDTO.setFirstName(user.getFirstName());
        userSimpleDTO.setLastName(user.getLastName());
        userSimpleDTO.setEmail(user.getEmail());
        userSimpleDTO.setUserShortedName(user.getFirstName().substring(0,1) + ". " + user.getLastName());
        userSimpleDTO.setUserImageString(user.getPhoto());
        userSimpleDTO.setUserImageByte(this.fileService.getUserImage(user.getPhoto()));
        return userSimpleDTO;
    }


    public UserDTO convertUserToUserDTO(User user){
        UserDTO userDTOSimple = new UserDTO();

        userDTOSimple.setId(user.getId());
        userDTOSimple.setUsername(user.getUsername());
        userDTOSimple.setLastName(user.getLastName());
        userDTOSimple.setFirstName(user.getFirstName());
        userDTOSimple.setFullName(user.getFirstName() + " " + user.getLastName());
        userDTOSimple.setEmail(user.getEmail());
        userDTOSimple.setActive(user.getActive());
        userDTOSimple.setPhoto(user.getPhoto());
        userDTOSimple.setDateCreation(user.getDateCreation());
        userDTOSimple.setDateEnding(user.getDateEnding());

        return  userDTOSimple;
    }

    public User generateFreshUser(UserSimpleDTO userSimpleDTO){
        User user = new User();
        RandomGenerator randomGenerator = new RandomGenerator();

        user.setUsername(userSimpleDTO.getUsername());
        user.setPhoto("user.png");
        user.setEmail(userSimpleDTO.getEmail());
        user.setFirstName(userSimpleDTO.getFirstName());
        user.setLastName(userSimpleDTO.getLastName());
        user.setActive(true);
        user.setDateCreation(new Timestamp(System.currentTimeMillis()));
        user.setPassword(randomGenerator.generateString(10));
        return user;
    }
}
