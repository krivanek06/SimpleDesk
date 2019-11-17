package rc.bootsecurity.test.inserter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.report.ReportAccess;
import rc.bootsecurity.model.entity.report.ReportAccessStored;
import rc.bootsecurity.model.entity.report.ReportRefresh;
import rc.bootsecurity.model.entity.report.ReportType;
import rc.bootsecurity.model.entity.request.RequestType;
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
import rc.bootsecurity.test.creator.Creator;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Service
public class Inserter {
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

    /*private static final Inserter instance = new Inserter();

    private Inserter(){}

    public static Inserter getInstance(){
        return instance;
    }*/

    /**
     * create some users and add them into groups
     */
    public void insertUsersWithGroups(){
        User user1 = Creator.createUser("firstname1" , "lastname1", "user1" , "fakemail@gmail.com" , "123456");
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
        User user12 = Creator.createUser("firstname12" , "lastname12", "user12" , "fakemail12@gmail.com" , "123456");

        this.userRepository.saveAll(List.of(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10,user11,user12));

        // create groups
        Group group1 = Creator.createGroup("TESTGROUP1" , user1, new HashSet<>(Arrays.asList(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10,user11)));
        Group group2 = Creator.createGroup("TESTGROUP2" , user1, new HashSet<>(Arrays.asList(user1,user2,user3,user4)));
        Group group3 = Creator.createGroup("TESTGROUP3" , user1, new HashSet<>(Arrays.asList(user1,user2,user3,user4)));
        Group group4 = Creator.createGroup("TESTGROUP4" , user1, new HashSet<>(Arrays.asList(user1,user2)));

        Group group5 = Creator.createGroup("TESTGROUP5" , user2, new HashSet<>(Arrays.asList(user1,user2,user3,user4,user12)));
        Group group6 = Creator.createGroup("TESTGROUP6" , user2, new HashSet<>(Arrays.asList(user1,user2,user3)));
        Group group7 = Creator.createGroup("TESTGROUP7" , user2, new HashSet<>(Arrays.asList(user1,user2)));

        this.groupRepository.saveAll(List.of(group1,group2,group3,group4,group5,group6,group7));
    }


    public void insertRequestTypes(){
        this.requestPositionRepository.saveAll(List.of(Creator.createRequestPosition("Position1"), Creator.createRequestPosition("Position2")));
        this.requestPriorityRepository.saveAll(List.of(Creator.createRequestPriority("Priority1"), Creator.createRequestPriority("Priority2")));

        Group group1 = this.groupRepository.findByGroupName("TESTGROUP1");
        Group group2 = this.groupRepository.findByGroupName("TESTGROUP2");
        Group group3 = this.groupRepository.findByGroupName("TESTGROUP3");
        Group group4 = this.groupRepository.findByGroupName("TESTGROUP4");
        Group group5 = this.groupRepository.findByGroupName("TESTGROUP5");

        RequestType requestType1 = Creator.createRequestType("Ticket"); // Set.of(group1, group5), Set.of(group1 , group2,group3,group4)
        RequestType requestType2 = Creator.createRequestType("Report"); // Set.of(group1), Set.of(group1,group2,group3)
        RequestType requestType3 = Creator.createRequestType("Finance"); // Set.of(group1), Set.of(group2,group3)
        this.requestTypeRepository.saveAll(List.of(requestType1,requestType2, requestType3));

        group1.setRequestTypesToSubmit(new HashSet<>(Arrays.asList(requestType1, requestType2)));
        group1.setRequestTypesToSolve(new HashSet<>(Arrays.asList(requestType1, requestType2,requestType3)));
        group2.setRequestTypesToSubmit(new HashSet<>(Arrays.asList(requestType1, requestType2,requestType3)));
        group3.setRequestTypesToSubmit(new HashSet<>(Arrays.asList(requestType1, requestType2,requestType3)));
        group4.setRequestTypesToSubmit(new HashSet<>(Arrays.asList(requestType1)));
        group5.setRequestTypesToSolve(new HashSet<>(Arrays.asList(requestType1)));

        this.groupRepository.saveAll(List.of(group1, group2,group3, group4, group5));
    }


    /**
     * create request type and options for all request type
     */
    public void insertReportForUser(){

        // create ticket types  - software and hardware types


        // ---------------------------------------------------------------------------------

       // this.requestTypeRepository.save(requestTypeReport);

        ReportType reportType1 = Creator.createReportType("reportType1");
        ReportType reportType2 = Creator.createReportType("reportType2");
        this.reportTypeRepository.saveAll(List.of(reportType1, reportType2));

        ReportRefresh reportRefresh1 = Creator.createReportRefresh("reportRefresh1");
        ReportRefresh reportRefresh2 = Creator.createReportRefresh("reportRefresh2");
        this.reportRefreshRepository.saveAll(List.of(reportRefresh1, reportRefresh2));

        ReportAccess reportAccess1 = Creator.createReportAccess("reportAccess1");
        ReportAccess reportAccess2 = Creator.createReportAccess("reportAccess2");
        this.reportAccessRepository.saveAll(List.of(reportAccess1, reportAccess2));

        ReportAccessStored reportAccessStored1 = Creator.createReportAccessStored("Path1", reportAccess1);
        ReportAccessStored reportAccessStored2 = Creator.createReportAccessStored("Path2", reportAccess1);
        ReportAccessStored reportAccessStored3 = Creator.createReportAccessStored("Path3", reportAccess2);
        ReportAccessStored reportAccessStored4 = Creator.createReportAccessStored("Path4", reportAccess2);


    }
}