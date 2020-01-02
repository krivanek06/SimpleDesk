package rc.bootsecurity.service.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.exception.RequestNotFoundException;
import rc.bootsecurity.model.dto.request.RequestDTO;
import rc.bootsecurity.model.dto.request.TicketDTO;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.ticket.Ticket;
import rc.bootsecurity.model.entity.ticket.TicketSubtype;
import rc.bootsecurity.model.entity.ticket.TicketType;
import rc.bootsecurity.model.enums.MODULE_TYPE;
import rc.bootsecurity.repository.ticket.TicketRepository;
import rc.bootsecurity.repository.ticket.TicketSubtypeRepository;
import rc.bootsecurity.repository.ticket.TicketTypeRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService extends RequestManagementService{
    @Autowired
    private TicketTypeRepository ticketTypeRepository;
    @Autowired
    private TicketSubtypeRepository ticketSubtypeRepository;


    public Ticket createTicket(TicketDTO ticketDTO){
        Ticket ticket = new Ticket();
        this.setAttributesForRequest(ticket, MODULE_TYPE.Ticket.name(),ticketDTO.getName(), ticketDTO.getRequestPriority());

        ticket.setTicketSubtypeName(ticketDTO.getTicketSubtypeName());
        ticket.setTicketType(this.ticketTypeRepository.findByName(ticketDTO.getTicketType()));
        ticket.setProblem(ticketDTO.getProblem());

        return ticket;
    }

    public List<TicketSubtype> getTicketSubtypesForTicketType(String ticketTypeName){
        TicketType ticketType = this.ticketTypeRepository.findByName(ticketTypeName);
        List<TicketSubtype> ticketSubtypeList = this.ticketSubtypeRepository.findAllByTicketType(ticketType);

        return ticketSubtypeList;
    }


}
