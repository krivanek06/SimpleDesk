package rc.bootsecurity.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import rc.bootsecurity.model.dto.ImageDTO;
import rc.bootsecurity.model.dto.UserDTO;
import rc.bootsecurity.model.dto.UserPasswordContainer;
import rc.bootsecurity.model.dto.UserSimpleDTO;
import rc.bootsecurity.service.UserService;
import rc.bootsecurity.utils.service.FileService;

import java.util.List;

@RestController
@RequestMapping("api/user")
public class UserController {
    private static final Logger LOGGER =  LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @GetMapping("/basicInformation")
    public UserDTO getLoggedInUserDetails(){
        return this.userService.getLoggedInUserDetails();
    }

    @PutMapping("/changePassword")
    public ResponseEntity<?> changePassword(@RequestBody UserPasswordContainer userPasswordContainer){
        try {
            this.userService.changePassword(userPasswordContainer);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to change password, error : " + e.getMessage());
        }

        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse o zmene hesla",HttpStatus.BAD_REQUEST);
    }

    @PutMapping(value = "/changeImage" , params = "imageToUpdate")
    public ResponseEntity<?> changeImage(@RequestParam(value= "imageToUpdate") String imageToUpdate){
        try {
            this.userService.changeImageInDB(imageToUpdate);
          //  byte[] newImage = this.userService.getAvatar(imageToUpdate);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to change image, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse o zmene fotky",HttpStatus.BAD_REQUEST);
    }

    @PutMapping(value ="/changeImage" , params = "imageToUpload")
    public ResponseEntity<?> changeImageWithUpload(@RequestParam("imageToUpload") MultipartFile uploadingImage){
        try {
            String imageName = uploadingImage.getOriginalFilename();

            this.userService.uploadImage(uploadingImage);
            this.userService.changeImageInDB(imageName);

            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to change image, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse o zmene fotky",HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/getImages")
    public List<ImageDTO> getAllAvailableImages(){
        FileService fileService = new FileService();
        return fileService.getAllAvailableImages();
    }

    @PostMapping("/registration")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO){
        try {
            this.userService.registerUser(userDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to register user, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse o registrovanie uživateľa",HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/secure/all")
    public List<UserSimpleDTO> getAllUsers(){
        return this.userService.getAllUsersWithoutPhoto();
    }

    @GetMapping("/secure/{username}")
    public ResponseEntity<?> getUserDetails(@PathVariable("username") String username){
        try {
            UserDTO userDTO =  this.userService.getUserDetails(username);
            return new ResponseEntity<>(userDTO, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to get user details, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri získavaní údajov uživateľa",HttpStatus.BAD_REQUEST);
    }

}
