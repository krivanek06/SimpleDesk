package rc.bootsecurity.service.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.request.TicketDTO;
import rc.bootsecurity.model.entity.ticket.Ticket;
import rc.bootsecurity.model.enums.MODULE_TYPE;
import rc.bootsecurity.repository.ticket.TicketTypeRepository;

@Service
public class TicketService extends RequestManagementService{
    @Autowired
    private TicketTypeRepository ticketTypeRepository;


    public Ticket createTicket(TicketDTO ticketDTO){
        Ticket ticket = new Ticket();
        this.setAttributesForRequest(ticket, MODULE_TYPE.Ticket.name(),ticketDTO.getName(), ticketDTO.getRequestPriority());

        ticket.setTicketSubtypeName(ticketDTO.getTicketSubtypeName());
        ticket.setTicketType(this.ticketTypeRepository.findByName(ticketDTO.getTicketType()));
        ticket.setProblem(ticketDTO.getProblem());

        return ticket;
    }


}
