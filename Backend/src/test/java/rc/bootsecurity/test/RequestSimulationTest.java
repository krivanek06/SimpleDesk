package rc.bootsecurity.test;

import io.zonky.test.db.AutoConfigureEmbeddedDatabase;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.junit4.SpringRunner;
import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.dto.TicketPrivilegeDTO;
import rc.bootsecurity.model.dto.UserDTO;
import rc.bootsecurity.model.dto.request.RequestCommentDTO;
import rc.bootsecurity.model.dto.request.TicketDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.finance.FinanceType;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestComment;
import rc.bootsecurity.model.entity.request.RequestPosition;
import rc.bootsecurity.model.entity.request.RequestType;
import rc.bootsecurity.model.entity.ticket.*;
import rc.bootsecurity.model.enums.REQUEST_POSITION;
import rc.bootsecurity.model.enums.REQUEST_TYPE;
import rc.bootsecurity.model.enums.TICKET_TYPE;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.finance.FinanceRepository;
import rc.bootsecurity.repository.finance.FinanceTypeRepository;
import rc.bootsecurity.repository.report.*;
import rc.bootsecurity.repository.request.*;
import rc.bootsecurity.repository.ticket.*;
import rc.bootsecurity.service.GroupService;
import rc.bootsecurity.service.UserService;
import rc.bootsecurity.service.request.RequestCommentService;
import rc.bootsecurity.service.request.RequestConverterService;
import rc.bootsecurity.service.request.RequestManagementService;
import rc.bootsecurity.service.request.RequestPrivilegeService;
import rc.bootsecurity.test.creator.Creator;
import rc.bootsecurity.test.creator.NAMES;
import rc.bootsecurity.test.inserter.InserterRequestsSimulation;
import rc.bootsecurity.utils.modelmapper.UserModelMapper;

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
    @Autowired
    private RequestRepository requestRepository;
    @Autowired
    private RequestCommentRepository requestCommentRepository;
    @Autowired
    private GroupService groupService;
    @Autowired
    private UserModelMapper userModelMapper;
    @Autowired
    private RequestConverterService requestConverterService;
    @Autowired
    private RequestManagementService requestManagementService;
    @Autowired
    private RequestCommentService requestCommentService;
    @Autowired
    private RequestPrivilegeService requestPrivilegeService;

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

        User user12 = Creator.createUser("firstname12" , "lastname12", "user12" , "fakemail11@gmail.com" , "123456");
        this.userRepository.save(user12);

        this.groupService.addUserIntoGroupsAndSave(this.userService.convertUserToSimpleDTO(user12), new ArrayList<>(Collections.singletonList(NAMES.TEST_GROUP_ERROR)));
        assertThat(this.groupRepository.findByGroupName(NAMES.TEST_GROUP_ERROR).getUsersInGroup()).containsExactlyInAnyOrder(user11, user12);
        this.groupService.removeUserFromGroupsAndSave(this.userService.convertUserToSimpleDTO(user12), new ArrayList<>(Collections.singletonList(NAMES.TEST_GROUP_ERROR)));
        assertThat(this.groupRepository.findByGroupName(NAMES.TEST_GROUP_ERROR).getUsersInGroup()).containsExactlyInAnyOrder(user11);
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
        assertThat(this.requestPrivilegeService.checkIfGroupCanSolveRequestType(groupNormal1, finance.getName())).isEqualTo(false);
        assertThat(this.requestPrivilegeService.checkIfGroupCanSolveRequestType(groupSolver2, finance.getName())).isEqualTo(false);
        assertThat(this.requestPrivilegeService.checkIfGroupCanSolveRequestType(groupSolver1, finance.getName())).isEqualTo(true);
        assertThat(this.requestPrivilegeService.checkIfGroupCanSolveRequestType(groupSolver3, finance.getName())).isEqualTo(true);
        assertThat(this.requestPrivilegeService.checkIfGroupCanSolveRequestType(groupSolver2, report.getName())).isEqualTo(true);
        assertThat(this.requestPrivilegeService.checkIfGroupCanSolveRequestType(groupError, finance.getName())).isEqualTo(false);
        assertThat(this.requestPrivilegeService.checkIfGroupCanSolveRequestType(groupError, report.getName())).isEqualTo(false);
        assertThat(this.requestPrivilegeService.checkIfGroupCanSolveRequestType(groupError, ticket.getName())).isEqualTo(false);

        assertThat(this.requestPrivilegeService.checkIfGroupCanSubmitRequestType(groupNormal1, finance.getName())).isEqualTo(false);
        assertThat(this.requestPrivilegeService.checkIfGroupCanSubmitRequestType(groupNormal1, ticket.getName())).isEqualTo(true);
        assertThat(this.requestPrivilegeService.checkIfGroupCanSubmitRequestType(groupNormal2, finance.getName())).isEqualTo(true);
        assertThat(this.requestPrivilegeService.checkIfGroupCanSubmitRequestType(groupError, finance.getName())).isEqualTo(false);
        assertThat(this.requestPrivilegeService.checkIfGroupCanSubmitRequestType(groupError, ticket.getName())).isEqualTo(false);
        assertThat(this.requestPrivilegeService.checkIfGroupCanSubmitRequestType(groupError, report.getName())).isEqualTo(false);

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
        /**
         * modifying ticketPrivileges, requestToSubmit, reqestToSolve, FinanceTypeToSubmit
         */
        List<TicketPrivileges> ticketPrivilegesList = this.ticketPrivilegesRepository.findAllByGroup(groupSolver1).get();
        groupNormal3 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_NORMAL_3);
        initGroupAttributes(groupNormal3);

        assertThat(groupNormal3.getFinanceTypes()).containsExactlyInAnyOrder(financeType1,financeType2,financeType3,financeType4,financeType5);
        assertThat(groupNormal3.getFinanceTypes().size()).isEqualTo(5);
        FinanceType removedFinanceType = groupNormal3.getFinanceTypes().iterator().next();
        groupNormal3.getFinanceTypes().remove(removedFinanceType);

        GroupDTO groupDTO = this.groupService.convertGroupToDTO(groupNormal3);
        groupDTO.getFinanceTypes().remove(removedFinanceType.getName());
        this.requestPrivilegeService.modifyFinanceTypeToSubmit(groupDTO);

        // remove
        groupNormal3 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_NORMAL_3);
        initGroupAttributes(groupNormal3);
        assertThat(groupNormal3.getFinanceTypes().size()).isEqualTo(4);
        assertThat(groupNormal3.getFinanceTypes()).doesNotContain(removedFinanceType);
        assertThat(groupNormal3.getTicketPrivilegesList()).isEmpty();
        assertThat(groupNormal3.getRequestTypesToSolve()).isEmpty();
        assertThat(groupNormal3.getRequestTypesToSubmit()).containsExactlyInAnyOrder(this.requestTypeRepository.findByName(REQUEST_TYPE.FINANCE.name()));

        // add back
        groupDTO = this.groupService.convertGroupToDTO(groupNormal3);
        groupDTO.getFinanceTypes().add(removedFinanceType.getName());
        this.requestPrivilegeService.modifyFinanceTypeToSubmit(groupDTO);
        groupNormal3 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_NORMAL_3);
        initGroupAttributes(groupNormal3);
        assertThat(groupNormal3.getFinanceTypes().size()).isEqualTo(5);
        // add ticket to submit
        groupDTO = this.groupService.convertGroupToDTO(groupNormal3);
        assertThat(groupDTO.getRequestTypesToSubmit()).containsExactlyInAnyOrder(REQUEST_TYPE.FINANCE.name());
        groupDTO.setRequestTypesToSolve(new ArrayList<>(Arrays.asList(REQUEST_TYPE.TICKET.name())));
        this.requestPrivilegeService.modifyRequestTypeForGroupToSolve(groupDTO);
        groupNormal3 = this.groupRepository.findByGroupName(groupDTO.getName());
        initGroupAttributes(groupNormal3);
        assertThat(groupNormal3.getRequestTypesToSolve()).containsExactlyInAnyOrder(this.requestTypeRepository.findByName(REQUEST_TYPE.TICKET.name()));

        TicketPrivilegeDTO privilegeDTO1 = Creator.createTicketPrivilegeDTO(TICKET_TYPE.SOFTWARE.name(), NAMES.SOFTWARE_1);
        TicketPrivilegeDTO privilegeDTO2 = Creator.createTicketPrivilegeDTO(TICKET_TYPE.SOFTWARE.name(), NAMES.SOFTWARE_2);
        groupDTO.setTicketPrivilegesList(new ArrayList<>(Arrays.asList(privilegeDTO1, privilegeDTO2)));
        this.requestPrivilegeService.modifyTicketTypeToSolve(groupDTO);
        groupNormal3 = this.groupRepository.findByGroupName(groupDTO.getName());
        List<TicketPrivileges> privileges = this.ticketPrivilegesRepository.findAllByGroup(groupNormal3).orElse(new ArrayList<>());
        assertThat(privileges.stream().map(TicketPrivileges::getApplicationName).collect(Collectors.toList()))
                .containsExactlyInAnyOrder(privilegeDTO1.getApplicationName(), privilegeDTO2.getApplicationName());


        TicketPrivilegeDTO privilegeDTO3 = Creator.createTicketPrivilegeDTO(TICKET_TYPE.SOFTWARE.name(), NAMES.SOFTWARE_3);
        groupDTO.getTicketPrivilegesList().add(privilegeDTO3);
        this.requestPrivilegeService.modifyTicketTypeToSolve(groupDTO);
        groupNormal3 = this.groupRepository.findByGroupName(groupDTO.getName());
        privileges = this.ticketPrivilegesRepository.findAllByGroup(groupNormal3).orElse(new ArrayList<>());
        assertThat(privileges.stream().map(TicketPrivileges::getApplicationName).collect(Collectors.toList()))
                .containsExactlyInAnyOrder(privilegeDTO1.getApplicationName(), privilegeDTO2.getApplicationName(), privilegeDTO3.getApplicationName());

        groupDTO.getTicketPrivilegesList().remove(privilegeDTO2);
        assertThat(groupDTO.getTicketPrivilegesList()).doesNotContain(privilegeDTO2);
        this.requestPrivilegeService.modifyTicketTypeToSolve(groupDTO);
        groupNormal3 = this.groupRepository.findByGroupName(groupDTO.getName());

        List<TicketPrivileges> privileges2 = this.ticketPrivilegesRepository.findAllByGroup(groupNormal3).orElse(new ArrayList<>());
        assertThat(privileges2.stream().map(TicketPrivileges::getApplicationName).collect(Collectors.toList()))
                .containsExactlyInAnyOrder(privilegeDTO1.getApplicationName(), privilegeDTO3.getApplicationName());

        /**
         * delete and add - requestToSubmit, requestToSolve, FinanceTypeToSubmit
         */
        GroupDTO groupDTOError = this.groupService.convertGroupToDTO(groupError);
        groupDTOError.setRequestTypesToSubmit(new ArrayList<>(Arrays.asList(REQUEST_TYPE.FINANCE.name())));
        this.requestPrivilegeService.modifyRequestTypeForGroupToSubmit(groupDTOError);
        assertThat(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(groupError).get()
                .stream().map(RequestType::getName)).containsExactlyInAnyOrder(REQUEST_TYPE.FINANCE.name());

        groupDTOError.getRequestTypesToSubmit().add(REQUEST_TYPE.REPORT.name());
        this.requestPrivilegeService.modifyRequestTypeForGroupToSubmit(groupDTOError);
        assertThat(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(groupError).get()
                .stream().map(RequestType::getName)).containsExactlyInAnyOrder(REQUEST_TYPE.FINANCE.name(), REQUEST_TYPE.REPORT.name());

        groupDTOError.getRequestTypesToSubmit().remove(REQUEST_TYPE.REPORT.name());
        this.requestPrivilegeService.modifyRequestTypeForGroupToSubmit(groupDTOError);
        assertThat(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(groupError).get()
                .stream().map(RequestType::getName)).containsExactlyInAnyOrder(REQUEST_TYPE.FINANCE.name());

        groupDTOError.setFinanceTypes(new ArrayList<>(Arrays.asList(NAMES.FINANCE_TYPE_1, NAMES.FINANCE_TYPE_2)));
        this.requestPrivilegeService.modifyFinanceTypeToSubmit(groupDTOError);
        assertThat(this.financeTypeRepository.findAllByGroupsToSubmitSpecificFinanceType(groupError).get().stream()
                .map(FinanceType::getName).collect(Collectors.toList())).containsExactlyInAnyOrder(NAMES.FINANCE_TYPE_1, NAMES.FINANCE_TYPE_2);

        groupDTOError.getFinanceTypes().add(NAMES.FINANCE_TYPE_3);
        this.requestPrivilegeService.modifyFinanceTypeToSubmit(groupDTOError);
        assertThat(this.financeTypeRepository.findAllByGroupsToSubmitSpecificFinanceType(groupError).get().stream()
                .map(FinanceType::getName).collect(Collectors.toList())).containsExactlyInAnyOrder(NAMES.FINANCE_TYPE_1, NAMES.FINANCE_TYPE_2,NAMES.FINANCE_TYPE_3);

        groupDTOError.getFinanceTypes().remove(NAMES.FINANCE_TYPE_3);
        this.requestPrivilegeService.modifyFinanceTypeToSubmit(groupDTOError);
        assertThat(this.financeTypeRepository.findAllByGroupsToSubmitSpecificFinanceType(groupError).get().stream()
                .map(FinanceType::getName).collect(Collectors.toList())).containsExactlyInAnyOrder(NAMES.FINANCE_TYPE_1, NAMES.FINANCE_TYPE_2);

        groupDTOError.setRequestTypesToSolve(new ArrayList<>(Arrays.asList(REQUEST_TYPE.TICKET.name())));
        this.requestPrivilegeService.modifyRequestTypeForGroupToSolve(groupDTOError);
        assertThat(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(groupError).get().stream()
                .map(RequestType::getName).collect(Collectors.toList())).containsExactlyInAnyOrder(REQUEST_TYPE.TICKET.name());

        groupDTOError.getRequestTypesToSolve().add(REQUEST_TYPE.REPORT.name());
        this.requestPrivilegeService.modifyRequestTypeForGroupToSolve(groupDTOError);
        assertThat(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(groupError).get().stream()
                .map(RequestType::getName).collect(Collectors.toList())).containsExactlyInAnyOrder(REQUEST_TYPE.TICKET.name(),REQUEST_TYPE.REPORT.name());

        groupDTOError.getRequestTypesToSolve().remove(REQUEST_TYPE.REPORT.name());
        this.requestPrivilegeService.modifyRequestTypeForGroupToSolve(groupDTOError);
        assertThat(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(groupError).get().stream()
                .map(RequestType::getName).collect(Collectors.toList())).containsExactlyInAnyOrder(REQUEST_TYPE.TICKET.name());

        TicketPrivilegeDTO ticketPrivilegeDTO1 = Creator.createTicketPrivilegeDTO(TICKET_TYPE.SOFTWARE.name(), NAMES.SOFTWARE_1);
        TicketPrivilegeDTO ticketPrivilegeDTO2 = Creator.createTicketPrivilegeDTO(TICKET_TYPE.SOFTWARE.name(), NAMES.SOFTWARE_2);

        groupDTOError.setTicketPrivilegesList(new ArrayList<>(Arrays.asList(ticketPrivilegeDTO1)));
        this.requestPrivilegeService.modifyTicketTypeToSolve(groupDTOError);
        assertThat(this.ticketPrivilegesRepository.findAllByGroup(groupError).get().stream()
                .map(TicketPrivileges::getApplicationName).collect(Collectors.toList()))
                .containsExactlyInAnyOrder(ticketPrivilegeDTO1.getApplicationName());
        assertThat(this.ticketPrivilegesRepository.findAllByGroup(groupError).get().size()).isEqualTo(1);

        groupDTOError.getTicketPrivilegesList().add(ticketPrivilegeDTO1);
        this.requestPrivilegeService.modifyTicketTypeToSolve(groupDTOError);
        assertThat(this.ticketPrivilegesRepository.findAllByGroup(groupError).get().stream()
                .map(TicketPrivileges::getApplicationName).collect(Collectors.toList()))
                .containsExactlyInAnyOrder(ticketPrivilegeDTO1.getApplicationName());
        assertThat(this.ticketPrivilegesRepository.findAllByGroup(groupError).get().size()).isEqualTo(1);

        groupDTOError.getTicketPrivilegesList().add(ticketPrivilegeDTO2);
        this.requestPrivilegeService.modifyTicketTypeToSolve(groupDTOError);
        assertThat(this.ticketPrivilegesRepository.findAllByGroup(groupError).get().stream()
                .map(TicketPrivileges::getApplicationName).collect(Collectors.toList()))
                .containsExactlyInAnyOrder(ticketPrivilegeDTO1.getApplicationName(), ticketPrivilegeDTO2.getApplicationName());
        assertThat(this.ticketPrivilegesRepository.findAllByGroup(groupError).get().size()).isEqualTo(2);

        groupDTOError.getTicketPrivilegesList().remove(ticketPrivilegeDTO2);
        this.requestPrivilegeService.modifyTicketTypeToSolve(groupDTOError);
        assertThat(this.ticketPrivilegesRepository.findAllByGroup(groupError).get().stream()
                .map(TicketPrivileges::getApplicationName).collect(Collectors.toList()))
                .containsExactlyInAnyOrder(ticketPrivilegeDTO1.getApplicationName());
        assertThat(this.ticketPrivilegesRepository.findAllByGroup(groupError).get().size()).isEqualTo(1);


    }

    private void initGroupAttributes(Group group){
        group.setTicketPrivilegesList(this.ticketPrivilegesRepository.findAllByGroup(group).orElse(new ArrayList<>()));
        group.setFinanceTypes(new HashSet<>(this.financeTypeRepository.findAllByGroupsToSubmitSpecificFinanceType(group).orElse(new ArrayList<>())));
        group.setRequestTypesToSubmit(new HashSet<>(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(group).orElse(new ArrayList<>())));
        group.setRequestTypesToSolve(new HashSet<>(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(group).orElse(new ArrayList<>())));
    }

    @Test
    public void testInsertedRequests() {
        User user6 = this.userRepository.findByUsername("user6").get();
        User user8 = this.userRepository.findByUsername("user8").get();
        User user9 = this.userRepository.findByUsername("user9").get();
        User user10 = this.userRepository.findByUsername("user10").get();

        RequestPosition position1 = this.requestPositionRepository.findByName(REQUEST_POSITION.CREATED.name());
        TicketType ticketTypeUser = this.ticketTypeRepository.findByName(TICKET_TYPE.USER.name());
        TicketType ticketTypeHardware = this.ticketTypeRepository.findByName(TICKET_TYPE.HARDWARE.name());
        TicketType ticketTypeSoftware = this.ticketTypeRepository.findByName(TICKET_TYPE.SOFTWARE.name());
        TicketType ticketTypeOther = this.ticketTypeRepository.findByName(TICKET_TYPE.OTHER.name());
        RequestType requestTypeFinance = this.requestTypeRepository.findByName(REQUEST_TYPE.FINANCE.name());
        RequestType requestTypeReport = this.requestTypeRepository.findByName(REQUEST_TYPE.REPORT.name());
        RequestType requestTypeTicket = this.requestTypeRepository.findByName(REQUEST_TYPE.TICKET.name());

        assertThat(this.ticketRepository.findAllByTicketTypeAndRequestPosition(ticketTypeUser, position1).stream().map(Request::getCreator).collect(Collectors.toSet())).containsExactly(user8);
        assertThat(this.ticketRepository.findAllByTicketType(ticketTypeHardware).size()).isEqualTo(3);
        assertThat(this.ticketRepository.findAllByTicketType(ticketTypeSoftware).size()).isEqualTo(7);
        assertThat(this.ticketRepository.findAllByTicketType(ticketTypeOther).size()).isEqualTo(2);
        assertThat(this.requestRepository.findAllByCreator(user6).stream().map(Request::getRequestType).collect(Collectors.toSet())).containsExactly(requestTypeFinance);
        assertThat(this.requestRepository.findAllByCreatorAndRequestType(user9, requestTypeReport)).isEmpty();
        assertThat(this.requestRepository.findAllByCreatorAndRequestType(user9, requestTypeFinance)).isEmpty();
        assertThat(this.requestRepository.findAllByCreatorAndRequestType(user6, requestTypeFinance).size()).isEqualTo(1);
        assertThat(this.requestRepository.findAllByRequestType(requestTypeFinance).stream().map(Request::getCreator).collect(Collectors.toSet())).containsExactlyInAnyOrder(user10, user6);
        assertThat(this.requestRepository.findAllByRequestType(requestTypeReport).stream().map(Request::getCreator).collect(Collectors.toSet())).containsExactlyInAnyOrder(user10, user8);
        assertThat(this.requestRepository.findAllByCreatorAndRequestType(user10, requestTypeTicket).size()).isEqualTo(5);
        assertThat(this.requestRepository.findAllByCreatorAndRequestType(user10, requestTypeTicket).stream().map(x -> (Ticket) x).map(x -> x.getTicketType().getName())
                .collect(Collectors.toSet())).containsExactlyInAnyOrder(TICKET_TYPE.SOFTWARE.name(), TICKET_TYPE.HARDWARE.name());

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
        TicketType software = this.ticketTypeRepository.findByName(TICKET_TYPE.SOFTWARE.name());

        Ticket ticket1 = (Ticket) this.requestRepository.findAllByNameStartingWithOrderByIdAsc("TICKET_NAME").get().get(0);
        RequestComment ticket1Comment = this.requestCommentRepository.findAllByRequestOrderByTimestampAsc(ticket1).get(0);

        assertThat(ticket1.getTicketType()).isEqualTo(software);
        assertThat(ticket1.getCreator()).isEqualTo(user10);
        assertThat(ticket1.getAssigned()).isEqualTo(user2);
        assertThat(ticket1.getAssigned().getUsername()).isEqualTo(user2.getUsername());
        assertThat(ticket1Comment.getIsPrivate()).isEqualTo(false);
        assertThat(ticket1Comment.getUser()).isEqualTo(user10);
        assertThat(ticket1Comment.getGroupsToViewRequestComment()).isNull();
        assertThat(this.requestRepository.findAllByNameStartingWithOrderByIdAsc("TICKET_NAME").get().size()).isEqualTo(17);

        Ticket ticket2 = (Ticket) this.requestRepository.findAllByNameStartingWithOrderByIdAsc("TICKET_NAME").get().get(1);
        List<RequestComment> requestCommentsTicket2 = this.requestCommentRepository.findAllByRequestOrderByTimestampAsc(ticket2);

        assertThat(ticket2.getSolver()).isEqualTo(user2);
        assertThat(requestCommentsTicket2.size()).isEqualTo(2);
        assertThat(requestCommentsTicket2.get(0).getUser()).isEqualTo(user10);
        assertThat(requestCommentsTicket2.get(1).getIsPrivate()).isEqualTo(true);
        assertThat(requestCommentsTicket2.get(1).getGroupsToViewRequestComment()).containsExactlyInAnyOrder(groupSolver1);
        assertThat(this.userRepository.findAllByWatchedRequests(ticket2)).containsExactlyInAnyOrder(user3,user2,user5);

        Group groupSolver3 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_NORMAL_3);
        groupSolver3.setTicketPrivilegesList(this.ticketPrivilegesRepository.findAllByGroup(groupSolver3).orElse(new ArrayList<>()));
        groupSolver3.setUsersInGroup(new HashSet<>(this.userRepository.findAllByGroupsInvolved(groupSolver3)));
        groupSolver3.setFinanceTypes(new HashSet<>(this.financeTypeRepository.findAllByGroupsToSubmitSpecificFinanceType(groupSolver3).orElse(new ArrayList<>())));
        groupSolver3.setRequestTypesToSolve(new HashSet<>(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(groupSolver3).orElse(new ArrayList<>())));
        groupSolver3.setRequestTypesToSubmit(new HashSet<>(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(groupSolver3).orElse(new ArrayList<>())));

        GroupDTO groupDTO = this.groupService.convertGroupToDTO(groupSolver3);
        assertThat(groupDTO.getFinanceTypes()).containsExactlyInAnyOrder(NAMES.FINANCE_TYPE_1,NAMES.FINANCE_TYPE_2,
                NAMES.FINANCE_TYPE_3,NAMES.FINANCE_TYPE_4,NAMES.FINANCE_TYPE_5);
        assertThat(groupDTO.getRequestTypesToSolve()).isEmpty();
        assertThat(groupDTO.getTicketPrivilegesList()).isEmpty();
        assertThat(groupDTO.getRequestTypesToSubmit()).containsExactlyInAnyOrder(REQUEST_TYPE.FINANCE.name());
        assertThat(groupDTO.getUsersInGroup()).containsExactlyInAnyOrder(this.userService.convertUserToSimpleDTO(user6));
        assertThat(groupDTO.getGroupManager()).isEqualTo(this.userService.convertUserToSimpleDTO(user6));
    }

    @Test
    public void testComments(){
        User user2 = this.userRepository.findByUsername("user2").get();
        Ticket ticket4 = (Ticket) this.requestRepository.findAllByUserWhoWatchThisRequestContainsOrderByIdAsc(user2).get(1);
        Group groupSolver1 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_SOLVER_1);
        Group groupSolver2 = this.groupRepository.findByGroupName(NAMES.TEST_GROUP_SOLVER_2);

        assertThat(this.requestCommentRepository.findAllByRequestOrderByTimestampAsc(ticket4)).isEmpty();

        RequestComment requestComment1 = this.requestCommentService.createRequestComment(
                Creator.createRequestCommentDTO(ticket4.getId(), user2.getUsername(), "COMMENT1", true));
        this.requestCommentService.saveOrUpdateComment(requestComment1);
        this.requestCommentService.shareCommentWith(this.requestConverterService.convertRequestCommentToDTO(requestComment1),
                this.groupService.convertGroupToDTO(groupSolver1) );
        requestComment1 = this.requestCommentRepository.findAllByRequestOrderByTimestampAsc(ticket4).get(0);

        assertThat(requestComment1.getGroupsToViewRequestComment()).containsExactlyInAnyOrder(groupSolver1);
        assertThat(requestComment1.getComment()).isEqualToIgnoringCase("COMMENT1");

        RequestCommentDTO requestCommentDTO = this.requestConverterService.convertRequestCommentToDTO(requestComment1);
        requestCommentDTO.setComment("AHOJ");
        this.requestCommentService.modifyComment(requestCommentDTO);
        requestComment1 = this.requestCommentRepository.findAllByRequestOrderByTimestampAsc(ticket4).get(0);

        assertThat(requestComment1.getComment()).isEqualToIgnoringCase("AHOJ");
        assertThat(requestComment1.getTimestamp()).isNotNull();
        assertThat(this.requestCommentRepository.findAllByRequestOrderByTimestampAsc(ticket4).size()).isEqualTo(1);

        this.requestCommentService.shareCommentWith(requestCommentDTO, this.groupService.convertGroupToDTO(groupSolver2) );
        assertThat(this.requestCommentRepository.findAllByRequestOrderByTimestampAsc(ticket4).get(0).getGroupsToViewRequestComment())
                .containsExactlyInAnyOrder(groupSolver1, groupSolver2);

        RequestComment requestComment2 = this.requestCommentService.createRequestComment(
                Creator.createRequestCommentDTO(ticket4.getId(), user2.getUsername(), "COMMENT2", true));
        this.requestCommentService.saveOrUpdateComment(requestComment2);
        assertThat(requestComment2.getTimestamp()).isNotNull();
        assertThat(this.requestCommentRepository.findAllByRequestOrderByTimestampAsc(ticket4)).containsExactlyInAnyOrder(requestComment1, requestComment2);
        this.requestCommentRepository.delete(requestComment2);
        assertThat(this.requestCommentRepository.findAllByRequestOrderByTimestampAsc(ticket4)).containsExactlyInAnyOrder(requestComment1);
    }


    @Test
    public void testWatchingRequests(){
        User user2 = this.userRepository.findByUsername("user2").get();
        User user3 = this.userRepository.findByUsername("user3").get();
        User user4 = this.userRepository.findByUsername("user4").get();
        User user5 = this.userRepository.findByUsername("user5").get();
        User user6 = this.userRepository.findByUsername("user6").get();
        User user8 = this.userRepository.findByUsername("user8").get();
        User user9 = this.userRepository.findByUsername("user9").get();
        User user10 = this.userRepository.findByUsername("user10").get();

        List<Request> allRequests = this.requestRepository.findAllByOrderByIdAsc();
        List<Request> watchedRequests = this.requestRepository.findAllByUserWhoWatchThisRequestContainsOrderByIdAsc(user3);
        assertThat(watchedRequests.size()).isEqualTo(2);
        assertThat(watchedRequests).containsExactlyInAnyOrder(allRequests.get(1), allRequests.get(2));
        assertThat(this.userRepository.findAllByWatchedRequests(watchedRequests.get(0))).containsExactlyInAnyOrder(user3,user2,user5);
        assertThat(this.userRepository.findAllByWatchedRequests(watchedRequests.get(1))).containsExactlyInAnyOrder(user3);

        Ticket ticket = (Ticket)  watchedRequests.get(1);
        ticket.setUserWhoWatchThisRequest(new HashSet<>(this.userRepository.findAllByWatchedRequests(ticket)));
        TicketDTO ticketDTO = this.requestConverterService.convertTicketToTicketDTO(ticket);
        assertThat(ticketDTO.getProblem()).isNotEmpty();
        assertThat(ticketDTO.getTicketSubtypeName()).isNotEmpty();
        assertThat(ticketDTO.getTicketSubtypeName()).isNotEmpty();
        assertThat(ticketDTO.getUserToWatchRequest().get(0).getId()).isEqualTo(user3.getId());
        assertThat(ticketDTO.getUserToWatchRequest()).containsExactlyInAnyOrder(this.userService.convertUserToSimpleDTO(user3));

        this.requestManagementService.setWatchRequestAndSave(ticketDTO.getId(), this.userService.convertUserToSimpleDTO(user4));
        assertThat(ticket.getUserWhoWatchThisRequest()).containsExactlyInAnyOrder(user3, user4);

        this.requestManagementService.removeWatchRequestAndSave(ticket.getId(), this.userService.convertUserToSimpleDTO(user4));
        assertThat(ticket.getUserWhoWatchThisRequest()).containsExactlyInAnyOrder(user3);

        assertThat(this.requestRepository.findAllByUserWhoWatchThisRequestContainsOrderByIdAsc(user5).size()).isEqualTo(1);
        assertThat(this.requestRepository.findAllByUserWhoWatchThisRequestContainsOrderByIdAsc(user10)).isEmpty();

        this.requestManagementService.setWatchRequestAndSave(ticketDTO.getId(), this.userService.convertUserToSimpleDTO(user5));
        this.requestManagementService.setWatchRequestAndSave(ticketDTO.getId(), this.userService.convertUserToSimpleDTO(user6));
        assertThat(ticket.getUserWhoWatchThisRequest()).containsExactlyInAnyOrder(user3, user5, user6);
        this.requestManagementService.setWatchRequestAndSave(ticketDTO.getId(), this.userService.convertUserToSimpleDTO(user6));
        assertThat(ticket.getUserWhoWatchThisRequest()).containsExactlyInAnyOrder(user3, user5, user6);
        this.requestManagementService.removeWatchRequestAndSave(ticket.getId(), this.userService.convertUserToSimpleDTO(user5));
        assertThat(ticket.getUserWhoWatchThisRequest()).containsExactlyInAnyOrder(user3, user6);
        this.requestManagementService.removeWatchRequestAndSave(ticket.getId(), this.userService.convertUserToSimpleDTO(user6));
        assertThat(ticket.getUserWhoWatchThisRequest()).containsExactlyInAnyOrder(user3);
        this.requestManagementService.removeWatchRequestAndSave(ticket.getId(), this.userService.convertUserToSimpleDTO(user3));
        assertThat(ticket.getUserWhoWatchThisRequest()).isEmpty();
        this.requestManagementService.removeWatchRequestAndSave(ticket.getId(), this.userService.convertUserToSimpleDTO(user3));
        assertThat(ticket.getUserWhoWatchThisRequest()).isEmpty();
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
        this.userService.getPrivilegesForUser2("user2");

    }

}