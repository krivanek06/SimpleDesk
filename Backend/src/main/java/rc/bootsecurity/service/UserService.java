package rc.bootsecurity.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import rc.bootsecurity.model.dto.*;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.utils.service.FileService;
import rc.bootsecurity.utils.service.JsonStringParser;
import rc.bootsecurity.utils.converter.UserConverter;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private GroupService groupService;

    private JsonStringParser jsonStringParser = new JsonStringParser();
    private FileService fileService = new FileService();
    private UserConverter userConverter = new UserConverter();

    private static final Logger LOGGER =  LoggerFactory.getLogger(UserService.class);

    public List<User> getUsersWatchedRequest(Request request){
        return this.userRepository.findAllByWatchedRequests(request).orElseGet(ArrayList::new);
    }

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

    public UserDTO getLoggedInUserDetails(){
        String username = this.getPrincipalUsername();
        UserDTO userDTO = this.userConverter.convertUserToUserDTO(this.loadUserByUsername(username));
        userDTO.setPhotoBytes(fileService.getUserImage(userDTO.getPhoto()));

        return userDTO;
    }

    public void changePassword(UserPasswordContainer userPasswordContainer) throws Exception {
        String username = this.getPrincipalUsername();

        if(!userPasswordContainer.getNewPassword1().contentEquals(userPasswordContainer.getNewPassword2())){
            throw new Exception("Password does not match for user : " + username);
        }

        User user = this.loadUserByUsername(username);
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

        if(!bCryptPasswordEncoder.matches(userPasswordContainer.getOldPassword() , user.getPassword())){
            throw new Exception("Provided old password with actual one does not match for user : " + username);
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


    public List<UserSimpleDTO> getAllUsersWithoutPhoto(){
        return this.userRepository.findAll().stream().filter(user -> !user.getUsername().equalsIgnoreCase("admin"))
                .map(user -> this.userConverter.convertUserToSimpleDTOWithoutImage(user)).collect(Collectors.toList());
    }

    public UserDTO getUserDetails(String username){
        User user = this.loadUserByUsername(username);

        UserDTO userDTO = this.userConverter.convertUserToUserDTO(user);
        userDTO.setPhotoBytes(fileService.getUserImage(userDTO.getPhoto()));
        userDTO.setApplicationPrivilegeDTO(this.getPrivilegesForUser(username));

        GroupContainerDTO groupContainerDTO = this.groupService.getAllGroupsDTOForUsername(username);
        userDTO.setGroupsInvolved(groupContainerDTO.getUserInGroups().toArray(String[]::new));
        userDTO.setGroupsActivityWatched(groupContainerDTO.getWatchedGroupActivity().toArray(String[]::new));
        userDTO.setGroupsToManage(groupContainerDTO.getManagerOfGroups().toArray(String[]::new));

        return userDTO;
    }

    public void registerUser(UserDTO userDTO){
        User user = this.userConverter.generateFreshUser(userDTO);
        this.userRepository.save(user);
    }








}
