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
import rc.bootsecurity.model.dto.request.TicketDTO;
import rc.bootsecurity.model.entity.ticket.Ticket;
import rc.bootsecurity.service.request.RequestManagementService;
import rc.bootsecurity.service.request.TicketService;
import rc.bootsecurity.utils.service.JsonStringParser;

import java.net.http.HttpResponse;

@RestController
@RequestMapping("api/requests/ticket")
public class TicketController {
    private static final Logger LOGGER =  LoggerFactory.getLogger(JsonStringParser.class);

    @Autowired
    private TicketService ticketService;

    @PostMapping("")
    public ResponseEntity<?> submitTicket(@RequestBody TicketDTO ticketDTO){
        try {
            Ticket ticket = this.ticketService.createTicket(ticketDTO);
            this.ticketService.saveOrUpdateRequest(ticket);
            return new ResponseEntity<>(ticket.getId(), HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed to save ticket into database, error : " + e.getMessage());
        }

        return new ResponseEntity<>("Došlo ku chybe na strane servera pri zaznamenávaní ticketu, kontaktujte administrátora." ,HttpStatus.BAD_REQUEST);
    }
}
