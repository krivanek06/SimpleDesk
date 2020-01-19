package rc.bootsecurity.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rc.bootsecurity.model.dto.UserSimpleDTO;
import rc.bootsecurity.model.dto.request.RequestDTO;
import rc.bootsecurity.model.entity.request.RequestComment;
import rc.bootsecurity.service.request.RequestManagementService;
import rc.bootsecurity.service.request.RequestStateService;

import java.util.Map;

@RestController
@RequestMapping("api/requests/modification")
public class RequestModificationController {
    private static final Logger LOGGER =  LoggerFactory.getLogger(RequestModificationController.class);
    @Autowired
    private RequestStateService requestStateService;
    @Autowired
    private RequestManagementService requestManagementService;


    /*@PutMapping("{id}/solution")
    public ResponseEntity<?> addSolution(@PathVariable("id") Integer id, @RequestBody String solution) {
        try {
            RequestComment requestComment = this.requestManagementService.setSolution(id, solution);
            return new ResponseEntity<>(requestComment, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to save ticket into database, error : " + e.getMessage());
        }

        return new ResponseEntity<>("Došlo ku chybe na strane servera pri zaznamenávaní riešenia pre požiadavku s id : " + id ,HttpStatus.INTERNAL_SERVER_ERROR);
    }*/
    /**
     * Assign or remove myself as solver
     */
    @PutMapping("/{id}/solver")
    public ResponseEntity<?> modifyMeAsSolver(@PathVariable("id") Integer id, @RequestParam(value= "assign") String assign){
        try {
            if (Boolean.parseBoolean(assign)) {
                this.requestManagementService.setAssignUserAndSave(id);
            } else {
                this.requestManagementService.removeMeAsAssignUserAndSave(id);
            }
            return new ResponseEntity<>(id, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to save ticket into database, error : " + e.getMessage());
        }

        return new ResponseEntity<>("Došlo ku chybe na strane servera pri modifikovaní riešiteľa pre požiadavku s id : " + id ,HttpStatus.INTERNAL_SERVER_ERROR);
    }


    /**
     * Close or reopen request
     */
    @PutMapping("/{id}/state")
    public ResponseEntity<?> changeState(@PathVariable("id") Integer id, @RequestParam("close") Boolean close) {
        try {
            if(close){
                this.requestStateService.closeRequest(id);
            }else{
                this.requestStateService.reopenRequest(id);
            }
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to upload files for request, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri modifikovaní stavu, pre požiadavku s id : " + id ,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /**
     * Change priority for request
     */
    @PutMapping("/{id}/priority")
    public ResponseEntity<?> changePriority(@PathVariable("id") Integer id, @RequestParam("priority") String priority) {
        try {
            this.requestStateService.changePriority(id, priority);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to upload files for request, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri modifikovaní priority, pre požiadavku s id : " + id ,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /**
     * change commenting option
     */
    @PutMapping("/{id}/commenting")
    public ResponseEntity<?> changeCommenting(@PathVariable("id") Integer id) {
        try {
            this.requestStateService.changeCommenting(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to upload files for request, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri modifikovaní komentovania, pre požiadavku s id : " + id ,HttpStatus.INTERNAL_SERVER_ERROR);
    }



    @PutMapping("/secure/{id}/addSolver")
    public UserSimpleDTO addSolver(@PathVariable("id") Integer id, @RequestBody UserSimpleDTO userSimpleDTO){
        try {
            return this.requestManagementService.setAssignUserAndSave(id, userSimpleDTO);
        } catch (Exception e) {
            LOGGER.error("Failed to save ticket into database, error : " + e.getMessage());
        }
        return null;
    }

    @PutMapping("/secure/{id}/removeSolver")
    public ResponseEntity<?> removeSolver(@PathVariable("id") Integer id){
        try {
            this.requestManagementService.removeAssignUserAndSave(id);
            return new ResponseEntity<>(id, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to save ticket into database, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri modifikovaní riešiteľa pre požiadavku s id : " + id ,HttpStatus.INTERNAL_SERVER_ERROR);
    }




}
