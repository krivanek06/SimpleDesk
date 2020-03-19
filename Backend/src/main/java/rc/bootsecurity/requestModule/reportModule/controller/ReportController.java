package rc.bootsecurity.requestModule.reportModule.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDTO;
import rc.bootsecurity.requestModule.reportModule.dto.ReportFormDTO;
import rc.bootsecurity.requestModule.reportModule.service.ReportService;

@RestController
@RequestMapping("api/requests/report")
public class ReportController {
    private static final Logger LOGGER =  LoggerFactory.getLogger(ReportController.class);

    @Autowired
    private ReportService reportService;

    @PostMapping
    public ResponseEntity<?> submitReport(@RequestBody ReportFormDTO reportFormDTO){
        try {
            RequestDTO reportDTO = this.reportService.createReport(reportFormDTO);
            return new ResponseEntity<>(reportDTO, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to save report into database, error : " + e.getMessage());
        }

        return new ResponseEntity<>("Došlo ku chybe na strane servera pri zaznamenávaní reportu, kontaktujte administrátora." ,HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/{id}/evaluation")
    public ResponseEntity<?> addEvaluation(@PathVariable("id") Integer id, @RequestParam("days") Double days){
        try {
            this.reportService.addEvaluation(id, days);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to addEvaluation, error : " + e.getMessage());
        }

        return new ResponseEntity<>("Došlo ku chybe na strane servera pri nadhodnocovaní reportu, kontaktujte administrátora.", HttpStatus.BAD_REQUEST);
    }
}
