package rc.bootsecurity.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import rc.bootsecurity.model.dto.ApplicationPrivilegeDTO;
import rc.bootsecurity.model.dto.GroupContainerDTO;
import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.entity.report.Report;
import rc.bootsecurity.service.GroupService;
import rc.bootsecurity.service.request.ReportService;

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
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri načítavaní detailov skupiny " + groupName + ", kontaktujte administrátora." ,
                HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping
    public GroupContainerDTO getAllInvolvedGroupsName(){
        return this.groupService.getAllGroupsForLoggedInUser();
    }
}
