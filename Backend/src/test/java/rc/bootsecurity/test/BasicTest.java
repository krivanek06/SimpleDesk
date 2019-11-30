package rc.bootsecurity.test;

import io.zonky.test.db.AutoConfigureEmbeddedDatabase;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.junit4.SpringRunner;
import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.dto.UserPrivilegeDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.report.ReportAccess;
import rc.bootsecurity.model.entity.report.ReportRefresh;
import rc.bootsecurity.model.entity.report.ReportType;
import rc.bootsecurity.model.entity.request.*;
import rc.bootsecurity.model.entity.ticket.*;
import rc.bootsecurity.model.enums.REQUEST_POSITION;
import rc.bootsecurity.model.enums.REQUEST_PRIORITY;
import rc.bootsecurity.model.enums.REQUEST_TYPE;
import rc.bootsecurity.model.enums.TICKET_TYPE;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.report.*;
import rc.bootsecurity.repository.request.*;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.repository.ticket.TicketRepository;
import rc.bootsecurity.repository.ticket.TicketSubtypeRepository;
import rc.bootsecurity.repository.ticket.TicketTypeRepository;
import rc.bootsecurity.service.GroupService;
import rc.bootsecurity.service.request.RequestPrivilegeService;
import rc.bootsecurity.service.request.RequestService;
import rc.bootsecurity.service.UserService;
import rc.bootsecurity.test.creator.Creator;
import rc.bootsecurity.test.inserter.Inserter;
import rc.bootsecurity.test.inserter.InserterRequests;

import java.util.List;
import java.util.stream.Collectors;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureEmbeddedDatabase
@ComponentScan(basePackages = {"rc.bootsecurity.*"})
public class BasicTest {
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
    private InserterRequests inserterTickets;

    @Autowired
    private UserService userService;

    @Autowired
    private RequestCommentRepository requestCommentRepository;

    @Autowired
    private RequestService requestService;

    @Autowired
    private ReportAccessRepository reportAccessRepository;
    @Autowired
    private ReportTypeRepository reportTypeRepository;
    @Autowired
    private ReportRefreshRepository reportRefreshRepository;
    @Autowired
    private ReportAccessStoredRepository reportAccessStoredRepository;
    @Autowired
    private ReportRepository reportRepository;
    @Autowired
    private InserterRequests inserterRequests;
    @Autowired
    private GroupService groupService;



    @Test
    public void testUsersInGroups(){
        inserter.insertUsersWithGroups();

        User user1 = this.userRepository.findByUsername("user1").get();
        User user2 = this.userRepository.findByUsername("user2").get();
        User user3 = this.userRepository.findByUsername("user3").get();
        User user4 = this.userRepository.findByUsername("user4").get();
        User user12 = this.userRepository.findByUsername("user12").get();

        Group group1 = this.groupRepository.findByGroupName("TESTGROUP1");
        Group group2 = this.groupRepository.findByGroupName("TESTGROUP2");
        Group group3 = this.groupRepository.findByGroupName("TESTGROUP3");
        Group group4 = this.groupRepository.findByGroupName("TESTGROUP4");
        Group group5 = this.groupRepository.findByGroupName("TESTGROUP5");
        Group group6 = this.groupRepository.findByGroupName("TESTGROUP6");
        Group group7 = this.groupRepository.findByGroupName("TESTGROUP7");

        assertThat(this.groupRepository.findAllByUsersInGroup(user1)).containsExactlyInAnyOrder(group1,group2,group3,group4,group5,group6,group7);
        assertThat(this.groupRepository.findAllByUsersInGroup(user3)).containsExactlyInAnyOrder(group1,group2,group3,group5,group6);

        assertThat(this.groupRepository.findAllByGroupManager(user3)).isEmpty();
        assertThat(this.groupRepository.findAllByGroupManager(user1).get()).containsOnly(group1,group2,group3,group4);
        assertThat(this.groupRepository.findAllByGroupManager(user2).get()).containsOnly(group5,group6,group7);

        assertThat(this.userRepository.findAllByGroupsInvolved(group4)).containsOnly(user1,user2);
        assertThat(this.userRepository.findAllByGroupsInvolved(group6)).containsOnly(user1,user2,user3);
        assertThat(this.userRepository.findAllByGroupsInvolved(group3)).containsExactlyInAnyOrder(user1,user2,user3,user4);

        // remove from group
        group3.getUsersInGroup().remove(user4);
        this.groupRepository.save(group3);
        assertThat(this.userRepository.findAllByGroupsInvolved(group3)).containsExactlyInAnyOrder(user1,user2,user3);

        // add to group
        group3.getUsersInGroup().add(user4);
        this.groupRepository.save(group3);
        assertThat(this.userRepository.findAllByGroupsInvolved(group3)).containsExactlyInAnyOrder(user1,user2,user3,user4);

    }

