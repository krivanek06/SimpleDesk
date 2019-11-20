package rc.bootsecurity.test.inserter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.enums.REQUEST_TYPE;
import rc.bootsecurity.model.enums.TICKET_TYPE;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.report.*;
import rc.bootsecurity.repository.request.RequestPositionRepository;
import rc.bootsecurity.repository.request.RequestPriorityRepository;
import rc.bootsecurity.repository.request.RequestTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.repository.ticket.TicketRepository;
import rc.bootsecurity.repository.ticket.TicketSubtypeRepository;
import rc.bootsecurity.repository.ticket.TicketTypeRepository;
import rc.bootsecurity.service.RequestPrivilegeService;
import rc.bootsecurity.test.creator.Creator;
import rc.bootsecurity.test.creator.NAMES;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
public class InserterRequestsSimulation {


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
    private ReportAccessStoredRepository reportAccessStoredRepository;
    @Autowired
    private ReportAccessRepository reportAccessRepository;
    @Autowired
    private ReportRepository reportRepository;
    @Autowired
    private ReportRefreshRepository reportRefreshRepository;
    @Autowired
    private ReportTypeRepository reportTypeRepository;
    @Autowired
    private Inserter inserter;
    @Autowired
    private InserterRequests inserterRequests;
    @Autowired
    private RequestPrivilegeService requestPrivilegeService;

    public void mainInserter(){
        this.insertUsersWithGroups();
        this.insertRequestTypes();
        this.insertRequestPrivileges();
        this.insertTicketPrivilegesForGroupsToSolve();
        this.insertFinanceTypePrivilegesForGroupsToSubmit();
    }

    private void insertUsersWithGroups(){
        User admin = Creator.createUser("admin" , "admin", "admin" , "admin@gmail.com" , "123456");
        User user2 = Creator.createUser("firstname2" , "lastname2", "user2" , "fakemail2@gmail.com" , "123456");
        User user3 = Creator.createUser("firstname3" , "lastname3", "user3" , "fakemail3@gmail.com" , "123456");
        User user4 = Creator.createUser("firstname4" , "lastname4", "user4" , "fakemail4@gmail.com" , "123456");
        User user5 = Creator.createUser("firstname5" , "lastname5", "user5" , "fakemail5@gmail.com" , "123456");
        User user6 = Creator.createUser("firstname6" , "lastname6", "user6" , "fakemail6@gmail.com" , "123456");
        User user7 = Creator.createUser("firstname7" , "lastname7", "user7" , "fakemail7@gmail.com" , "123456");
        User user8 = Creator.createUser("firstname8" , "lastname8", "user8" , "fakemail8@gmail.com" , "123456");
        User user9 = Creator.createUser("firstname9" , "lastname9", "user9" , "fakemail9@gmail.com" , "123456");
        User user10 = Creator.createUser("firstname10" , "lastname10", "user10" , "fakemail10@gmail.com" , "123456");
        User user11 = Creator.createUser("firstname11" , "lastname11", "user11" , "fakemail11@gmail.com" , "123456");
        this.userRepository.saveAll(List.of(admin,user2,user3,user4,user5,user6,user7,user8,user9,user10,user11));

        // group1 -> can submit all tickets and reports
        Group group1 = Creator.createGroup(NAMES.TEST_GROUP_BASIC_GROUP , admin, new HashSet<>(Arrays.asList(admin,user2,user3,user4,user5,user6,user7,user8,user9,user10)));
        // groups2 -> can solve some tickets -> SW1, SW2, HW1, HW2, Server, User, Other ,  FINANCE
        Group group2 = Creator.createGroup(NAMES.TEST_GROUP_SOLVER_1 , user2, new HashSet<>(Arrays.asList(user2,user3)));
        // group3 -> can solve reports
        Group group3 = Creator.createGroup(NAMES.TEST_GROUP_SOLVER_2 , user2, new HashSet<>(Arrays.asList(user2,user4)));
        // group4 -> can solve all tickets -> SW1, SW2, SW3, SW4, HW1, HW2, HW3, HW4, Server, User, Other,  FINANCE
        Group group4 = Creator.createGroup(NAMES.TEST_GROUP_SOLVER_3 , user2, new HashSet<>(Arrays.asList(user2,user5)));
        // group5 -> submit all tickets and reports -> manager user6
        Group group5 = Creator.createGroup(NAMES.TEST_GROUP_NORMAL_1 , user6, new HashSet<>(Arrays.asList(user7,user8,user9,user10)));
        // group6 -> can submit some finance types -> Finance1, Finance2
        Group group6 = Creator.createGroup(NAMES.TEST_GROUP_NORMAL_2 , user6, new HashSet<>(Arrays.asList(user6,user10)));
        // group7 -> can submit all finance types -> Finance1, FInance2, Finance3
        Group group7 = Creator.createGroup(NAMES.TEST_GROUP_NORMAL_3 , user6, new HashSet<>(Arrays.asList(user6)));
        // group 8 -> DO NOT allow TICKET, when inserting software subtypes should throw error -> Now allowed Request Type Ticket
        Group group8 = Creator.createGroup(NAMES.TEST_GROUP_ERROR , user11, new HashSet<>(Arrays.asList(user11)));
        this.groupRepository.saveAll(List.of(group1,group2,group3,group4,group5,group6,group7,group8));
    }

    private void insertRequestTypes(){
        this.inserter.insertRequestTypes(); // Ticket, Report, Finance
        this.inserterRequests.insertRequestTickets(); // TICKET TYPES -> Software, Hardware, etc. , Subtypes -> Software1, etc...
        this.inserterRequests.insertRequestReports(); // Reports type, refresh, access
        this.inserterRequests.insertRequestFinance(); // Finance type
    }

