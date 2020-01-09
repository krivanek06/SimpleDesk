package rc.bootsecurity.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rc.bootsecurity.model.dto.request.FinanceDTO;
import rc.bootsecurity.model.dto.request.FinanceTypeDTO;
import rc.bootsecurity.model.dto.request.TicketDTO;
import rc.bootsecurity.model.entity.finance.Finance;
import rc.bootsecurity.model.entity.ticket.Ticket;
import rc.bootsecurity.service.request.FinanceService;

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
    public ResponseEntity<?> submitTicket(@RequestBody FinanceDTO financeDTO){
        try {
            Finance finance = this.financeService.createFinance(financeDTO);
            this.financeService.saveOrUpdateRequest(finance);
            return new ResponseEntity<>(finance.getId(), HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to save ticket into database, error : " + e.getMessage());
        }

        return new ResponseEntity<>("Došlo ku chybe na strane servera pri zaznamenávaní finančnej požidavky, kontaktujte administrátora."
                ,HttpStatus.BAD_REQUEST);
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
