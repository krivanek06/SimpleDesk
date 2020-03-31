package rc.bootsecurity.requestModule.ticketModule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDTO;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.requestModule.commonModule.service.RequestManagementService;
import rc.bootsecurity.requestModule.commonModule.utils.RequestConverter;
import rc.bootsecurity.requestModule.ticketModule.dto.TicketFormDTO;
import rc.bootsecurity.requestModule.ticketModule.entity.Ticket;
import rc.bootsecurity.requestModule.ticketModule.entity.TicketSubtype;
import rc.bootsecurity.requestModule.commonModule.enums.MODULE_TYPE;
import rc.bootsecurity.requestModule.ticketModule.repository.TicketSubtypeRepository;
import rc.bootsecurity.requestModule.ticketModule.repository.TicketTypeRepository;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class TicketService extends RequestManagementService {
    @Autowired
    private TicketTypeRepository ticketTypeRepository;
    @Autowired
    private TicketSubtypeRepository ticketSubtypeRepository;


    public RequestDTO createTicket(TicketFormDTO ticketFormDTO){
        Ticket ticket = new Ticket();
        RequestConverter requestConverter = new RequestConverter();

        this.setAttributesForRequest(ticket, MODULE_TYPE.Ticket.name(),ticketFormDTO.getName(), ticketFormDTO.getRequestPriority());

        ticket.setTicketSubtypeName(ticketFormDTO.getTicketSubtypeName());
        ticket.setTicketType(this.ticketTypeRepository.findByName(ticketFormDTO.getTicketType()));
        ticket.setProblem(ticketFormDTO.getProblem());

        super.saveOrUpdateRequest(ticket);

        this.requestLogService.BroadcastRequest(ticket, super.requestWebsockets.NEW_REQUEST);

        return requestConverter.convertRequestToRequestDTO(ticket);
    }

    public List<TicketSubtype> getAllTicketSubtypes(){
        List<TicketSubtype> software = this.ticketSubtypeRepository.findAllByTicketType(this.ticketTypeRepository.findByName("Software"));
        List<TicketSubtype> hardware = this.ticketSubtypeRepository.findAllByTicketType(this.ticketTypeRepository.findByName("Hardware"));
        List<TicketSubtype> server = this.ticketSubtypeRepository.findAllByTicketType(this.ticketTypeRepository.findByName("Server"));

        return Stream.of(software, hardware, server).flatMap(Collection::stream).collect(Collectors.toList());
    }


}
