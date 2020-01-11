package rc.bootsecurity.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rc.bootsecurity.model.dto.*;
import rc.bootsecurity.model.entity.report.Report;
import rc.bootsecurity.service.GroupService;
import rc.bootsecurity.service.request.ReportService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/group")
public class GroupController {
    private static final Logger LOGGER =  LoggerFactory.getLogger(ReportController.class);

    @Autowired
    private GroupService groupService;

    @GetMapping("/details")
    public ResponseEntity<?> getGroupDetails(@RequestParam("groupName") String groupName){
        try {
            GroupDTO groupDTO =  this.groupService.getGroupDetails(groupName);
            return new ResponseEntity<>(groupDTO, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed method getGroupDetails for group: " + groupName+ ", error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri načítavaní detailov skupiny " +
                groupName + ", kontaktujte administrátora." , HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping
    public GroupContainerDTO getAllInvolvedGroupsName(){
        return this.groupService.getAllGroupsForLoggedInUser();
    }



    @PutMapping("manage/{name}/modifyUsers")
    public ResponseEntity<?> modifyUsers(@PathVariable String name , @RequestBody List<UserSimpleDTO> users){
        try {
            this.groupService.modifyUsersInvolvedInGroupAndSave(name, users);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to remove users into group, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse o zmazani uživateľa do skupny",HttpStatus.BAD_REQUEST);
    }

    @PutMapping("manage/{name}/modifyWatchedUsers")
    public ResponseEntity<?> modifyWatchedUsers(@PathVariable String name , @RequestBody List<UserSimpleDTO> users){
        try {
            this.groupService.modifyUsersWatchGroupActivityAndSave(name, users);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to remove users into group, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse o zmazani uživateľa do skupny",HttpStatus.BAD_REQUEST);
    }

    @PutMapping("manage/{name}/modifyManager")
    public ResponseEntity<?> modifyManager(@PathVariable String name , @RequestBody UserSimpleDTO manager){
        try {
            this.groupService.modifyManagerInGroupAndSave(name, manager);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to remove users into group, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse o zmazani uživateľa do skupny",HttpStatus.BAD_REQUEST);
    }

    @PutMapping("manage/{name}/description")
    public ResponseEntity<?> modifyDescription(@PathVariable String name , @RequestBody String description){
        try {
            this.groupService.modifyGroupDescription(name, description);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to modify group description, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse o modifikovani opisu skupny",HttpStatus.BAD_REQUEST);
    }

    @GetMapping("secure/manage/getAll")
    public List<String> getAllGroups(){
        try {
            return this.groupService.getAllGroups();
        } catch (Exception e) {
            LOGGER.error("Failed to register group, error : " + e.getMessage());
        }
        return new ArrayList<>();
    }
    /* returns also privileges which groups does not have yet*/
    @GetMapping("secure/manage/details")
    public ResponseEntity<?> getGroupDetailsAll(@RequestParam("groupName") String groupName){
        try {
            GroupDTO groupDTO =  this.groupService.getGroupDetails(groupName);
            groupDTO.setUnsetApplicationPrivilegeDTO(this.groupService.getUnsetPrivilegesForGroup(groupDTO));
            return new ResponseEntity<>(groupDTO, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed method getGroupDetails for group: " + groupName+ ", error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri načítavaní detailov skupiny " +
                groupName + ", kontaktujte administrátora." , HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /* Available only for authorized solvers -> authorization type privilege management */
    @PostMapping("secure/manage/registration")
    public ResponseEntity<?> registerGroup(@RequestBody GroupDTO groupDTO){
        try {
            this.groupService.registerGroup(groupDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to register group, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse o registrovanie skupiny",HttpStatus.BAD_REQUEST);
    }

    /* Available only for authorized solvers -> authorization type privilege management */
    @PutMapping("secure/manage/{name}/modifyPrivileges")
    public ResponseEntity<?> modifyPrivileges(@PathVariable String name , @RequestBody ApplicationPrivilegeDTO applicationPrivilegeDTO){
        try {
            this.groupService.modifyGroupPrivileges(name, applicationPrivilegeDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to modify group privileges, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse o modifikovani pravomoci skupny",HttpStatus.BAD_REQUEST);
    }

    /* Available only for authorized solvers -> authorization type privilege management */
    @DeleteMapping("secure/manage/{name}/removeGroup")
    public ResponseEntity<?> removeGroup(@PathVariable String name){
        try {
            this.groupService.removeGroup(name);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to remove users into group, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse o zmazani uživateľa do skupny",HttpStatus.BAD_REQUEST);
    }




}
