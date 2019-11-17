package rc.bootsecurity.test;

import io.zonky.test.db.AutoConfigureEmbeddedDatabase;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.junit4.SpringRunner;
import rc.bootsecurity.model.dto.UserPrivilegeDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestPosition;
import rc.bootsecurity.model.entity.request.RequestPriority;
import rc.bootsecurity.model.entity.request.RequestType;
import rc.bootsecurity.model.entity.ticket.*;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.request.RequestPositionRepository;
import rc.bootsecurity.repository.request.RequestPriorityRepository;
import rc.bootsecurity.repository.request.RequestRepository;
import rc.bootsecurity.repository.request.RequestTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.repository.ticket.TicketRepository;
import rc.bootsecurity.repository.ticket.TicketSubtypeRepository;
import rc.bootsecurity.repository.ticket.TicketTypeRepository;
import rc.bootsecurity.service.UserService;
import rc.bootsecurity.test.inserter.Inserter;
import rc.bootsecurity.test.inserter.InserterTickets;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureEmbeddedDatabase
@ComponentScan(basePackages = {"rc.bootsecurity.*"})
public class TicketTest {
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

    @Autowired
    private RequestRepository requestRepository;

    @Autowired
    private Inserter inserter;

    @Autowired
    private InserterTickets inserterTickets;

    @Autowired
    private UserService userService;


    @Test
    public void testRequestTypeAndGroupPrivileges(){
        inserter.insertUsersWithGroups();
        inserter.insertRequestTypes();

        Group group1 = this.groupRepository.findByGroupName("TESTGROUP1");
        Group group2 = this.groupRepository.findByGroupName("TESTGROUP2");
        Group group3 = this.groupRepository.findByGroupName("TESTGROUP3");
        Group group4 = this.groupRepository.findByGroupName("TESTGROUP4");
        Group group5 = this.groupRepository.findByGroupName("TESTGROUP5");

        RequestType requestTypeTicket = this.requestTypeRepository.selectByName("Ticket");
        RequestType requestTypeReport = this.requestTypeRepository.findAllByName("Report");
        List<Group> requestTypeTicketSubmitGroups = this.groupRepository.findAllByRequestTypesToSubmit(requestTypeTicket).get();
        List<Group> requestTypeTicketSolveGroups = this.groupRepository.findAllByRequestTypesToSolve(requestTypeTicket).get();
        List<Group> requestTypeReportSubmitGroups = this.groupRepository.findAllByRequestTypesToSubmit(requestTypeReport).get();
        List<Group> requestTypeReportSolveGroups = this.groupRepository.findAllByRequestTypesToSolve(requestTypeReport).get();


        assertThat(requestTypeTicketSubmitGroups).containsExactlyInAnyOrder(group1 , group2,group3,group4);
        assertThat(requestTypeTicketSolveGroups).containsExactlyInAnyOrder(group5 ,group1);

        assertThat(requestTypeReportSubmitGroups).containsExactlyInAnyOrder(group1 , group2,group3);
        assertThat(requestTypeReportSubmitGroups).doesNotContain(group4);
        assertThat(requestTypeReportSolveGroups).containsExactlyInAnyOrder(group1);

        assertThat(this.requestPriorityRepository.findByName("Priority1")).isNotNull();
        assertThat(this.requestPositionRepository.findAll()).isNotNull();


    }

    @Test
    public void testTicketTypes(){
        inserter.insertUsersWithGroups();
        inserter.insertRequestTypes();
        inserterTickets.insertRequestTickets();

        TicketType ticketTypeSoftware = this.ticketTypeRepository.findByName("Software");
        TicketType ticketTypeHardware = this.ticketTypeRepository.findByName("Hardware");

        assertThat(ticketTypeSoftware).isNotNull();
        assertThat(ticketTypeHardware).isNotNull();

        Software software1 = (Software) this.ticketSubtypeRepository.findByName("Software1");
        Hardware hardware1 = (Hardware) this.ticketSubtypeRepository.findByName("Hardware1");

        assertThat(software1.getTicketType()).isEqualTo(ticketTypeSoftware);
        assertThat(software1.getTicketType()).isNotEqualTo(ticketTypeHardware);
        assertThat(hardware1.getTicketType()).isEqualTo(ticketTypeHardware);

        List<TicketSubtype> allSoftware = this.ticketSubtypeRepository.findAllByTicketType(ticketTypeSoftware);
        List<TicketSubtype> allHardware = this.ticketSubtypeRepository.findAllByTicketType(ticketTypeHardware);

        assertThat(allSoftware).contains(software1);
        assertThat(allSoftware).doesNotContain(hardware1);

        assertThat(allHardware).contains(hardware1);
        assertThat(allHardware).doesNotContain(software1);
    }

