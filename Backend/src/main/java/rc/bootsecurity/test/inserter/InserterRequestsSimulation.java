package rc.bootsecurity.test.inserter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.UserSimpleDTO;
import rc.bootsecurity.model.dto.request.RequestCommentDTO;
import rc.bootsecurity.model.dto.request.TicketDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.finance.Finance;
import rc.bootsecurity.model.entity.report.Report;
import rc.bootsecurity.model.entity.request.RequestComment;
import rc.bootsecurity.model.entity.ticket.Ticket;
import rc.bootsecurity.model.enums.REQUEST_PRIORITY;
import rc.bootsecurity.model.enums.MODULE_TYPE;
import rc.bootsecurity.model.enums.TICKET_TYPE;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.service.UserService;
import rc.bootsecurity.service.request.*;
import rc.bootsecurity.utils.converter.RequestConverter;
import rc.bootsecurity.test.creator.Creator;
import rc.bootsecurity.test.creator.NAMES;
import rc.bootsecurity.utils.converter.UserConverter;

import java.util.*;

@Service
public class InserterRequestsSimulation {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private Inserter inserter;
    @Autowired
    private InserterRequests inserterRequests;
    @Autowired
    private UserService userService;
    @Autowired
    private RequestManagementService requestManagementService;
    @Autowired
    private RequestCommentService requestCommentService;
    @Autowired
    private TicketService ticketService;
    @Autowired
    private ReportService reportService;
    @Autowired
    private FinanceService financeService;
    @Autowired
    private RequestStateService requestStateService;

    private RequestConverter requestConverter = new RequestConverter();
    private UserConverter userConverter = new UserConverter();

    public void mainInserter(){
        this.insertUsersWithGroups();
        this.insertRequestTypes();
        this.insertRequestPrivileges();
        this.insertTicketPrivilegesForGroupsToSolve();
        this.insertFinanceTypePrivilegesForGroupsToSubmit();
        this.insertRequestsForUsers();
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

    }

    private void insertTicketPrivilegesForGroupsToSolve(){

    }

    private void insertFinanceTypePrivilegesForGroupsToSubmit(){

    }

    private void insertRequestsForUsers(){
        User user2 = this.userRepository.findByUsername("user2").get();
        User user3 = this.userRepository.findByUsername("user3").get();
        User user4 = this.userRepository.findByUsername("user4").get();
        User user5 = this.userRepository.findByUsername("user5").get();
        User user6 = this.userRepository.findByUsername("user6").get();
        User user8 = this.userRepository.findByUsername("user8").get();
        User user9 = this.userRepository.findByUsername("user9").get();
        User user10 = this.userRepository.findByUsername("user10").get();




    }





}
