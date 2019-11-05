package rc.bootsecurity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rc.bootsecurity.model.dto.UserDTOSimple;
import rc.bootsecurity.service.UserService;


@RestController
@RequestMapping("/PersonalDetails")
public class PersonalDetailsController {
    @Autowired
    private UserService userService;


    @GetMapping("/basicInformation")
    public UserDTOSimple basicInformation(@RequestParam(value = "name", required = false) String name){
        return this.userService.getUserDTOSimple(name);
    }

}