package rc.bootsecurity.groupModule.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rc.bootsecurity.groupModule.service.GroupService;
import rc.bootsecurity.groupModule.dto.GroupContainerDTO;
import rc.bootsecurity.groupModule.dto.GroupDTO;
import rc.bootsecurity.requestModule.reportModule.controller.ReportController;

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


    /* Available only for authorized solvers -> authorization type privilege management */
    @PutMapping("secure/manage/{name}/modifyGroup")
    public ResponseEntity<?> modifyGroup(@PathVariable String name , @RequestBody GroupDTO groupDTO){
        try {
            this.groupService.modifyGroup(name, groupDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to modify group, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse o modifikovani skupny",HttpStatus.BAD_REQUEST);
    }

    /* Available only for authorized solvers -> authorization type privilege management */
    @GetMapping("secure/manage/getAll")
    public List<String> getAllGroups(){
        try {
            return this.groupService.getAllGroups();
        } catch (Exception e) {
            LOGGER.error("Failed to register group, error : " + e.getMessage());
        }
        return new ArrayList<>();
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
    @GetMapping("secure/manage/details")
    public ResponseEntity<?> getGroupDetailsAll(@RequestParam("groupName") String groupName){
        try {
            GroupDTO groupDTO =  this.groupService.getGroupDetails(groupName);
            groupDTO.setUnsetApplicationPrivilegeDTO(this.groupService.getUnsetPrivilegesForGroup(groupDTO));
            return new ResponseEntity<>(groupDTO, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed method getGroupDetails for group: " + groupName+ ", error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri zmene detailov skupiny " +
                groupName + ", kontaktujte administrátora." , HttpStatus.INTERNAL_SERVER_ERROR);
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
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse o zmazani skupny",HttpStatus.BAD_REQUEST);
    }




}
