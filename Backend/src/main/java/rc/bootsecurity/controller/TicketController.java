package rc.bootsecurity.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rc.bootsecurity.model.dto.request.TicketDTO;
import rc.bootsecurity.model.entity.ticket.Ticket;
import rc.bootsecurity.model.entity.ticket.TicketSubtype;
import rc.bootsecurity.model.entity.ticket.TicketType;
import rc.bootsecurity.repository.ticket.TicketSubtypeRepository;
import rc.bootsecurity.service.request.RequestManagementService;
import rc.bootsecurity.service.request.TicketService;
import rc.bootsecurity.utils.service.JsonStringParser;

import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;

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
