package rc.bootsecurity.requestModule.commonModule.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDTO;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDashboardDTO;
import rc.bootsecurity.requestModule.commonModule.dto.RequestTableDTO;
import rc.bootsecurity.requestModule.commonModule.service.RequestManagementService;
import rc.bootsecurity.requestModule.commonModule.service.RequestService;
import rc.bootsecurity.userModule.dto.UserSimpleDTO;
import rc.bootsecurity.util.fileModule.FileService;

import java.util.List;

@RestController
@RequestMapping("api/requests")
public class RequestController {
    private static final Logger LOGGER =  LoggerFactory.getLogger(RequestController.class);

    @Autowired
    private RequestService requestService;

    @Autowired
    private RequestManagementService requestManagementService;


    @GetMapping("/dashboard")
    public RequestDashboardDTO getRequestOnDashboard(){
        return this.requestService.getRequestOnDashboard();
    }

    @GetMapping("/closed")
    public List<RequestTableDTO> getClosedRequests(@RequestParam String dateFrom, @RequestParam String dateTo){
        return this.requestService.getClosedRequests(dateFrom, dateTo);
    }

    @GetMapping("/requestDetails/{id}")
    public ResponseEntity<?> getRequestDetails(@PathVariable("id") Integer id) {
        try {
            RequestDTO requestDTO = this.requestService.getRequestDetails(id);
            return new ResponseEntity<>(requestDTO, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("error retrieving request detials : " + e.getMessage());
        }
        return new ResponseEntity<>("Nemáte dostatočné práva na prezretie požiadavky s id : " + id ,HttpStatus.FORBIDDEN);
    }

    @GetMapping(value = "/requestDetails/{id}/download", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public @ResponseBody byte[] getFileForRequest(@PathVariable("id") Integer id, @RequestParam(value= "fileName") String fileName) {
        return this.requestService.getFileForRequest(id, fileName);
    }

    @PostMapping("/requestDetails/{id}/files")
    public ResponseEntity<?> uploadFiles(@PathVariable("id") Integer id, @RequestPart("filesToUpload") MultipartFile[] uploadingFiles) {
        try {
            this.requestManagementService.uploadFiles(id, uploadingFiles);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to upload files for request, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri nahrávaní súborov pre požiadavku s id : " + id ,HttpStatus.BAD_REQUEST);
    }

    /**
     * Assign or remove myself as solver
     */
    @PutMapping("/modification/{id}/solver")
    public ResponseEntity<?> modifyMeAsSolver(@PathVariable("id") Integer id, @RequestParam(value= "assign") String assign){
        try {
            if (Boolean.parseBoolean(assign)) {
                this.requestManagementService.setAssignUserAndSave(id);
            } else {
                this.requestManagementService.removeMeAsAssignUserAndSave(id);
            }
            return new ResponseEntity<>(id, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to modifyMeAsSolver, error : " + e.getMessage());
        }

        return new ResponseEntity<>("Došlo ku chybe na strane servera pri modifikovaní riešiteľa pre požiadavku s id : " + id ,HttpStatus.INTERNAL_SERVER_ERROR);
    }


    /**
     * Close or reopen request
     */
    @PutMapping("/modification/{id}/state")
    public ResponseEntity<?> changeState(@PathVariable("id") Integer id, @RequestParam("close") Boolean close) {
        try {
            if(close){
                this.requestManagementService.closeRequest(id);
            }else{
                this.requestManagementService.reopenRequest(id);
            }
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to changeState for request, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri modifikovaní stavu, pre požiadavku s id : " + id ,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /**
     * Change priority for request
     */
    @PutMapping("/modification/{id}/priority")
    public ResponseEntity<?> changePriority(@PathVariable("id") Integer id, @RequestParam("priority") String priority) {
        try {
            this.requestManagementService.changePriority(id, priority);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to changePriority for request, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri modifikovaní priority, pre požiadavku s id : " + id ,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /**
     * change commenting option
     */
    @PutMapping("/modification/{id}/commenting")
    public ResponseEntity<?> changeCommenting(@PathVariable("id") Integer id) {
        try {
            this.requestManagementService.changeCommenting(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to changeCommenting for request, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri modifikovaní komentovania, pre požiadavku s id : " + id ,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /**
     * remove logs on request for principal
     */
    @DeleteMapping("/modification/{id}/logs")
    public ResponseEntity<?> removeLogs(@PathVariable("id") Integer id) {
        try {
            this.requestManagementService.removeLogsOnRequestForPrincipal(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to removeLogs for request, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri odstránení logov, pre požiadavku s id : " + id ,HttpStatus.INTERNAL_SERVER_ERROR);
    }


    /**
     * add chosen solver
     */
    @PutMapping("/modification/secure/{id}/addSolver")
    public UserSimpleDTO addSolver(@PathVariable("id") Integer id, @RequestBody UserSimpleDTO userSimpleDTO){
        try {
            return this.requestManagementService.setAssignUserAndSave(id, userSimpleDTO);
        } catch (Exception e) {
            LOGGER.error("Failed to addSolver, error : " + e.getMessage());
        }
        return null;
    }

    /**
     * remove solver
     */
    @PutMapping("/modification/secure/{id}/removeSolver")
    public ResponseEntity<?> removeSolver(@PathVariable("id") Integer id){
        try {
            this.requestManagementService.removeAssignUserAndSave(id);
            return new ResponseEntity<>(id, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to removeSolver, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri modifikovaní riešiteľa pre požiadavku s id : " + id ,HttpStatus.INTERNAL_SERVER_ERROR);
    }



}
