package rc.bootsecurity.requestModule.ticketModule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.requestModule.commonModule.service.RequestManagementService;
import rc.bootsecurity.requestModule.ticketModule.dto.TicketDTO;
import rc.bootsecurity.requestModule.ticketModule.entity.Ticket;
import rc.bootsecurity.requestModule.ticketModule.entity.TicketSubtype;
import rc.bootsecurity.requestModule.commonModule.enums.MODULE_TYPE;
import rc.bootsecurity.requestModule.ticketModule.repository.TicketSubtypeRepository;
import rc.bootsecurity.requestModule.ticketModule.repository.TicketTypeRepository;
import rc.bootsecurity.userModule.entity.User;

import java.util.List;

@Service
public class TicketService extends RequestManagementService {
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

        super.saveOrUpdateRequest(ticket);

        this.requestLogService.saveLogAndBroadCast(ticket, super.requestWebsockets.NEW_REQUEST + ((Request) ticket).getId());

        return ticket;
    }

    public List<TicketSubtype> getTicketSubtypesForTicketType(String ticketTypeName){
        return this.ticketSubtypeRepository.findAllByTicketType(this.ticketTypeRepository.findByName(ticketTypeName));
    }


}
