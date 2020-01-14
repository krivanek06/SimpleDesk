package rc.bootsecurity.test;

import io.zonky.test.db.AutoConfigureEmbeddedDatabase;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.junit4.SpringRunner;
import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.dto.TicketPrivilegeDTO;
import rc.bootsecurity.model.dto.ApplicationPrivilegeDTO;
import rc.bootsecurity.model.dto.request.RequestCommentDTO;
import rc.bootsecurity.model.dto.request.TicketDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.finance.FinanceType;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestComment;
import rc.bootsecurity.model.entity.request.RequestPosition;
import rc.bootsecurity.model.entity.ModuleType;
import rc.bootsecurity.model.entity.ticket.*;
import rc.bootsecurity.model.enums.REQUEST_POSITION;
import rc.bootsecurity.model.enums.MODULE_TYPE;
import rc.bootsecurity.model.enums.TICKET_TYPE;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.ModuleTypeRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.finance.FinanceRepository;
import rc.bootsecurity.repository.finance.FinanceTypeRepository;
import rc.bootsecurity.repository.report.*;
import rc.bootsecurity.repository.request.*;
import rc.bootsecurity.repository.ticket.*;
import rc.bootsecurity.service.GroupService;
import rc.bootsecurity.service.UserService;
import rc.bootsecurity.service.request.RequestCommentService;
import rc.bootsecurity.utils.converter.GroupConverter;
import rc.bootsecurity.utils.converter.RequestConverter;
import rc.bootsecurity.service.request.RequestManagementService;
import rc.bootsecurity.test.creator.Creator;
import rc.bootsecurity.test.creator.NAMES;
import rc.bootsecurity.test.inserter.InserterRequestsSimulation;
import rc.bootsecurity.utils.converter.UserConverter;

import java.util.*;
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
@EnableAutoConfiguration
@ComponentScan(basePackages = {"rc.bootsecurity.*"})
@EntityScan("rc.bootsecurity.*")
public class RequestSimulationTest {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private ModuleTypeRepository moduleTypeRepository;
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
    @Autowired
    private RequestRepository requestRepository;
    @Autowired
    private RequestCommentRepository requestCommentRepository;
    @Autowired
    private GroupService groupService;
    @Autowired
    private RequestManagementService requestManagementService;
    @Autowired
    private RequestCommentService requestCommentService;

    private RequestConverter requestConverter = new RequestConverter();
    private UserConverter userConverter = new UserConverter();
    private GroupConverter groupConverter = new GroupConverter();

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



