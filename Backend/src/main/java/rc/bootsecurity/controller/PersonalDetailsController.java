package rc.bootsecurity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import rc.bootsecurity.model.dto.UserDTOSimple;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.security.UserPrincipal;
import rc.bootsecurity.service.UserService;
import rc.bootsecurity.utils.modelmapper.UserModelMapper;


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