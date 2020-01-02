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
    private RequestPrivilegeService requestPrivilegeService;
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
        this.requestPrivilegeService.modifyModuleTypesToUse(Creator.createGroupDTOWithRequestPrivilegesToSubmit(NAMES.TEST_GROUP_BASIC_GROUP,
                new ArrayList<>(Arrays.asList(MODULE_TYPE.Ticket.name(), MODULE_TYPE.Report.name()))));

        this.requestPrivilegeService.modifyRequestTypeToSolve(Creator.createGroupDTOWithRequestPrivilegesToSolve(NAMES.TEST_GROUP_SOLVER_1,
                new ArrayList<>(Arrays.asList(MODULE_TYPE.Ticket.name(), MODULE_TYPE.Report.name(), MODULE_TYPE.Financie.name()))));

        this.requestPrivilegeService.modifyRequestTypeToSolve(Creator.createGroupDTOWithRequestPrivilegesToSolve(NAMES.TEST_GROUP_SOLVER_2,
                new ArrayList<>(Arrays.asList(MODULE_TYPE.Report.name()))));

        this.requestPrivilegeService.modifyRequestTypeToSolve(Creator.createGroupDTOWithRequestPrivilegesToSolve(NAMES.TEST_GROUP_SOLVER_3,
                new ArrayList<>(Arrays.asList(MODULE_TYPE.Ticket.name(), MODULE_TYPE.Report.name(), MODULE_TYPE.Financie.name()))));

        this.requestPrivilegeService.modifyModuleTypesToUse(Creator.createGroupDTOWithRequestPrivilegesToSubmit(NAMES.TEST_GROUP_NORMAL_1,
                new ArrayList<>(Arrays.asList(MODULE_TYPE.Ticket.name(), MODULE_TYPE.Report.name()))));

        this.requestPrivilegeService.modifyModuleTypesToUse(Creator.createGroupDTOWithRequestPrivilegesToSubmit(NAMES.TEST_GROUP_NORMAL_2,
                new ArrayList<>(Arrays.asList(MODULE_TYPE.Financie.name()))));

        this.requestPrivilegeService.modifyModuleTypesToUse(Creator.createGroupDTOWithRequestPrivilegesToSubmit(NAMES.TEST_GROUP_NORMAL_3,
                new ArrayList<>(Arrays.asList(MODULE_TYPE.Financie.name()))));
        // group 8 -> no request type to solver -> should throw error
    }

    private void insertTicketPrivilegesForGroupsToSolve(){
        this.requestPrivilegeService.modifyTicketTypeToSolve(Creator.createGroupDTOWithTicketPrivileges(NAMES.TEST_GROUP_SOLVER_1,
                new ArrayList<>(Arrays.asList(Creator.createTicketPrivilegeDTO(TICKET_TYPE.Software.name(), NAMES.SOFTWARE_1),
                        Creator.createTicketPrivilegeDTO(TICKET_TYPE.Software.name(), NAMES.SOFTWARE_2),
                        Creator.createTicketPrivilegeDTO(TICKET_TYPE.Hardware.name(), NAMES.HARDWARE_1),
                        Creator.createTicketPrivilegeDTO(TICKET_TYPE.Hardware.name(), NAMES.HARDWARE_2),
                        Creator.createTicketPrivilegeDTO(TICKET_TYPE.Server.name(), NAMES.SERVER_1),
                        Creator.createTicketPrivilegeDTO(TICKET_TYPE.Užívateľ.name(), null),
                        Creator.createTicketPrivilegeDTO(TICKET_TYPE.Iné.name(), null)
                        ))));

        this.requestPrivilegeService.modifyTicketTypeToSolve(Creator.createGroupDTOWithTicketPrivileges(NAMES.TEST_GROUP_SOLVER_3,
                new ArrayList<>(Arrays.asList(Creator.createTicketPrivilegeDTO(TICKET_TYPE.Software.name(), NAMES.SOFTWARE_1),
                        Creator.createTicketPrivilegeDTO(TICKET_TYPE.Software.name(), NAMES.SOFTWARE_2),
                        Creator.createTicketPrivilegeDTO(TICKET_TYPE.Software.name(), NAMES.SOFTWARE_3),
                        Creator.createTicketPrivilegeDTO(TICKET_TYPE.Software.name(), NAMES.SOFTWARE_4),
                        Creator.createTicketPrivilegeDTO(TICKET_TYPE.Hardware.name(), NAMES.HARDWARE_1),
                        Creator.createTicketPrivilegeDTO(TICKET_TYPE.Hardware.name(), NAMES.HARDWARE_2),
                        Creator.createTicketPrivilegeDTO(TICKET_TYPE.Hardware.name(), NAMES.HARDWARE_3),
                        Creator.createTicketPrivilegeDTO(TICKET_TYPE.Hardware.name(), NAMES.HARDWARE_4),
                        Creator.createTicketPrivilegeDTO(TICKET_TYPE.Server.name(), NAMES.SERVER_1),
                        Creator.createTicketPrivilegeDTO(TICKET_TYPE.Server.name(), NAMES.SERVER_2),
                        Creator.createTicketPrivilegeDTO(TICKET_TYPE.Užívateľ.name(), null),
                        Creator.createTicketPrivilegeDTO(TICKET_TYPE.Iné.name(), null)
                ))));
    }

    private void insertFinanceTypePrivilegesForGroupsToSubmit(){
        this.requestPrivilegeService.modifyFinanceTypeToSubmit(Creator.createGroupDTOWithFinanceType(NAMES.TEST_GROUP_NORMAL_2,
                new ArrayList<>(Arrays.asList(NAMES.FINANCE_TYPE_1, NAMES.FINANCE_TYPE_2, NAMES.FINANCE_TYPE_3 ))));

        this.requestPrivilegeService.modifyFinanceTypeToSubmit(Creator.createGroupDTOWithFinanceType(NAMES.TEST_GROUP_NORMAL_3,
                new ArrayList<>(Arrays.asList(NAMES.FINANCE_TYPE_1, NAMES.FINANCE_TYPE_2, NAMES.FINANCE_TYPE_3,
                        NAMES.FINANCE_TYPE_4,NAMES.FINANCE_TYPE_5 ))));

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


        Ticket ticket1 = this.ticketService.createTicket(Creator.createTicketDTO(user10.getUsername(),REQUEST_PRIORITY.SMALL.name(),TICKET_TYPE.Software.name(),NAMES.SOFTWARE_1 ));
        Ticket ticket2 = this.ticketService.createTicket(Creator.createTicketDTO(user10.getUsername(),REQUEST_PRIORITY.SMALL.name(),TICKET_TYPE.Software.name(),NAMES.SOFTWARE_1 ));
        Ticket ticket3 = this.ticketService.createTicket(Creator.createTicketDTO(user10.getUsername(),REQUEST_PRIORITY.SMALL.name(),TICKET_TYPE.Software.name(),NAMES.SOFTWARE_1 ));
        Ticket ticket4 = this.ticketService.createTicket(Creator.createTicketDTO(user10.getUsername(),REQUEST_PRIORITY.SMALL.name(),TICKET_TYPE.Software.name(),NAMES.SOFTWARE_2 ));
        Ticket ticket5 = this.ticketService.createTicket(Creator.createTicketDTO(user9.getUsername(),REQUEST_PRIORITY.SMALL.name(),TICKET_TYPE.Software.name(),NAMES.SOFTWARE_2 ));
        Ticket ticket6 = this.ticketService.createTicket(Creator.createTicketDTO(user9.getUsername(),REQUEST_PRIORITY.SMALL.name(),TICKET_TYPE.Software.name(),NAMES.SOFTWARE_3 ));
        Ticket ticket7 = this.ticketService.createTicket(Creator.createTicketDTO(user9.getUsername(),REQUEST_PRIORITY.SMALL.name(),TICKET_TYPE.Software.name(),NAMES.SOFTWARE_3 ));

        Ticket ticket8 = this.ticketService.createTicket(Creator.createTicketDTO(user8.getUsername(),REQUEST_PRIORITY.SMALL.name(),TICKET_TYPE.Hardware.name(),NAMES.HARDWARE_1 ));
        Ticket ticket9 = this.ticketService.createTicket(Creator.createTicketDTO(user10.getUsername(),REQUEST_PRIORITY.SMALL.name(),TICKET_TYPE.Hardware.name(),NAMES.HARDWARE_3 ));
        Ticket ticket10 = this.ticketService.createTicket(Creator.createTicketDTO(user8.getUsername(),REQUEST_PRIORITY.SMALL.name(),TICKET_TYPE.Hardware.name(),NAMES.HARDWARE_3 ));

        Ticket ticket11 = this.ticketService.createTicket(Creator.createTicketDTO(user8.getUsername(),REQUEST_PRIORITY.SMALL.name(),TICKET_TYPE.Server.name(),NAMES.SERVER_1 ));
        Ticket ticket12 = this.ticketService.createTicket(Creator.createTicketDTO(user9.getUsername(),REQUEST_PRIORITY.SMALL.name(),TICKET_TYPE.Server.name(),NAMES.SERVER_2 ));
        Ticket ticket13 = this.ticketService.createTicket(Creator.createTicketDTO(user9.getUsername(),REQUEST_PRIORITY.SMALL.name(),TICKET_TYPE.Server.name(),NAMES.SERVER_2 ));

        Ticket ticket14 = this.ticketService.createTicket(Creator.createTicketDTO(user8.getUsername(),REQUEST_PRIORITY.SMALL.name(),TICKET_TYPE.Užívateľ.name() ,NAMES.PERSON_1));
        Ticket ticket15 = this.ticketService.createTicket(Creator.createTicketDTO(user8.getUsername(),REQUEST_PRIORITY.SMALL.name(),TICKET_TYPE.Užívateľ.name() ,NAMES.PERSON_2));

        Ticket ticket16 = this.ticketService.createTicket(Creator.createTicketDTO(user8.getUsername(),REQUEST_PRIORITY.SMALL.name(),TICKET_TYPE.Iné.name() ,NAMES.OTHER_1));
        Ticket ticket17 = this.ticketService.createTicket(Creator.createTicketDTO(user8.getUsername(),REQUEST_PRIORITY.SMALL.name(),TICKET_TYPE.Iné.name() ,NAMES.OTHER_2));

        Report report1 = this.reportService.createReport(Creator.createReportDTO(user10.getUsername(),REQUEST_PRIORITY.SMALL.name(), NAMES.REPORT_TYPE_1, NAMES.REPORT_REFRESH_1 ));
        Report report2 = this.reportService.createReport(Creator.createReportDTO(user10.getUsername(),REQUEST_PRIORITY.SMALL.name(), NAMES.REPORT_TYPE_1, NAMES.REPORT_REFRESH_1 ));
        Report report3 = this.reportService.createReport(Creator.createReportDTO(user8.getUsername(),REQUEST_PRIORITY.SMALL.name(), NAMES.REPORT_TYPE_1, NAMES.REPORT_REFRESH_1 ));

        Finance finance1 = this.financeService.createFinance(Creator.createFinanceDTO(user6.getUsername(),REQUEST_PRIORITY.SMALL.name(), NAMES.FINANCE_TYPE_1));
        Finance finance2 = this.financeService.createFinance(Creator.createFinanceDTO(user10.getUsername(),REQUEST_PRIORITY.SMALL.name(), NAMES.FINANCE_TYPE_3));
        // ------------------------------------------------------------------

        this.requestManagementService.saveOrUpdateRequest(Arrays.asList(ticket1,ticket2,ticket3, ticket4,ticket5,ticket6,ticket7,ticket8,ticket9,ticket10,ticket11,
                ticket12,ticket13,ticket14,ticket15,ticket16,ticket17,report1,report2,report3,finance1,finance2));

        ticket1.setAssigned(user2);
        RequestCommentDTO requestCommentDTO = Creator.createRequestCommentDTO(ticket1.getId(),user10.getUsername(),false);
        RequestComment requestComment1 = this.requestCommentService.createRequestComment(requestCommentDTO);
        RequestComment requestComment2 = this.requestCommentService.createRequestComment(Creator.createRequestCommentDTO(ticket2.getId(),user10.getUsername(),false));
        RequestCommentDTO requestCommentDTO1 = Creator.createRequestCommentDTO(ticket2.getId(),user2.getUsername(),true);
        RequestComment requestComment3 = this.requestCommentService.createRequestComment(requestCommentDTO1);
        RequestComment requestComment4 = this.requestCommentService.createRequestComment(Creator.createRequestCommentDTO(ticket5.getId(),user2.getUsername(),true));
        RequestComment requestComment5 = this.requestCommentService.createRequestComment(Creator.createRequestCommentDTO(ticket5.getId(),user2.getUsername(),false));
        RequestComment requestComment6 = this.requestCommentService.createRequestComment(Creator.createRequestCommentDTO(ticket5.getId(),user2.getUsername(),true));
        RequestComment requestComment7 = this.requestCommentService.createRequestComment(Creator.createRequestCommentDTO(report1.getId(),user4.getUsername(),true));
        RequestComment requestComment8 = this.requestCommentService.createRequestComment(Creator.createRequestCommentDTO(report1.getId(),user4.getUsername(),false));
        RequestComment requestComment9 = this.requestCommentService.createRequestComment(Creator.createRequestCommentDTO(finance1.getId(),user4.getUsername(),false));
        // save created comments
        this.requestCommentService.saveOrUpdateComment(Arrays.asList(requestComment1,requestComment2,requestComment3,requestComment4,requestComment5,requestComment6,
                requestComment7,requestComment8,requestComment9));
        // -------------------------------------------------------------------------

        // assign user on comments
        RequestCommentDTO requestCommentDTO3 = this.requestConverter.convertRequestCommentToDTO(requestComment3);
        RequestCommentDTO requestCommentDTO4 = this.requestConverter.convertRequestCommentToDTO(requestComment4);
        RequestCommentDTO requestCommentDTO6 = this.requestConverter.convertRequestCommentToDTO(requestComment6);
        RequestCommentDTO requestCommentDTO7 = this.requestConverter.convertRequestCommentToDTO(requestComment7);

        requestCommentDTO3.setGroupsToShare(new ArrayList<>(Arrays.asList(NAMES.TEST_GROUP_SOLVER_1)));
        requestCommentDTO4.setGroupsToShare(new ArrayList<>(Arrays.asList(NAMES.TEST_GROUP_SOLVER_1)));
        requestCommentDTO6.setGroupsToShare(new ArrayList<>(Arrays.asList(NAMES.TEST_GROUP_SOLVER_3)));
        requestCommentDTO7.setGroupsToShare(new ArrayList<>(Arrays.asList(NAMES.TEST_GROUP_SOLVER_2)));
        this.requestCommentService.modifyComment(requestCommentDTO3);
        this.requestCommentService.modifyComment(requestCommentDTO4);
        this.requestCommentService.modifyComment(requestCommentDTO6);
        this.requestCommentService.modifyComment(requestCommentDTO7);

        requestCommentDTO7.getGroupsToShare().add(NAMES.TEST_GROUP_SOLVER_3);
        this.requestCommentService.modifyComment(requestCommentDTO7);
        // -------------------------------------------------------------------------

        UserSimpleDTO userSimpleDTOUser2 = Creator.createUserSimpleDTO(user2);
        UserSimpleDTO userSimpleDTOUser3 = Creator.createUserSimpleDTO(user3);
        UserSimpleDTO userSimpleDTOUser4 = Creator.createUserSimpleDTO(user4);
        UserSimpleDTO userSimpleDTOUser5 = Creator.createUserSimpleDTO(user5);
        UserSimpleDTO userSimpleDTOUser6 = Creator.createUserSimpleDTO(user6);
        UserSimpleDTO userSimpleDTOUser8 = Creator.createUserSimpleDTO(user8);
        UserSimpleDTO userSimpleDTOUser9 = Creator.createUserSimpleDTO(user9);
        UserSimpleDTO userSimpleDTOUser10 = Creator.createUserSimpleDTO(user10);

        // assign -> assigned, solver, closed
        TicketDTO ticketDTO2 = (TicketDTO) this.requestConverter.convertRequestToRequestDTO(ticket2);
        TicketDTO ticketDTO3 = (TicketDTO) this.requestConverter.convertRequestToRequestDTO(ticket3);
        TicketDTO ticketDTO4 = (TicketDTO) this.requestConverter.convertRequestToRequestDTO(ticket4);
        this.requestManagementService.setAssignUserAndSave(ticket1.getId(), userSimpleDTOUser2);
        this.requestManagementService.setAssignUserAndSave(ticketDTO2.getId(), userSimpleDTOUser2);
        this.requestManagementService.setSolverUserAndSave(ticketDTO2.getId(), userSimpleDTOUser2, "SOLUTION");
        this.requestManagementService.setAssignUserAndSave(ticketDTO3.getId(), userSimpleDTOUser2);
        this.requestManagementService.setAssignUserAndSave(ticketDTO4.getId(), userSimpleDTOUser3);
        this.requestManagementService.setAssignUserAndSave(ticket5.getId(), userSimpleDTOUser5);
        this.requestManagementService.setSolverUserAndSave(ticket5.getId(), userSimpleDTOUser5, "SOLUTION");
        this.requestManagementService.setClosedUserAndSave(ticket5.getId(), userSimpleDTOUser5);
        this.requestManagementService.setAssignUserAndSave(ticket6.getId(),userSimpleDTOUser5);
        this.requestManagementService.setSolverUserAndSave(ticket6.getId(), userSimpleDTOUser2, "SOLUTION");
        this.requestManagementService.setClosedUserAndSave(ticket6.getId(), userSimpleDTOUser2);
        this.requestManagementService.setAssignUserAndSave(ticket7.getId(), userSimpleDTOUser4);
        this.requestManagementService.setAssignUserAndSave(ticket8.getId(), userSimpleDTOUser3);
        this.requestManagementService.setAssignUserAndSave(ticket9.getId(), userSimpleDTOUser3);
        this.requestManagementService.setAssignUserAndSave(ticket10.getId(), userSimpleDTOUser10);
        this.requestManagementService.setAssignUserAndSave(ticket13.getId(), userSimpleDTOUser4);
        this.requestManagementService.setAssignUserAndSave(ticket15.getId(), userSimpleDTOUser10);
        this.requestManagementService.setAssignUserAndSave(ticket16.getId(), userSimpleDTOUser2);
        this.requestManagementService.setAssignUserAndSave(report1.getId(), userSimpleDTOUser4);
        this.requestManagementService.setAssignUserAndSave(report3.getId(), userSimpleDTOUser5);
        this.requestManagementService.setAssignUserAndSave(finance1.getId(), userSimpleDTOUser4);
        // -------------------------------------------------------------------------

        // set watching requests
        this.requestManagementService.setWatchRequestAndSave(ticket2.getId(),this.userConverter.convertUserToSimpleDTO(user3));
        this.requestManagementService.setWatchRequestAndSave(ticket2.getId(),this.userConverter.convertUserToSimpleDTO(user2));
        this.requestManagementService.setWatchRequestAndSave(ticket3.getId(),this.userConverter.convertUserToSimpleDTO(user3));
        this.requestManagementService.setWatchRequestAndSave(ticket4.getId(),this.userConverter.convertUserToSimpleDTO(user2));
        this.requestManagementService.setWatchRequestAndSave(ticket2.getId(),this.userConverter.convertUserToSimpleDTO(user5));

    }





}
