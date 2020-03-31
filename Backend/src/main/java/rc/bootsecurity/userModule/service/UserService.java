package rc.bootsecurity.userModule.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import rc.bootsecurity.groupModule.service.GroupService;
import rc.bootsecurity.groupModule.entity.Group;
import rc.bootsecurity.requestModule.commonModule.dto.ApplicationPrivilegeDTO;
import rc.bootsecurity.userModule.dto.UserDTO;
import rc.bootsecurity.userModule.dto.UserDTOSimple;
import rc.bootsecurity.userModule.exception.PasswordException;
import rc.bootsecurity.userModule.repository.UserRepository;
import rc.bootsecurity.userModule.dto.UserPasswordContainer;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.userModule.enums.USER_TYPE;
import rc.bootsecurity.userModule.exception.UserException;
import rc.bootsecurity.notificationModule.emailModule.EmailService;
import rc.bootsecurity.util.fileModule.FileService;
import rc.bootsecurity.util.JsonStringParser;
import rc.bootsecurity.userModule.util.UserConverter;
import rc.bootsecurity.util.RandomGenerator;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private GroupService groupService;
    @Autowired
    private EmailService emailService;

    private JsonStringParser jsonStringParser = new JsonStringParser();
    private FileService fileService = new FileService();
    private UserConverter userConverter = new UserConverter();

    private static final Logger LOGGER =  LoggerFactory.getLogger(UserService.class);


    public ApplicationPrivilegeDTO getPrivilegesForUser(String username){
        return this.jsonStringParser.parseFromRawJsonToUserPrivilegeDTO(this.userRepository.findPrivilegesForUser(username));
    }
    public List<User> getUsersInvolvedInGroup(Group group){
        return this.userRepository.findAllByGroupsInvolved(group);
    }

    public List<User> getUsersWatchedGroup(Group group){
        return this.userRepository.findAllByGroupsActivityWatched(group).orElseGet(ArrayList::new);
    }

    public User loadUserByUsername(String name){
        return this.userRepository.findByUsername(name).orElseThrow(() -> new UsernameNotFoundException("Not found " + name ));
    }

    public List<User> loadUsersByUsername(List<String> names){
        return this.userRepository.findAllByUsernameIn(names);
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

    public boolean isAdminOrGhost(){
        String username = this.getPrincipalUsername();
        return username.equalsIgnoreCase(USER_TYPE.Admin.name()) || username.equalsIgnoreCase(USER_TYPE.Ghost.name());
    }

    public UserDTO getLoggedInUserDetails(){
        return this.getUserDetails(this.getPrincipalUsername());
    }

    public void changePassword(UserPasswordContainer userPasswordContainer) throws PasswordException {
        String username = this.getPrincipalUsername();

        User user = this.loadUserByUsername(username);
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

        if(!bCryptPasswordEncoder.matches(userPasswordContainer.getOldPassword() , user.getPassword())){
            throw new PasswordException("Provided old password with actual one does not match for user : " + username);
        }

        user.setPassword(bCryptPasswordEncoder.encode(userPasswordContainer.getNewPassword1()));
        this.userRepository.save(user);
    }

    public void changeImageInDB(String imageToUpdate){
        String username = this.getPrincipalUsername();

        User user = this.loadUserByUsername(username);
        user.setPhoto(imageToUpdate);

        this.userRepository.save(user);
    }

    public void uploadImage(MultipartFile uploadingFiles){
        this.fileService.uploadImageForUser(uploadingFiles);
    }

    public List<UserDTOSimple> getAllUsers(){
        return this.userRepository.findAllByOrderByIdAsc().stream().filter(user ->
                !user.getUsername().equalsIgnoreCase("admin") && !user.getUsername().equalsIgnoreCase("ghost"))
                .map(user -> this.userConverter.convertUserToUserDTOSimple(user)).collect(Collectors.toList());
    }

    public UserDTO getUserDetails(String username){
        User user = this.loadUserByUsername(username);

        UserDTO userDTO = this.userConverter.convertUserToUserDTO(user);
        userDTO.setApplicationPrivilegeDTO(this.getPrivilegesForUser(username));
        userDTO.setGroupContainerDTO(this.groupService.getAllGroupsDTOForUsername(username));

        return userDTO;
    }

    public void resetPassword(String username){
        User user = this.loadUserByUsername(username);
        user.setPassword(new RandomGenerator().generateString(10));
        this.modifyPassword( user);
    }


    public void registerUser(UserDTO userDTO) throws UserException {
        if(this.userRepository.findByUsername(userDTO.getUsername()).isPresent()){
            throw new UserException("User already exists");
        }
        this.modifyPassword(this.userConverter.generateFreshUser(userDTO));
    }

    private void modifyPassword(User user){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        // send information email
        this.emailService.sendUserRegistrationEmail(this.loadUserByUsername(this.getPrincipalUsername()), user);

        // encrypt password
        user.setPassword(encoder.encode(user.getPassword()));
        this.userRepository.save(user);
    }

    // enable / disable user
    public void modifyUserState(String username){
        User user = this.loadUserByUsername(username);
        user.setActive(!user.getActive());
        if(!user.getActive()) {
            user.setDateEnding(new Timestamp(System.currentTimeMillis()));
        }else{
            user.setDateEnding(null);
        }
        this.userRepository.save(user);
    }

    public List<String> getUsersToSendRequestChange(Integer requestId) {
        return this.userRepository.getUsersToSendRequestChange(requestId);
    }





}