        User user12 = Creator.createUser("firstname12" , "lastname12", "user12" , "fakemail11@gmail.com" , "123456");
        this.userRepository.save(user12);


    }

    @Test
    public void testPrivilegesToRequests(){
        ModuleType ticket = this.moduleTypeRepository.findRequestTypesByName(MODULE_TYPE.Ticket.name());
        ModuleType report = this.moduleTypeRepository.findRequestTypesByName(MODULE_TYPE.Report.name());
        ModuleType finance = this.moduleTypeRepository.findRequestTypesByName(MODULE_TYPE.Financie.name());

        Group groupBasic = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_BASIC_GROUP);
        Group groupSolver1 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_SOLVER_1);
        Group groupSolver2 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_SOLVER_2);
        Group groupSolver3 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_SOLVER_3);
        Group groupNormal1 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_NORMAL_1);
        Group groupNormal2 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_NORMAL_2);
        Group groupNormal3 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_NORMAL_3);
        Group groupError = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_ERROR);

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
        Group groupError = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_ERROR);

        TicketType ticketTypeSoftware = this.ticketTypeRepository.findByName(TICKET_TYPE.Software.name());
        TicketType ticketTypeHardware = this.ticketTypeRepository.findByName(TICKET_TYPE.Hardware.name());
        TicketType ticketTypeServer = this.ticketTypeRepository.findByName(TICKET_TYPE.Server.name());
        TicketType ticketTypeUser = this.ticketTypeRepository.findByName(TICKET_TYPE.User.name());
        TicketType ticketTypeOther = this.ticketTypeRepository.findByName(TICKET_TYPE.Other.name());

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



    }

    private void initGroupAttributes(Group group){
        group.setTicketPrivilegesList(this.ticketPrivilegesRepository.findAllByGroup(group).orElse(new ArrayList<>()));
        group.setFinanceTypes(new HashSet<>(this.financeTypeRepository.findAllByGroupsToSubmitSpecificFinanceType(group).orElse(new ArrayList<>())));
        group.setModuleTypesToUse(new HashSet<>(this.moduleTypeRepository.findAllByGroupsToSubmitDifferentRequests(group).orElse(new ArrayList<>())));
        group.setRequestTypesToSolve(new HashSet<>(this.moduleTypeRepository.findAllByGroupsToManageDifferentModules(group).orElse(new ArrayList<>())));
    }

    @Test
    public void testInsertedRequests() {
        User user6 = this.userRepository.findByUsername("user6").get();
        User user8 = this.userRepository.findByUsername("user8").get();
        User user9 = this.userRepository.findByUsername("user9").get();
        User user10 = this.userRepository.findByUsername("user10").get();

        RequestPosition position1 = this.requestPositionRepository.findByName(REQUEST_POSITION.Vytvorené.name());
        TicketType ticketTypeUser = this.ticketTypeRepository.findByName(TICKET_TYPE.User.name());
        TicketType ticketTypeHardware = this.ticketTypeRepository.findByName(TICKET_TYPE.Hardware.name());
        TicketType ticketTypeSoftware = this.ticketTypeRepository.findByName(TICKET_TYPE.Software.name());
        TicketType ticketTypeOther = this.ticketTypeRepository.findByName(TICKET_TYPE.Other.name());
        ModuleType moduleTypeFinance = this.moduleTypeRepository.findByName(MODULE_TYPE.Financie.name());
        ModuleType moduleTypeReport = this.moduleTypeRepository.findByName(MODULE_TYPE.Report.name());
        ModuleType moduleTypeTicket = this.moduleTypeRepository.findByName(MODULE_TYPE.Ticket.name());


    }

    @Test
    public void testLoadingEntities(){
        User user2 = this.userRepository.findByUsername("user2").get();
        User user3 = this.userRepository.findByUsername("user3").get();
        User user4 = this.userRepository.findByUsername("user4").get();
        User user5 = this.userRepository.findByUsername("user5").get();
        User user6 = this.userRepository.findByUsername("user6").get();
        User user8 = this.userRepository.findByUsername("user8").get();
        User user9 = this.userRepository.findByUsername("user9").get();
        User user10 = this.userRepository.findByUsername("user10").get();
        Group groupSolver1 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_SOLVER_1);
        TicketType software = this.ticketTypeRepository.findByName(TICKET_TYPE.Software.name());

        Ticket ticket1 = (Ticket) this.requestRepository.findAllByNameStartingWithOrderByIdAsc("TICKET_NAME").get().get(0);
        RequestComment ticket1Comment = this.requestCommentRepository.findAllByRequestOrderByTimestampAsc(ticket1).get().get(0);

    }

    @Test
    public void testComments(){

    }


    @Test
    public void testWatchingRequests(){

    }

    @Test
    public void testErrorThrowing(){
        //  assertThatThrownBy(() -> this.userService.loadUser("UNKNOWN_USER")).hasCause(new UserNotFoundException());
    }

    @Test
    public void testPrivilegesForUsers(){
        User user2 = this.userRepository.findByUsername("user2").get();
        User user3 = this.userRepository.findByUsername("user3").get();
        User user4 = this.userRepository.findByUsername("user4").get();
        User user5 = this.userRepository.findByUsername("user5").get();
        User user6 = this.userRepository.findByUsername("user6").get();
        User user9 = this.userRepository.findByUsername("user9").get();
        User user10 = this.userRepository.findByUsername("user10").get();
        User user11 = this.userRepository.findByUsername("user11").get();



    }

}
