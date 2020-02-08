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
import rc.bootsecurity.requestModule.commonModule.repository.RequestPositionRepository;
import rc.bootsecurity.requestModule.commonModule.repository.RequestPriorityRepository;
import rc.bootsecurity.requestModule.requestCommentModule.repository.RequestCommentRepository;
import rc.bootsecurity.requestModule.commonModule.repository.RequestRepository;
import rc.bootsecurity.requestModule.ticketModule.repository.TicketTypeRepository;
import rc.bootsecurity.requestModule.reportModule.repository.ReportRefreshRepository;
import rc.bootsecurity.requestModule.reportModule.repository.ReportRepository;
import rc.bootsecurity.requestModule.reportModule.repository.ReportTypeRepository;
import rc.bootsecurity.requestModule.ticketModule.repository.TicketRepository;
import rc.bootsecurity.requestModule.ticketModule.repository.*;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.groupModule.repository.GroupRepository;
import rc.bootsecurity.requestModule.commonModule.repository.ModuleTypeRepository;
import rc.bootsecurity.userModule.repository.UserRepository;
import rc.bootsecurity.requestModule.financeModule.repository.FinanceRepository;
import rc.bootsecurity.requestModule.financeModule.repository.FinanceTypeRepository;
import rc.bootsecurity.groupModule.service.GroupService;
import rc.bootsecurity.userModule.service.UserService;
import rc.bootsecurity.requestModule.requestCommentModule.service.RequestCommentService;
import rc.bootsecurity.groupModule.util.GroupConverter;
import rc.bootsecurity.requestModule.commonModule.utils.RequestConverter;
import rc.bootsecurity.requestModule.commonModule.service.RequestManagementService;
import rc.bootsecurity.userModule.util.UserConverter;


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
    private ReportTypeRepository reportTypeRepository;
    @Autowired
    private ReportRefreshRepository reportRefreshRepository;
    @Autowired
    private ReportRepository reportRepository;
    @Autowired
    private FinanceRepository financeRepository;
    @Autowired
    private FinanceTypeRepository financeTypeRepository;
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

    }


    @Test
    public void testUsersInGroup() {
        User admin = this.userRepository.findByUsername("admin").get();

    }

    @Test
    public void testPrivilegesToRequests(){


    }

    @Test
    public void testPrivilegesForGroups(){



    }




}