    @Test
    public void testRequestTypeAndGroupPrivileges(){
        inserter.insertUsersWithGroups();
        inserter.insertRequestTypesPrivilegesForGroups();

        Group group1 = this.groupRepository.findByGroupName("TESTGROUP1");
        Group group2 = this.groupRepository.findByGroupName("TESTGROUP2");
        Group group3 = this.groupRepository.findByGroupName("TESTGROUP3");
        Group group4 = this.groupRepository.findByGroupName("TESTGROUP4");
        Group group5 = this.groupRepository.findByGroupName("TESTGROUP5");

        RequestType requestTypeTicket = this.requestTypeRepository.selectByName(REQUEST_TYPE.TICKET.name());
        RequestType requestTypeReport = this.requestTypeRepository.findByName(REQUEST_TYPE.REPORT.name());
        List<Group> requestTypeTicketSubmitGroups = this.groupRepository.findAllByRequestTypesToSubmit(requestTypeTicket).get();
        List<Group> requestTypeTicketSolveGroups = this.groupRepository.findAllByRequestTypesToSolve(requestTypeTicket).get();
        List<Group> requestTypeReportSubmitGroups = this.groupRepository.findAllByRequestTypesToSubmit(requestTypeReport).get();
        List<Group> requestTypeReportSolveGroups = this.groupRepository.findAllByRequestTypesToSolve(requestTypeReport).get();


        assertThat(requestTypeTicketSubmitGroups).containsExactlyInAnyOrder(group1 , group2,group3,group4);
        assertThat(requestTypeTicketSolveGroups).containsExactlyInAnyOrder(group5 ,group1);

        assertThat(requestTypeReportSubmitGroups).containsExactlyInAnyOrder(group1 , group2,group3);
        assertThat(requestTypeReportSubmitGroups).doesNotContain(group4);
        assertThat(requestTypeReportSolveGroups).containsExactlyInAnyOrder(group1);

        assertThat(this.requestPriorityRepository.findByName(REQUEST_PRIORITY.SMALL.name())).isNotNull();
        assertThat(this.requestPositionRepository.findAll()).isNotNull();


    }

    @Test
    public void testTicketTypes(){
        inserter.insertUsersWithGroups();
        inserter.insertRequestTypesPrivilegesForGroups();
        inserterTickets.insertRequestTickets();

        TicketType ticketTypeSoftware = this.ticketTypeRepository.findByName(TICKET_TYPE.SOFTWARE.name());
        TicketType ticketTypeHardware = this.ticketTypeRepository.findByName(TICKET_TYPE.HARDWARE.name());

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
        inserter.insertRequestTypesPrivilegesForGroups();
        inserterTickets.insertRequestTickets();
        inserterTickets.insertTicketsForUsers();


        User user1 = this.userRepository.findByUsername("user1").get();
        User user2 = this.userRepository.findByUsername("user2").get();

        RequestPriority requestPriority1 = this.requestPriorityRepository.findByName(REQUEST_PRIORITY.SMALL.name());
        RequestPriority requestPriority2 = this.requestPriorityRepository.findByName(REQUEST_PRIORITY.MEDIUM.name());
        RequestPosition requestPosition1 = this.requestPositionRepository.findByName(REQUEST_POSITION.CREATED.name());
        RequestPosition requestPosition2 = this.requestPositionRepository.findByName(REQUEST_POSITION.CLOSED.name());

        TicketType ticketTypeSoftware = this.ticketTypeRepository.findByName(TICKET_TYPE.SOFTWARE.name());
        TicketType ticketTypeHardware = this.ticketTypeRepository.findByName(TICKET_TYPE.HARDWARE.name());


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
        assertThat(ticket1.getProblem()).isEqualTo("EMPTY");
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

        ticket1.setProblem("TESTREQUEST");
        ticket1.setName("TESTSUBJECT");
        this.requestRepository.save(ticket1);
        Ticket ticket2 = (Ticket) this.requestRepository.findAllByNameStartingWithOrderByIdAsc("TESTS").get().get(0);

        assertThat(ticket1).isEqualTo(ticket2);
        assertThat(ticket1.getProblem()).isEqualTo(ticket2.getProblem());

        this.requestRepository.delete(ticket1);
        assertThat(this.requestRepository.findAllByCreator(user1).size()).isEqualTo(4);
    }


