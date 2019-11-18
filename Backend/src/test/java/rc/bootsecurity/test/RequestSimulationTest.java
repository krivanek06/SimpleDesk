package rc.bootsecurity.test;

import io.zonky.test.db.AutoConfigureEmbeddedDatabase;
import net.bytebuddy.asm.Advice;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.junit4.SpringRunner;
import rc.bootsecurity.exception.UserNotFoundException;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.RequestType;
import rc.bootsecurity.model.entity.ticket.TicketType;
import rc.bootsecurity.model.enums.REQUEST_TYPE;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.finance.FinanceRepository;
import rc.bootsecurity.repository.finance.FinanceTypeRepository;
import rc.bootsecurity.repository.report.*;
import rc.bootsecurity.repository.request.RequestPositionRepository;
import rc.bootsecurity.repository.request.RequestPriorityRepository;
import rc.bootsecurity.repository.request.RequestTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.repository.ticket.TicketRepository;
import rc.bootsecurity.repository.ticket.TicketSubtypeRepository;
import rc.bootsecurity.repository.ticket.TicketTypeRepository;
import rc.bootsecurity.service.UserService;
import rc.bootsecurity.test.creator.NAMES;
import rc.bootsecurity.test.inserter.InserterRequestsSimulation;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

/**
 * advanced test , display all requests which >
 * 1. basic user can see
 * 2. group manager can see
 * 3. solver can see
 * 4. solver && group manager can see
 * 5. admin can see
 * 6. comments - private, share with groups
 */
@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureEmbeddedDatabase
@ComponentScan(basePackages = {"rc.bootsecurity.*"})
public class RequestSimulationTest {
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
    private FinanceRepository financeRepository;
    @Autowired
    private FinanceTypeRepository financeTypeRepository;
    @Autowired
    private InserterRequestsSimulation inserterRequestsSimulation;
    @Autowired
    private UserService userService;

    @Test
    public void testUsersInGroup() {
        this.inserterRequestsSimulation.mainInserter();
        User admin = this.userRepository.findByUsername("admin").get();
        User user2 = this.userRepository.findByUsername("user2").get();
        User user3 = this.userRepository.findByUsername("user3").get();
        User user4 = this.userRepository.findByUsername("user4").get();
        User user5 = this.userRepository.findByUsername("user5").get();
        User user6 = this.userRepository.findByUsername("user6").get();
        User user7 = this.userRepository.findByUsername("user7").get();
        User user8 = this.userRepository.findByUsername("user8").get();
        User user9 = this.userRepository.findByUsername("user9").get();
        User user10 = this.userRepository.findByUsername("user10").get();
        User user11 = this.userRepository.findByUsername("user11").get();

        Group groupBasic = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_BASIC_GROUP);
        Group groupSolver1 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_SOLVER_1);
        Group groupSolver2 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_SOLVER_2);
        Group groupSolver3 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_SOLVER_3);
        Group groupNormal1 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_NORMAL_1);
        Group groupNormal2 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_NORMAL_2);
        Group groupNormal3 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_NORMAL_3);
        Group groupError = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_ERROR);


        assertThat(this.groupRepository.findAllByUsersInGroup(admin)).containsExactlyInAnyOrder(groupBasic);
        assertThat(this.userRepository.findAllByGroupsInvolved(this.groupRepository.findAllByGroupManager(admin).get().get(0)))
                .containsExactlyInAnyOrder(admin,user2,user3,user4,user5,user6,user7,user8,user9,user10);
        assertThat(this.groupRepository.findAllByUsersInGroup(user3)).containsExactlyInAnyOrder(groupBasic, groupSolver1);
        assertThat(this.groupRepository.findAllByGroupManager(user4)).isEmpty();
        assertThat(this.groupRepository.findAllByGroupManager(user2).get()).containsExactlyInAnyOrder(groupSolver1, groupSolver2, groupSolver3);
        assertThat(this.groupRepository.findAllByGroupManager(user6).get()).containsExactlyInAnyOrder(groupNormal1, groupNormal2, groupNormal3);
        assertThat(this.groupRepository.findAllByUsersInGroup(user6)).containsExactlyInAnyOrder(groupNormal1, groupNormal2);
        assertThat(this.userRepository.findAllByGroupsInvolved(groupNormal1)).containsExactlyInAnyOrder(user7,user8,user9,user10);
        assertThat(this.userRepository.findAllByGroupsInvolved(groupError)).containsExactlyInAnyOrder(user11);
        assertThatThrownBy(() -> this.userService.loadUser("UNKNOWN_USER")).hasCause(new UserNotFoundException());
    }

    @Test
    public void testPrivilegesToRequestSubmitting(){
        RequestType ticket = this.requestTypeRepository.findRequestTypesByName(REQUEST_TYPE.TICKET.toString());
        RequestType report = this.requestTypeRepository.findRequestTypesByName(REQUEST_TYPE.REPORT.toString());
        RequestType finance = this.requestTypeRepository.findRequestTypesByName(REQUEST_TYPE.FINANCE.toString());
    }

    @Test
    public void testPrivilegesToRequestSolving(){

    }

    @Test
    public void testPrivilegesToTicketSolving(){
        TicketType ticketTypeSoftware = this.ticketTypeRepository.findByName("Software");
        TicketType ticketTypeHardware = this.ticketTypeRepository.findByName("Hardware");
    }

    @Test
    public void testPrivilegesToFinanceTypeSubmitting(){

    }

    @Test
    public void testErrorThrowing(){

    }

}
