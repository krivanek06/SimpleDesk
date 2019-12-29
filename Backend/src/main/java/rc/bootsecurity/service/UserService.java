package rc.bootsecurity.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.UserDTO;
import rc.bootsecurity.model.dto.ApplicationPrivilegeDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.utils.service.FileService;
import rc.bootsecurity.utils.service.JsonStringParser;
import rc.bootsecurity.utils.converter.UserConverter;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    private JsonStringParser jsonStringParser = new JsonStringParser();

    private UserConverter userConverter = new UserConverter();

    private static final Logger LOGGER =  LoggerFactory.getLogger(UserService.class);

    public ApplicationPrivilegeDTO getPrivilegesForUser(String username){
        return this.jsonStringParser.parseFromRawJsonToUserPrivilegeDTO(
                this.userRepository.findPrivilegesForUser(username));
    }
    public List<User> getUsersInvolvedInGroup(Group group){
        List<User> users = this.userRepository.findAllByGroupsInvolved(group);
        return users != null ? users : new ArrayList<>();
    }

    public List<User> getUsersWatchedGroup(Group group){
        return this.userRepository.findAllByGroupsActivityWatched(group).orElseGet(ArrayList::new);
    }

    public User loadUser(String name){
        return this.userRepository.findByUsername(name).orElseThrow(() -> new UsernameNotFoundException("Not found " + name ));
    }

    public String getPrincipalUsername() {
        String username = "";
        try {
            Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            username = (principal instanceof UserDetails) ? ((UserDetails) principal).getUsername() : principal.toString();
        }catch (Exception e){
            LOGGER.error("SecurityContextHolder does not found principal, error : " + e.getMessage());
        }
        return username;
    }

    public UserDTO getLoggedInUserDetails(){
        FileService fileService = new FileService();
        String username = this.getPrincipalUsername();
        UserDTO userDTO = this.userConverter.convertUserToUserDTO(this.loadUser(username));
        userDTO.setPhotoBytes(fileService.getUserImage(userDTO.getPhoto()));

        return userDTO;
    }









}