    @Test
    public void testInsertingTicketsForUsers(){
        inserter.insertUsersWithGroups();
        inserter.insertRequestTypes();
        inserterTickets.insertRequestTickets();
        inserterTickets.insertTicketsForUsers();


        User user1 = this.userRepository.findByUsername("user1").get();
        User user2 = this.userRepository.findByUsername("user2").get();

        RequestPriority requestPriority1 = this.requestPriorityRepository.findByName("Priority1");
        RequestPriority requestPriority2 = this.requestPriorityRepository.findByName("Priority2");
        RequestPosition requestPosition1 = this.requestPositionRepository.findByName("Position1");
        RequestPosition requestPosition2 = this.requestPositionRepository.findByName("Position2");

        TicketType ticketTypeSoftware = this.ticketTypeRepository.findByName("Software");
        TicketType ticketTypeHardware = this.ticketTypeRepository.findByName("Hardware");


        List<Ticket> user1Tickets =
                this.requestRepository.findAllByCreator(user1).stream().map(request -> (Ticket) request).collect(Collectors.toList());
        List<Ticket> user1TicketsRequestPriority2 =
                this.requestRepository.findAllByCreatorAndRequestPriority(user1, requestPriority2)
                        .stream().map(request -> (Ticket) request).collect(Collectors.toList());
        List<Ticket> user1TicketsRequestPosition2RequestPriority2 =
                this.requestRepository.findAllByCreatorAndRequestPositionAndRequestPriority(user1,requestPosition2, requestPriority2)
                        .stream().map(request -> (Ticket) request).collect(Collectors.toList());
        List<Ticket> user2Tickets = this.requestRepository.findAllByCreatorAndRequestPosition(user2, requestPosition2)
                .stream().map(request -> (Ticket) request).collect(Collectors.toList());

        assertThat(user1Tickets.size()).isEqualTo(5);
        assertThat(user1TicketsRequestPriority2.size()).isEqualTo(2);
        assertThat(user1TicketsRequestPosition2RequestPriority2.size()).isEqualTo(1);
        assertThat(user2Tickets.size()).isEqualTo(2);

        Ticket ticket1 =  user1Tickets.get(0);
        assertThat(ticket1.getRequest()).isEqualTo("EMPTY");
        assertThat(ticket1.getTicketSubtypeName()).isEqualTo("EMPTY");
        assertThat(ticket1.getTicketType()).isEqualTo(ticketTypeSoftware);
        assertThat(ticket1.getTicketType()).isNotEqualTo(ticketTypeHardware);
        assertThat(ticket1.getRequestPosition()).isEqualTo(requestPosition1);
        assertThat(ticket1.getRequestPriority()).isEqualTo(requestPriority1);
        assertThat(ticket1.getCreator()).isEqualTo(user1);

        List<Request> requestsByPriorityAndPosition = this.requestRepository.findAllByRequestPriorityAndRequestPosition(requestPriority2, requestPosition2);
        List<Request> requestsByPosition = this.requestRepository.findAllByRequestPosition(requestPosition1);
        List<Request> requestsByPriority = this.requestRepository.findAllByRequestPriority(requestPriority2);

        assertThat(requestsByPriorityAndPosition.size()).isEqualTo(2);
        assertThat(requestsByPosition.size()).isEqualTo(6);
        assertThat(requestsByPriority.size()).isEqualTo(4);

        List<Ticket> ticketsForTicketTypeHardware = this.ticketRepository.findAllByTicketType(ticketTypeHardware);
        List<Ticket> ticketsForTicketTypeSoftwareRP2 = this.ticketRepository.findAllByTicketTypeAndRequestPosition(ticketTypeSoftware, requestPosition2);
        List<Ticket> ticketsForTicketTypeSoftwareRP1priority2 = this.ticketRepository.findAllByTicketTypeAndRequestPositionAndRequestPriority(ticketTypeSoftware, requestPosition1,requestPriority2);

        assertThat(ticketsForTicketTypeHardware.size()).isEqualTo(4);
        assertThat(ticketsForTicketTypeSoftwareRP2.size()).isEqualTo(2);
        assertThat(ticketsForTicketTypeSoftwareRP1priority2.size()).isEqualTo(2);

        ticket1.setRequest("TESTREQUEST");
        ticket1.setSubject("TESTSUBJECT");
        this.requestRepository.save(ticket1);
        Ticket ticket2 = (Ticket) this.requestRepository.findAllBySubjectStartingWith("TESTS").get().get(0);

        assertThat(ticket1).isEqualTo(ticket2);
        assertThat(ticket1.getRequest()).isEqualTo(ticket2.getRequest());

        this.requestRepository.delete(ticket1);
        assertThat(this.requestRepository.findAllByCreator(user1).size()).isEqualTo(4);
    }

