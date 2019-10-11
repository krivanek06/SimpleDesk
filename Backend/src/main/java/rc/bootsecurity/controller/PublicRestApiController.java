package rc.bootsecurity.controller;

import org.springframework.web.bind.annotation.*;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.model.entity.User;

import java.util.List;

@RestController
@RequestMapping("api/public")
@CrossOrigin
public class PublicRestApiController {
    private UserRepository userRepository;

    public PublicRestApiController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    // Available to all authenticated users
    @GetMapping("test")
    public String test1(){
        return "API Test";
    }

    // Available to managers
    @GetMapping("management/reports")
    public String reports(){
        return "Some report data";
    }

    // Available to ROLE_ADMIN
    @GetMapping("admin/users")
    public List<User> users(){
        return this.userRepository.findAll();
    }

    @GetMapping("admin/user")
    public User user(){
        return this.userRepository.findById(2).get();
    }


}