    @Test
    public void testUserPrivilegesToRequestsAndTickets() {
        inserter.insertUsersWithGroups();
        inserter.insertRequestTypesPrivilegesForGroups();
        inserterTickets.insertRequestTickets();
        inserterTickets.insertTicketsForUsers();
        inserterTickets.insertPrivilegesForSolvers();

        User user1 = this.userRepository.findByUsername("user1").get();
        User user2 = this.userRepository.findByUsername("user2").get();
        User user12 = this.userRepository.findByUsername("user12").get();

        Group group1 = this.groupRepository.findByGroupName("TESTGROUP1");
        Group group2 = this.groupRepository.findByGroupName("TESTGROUP2");
        Group group5 = this.groupRepository.findByGroupName("TESTGROUP5");

        RequestType ticket = this.requestTypeRepository.findRequestTypesByName(REQUEST_TYPE.TICKET.name());
        RequestType report = this.requestTypeRepository.findRequestTypesByName(REQUEST_TYPE.REPORT.name());
        RequestType finance = this.requestTypeRepository.findRequestTypesByName(REQUEST_TYPE.FINANCE.name());

        TicketType ticketTypeSoftware = this.ticketTypeRepository.findByName(TICKET_TYPE.SOFTWARE.name());
        TicketType ticketTypeHardware = this.ticketTypeRepository.findByName(TICKET_TYPE.HARDWARE.name());
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

        assertThat(userPrivilegeDTO.getSolveRequests())
                .containsExactlyInAnyOrder(REQUEST_TYPE.TICKET.name(),REQUEST_TYPE.REPORT.name(),REQUEST_TYPE.FINANCE.name());
        assertThat(userPrivilegeDTO.getSubmitRequests())
                .containsExactlyInAnyOrder(REQUEST_TYPE.TICKET.name(),REQUEST_TYPE.REPORT.name(),REQUEST_TYPE.FINANCE.name());
        assertThat(userPrivilegeDTO.getSolveTickets()).containsOnlyKeys(ticketTypeSoftware.getName(), ticketTypeHardware.getName());
        assertThat(userPrivilegeDTO.getSolveTickets().get(ticketTypeSoftware.getName())).containsExactlyInAnyOrder(
                ticketSubtypeSoftware.get(0).getName(), ticketSubtypeSoftware.get(1).getName());
        assertThat(userPrivilegeDTO.getSolveTickets().get(ticketTypeHardware.getName())).containsExactlyInAnyOrder(
                ticketSubtypesHardware.get(0).getName(), ticketSubtypesHardware.get(1).getName());


        UserPrivilegeDTO userPrivilegeDTO5 = this.userService.getPrivilegesForUser(user12);

        assertThat(userPrivilegeDTO5.getSolveRequests()).containsExactlyInAnyOrder(REQUEST_TYPE.TICKET.name());
        assertThat(userPrivilegeDTO5.getSubmitRequests().size()).isEqualTo(0);
        assertThat(userPrivilegeDTO5.getSolveTickets()).containsOnlyKeys(ticketTypeSoftware.getName());
        assertThat(userPrivilegeDTO5.getSolveTickets()).doesNotContainKeys(ticketTypeHardware.getName());
        assertThat(userPrivilegeDTO5.getSolveTickets().get(ticketTypeSoftware.getName())).containsExactlyInAnyOrder(
                ticketSubtypeSoftware.get(0).getName(), ticketSubtypeSoftware.get(1).getName());
        assertThat(userPrivilegeDTO5.getSolveTickets().get(ticketTypeHardware.getName())).isNullOrEmpty();
    }

