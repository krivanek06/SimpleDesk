package rc.bootsecurity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.service.TestService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/public")
@CrossOrigin
public class PublicRestApiController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private TestService testService;

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
        return this.testService.user();
    }

    @GetMapping("admin/group")
    public List<Group> group(){
        return this.testService.group();

    }


}
