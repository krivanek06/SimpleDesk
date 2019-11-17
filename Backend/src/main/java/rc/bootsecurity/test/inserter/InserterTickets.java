package rc.bootsecurity.test.inserter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.RequestPosition;
import rc.bootsecurity.model.entity.request.RequestPriority;
import rc.bootsecurity.model.entity.ticket.Ticket;
import rc.bootsecurity.model.entity.ticket.TicketPrivileges;
import rc.bootsecurity.model.entity.ticket.TicketSubtype;
import rc.bootsecurity.model.entity.ticket.TicketType;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.request.RequestPositionRepository;
import rc.bootsecurity.repository.request.RequestPriorityRepository;
import rc.bootsecurity.repository.request.RequestTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.repository.ticket.TicketRepository;
import rc.bootsecurity.repository.ticket.TicketSubtypeRepository;
import rc.bootsecurity.repository.ticket.TicketTypeRepository;
import rc.bootsecurity.test.creator.Creator;

import java.util.List;

@Service
public class InserterTickets {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private RequestTypeRepository requestTypeRepository;

    @Autowired
    private TicketTypeRepository ticketTypeRepository;

    @Autowired
    private TicketSubtypeRepository ticketSubtypeRepository;

    @Autowired
    private TicketPrivilegesRepository ticketPrivilegesRepository;

    @Autowired
    private RequestPriorityRepository requestPriorityRepository;

    @Autowired
    private RequestPositionRepository requestPositionRepository;

    @Autowired
    private TicketRepository ticketRepository;


    public void insertRequestTickets(){
        TicketType ticketTypeSoftware = Creator.createTicketType("Software");
        TicketType ticketTypeHardware = Creator.createTicketType("Hardware");
        this.ticketTypeRepository.saveAll(List.of(ticketTypeSoftware, ticketTypeHardware));

        List<TicketSubtype> software = List.of(Creator.createSoftwareSubtype("Software1", ticketTypeSoftware),
                Creator.createSoftwareSubtype("Software2", ticketTypeSoftware),
                Creator.createSoftwareSubtype("Software3", ticketTypeSoftware),
                Creator.createSoftwareSubtype("Software4", ticketTypeSoftware));

        List<TicketSubtype> hardware = List.of( Creator.createHardwareSubtype("Hardware1", ticketTypeHardware),
                Creator.createHardwareSubtype("Hardware2", ticketTypeHardware),
                Creator.createHardwareSubtype("Hardware3", ticketTypeHardware),
                Creator.createHardwareSubtype("Hardware4", ticketTypeHardware));

        this.ticketSubtypeRepository.saveAll(software);
        this.ticketSubtypeRepository.saveAll(hardware);
    }

    public void insertTicketsForUsers(){
        User user1 = this.userRepository.findByUsername("user1").get();
        User user2 = this.userRepository.findByUsername("user2").get();
        RequestPriority requestPriority1 = this.requestPriorityRepository.findByName("Priority1");
        RequestPriority requestPriority2 = this.requestPriorityRepository.findByName("Priority2");
        RequestPosition requestPosition1 = this.requestPositionRepository.findByName("Position1");
        RequestPosition requestPosition2 = this.requestPositionRepository.findByName("Position2");

        TicketType ticketTypeSoftware = this.ticketTypeRepository.findByName("Software");
        TicketType ticketTypeHardware = this.ticketTypeRepository.findByName("Hardware");

        Ticket ticket1 = Creator.createTicket(ticketTypeSoftware,requestPriority1,requestPosition1, user1);
        Ticket ticket2 = Creator.createTicket(ticketTypeSoftware,requestPriority2,requestPosition1, user1);
        Ticket ticket3 = Creator.createTicket(ticketTypeSoftware,requestPriority1,requestPosition2, user1);

        Ticket ticket4 = Creator.createTicket(ticketTypeHardware,requestPriority1,requestPosition1, user1);
        Ticket ticket5 = Creator.createTicket(ticketTypeHardware,requestPriority2,requestPosition2, user1);

        Ticket ticket6 = Creator.createTicket(ticketTypeSoftware,requestPriority1,requestPosition1, user2);
        Ticket ticket7 = Creator.createTicket(ticketTypeSoftware,requestPriority2,requestPosition1, user2);
        Ticket ticket8 = Creator.createTicket(ticketTypeSoftware,requestPriority1,requestPosition2, user2);

        Ticket ticket9 = Creator.createTicket(ticketTypeHardware,requestPriority1,requestPosition1, user2);
        Ticket ticket10 = Creator.createTicket(ticketTypeHardware,requestPriority2,requestPosition2, user2);

        this.ticketRepository.saveAll(List.of(ticket1, ticket2, ticket3, ticket4, ticket5, ticket6, ticket7, ticket8, ticket9, ticket10));
    }

    public void insertPrivilegesForSolvers(){
        Group group1 = this.groupRepository.findByGroupName("TESTGROUP1");
        Group group2 = this.groupRepository.findByGroupName("TESTGROUP2");
        Group group5 = this.groupRepository.findByGroupName("TESTGROUP5");

        TicketType ticketTypeSoftware = this.ticketTypeRepository.findByName("Software");
        TicketType ticketTypeHardware = this.ticketTypeRepository.findByName("Hardware");

        List<TicketSubtype> ticketSubtypeSoftware = this.ticketSubtypeRepository.findAllByTicketType(ticketTypeSoftware);
        List<TicketSubtype> ticketSubtypesHardware = this.ticketSubtypeRepository.findAllByTicketType(ticketTypeHardware);

        TicketPrivileges ticketPrivilegesSoftware1 = Creator.creatTicketPrivileges(group1 , ticketTypeSoftware , ticketSubtypeSoftware.get(0).getName());
        TicketPrivileges ticketPrivilegesSoftware2 = Creator.creatTicketPrivileges(group1 , ticketTypeSoftware , ticketSubtypeSoftware.get(1).getName());

        TicketPrivileges ticketPrivilegesHardware1 = Creator.creatTicketPrivileges(group2 , ticketTypeHardware , ticketSubtypesHardware.get(0).getName());
        TicketPrivileges ticketPrivilegesHardware2 = Creator.creatTicketPrivileges(group2 , ticketTypeHardware , ticketSubtypesHardware.get(1).getName());

        TicketPrivileges ticketPrivilegesSoftware3 = Creator.creatTicketPrivileges(group5 , ticketTypeSoftware , ticketSubtypeSoftware.get(0).getName());
        TicketPrivileges ticketPrivilegesSoftware4 = Creator.creatTicketPrivileges(group5 , ticketTypeSoftware , ticketSubtypeSoftware.get(1).getName());

        this.ticketPrivilegesRepository.saveAll(List.of(ticketPrivilegesHardware1, ticketPrivilegesHardware2,
                ticketPrivilegesSoftware1, ticketPrivilegesSoftware2,
                ticketPrivilegesSoftware3, ticketPrivilegesSoftware4));

    }


}
