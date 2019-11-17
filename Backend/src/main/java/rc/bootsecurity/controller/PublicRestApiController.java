package rc.bootsecurity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rc.bootsecurity.repository.UserRepository;

@RestController
@RequestMapping("api/public")
@CrossOrigin
public class PublicRestApiController {
    @Autowired
    private UserRepository userRepository;



   /* @GetMapping("user/userDTOInfo/{id}")
    public UserDTOSimple getUserDTO(@PathVariable int id){
        return this.testService.userDTOInfo(id);
    }

    @GetMapping("user/user/{id}")
    public User getUser(@PathVariable int id){
        return this.testService.userInfo(id);
    }*/

}
