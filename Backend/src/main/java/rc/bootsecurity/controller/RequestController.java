package rc.bootsecurity.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import rc.bootsecurity.model.dto.request.RequestDTO;
import rc.bootsecurity.model.dto.request.RequestDashboardDTO;
import rc.bootsecurity.model.dto.request.RequestTableDTO;
import rc.bootsecurity.model.dto.request.TicketDTO;
import rc.bootsecurity.model.entity.ticket.Ticket;
import rc.bootsecurity.service.request.RequestManagementService;
import rc.bootsecurity.service.request.RequestService;
import rc.bootsecurity.utils.service.FileService;
import rc.bootsecurity.utils.service.JsonStringParser;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@RestController
@RequestMapping("api/requests")
public class RequestController {
    private static final Logger LOGGER =  LoggerFactory.getLogger(JsonStringParser.class);

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
        FileService fileService = new FileService();
        fileService.uploadFileForRequest(id , uploadingFiles);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