    @Test
    public void testSolvingTicketsChangingSolverAndCommenting(){
        inserter.insertUsersWithGroups();
        inserter.insertRequestTypesPrivilegesForGroups();
        inserterTickets.insertRequestTickets();
        inserterTickets.insertTicketsForUsers();
        inserterTickets.insertPrivilegesForSolvers();

        User user1 = this.userRepository.findByUsername("user1").get();
        User user12 = this.userRepository.findByUsername("user12").get();

       // Group group1 = this.groupRepository.findByGroupName("TESTGROUP1");
        Group group5 = this.groupRepository.findByGroupName("TESTGROUP5");

        List<Group> groupsForUser12 = this.groupRepository.findAllByUsersInGroup(user12);
        assertThat(groupsForUser12).containsExactlyInAnyOrder(group5);

        RequestPosition requestPosition1 = this.requestPositionRepository.findByName(REQUEST_POSITION.CREATED.name());
        RequestPosition requestPosition2 = this.requestPositionRepository.findByName(REQUEST_POSITION.CLOSED.name());
        RequestPriority requestPriority2 = this.requestPriorityRepository.findByName(REQUEST_PRIORITY.MEDIUM.name());

        TicketType ticketTypeSoftware = this.ticketTypeRepository.findByName(TICKET_TYPE.SOFTWARE.name());
        Ticket ticket1 = this.ticketRepository.findAllByCreatorAndRequestPosition(user1, requestPosition2).get(0);

        assertThat(ticket1.getTicketType()).isEqualTo(ticketTypeSoftware);
        ticket1.setSolver(user12);
        ticket1.setRequestPosition(requestPosition1);
        this.requestRepository.save(ticket1);
        assertThat(this.ticketRepository.findAllByCreatorAndRequestPosition(user1, requestPosition1)).contains(ticket1);

        ticket1.setRequestPosition(requestPosition2);
        this.requestRepository.save(ticket1);
        List<Ticket> tickets = this.ticketRepository.findAllByCreatorAndRequestPosition(user1, requestPosition2);
        assertThat(tickets).contains(ticket1);
        assertThat(tickets.size()).isEqualTo(2);

        // add comments -> hardware
        Request hardwareRequest = this.requestRepository.findAllByCreatorAndRequestPositionAndRequestPriority(
                user1, requestPosition2, requestPriority2).get(0);
        RequestComment comment1 = Creator.createRequestComment(hardwareRequest, user1, "COMMENT1");
        RequestComment comment2 = Creator.createRequestComment(hardwareRequest, user12, "COMMENT2");
        RequestComment comment3 = Creator.createRequestComment(hardwareRequest, user1, "COMMENT3");
        this.requestCommentRepository.save(comment1);
        this.requestCommentRepository.save(comment2);
        this.requestCommentRepository.save(comment3);

        List<RequestComment> savedComments = this.requestCommentRepository.findAllByRequestOrderByTimestampAsc(hardwareRequest);
        assertThat(savedComments).containsSequence(comment1, comment2,comment3);
        assertThat(savedComments).containsExactly(comment1, comment2, comment3);

        this.requestCommentRepository.delete(comment2);
        savedComments = this.requestCommentRepository.findAllByRequestOrderByTimestampAsc(hardwareRequest);
        assertThat(savedComments).containsSequence(comment1, comment3);
        assertThat(savedComments).containsExactly(comment1,  comment3);

    }

    @Test
    public void testReportTypes(){
        inserter.insertUsersWithGroups();
        inserter.insertRequestTypesPrivilegesForGroups();
        inserterRequests.insertRequestReports();

        ReportType reportType3 = this.reportTypeRepository.findByName("REPORT_TYPE_3");
        assertThat(reportType3).isNotNull();
        assertThat(reportType3.getName()).isEqualToIgnoringCase("REPORT_TYPE_3");

        ReportRefresh reportRefresh3 = this.reportRefreshRepository.findByName("REPORT_REFRESH_3");
        assertThat(reportRefresh3).isNotNull();
        assertThat(reportRefresh3.getName()).isEqualToIgnoringCase("REPORT_REFRESH_3");

        ReportAccess reportAccess1 = this.reportAccessRepository.findByName("REPORT_ACCESS_1");
        assertThat(reportAccess1).isNotNull();
        assertThat(reportAccess1.getName()).isEqualToIgnoringCase("REPORT_ACCESS_1");
    }



}
