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
import rc.bootsecurity.requestModule.commonModule.service.RequestService;
import rc.bootsecurity.util.fileModule.FileService;

import java.util.List;

@RestController
@RequestMapping("api/requests")
public class RequestController {
    private static final Logger LOGGER =  LoggerFactory.getLogger(RequestController.class);

    @Autowired
    private RequestService requestService;


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
            FileService fileService = new FileService();
            fileService.uploadFileForRequest(id , uploadingFiles);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to upload files for request, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri nahrávaní súborov pre požiadavku s id : " + id ,HttpStatus.BAD_REQUEST);
    }


}
