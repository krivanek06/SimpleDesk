package rc.bootsecurity.test;

import io.zonky.test.db.AutoConfigureEmbeddedDatabase;
import net.bytebuddy.asm.Advice;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.junit4.SpringRunner;
import rc.bootsecurity.exception.UserNotFoundException;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.finance.FinanceType;
import rc.bootsecurity.model.entity.request.RequestType;
import rc.bootsecurity.model.entity.ticket.*;
import rc.bootsecurity.model.enums.REQUEST_TYPE;
import rc.bootsecurity.model.enums.TICKET_TYPE;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.finance.FinanceRepository;
import rc.bootsecurity.repository.finance.FinanceTypeRepository;
import rc.bootsecurity.repository.report.*;
import rc.bootsecurity.repository.request.RequestPositionRepository;
import rc.bootsecurity.repository.request.RequestPriorityRepository;
import rc.bootsecurity.repository.request.RequestTypeRepository;
import rc.bootsecurity.repository.ticket.*;
import rc.bootsecurity.service.UserService;
import rc.bootsecurity.test.creator.NAMES;
import rc.bootsecurity.test.inserter.InserterRequestsSimulation;

import javax.annotation.PostConstruct;
import java.util.Objects;
import java.util.TimeZone;
import java.util.stream.Collectors;

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
    @Autowired
    private SoftwareRepository softwareRepository;
    @Autowired
    private HardwareRepository hardwareRepository;
    @Autowired
    private ServerRepository serverRepository;

    @Before
    public void insertIntoDB(){
        this.inserterRequestsSimulation.mainInserter();
    }


    @Test
    public void testUsersInGroup() {
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
        assertThat(this.groupRepository.findAllByUsersInGroup(user6)).containsExactlyInAnyOrder(groupNormal3, groupNormal2, groupBasic);
        assertThat(this.userRepository.findAllByGroupsInvolved(groupNormal1)).containsExactlyInAnyOrder(user7,user8,user9,user10);
        assertThat(this.userRepository.findAllByGroupsInvolved(groupError)).containsExactlyInAnyOrder(user11);
    }

    @Test
    public void testPrivilegesToRequests(){
        RequestType ticket = this.requestTypeRepository.findRequestTypesByName(REQUEST_TYPE.TICKET.name());
        RequestType report = this.requestTypeRepository.findRequestTypesByName(REQUEST_TYPE.REPORT.name());
        RequestType finance = this.requestTypeRepository.findRequestTypesByName(REQUEST_TYPE.FINANCE.name());

        Group groupBasic = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_BASIC_GROUP);
        Group groupSolver1 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_SOLVER_1);
        Group groupSolver2 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_SOLVER_2);
        Group groupSolver3 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_SOLVER_3);
        Group groupNormal1 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_NORMAL_1);
        Group groupNormal2 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_NORMAL_2);
        Group groupNormal3 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_NORMAL_3);
        Group groupError = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_ERROR);

        assertThat(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(groupSolver1).get()).containsExactlyInAnyOrder(ticket,report,finance);
        assertThat(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(groupSolver2).get()).containsExactlyInAnyOrder(report);
        assertThat(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(groupSolver3).get()).containsExactlyInAnyOrder(ticket,report,finance);
        assertThat(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(groupBasic)).isEmpty();

        assertThat(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(groupBasic).get()).containsExactlyInAnyOrder(ticket,report);
        assertThat(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(groupNormal1).get()).containsExactlyInAnyOrder(ticket,report);
        assertThat(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(groupNormal2).get()).containsExactlyInAnyOrder(finance);
        assertThat(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(groupNormal3).get()).containsExactlyInAnyOrder(finance);
        assertThat(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(groupSolver1)).isEmpty();

        assertThat(this.groupRepository.findAllByRequestTypesToSubmit(ticket).get()).containsExactlyInAnyOrder(groupBasic,groupNormal1);
        assertThat(this.groupRepository.findAllByRequestTypesToSubmit(finance).get()).containsExactlyInAnyOrder(groupNormal2,groupNormal3);

        assertThat(this.groupRepository.findAllByRequestTypesToSolve(ticket).get()).containsExactlyInAnyOrder(groupSolver1,groupSolver3);
        assertThat(this.groupRepository.findAllByRequestTypesToSolve(finance).get()).containsExactlyInAnyOrder(groupSolver1,groupSolver3);

        assertThat(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(groupError)).isEmpty();
        assertThat(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(groupError)).isEmpty();
    }

    @Test
    public void testPrivilegesForGroups(){
        Group groupBasic = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_BASIC_GROUP);
        Group groupSolver1 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_SOLVER_1);
        Group groupSolver2 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_SOLVER_2);
        Group groupSolver3 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_SOLVER_3);
        Group groupNormal1 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_NORMAL_1);
        Group groupNormal2 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_NORMAL_2);
        Group groupNormal3 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_NORMAL_3);

        TicketType ticketTypeSoftware = this.ticketTypeRepository.findByName(TICKET_TYPE.SOFTWARE.name());
        TicketType ticketTypeHardware = this.ticketTypeRepository.findByName(TICKET_TYPE.HARDWARE.name());
        TicketType ticketTypeServer = this.ticketTypeRepository.findByName(TICKET_TYPE.SERVER.name());
        TicketType ticketTypeUser = this.ticketTypeRepository.findByName(TICKET_TYPE.USER.name());
        TicketType ticketTypeOther = this.ticketTypeRepository.findByName(TICKET_TYPE.OTHER.name());

        Software software1 = this.softwareRepository.findByName(NAMES.SOFTWARE_1);
        Software software2 = this.softwareRepository.findByName(NAMES.SOFTWARE_2);
        Software software3 = this.softwareRepository.findByName(NAMES.SOFTWARE_3);
        Software software4 = this.softwareRepository.findByName(NAMES.SOFTWARE_4);

        Hardware hardware1 = this.hardwareRepository.findByName(NAMES.HARDWARE_1);
        Hardware hardware2 = this.hardwareRepository.findByName(NAMES.HARDWARE_2);
        Hardware hardware3 = this.hardwareRepository.findByName(NAMES.HARDWARE_3);
        Hardware hardware4 = this.hardwareRepository.findByName(NAMES.HARDWARE_4);

        Server server1 = this.serverRepository.findByName(NAMES.SERVER_1);
        Server server2 = this.serverRepository.findByName(NAMES.SERVER_2);

        FinanceType financeType1 = this.financeTypeRepository.findByName(NAMES.FINANCE_TYPE_1);
        FinanceType financeType2 = this.financeTypeRepository.findByName(NAMES.FINANCE_TYPE_2);
        FinanceType financeType3 = this.financeTypeRepository.findByName(NAMES.FINANCE_TYPE_3);
        FinanceType financeType4 = this.financeTypeRepository.findByName(NAMES.FINANCE_TYPE_4);
        FinanceType financeType5 = this.financeTypeRepository.findByName(NAMES.FINANCE_TYPE_5);


        assertThat(this.ticketSubtypeRepository.findAllByTicketType(ticketTypeSoftware)).containsExactlyInAnyOrder(software1,software2,software3,software4);
        assertThat(this.ticketSubtypeRepository.findAllByTicketType(ticketTypeHardware)).containsExactlyInAnyOrder(hardware1,hardware2,hardware3,hardware4);
        assertThat(this.ticketSubtypeRepository.findAllByTicketType(ticketTypeServer)).containsExactlyInAnyOrder(server1,server2);
        assertThat(this.ticketSubtypeRepository.findAllByTicketType(ticketTypeOther)).isEmpty();
        assertThat(this.ticketSubtypeRepository.findAllByTicketType(ticketTypeUser)).isEmpty();

        assertThat(hardware1.getTicketType()).isEqualTo(ticketTypeHardware);
        assertThat(software1.getTicketType()).isEqualTo(ticketTypeSoftware);
        assertThat(server1.getTicketType()).isEqualTo(ticketTypeServer);

        assertThat(this.ticketPrivilegesRepository.findAllByGroup(groupBasic)).isEmpty();

        assertThat(this.ticketPrivilegesRepository.findAllByGroup(groupSolver1).get().stream()
                .map(TicketPrivileges::getApplicationName).filter(Objects::nonNull).collect(Collectors.toList()))
                .containsExactlyInAnyOrder(NAMES.SOFTWARE_1, NAMES.SOFTWARE_2, NAMES.HARDWARE_1, NAMES.HARDWARE_2, NAMES.SERVER_1);

        assertThat(this.ticketPrivilegesRepository.findAllByGroup(groupSolver2)).isEmpty();

        assertThat(this.ticketPrivilegesRepository.findAllByGroup(groupSolver3).get().stream()
                .map(TicketPrivileges::getApplicationName).filter(Objects::nonNull).collect(Collectors.toList()))
                .containsExactlyInAnyOrder(NAMES.SOFTWARE_1, NAMES.SOFTWARE_2, NAMES.SOFTWARE_3, NAMES.SOFTWARE_4,
                        NAMES.HARDWARE_1, NAMES.HARDWARE_2, NAMES.HARDWARE_3, NAMES.HARDWARE_4,
                        NAMES.SERVER_1, NAMES.SERVER_2);
        assertThat(this.financeTypeRepository.findAllByGroupsToSubmitSpecificFinanceType(groupNormal1)).isEmpty();
        assertThat(this.financeTypeRepository.findAllByGroupsToSubmitSpecificFinanceType(groupNormal2).get())
                .containsExactlyInAnyOrder(financeType1, financeType2,financeType3);
        assertThat(this.financeTypeRepository.findAllByGroupsToSubmitSpecificFinanceType(groupNormal3).get())
                .containsExactlyInAnyOrder(financeType1,financeType2,financeType3,financeType4,financeType5);
        assertThat(this.groupRepository.findAllByFinanceTypes(financeType1).get()).containsExactlyInAnyOrder(groupNormal2,groupNormal3);
        assertThat(this.groupRepository.findAllByFinanceTypes(financeType4).get()).containsExactlyInAnyOrder(groupNormal3);
        assertThat(this.financeTypeRepository.findAllByGroupsToSubmitSpecificFinanceType(groupNormal1)).isEmpty();

    }

    @Test
    public void testPrivilegesForUsers(){

    }

    @Test
    public void testErrorThrowing(){
        //  assertThatThrownBy(() -> this.userService.loadUser("UNKNOWN_USER")).hasCause(new UserNotFoundException());
    }

}
