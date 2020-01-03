package rc.bootsecurity.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import rc.bootsecurity.model.dto.request.RequestCommentDTO;
import rc.bootsecurity.model.dto.request.RequestDTO;
import rc.bootsecurity.model.dto.request.RequestDashboardDTO;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.service.request.RequestCommentService;
import rc.bootsecurity.service.request.RequestManagementService;
import rc.bootsecurity.service.request.RequestService;
import rc.bootsecurity.utils.converter.RequestConverter;
import rc.bootsecurity.utils.service.FileService;

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

    @PutMapping("/modification/{id}/solver")
    public ResponseEntity<?> assignSolver(@PathVariable("id") Integer id, @RequestParam(value= "assign") String assign){
        try {
            if (Boolean.parseBoolean(assign)) {
                this.requestManagementService.setAssignUserAndSave(id);
            } else {
                this.requestManagementService.removeAssignUserAndSave(id);
            }
            return new ResponseEntity<>(id, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to save ticket into database, error : " + e.getMessage());
        }

        return new ResponseEntity<>("Došlo ku chybe na strane servera pri modifikovaní riešiteľa pre požiadavku s id : " + id ,HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/modification/{id}/files")
    public ResponseEntity<?> uploadFiles(@PathVariable("id") Integer id, @RequestPart("filesToUpload") MultipartFile[] uploadingFiles) {
        try {
            FileService fileService = new FileService();
            fileService.uploadFileForRequest(id , uploadingFiles);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to upload files for request, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri nahrávaní súborov pre požiadavku s id : " + id ,HttpStatus.BAD_REQUEST);
    }



    @GetMapping("/requestDetails/{id}")
    public RequestDTO getRequestDetails(@PathVariable("id") Integer id) {
        return this.requestService.getRequestDetails(id);

    }

    @GetMapping(value = "/requestDetails/{id}/download", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public @ResponseBody byte[] getFileForRequest(@PathVariable("id") Integer id, @RequestParam(value= "fileName") String fileName) {
        return this.requestService.getFileForRequest(id, fileName);
    }
}
