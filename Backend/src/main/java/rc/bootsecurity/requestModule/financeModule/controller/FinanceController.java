package rc.bootsecurity.requestModule.financeModule.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDTO;
import rc.bootsecurity.requestModule.financeModule.dto.FinanceFormDTO;
import rc.bootsecurity.requestModule.financeModule.dto.FinanceTypeDTO;
import rc.bootsecurity.requestModule.financeModule.service.FinanceService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/requests/finance")
public class FinanceController {
    private static final Logger LOGGER =  LoggerFactory.getLogger(FinanceController.class);

    @Autowired
    private FinanceService financeService;

    @GetMapping("/types")
    public List<FinanceTypeDTO> getFinanceTypesToSubmitForLoggedInUser(){
        try {
            return this.financeService.getFinanceTypesToSubmitForLoggedInUser();
        } catch (Exception e) {
            LOGGER.error("Method getFinanceTypesToSubmitForLoggedInUser failed, error : " + e.getMessage());
        }
        return new ArrayList<>();
    }

    @PostMapping("")
    public ResponseEntity<?> submitTicket(@RequestBody FinanceFormDTO financeFormDTO){
        try {
            RequestDTO financeDTO = this.financeService.createFinance(financeFormDTO);
            return new ResponseEntity<>(financeDTO, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to save ticket into database, error : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri zaznamenávaní finančnej požidavky, kontaktujte administrátora.",HttpStatus.BAD_REQUEST);
    }

    @GetMapping("secure/types")
    public List<FinanceTypeDTO> getFinanceTypes(){
        try {
            return this.financeService.getFinanceTypesDTO();
        } catch (Exception e) {
            LOGGER.error("Method getFinanceTypesToSubmitForLoggedInUser failed, error : " + e.getMessage());
        }
        return new ArrayList<>();
    }


}