    private void insertRequestPrivileges(){
        this.requestPrivilegeService.insertRequestTypeForGroupToSubmit(NAMES.TEST_GROUP_BASIC_GROUP,
                Arrays.asList(REQUEST_TYPE.TICKET.name(),REQUEST_TYPE.REPORT.name()));

        this.requestPrivilegeService.insertRequestTypeForGroupToSolve(NAMES.TEST_GROUP_SOLVER_1,
                Arrays.asList(REQUEST_TYPE.TICKET.name(), REQUEST_TYPE.REPORT.name(), REQUEST_TYPE.FINANCE.name()));

        this.requestPrivilegeService.insertRequestTypeForGroupToSolve(NAMES.TEST_GROUP_SOLVER_2,
                Arrays.asList(REQUEST_TYPE.REPORT.name()));

        this.requestPrivilegeService.insertRequestTypeForGroupToSolve(NAMES.TEST_GROUP_SOLVER_3,
                Arrays.asList(REQUEST_TYPE.TICKET.name(),REQUEST_TYPE.REPORT.name(), REQUEST_TYPE.FINANCE.name()));

        this.requestPrivilegeService.insertRequestTypeForGroupToSubmit(NAMES.TEST_GROUP_NORMAL_1,
                Arrays.asList(REQUEST_TYPE.TICKET.name(),REQUEST_TYPE.REPORT.name()));

        this.requestPrivilegeService.insertRequestTypeForGroupToSubmit(NAMES.TEST_GROUP_NORMAL_2,
                Arrays.asList(REQUEST_TYPE.FINANCE.name()));

        this.requestPrivilegeService.insertRequestTypeForGroupToSubmit(NAMES.TEST_GROUP_NORMAL_3,
                Arrays.asList(REQUEST_TYPE.FINANCE.name()));
        // group 8 -> no request type to solver -> should throw error
    }

    private void insertTicketPrivilegesForGroupsToSolve(){
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_1, TICKET_TYPE.SOFTWARE.name(), Optional.of(NAMES.SOFTWARE_1));
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_1, TICKET_TYPE.SOFTWARE.name(), Optional.of(NAMES.SOFTWARE_2));
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_1, TICKET_TYPE.HARDWARE.name(), Optional.of(NAMES.HARDWARE_1));
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_1, TICKET_TYPE.HARDWARE.name(), Optional.of(NAMES.HARDWARE_2));
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_1, TICKET_TYPE.SERVER.name(), Optional.of(NAMES.SERVER_1));
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_1, TICKET_TYPE.USER.name(), Optional.empty());
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_1, TICKET_TYPE.OTHER.name(), Optional.empty());


        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_3, TICKET_TYPE.SOFTWARE.name(), Optional.of(NAMES.SOFTWARE_1));
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_3, TICKET_TYPE.SOFTWARE.name(), Optional.of(NAMES.SOFTWARE_2));
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_3, TICKET_TYPE.SOFTWARE.name(), Optional.of(NAMES.SOFTWARE_3));
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_3, TICKET_TYPE.SOFTWARE.name(), Optional.of(NAMES.SOFTWARE_4));
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_3, TICKET_TYPE.HARDWARE.name(), Optional.of(NAMES.HARDWARE_1));
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_3, TICKET_TYPE.HARDWARE.name(), Optional.of(NAMES.HARDWARE_2));
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_3, TICKET_TYPE.HARDWARE.name(), Optional.of(NAMES.HARDWARE_3));
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_3, TICKET_TYPE.HARDWARE.name(), Optional.of(NAMES.HARDWARE_4));
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_3, TICKET_TYPE.SERVER.name(), Optional.of(NAMES.SERVER_1));
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_3, TICKET_TYPE.SERVER.name(), Optional.of(NAMES.SERVER_2));
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_3, TICKET_TYPE.USER.name(), Optional.empty());
        this.requestPrivilegeService.insertTicketTypeToSolve(NAMES.TEST_GROUP_SOLVER_3, TICKET_TYPE.OTHER.name(), Optional.empty());
    }

    private void insertFinanceTypePrivilegesForGroupsToSubmit(){
        this.requestPrivilegeService.insertFinanceTypeToSubmit(NAMES.TEST_GROUP_NORMAL_2, NAMES.FINANCE_TYPE_1);
        this.requestPrivilegeService.insertFinanceTypeToSubmit(NAMES.TEST_GROUP_NORMAL_2, NAMES.FINANCE_TYPE_2);
        this.requestPrivilegeService.insertFinanceTypeToSubmit(NAMES.TEST_GROUP_NORMAL_2, NAMES.FINANCE_TYPE_3);

        this.requestPrivilegeService.insertFinanceTypeToSubmit(NAMES.TEST_GROUP_NORMAL_3, NAMES.FINANCE_TYPE_1);
        this.requestPrivilegeService.insertFinanceTypeToSubmit(NAMES.TEST_GROUP_NORMAL_3, NAMES.FINANCE_TYPE_2);
        this.requestPrivilegeService.insertFinanceTypeToSubmit(NAMES.TEST_GROUP_NORMAL_3, NAMES.FINANCE_TYPE_3);
        this.requestPrivilegeService.insertFinanceTypeToSubmit(NAMES.TEST_GROUP_NORMAL_3, NAMES.FINANCE_TYPE_4);
        this.requestPrivilegeService.insertFinanceTypeToSubmit(NAMES.TEST_GROUP_NORMAL_3, NAMES.FINANCE_TYPE_5);
    }




}
