package rc.bootsecurity.utils.converter;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import rc.bootsecurity.model.dto.UserDTO;
import rc.bootsecurity.model.dto.UserSimpleDTO;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.utils.service.FileService;
import rc.bootsecurity.utils.service.RandomGenerator;

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
        userDTOSimple.setFullname(user.getFirstName() + " " + user.getLastName());
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
