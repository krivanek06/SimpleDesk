package rc.bootsecurity.requestModule.ticketModule.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDTO;
import rc.bootsecurity.requestModule.ticketModule.dto.TicketFormDTO;
import rc.bootsecurity.requestModule.ticketModule.entity.TicketSubtype;
import rc.bootsecurity.requestModule.ticketModule.service.TicketService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/requests/ticket")
public class TicketController {
    private static final Logger LOGGER =  LoggerFactory.getLogger(TicketController.class);

    @Autowired
    private TicketService ticketService;


    @PostMapping("")
    public ResponseEntity<?> submitTicket(@RequestBody TicketFormDTO ticketFormDTO){
        try {
            RequestDTO ticketDTO = this.ticketService.createTicket(ticketFormDTO);
            return new ResponseEntity<>(ticketDTO, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to save ticket into database, error : " + e.getMessage());
        }

        return new ResponseEntity<>("Došlo ku chybe na strane servera pri zaznamenávaní ticketu, kontaktujte administrátora." ,HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/ticketSubtype")
    public List<TicketSubtype> getTicketSubtype(@RequestParam("ticketTypeName") String ticketTypeName){
        try {
            return this.ticketService.getTicketSubtypesForTicketType(ticketTypeName);
        } catch (Exception e) {
            LOGGER.error("Failed to getTicketSubtype for ticket " + ticketTypeName + ", error : " + e.getMessage());
        }
        return new ArrayList<>();
    }
}