    /**
     * 1. co ak som v IT a REPORT a obaja vidia vsetky reporty, budem mat duplicity ?
     */
    @Test
    public void testUserPrivilegesToRequestsAndTickets() {
        inserter.insertUsersWithGroups();
        inserter.insertRequestTypes();
        inserterTickets.insertRequestTickets();
        inserterTickets.insertTicketsForUsers();
        inserterTickets.insertPrivilegesForSolvers();

        User user1 = this.userRepository.findByUsername("user1").get();
        User user2 = this.userRepository.findByUsername("user2").get();
        User user12 = this.userRepository.findByUsername("user12").get();

        Group group1 = this.groupRepository.findByGroupName("TESTGROUP1");
        Group group2 = this.groupRepository.findByGroupName("TESTGROUP2");
        Group group5 = this.groupRepository.findByGroupName("TESTGROUP5");

        RequestType ticket = this.requestTypeRepository.findRequestTypesByName("Ticket");
        RequestType report = this.requestTypeRepository.findRequestTypesByName("Report");
        RequestType finance = this.requestTypeRepository.findRequestTypesByName("Finance");

        TicketType ticketTypeSoftware = this.ticketTypeRepository.findByName("Software");
        TicketType ticketTypeHardware = this.ticketTypeRepository.findByName("Hardware");
        List<TicketSubtype> ticketSubtypeSoftware = this.ticketSubtypeRepository.findAllByTicketType(ticketTypeSoftware);
        List<TicketSubtype> ticketSubtypesHardware = this.ticketSubtypeRepository.findAllByTicketType(ticketTypeHardware);

     //   assertThat(group5.getUsersInGroup()).isEmpty();
        List<TicketPrivileges> ticketPrivileges = this.ticketPrivilegesRepository.findAllByGroup(group5).get();
        assertThat(ticketPrivileges.stream().map(TicketPrivileges::getApplicationName).collect(Collectors.toSet()))
                .containsExactlyInAnyOrder(ticketSubtypeSoftware.get(0).getName(), ticketSubtypeSoftware.get(1).getName());
        assertThat(this.ticketPrivilegesRepository.findAllByGroup(group1).get().stream().map(TicketPrivileges::getApplicationName).collect(Collectors.toList()))
                .containsExactlyInAnyOrder(ticketSubtypeSoftware.get(0).getName(), ticketSubtypeSoftware.get(1).getName());
        assertThat(this.ticketPrivilegesRepository.findAllByGroup(group2).get().stream().map(TicketPrivileges::getApplicationName).collect(Collectors.toList()))
                .containsExactlyInAnyOrder(ticketSubtypesHardware.get(0).getName(), ticketSubtypesHardware.get(1).getName());
        assertThat(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(group5).get()).containsExactlyInAnyOrder(ticket);
        assertThat(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(group5)).isEmpty();
        assertThat(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(group1).get()).containsExactlyInAnyOrder(ticket,report,finance);
         //   assertThat(group5.getUsersInGroup()).isEmpty();

        UserPrivilegeDTO userPrivilegeDTO = this.userService.getPrivilegesForUser(user1);

        assertThat(userPrivilegeDTO.getSolveRequests()).containsExactlyInAnyOrder("Ticket","Report","Finance");
        assertThat(userPrivilegeDTO.getSubmitRequests()).containsExactlyInAnyOrder("Ticket","Report","Finance");
        assertThat(userPrivilegeDTO.getSolveTickets()).containsOnlyKeys(ticketTypeSoftware.getName(), ticketTypeHardware.getName());
        assertThat(userPrivilegeDTO.getSolveTickets().get(ticketTypeSoftware.getName())).containsExactlyInAnyOrder(
                ticketSubtypeSoftware.get(0).getName(), ticketSubtypeSoftware.get(1).getName());
        assertThat(userPrivilegeDTO.getSolveTickets().get(ticketTypeHardware.getName())).containsExactlyInAnyOrder(
                ticketSubtypesHardware.get(0).getName(), ticketSubtypesHardware.get(1).getName());


        UserPrivilegeDTO userPrivilegeDTO5 = this.userService.getPrivilegesForUser(user12);

        assertThat(userPrivilegeDTO5.getSolveRequests()).containsExactlyInAnyOrder("Ticket");
        assertThat(userPrivilegeDTO5.getSubmitRequests().size()).isEqualTo(0);
        assertThat(userPrivilegeDTO5.getSolveTickets()).containsOnlyKeys(ticketTypeSoftware.getName());
        assertThat(userPrivilegeDTO5.getSolveTickets()).doesNotContainKeys(ticketTypeHardware.getName());
        assertThat(userPrivilegeDTO5.getSolveTickets().get(ticketTypeSoftware.getName())).containsExactlyInAnyOrder(
                ticketSubtypeSoftware.get(0).getName(), ticketSubtypeSoftware.get(1).getName());
        assertThat(userPrivilegeDTO5.getSolveTickets().get(ticketTypeHardware.getName())).isNullOrEmpty();
    }
}
