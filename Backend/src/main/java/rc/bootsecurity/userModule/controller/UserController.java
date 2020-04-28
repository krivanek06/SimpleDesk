package rc.bootsecurity.userModule.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import rc.bootsecurity.userModule.dto.UserDTO;
import rc.bootsecurity.userModule.exception.PasswordException;
import rc.bootsecurity.util.fileModule.ImageDTO;
import rc.bootsecurity.userModule.dto.UserPasswordContainer;
import rc.bootsecurity.userModule.exception.UserException;
import rc.bootsecurity.userModule.service.UserService;
import rc.bootsecurity.util.fileModule.FileService;

import java.util.List;

@EnableScheduling
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
        } catch (PasswordException e){
            return new ResponseEntity<>("Zadané heslo sa nezhoduje s aktuálne nastaveným heslom",HttpStatus.BAD_REQUEST);
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
    public ResponseEntity<?> getAllAvailableImages(){

        try {
            FileService fileService = new FileService();
            List<ImageDTO> images = fileService.getAllAvailableImages();
            return new ResponseEntity<>(images, HttpStatus.OK);
        } catch (Exception e){
            LOGGER.error("Failed getAllAvailableImages, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Požiadavka o získanie fotiek zlyhala",HttpStatus.BAD_REQUEST);
    }

    /*@GetMapping("/getImages")
    public ResponseEntity<?> getImageForUser(@RequestParam("imageName") String imageName){
        try {
            FileService fileService = new FileService();
            byte[] imageByte = fileService.getUserImage(imageName);
            return new ResponseEntity<>(imageByte, HttpStatus.OK);
        } catch (Exception e){
            LOGGER.error("Failed getImageForUser, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Požiadavka o získanie fotky zlyhala",HttpStatus.BAD_REQUEST);
    }*/

    @PostMapping("/registration")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userSimpleDTO){
        try {
            this.userService.registerUser(userSimpleDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (UserException e) {
            return new ResponseEntity<>("Prihlasovacie meno existuje v databáze, prosím zadajte iné",HttpStatus.BAD_REQUEST);
        } catch (Exception e){
            LOGGER.error("Failed to register user, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse o registrovanie uživateľa",HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/registration")
    public ResponseEntity<?> checkIfUsernameExists(@RequestParam("username") String username){
        try {
            return new ResponseEntity<>(this.userService.checkIfUsernameExists(username), HttpStatus.OK);
        } catch (Exception e){
            LOGGER.error("Failed checkIfUsernameExists, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Požiadavka o existencii uživateĺa zlyhala",HttpStatus.BAD_REQUEST);
    }


    @GetMapping("/secure/all")
    public ResponseEntity<?> getAllUsers(){
        try {
            return new ResponseEntity<>(this.userService.getAllUsers(), HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to get user all users, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri získavaní uživateľov",HttpStatus.BAD_REQUEST);
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

    @PutMapping("/secure/resetPassword/{username}")
    public ResponseEntity<?> resetUserPassword(@PathVariable("username") String username){
        try {
            this.userService.resetPassword(username);
            return new ResponseEntity<>( HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to resetUserPassword, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri resetovaní hesla uživateľa" + username,HttpStatus.BAD_REQUEST);
    }

    // enable or disable user
    @PutMapping("/secure/modifyState/{username}")
    public ResponseEntity<?> modifyState(@PathVariable("username") String username){
        try {
            this.userService.modifyUserState(username);
            return new ResponseEntity<>( HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to modifyState, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri modifikovaní stavu uživateľa" + username,HttpStatus.BAD_REQUEST);
    }


}
