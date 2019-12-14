package rc.bootsecurity.test.inserter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.RequestPosition;
import rc.bootsecurity.model.entity.request.RequestPriority;
import rc.bootsecurity.model.entity.ModuleType;
import rc.bootsecurity.model.enums.REQUEST_POSITION;
import rc.bootsecurity.model.enums.REQUEST_PRIORITY;
import rc.bootsecurity.model.enums.MODULE_TYPE;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.report.*;
import rc.bootsecurity.repository.request.RequestPositionRepository;
import rc.bootsecurity.repository.request.RequestPriorityRepository;
import rc.bootsecurity.repository.ModuleTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.repository.ticket.TicketRepository;
import rc.bootsecurity.repository.ticket.TicketSubtypeRepository;
import rc.bootsecurity.repository.ticket.TicketTypeRepository;
import rc.bootsecurity.test.creator.Creator;

import java.util.*;


@Service
public class Inserter {
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
    private ReportAccessStoredRepository reportAccessStoredRepository;
    @Autowired
    private ReportAccessRepository reportAccessRepository;
    @Autowired
    private ReportRepository reportRepository;
    @Autowired
    private ReportRefreshRepository reportRefreshRepository;
    @Autowired
    private ReportTypeRepository reportTypeRepository;


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

        /*Group group1 = Creator.createGroup("TESTGROUP1" , user1, new HashSet<>());
        Group group2 = Creator.createGroup("TESTGROUP2" , user1, new HashSet<>());
        Group group3 = Creator.createGroup("TESTGROUP3" , user1, new HashSet<>());
        Group group4 = Creator.createGroup("TESTGROUP4" , user1, new HashSet<>());

        Group group5 = Creator.createGroup("TESTGROUP5" , user2, new HashSet<>());
        Group group6 = Creator.createGroup("TESTGROUP6" , user2, new HashSet<>());
        Group group7 = Creator.createGroup("TESTGROUP7" , user2, new HashSet<>());*/

        this.groupRepository.saveAll(Arrays.asList(group1,group2,group3,group4,group5,group6,group7));

        /*user1.setGroupsInvolved(new ArrayList<>(Arrays.asList(group1,group2,group3,group4,group5,group6,group7)));
        user2.setGroupsInvolved(new ArrayList<>(Arrays.asList(group1,group2,group3,group4,group5,group6,group7)));
        user3.setGroupsInvolved(new ArrayList<>(Arrays.asList(group1,group2,group3,group5,group6)));
        user4.setGroupsInvolved(new ArrayList<>(Arrays.asList(group1,group2,group3,group5)));
        user5.setGroupsInvolved(new ArrayList<>(Arrays.asList(group1)));
        user6.setGroupsInvolved(new ArrayList<>(Arrays.asList(group1)));
        user7.setGroupsInvolved(new ArrayList<>(Arrays.asList(group1)));
        user8.setGroupsInvolved(new ArrayList<>(Arrays.asList(group1)));
        user9.setGroupsInvolved(new ArrayList<>(Arrays.asList(group1)));
        user10.setGroupsInvolved(new ArrayList<>(Arrays.asList(group1)));
        user11.setGroupsInvolved(new ArrayList<>(Arrays.asList(group1)));
        user12.setGroupsInvolved(new ArrayList<>(Arrays.asList(group5)));
        this.userRepository.saveAll(new ArrayList<>(Arrays.asList(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10,user11,user12)));*/
    }

    public void insertRequestTypes(){
        RequestPosition requestPosition1 = Creator.createRequestPosition(REQUEST_POSITION.CREATED.name());
        RequestPosition requestPosition2 = Creator.createRequestPosition(REQUEST_POSITION.CLOSED.name());
        RequestPosition requestPosition3 = Creator.createRequestPosition(REQUEST_POSITION.IN_PROGRESS.name());
        this.requestPositionRepository.saveAll(List.of(requestPosition1, requestPosition2,requestPosition3));

        RequestPriority requestPriority1 = Creator.createRequestPriority(REQUEST_PRIORITY.SMALL.name());
        RequestPriority requestPriority2 = Creator.createRequestPriority(REQUEST_PRIORITY.MEDIUM.name());
        RequestPriority requestPriority3 = Creator.createRequestPriority(REQUEST_PRIORITY.LARGE.name());
        this.requestPriorityRepository.saveAll(List.of(requestPriority1, requestPriority2, requestPriority3));

        ModuleType moduleType1 = Creator.createRequestType(MODULE_TYPE.TICKET.name());
        ModuleType moduleType2 = Creator.createRequestType(MODULE_TYPE.REPORT.name());
        ModuleType moduleType3 = Creator.createRequestType(MODULE_TYPE.FINANCE.name());
        this.moduleTypeRepository.saveAll(List.of(moduleType1, moduleType2, moduleType3));
    }


    public void insertRequestTypesPrivilegesForGroups(){
        insertRequestTypes();

        Group group1 = this.groupRepository.findByGroupName("TESTGROUP1");
        Group group2 = this.groupRepository.findByGroupName("TESTGROUP2");
        Group group3 = this.groupRepository.findByGroupName("TESTGROUP3");
        Group group4 = this.groupRepository.findByGroupName("TESTGROUP4");
        Group group5 = this.groupRepository.findByGroupName("TESTGROUP5");

        ModuleType moduleType1 = this.moduleTypeRepository.findByName(MODULE_TYPE.TICKET.name()); // Set.of(group1, group5), Set.of(group1 , group2,group3,group4)
        ModuleType moduleType2 = this.moduleTypeRepository.findByName(MODULE_TYPE.REPORT.name()); // Set.of(group1), Set.of(group1,group2,group3)
        ModuleType moduleType3 = this.moduleTypeRepository.findByName(MODULE_TYPE.FINANCE.name()); // Set.of(group1), Set.of(group2,group3)


        group1.setRequestTypesToSubmit(new HashSet<>(Arrays.asList(moduleType1, moduleType2)));
        group1.setModuleTypesToManage(new HashSet<>(Arrays.asList(moduleType1, moduleType2, moduleType3)));
        group2.setRequestTypesToSubmit(new HashSet<>(Arrays.asList(moduleType1, moduleType2, moduleType3)));
        group3.setRequestTypesToSubmit(new HashSet<>(Arrays.asList(moduleType1, moduleType2, moduleType3)));
        group4.setRequestTypesToSubmit(new HashSet<>(Arrays.asList(moduleType1)));
        group5.setModuleTypesToManage(new HashSet<>(Arrays.asList(moduleType1)));

        this.groupRepository.saveAll(List.of(group1, group2,group3, group4, group5));
    }


}
