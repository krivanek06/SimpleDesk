package rc.bootsecurity.userModule.util;

import rc.bootsecurity.userModule.dto.UserDTO;
import rc.bootsecurity.userModule.dto.UserDTOSimple;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.util.fileModule.FileService;
import rc.bootsecurity.util.RandomGenerator;

import java.sql.Timestamp;

public class UserConverter {
    private FileService fileService = new FileService();

    public UserDTOSimple convertUserToUserDTOSimple(User user){
        UserDTOSimple userDTO = new UserDTOSimple();

        userDTO.setId(user.getId());
        userDTO.setUsername(user.getUsername());
        userDTO.setLastName(user.getLastName());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setFullName(user.getFirstName() + " " + user.getLastName());
        userDTO.setUserShortedName(user.getFirstName().substring(0,1) + ". " + user.getLastName());
        userDTO.setEmail(user.getEmail());
        userDTO.setActive(user.getActive());
        userDTO.setDateCreation(user.getDateCreation());
        userDTO.setDateEnding(user.getDateEnding());

        return  userDTO;
    }

    // privileges and groups needs to be add outside
    public UserDTO convertUserToUserDTO(User user){
        UserDTO userDTO = new UserDTO();

        userDTO.setId(user.getId());
        userDTO.setUsername(user.getUsername());
        userDTO.setLastName(user.getLastName());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setFullName(user.getFirstName() + " " + user.getLastName());
        userDTO.setUserShortedName(user.getFirstName().substring(0,1) + ". " + user.getLastName());
        userDTO.setEmail(user.getEmail());
        userDTO.setActive(user.getActive());
        userDTO.setDateCreation(user.getDateCreation());
        userDTO.setDateEnding(user.getDateEnding());

        userDTO.setUserImageString(user.getPhoto());
        userDTO.setUserImageByte(this.fileService.getUserImage(user.getPhoto()));

        return  userDTO;
    }

    public User generateFreshUser(UserDTO userDTO){
        User user = new User();
        RandomGenerator randomGenerator = new RandomGenerator();

        user.setUsername(userDTO.getUsername());
        user.setPhoto("user.png");
        user.setEmail(userDTO.getEmail());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setActive(true);
        user.setDateCreation(new Timestamp(System.currentTimeMillis()));
        user.setPassword(randomGenerator.generateString(10));
        return user;
    }
}
