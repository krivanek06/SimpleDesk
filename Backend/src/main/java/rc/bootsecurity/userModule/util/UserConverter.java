package rc.bootsecurity.userModule.util;

import rc.bootsecurity.userModule.dto.UserDTO;
import rc.bootsecurity.userModule.dto.UserSimpleDTO;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.util.fileModule.FileService;
import rc.bootsecurity.util.RandomGenerator;

import java.sql.Timestamp;

public class UserConverter {
    private FileService fileService = new FileService();

    public UserSimpleDTO convertUserToSimpleDTO(User user){
        UserSimpleDTO userSimpleDTO = new UserSimpleDTO();
        userSimpleDTO.setUsername(user.getUsername());
        userSimpleDTO.setFirstName(user.getFirstName());
        userSimpleDTO.setLastName(user.getLastName());
        userSimpleDTO.setPhotoBytes(this.fileService.getUserImage(user.getPhoto()));
        return userSimpleDTO;
    }

    public UserSimpleDTO convertUserToSimpleDTOWithoutImage(User user){
        UserSimpleDTO userSimpleDTO = new UserSimpleDTO();
        userSimpleDTO.setUsername(user.getUsername());
        userSimpleDTO.setFirstName(user.getFirstName());
        userSimpleDTO.setLastName(user.getLastName());
        userSimpleDTO.setPhotoBytes(null);
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
