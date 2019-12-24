package rc.bootsecurity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rc.bootsecurity.model.dto.UserDTO;
import rc.bootsecurity.service.UserService;

@RestController
@RequestMapping("api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/basicInformation")
    public UserDTO getLoggedInUserDetails(){
        return this.userService.getLoggedInUserDetails();
    }

}
