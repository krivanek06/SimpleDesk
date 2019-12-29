package rc.bootsecurity.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rc.bootsecurity.model.dto.request.ReportDTO;
import rc.bootsecurity.model.entity.report.Report;
import rc.bootsecurity.service.request.ReportService;

@RestController
@RequestMapping("api/requests/report")
public class ReportController {
    private static final Logger LOGGER =  LoggerFactory.getLogger(ReportController.class);

    @Autowired
    private ReportService reportService;

    @PostMapping("")
    public ResponseEntity<?> submitReport(@RequestBody ReportDTO reportDTO){
        try {
            Report report = this.reportService.createReport(reportDTO);
            this.reportService.saveOrUpdateRequest(report);
            return new ResponseEntity<>(report.getId(), HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to save ticket into database, error : " + e.getMessage());
        }

        return new ResponseEntity<>("Došlo ku chybe na strane servera pri zaznamenávaní reportu, kontaktujte administrátora." ,HttpStatus.BAD_REQUEST);
    }
}
