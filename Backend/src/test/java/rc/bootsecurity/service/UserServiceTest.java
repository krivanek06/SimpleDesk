package rc.bootsecurity.service;

import io.zonky.test.db.AutoConfigureEmbeddedDatabase;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.RequestPosition;
import rc.bootsecurity.model.entity.request.RequestPriority;
import rc.bootsecurity.model.entity.request.RequestType;
import rc.bootsecurity.model.entity.ticket.*;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.request.RequestPositionRepository;
import rc.bootsecurity.repository.request.RequestPriorityRepository;
import rc.bootsecurity.repository.request.RequestTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.repository.ticket.TicketRepository;
import rc.bootsecurity.repository.ticket.TicketSubtypeRepository;
import rc.bootsecurity.repository.ticket.TicketTypeRepository;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static org.assertj.core.api.Assertions.assertThat;


@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureEmbeddedDatabase
public class UserServiceTest {

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



    public User createUser(String firstName, String lastName, String username, String email, String password){
        User user = new User();
        user.setPassword(new BCryptPasswordEncoder().encode(password));
        user.setEmail(email);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setUsername(username);

        return user;
    }


    public Group createGroup(String groupName, User manager, Set<User> users){
        Group group = new Group();
        group.setGroupName(groupName);
        group.setGroupManager(manager);
        group.setUsersInGroup(users);

        return group;
    }

    public RequestType createRequestType(String name, Set<Group> groupToSolve, Set<Group> groupToSubmit){
        RequestType requestType = new RequestType();
        requestType.setName(name);
        requestType.setGroupsToSolveDifferentRequests(groupToSolve);
        requestType.setGroupsToSubmitDifferentRequests(groupToSubmit);

        return requestType;
    }

    public TicketPrivileges creatTicketPrivileges(Group group, TicketType ticketType, String applicatioName){
        TicketPrivileges ticketPrivileges = new TicketPrivileges();
        ticketPrivileges.setGroup(group);
        ticketPrivileges.setTicketType(ticketType);
        ticketPrivileges.setApplicationName(applicatioName);

        return ticketPrivileges;
    }

    public Ticket createTicket(String subject, String request, TicketType ticketType, String ticketSubtypeName, RequestPriority requestPriority,  RequestPosition requestPosition, User user){
        Ticket ticket = new Ticket();
        ticket.setSubject(subject);
        ticket.setRequest(request);
        ticket.setTicketType(ticketType);
        ticket.setTicketSubtypeName(ticketSubtypeName);
        ticket.setRequestPriority(requestPriority);
        ticket.setRequestPosition(requestPosition);
        ticket.setCreator(user);

        return ticket;
    }

    public RequestPosition createRequestPosition(String name){
        RequestPosition requestPosition = new RequestPosition();
        requestPosition.setName(name);

        return requestPosition;
    }

    public Software creatSoftware(String name, TicketType ticketType){
        Software software = new Software();
        software.setName(name);
        software.setTicketType(ticketType);
        return software;
    }

    public TicketType createTicketType(String name){
        TicketType ticketType = new TicketType();
        ticketType.setName(name);

        return ticketType;
    }

    public TicketSubtype createSoftwareSubtype(String name, TicketType ticketType){
        TicketSubtype software = new Software();
        software.setName(name);
        software.setTicketType(ticketType);

        return software;
    }

    public TicketSubtype createHardwareSubtype(String name, TicketType ticketType){
        TicketSubtype hardware = new Hardware();
        hardware.setName(name);
        hardware.setTicketType(ticketType);

        return hardware;
    }

    public RequestPriority createRequestPriority(String name){
        RequestPriority requestPriority = new RequestPriority();
        requestPriority.setName(name);

        return requestPriority;
    }



    /**
     *. create 2 users, add them to a group, one will manager to another (test), create application - tickets
     * add privileges to group ,for application (test), privileges for tickets (test)
     */
    @Test
    public void userGroupPrivilegesTest(){
        User user1 = this.createUser("Eduard" , "krivanek", "user1" , "fakemail@gmail.com" , "123456");
        User user2 = this.createUser("Tomas" , "Maly", "user2" , "fakemail2@gmail.com" , "123456");
        User user3 = this.createUser("Test" , "Test", "user3" , "fakemail3@gmail.com" , "123456");
        this.userRepository.save(user1);
        this.userRepository.save(user2);
        this.userRepository.save(user3);

        // create groups
        Group group1 = this.createGroup("TESTGROUP1" , user1, Set.of(user1,user2));
        Group group2 = this.createGroup("TESTGROUP2" , user1, Set.of(user1,user3));
        Group group3 = this.createGroup("TESTGROUP3" , user2, Set.of(user2,user3));
        this.groupRepository.save(group1);
        this.groupRepository.save(group2);
        this.groupRepository.save(group3);

        // create application ticket
        RequestType requestType1 = this.createRequestType("Tickets", Set.of(group1), Set.of(group1 , group2));
        RequestType requestType2 = this.createRequestType("Reports", Set.of(group1), Set.of(group3));
        this.requestTypeRepository.save(requestType1);
        this.requestTypeRepository.save(requestType2);

        // create ticket types
        TicketType ticketTypeSoftware = this.createTicketType("Software");
        TicketType ticketTypeHardware = this.createTicketType("Hardware");
        this.ticketTypeRepository.save(ticketTypeSoftware);
        this.ticketTypeRepository.save(ticketTypeHardware);

        // create software and hardware types
        TicketSubtype software1 = this.createSoftwareSubtype("Software1", ticketTypeSoftware);
        TicketSubtype software2 = this.createSoftwareSubtype("Software2", ticketTypeSoftware);
        List<TicketSubtype> software = List.of(software1, software2);

        TicketSubtype hardware1 = this.createSoftwareSubtype("Hardware1", ticketTypeHardware);
        TicketSubtype hardware2 = this.createSoftwareSubtype("Hardware2", ticketTypeHardware);
        List<TicketSubtype> hardware = List.of( hardware1, hardware2);

        this.ticketSubtypeRepository.saveAll(software);
        this.ticketSubtypeRepository.saveAll(hardware);

        // creating privileges on tickets
        TicketPrivileges ticketPrivilegesSoftware1 = this.creatTicketPrivileges(group1 , ticketTypeSoftware , software.get(0).getName());
        TicketPrivileges ticketPrivilegesSoftware2 = this.creatTicketPrivileges(group1 , ticketTypeSoftware , software.get(1).getName());
        TicketPrivileges ticketPrivilegesHardware1 = this.creatTicketPrivileges(group1 , ticketTypeSoftware , hardware.get(0).getName());
        TicketPrivileges ticketPrivilegesHardware2 = this.creatTicketPrivileges(group1 , ticketTypeSoftware , hardware.get(1).getName());

        this.ticketPrivilegesRepository.saveAll(List.of(ticketPrivilegesHardware1, ticketPrivilegesHardware2, ticketPrivilegesSoftware1, ticketPrivilegesSoftware2));

        // creating request priorities
        RequestPriority requestPriorityBig = this.createRequestPriority("big");
        this.requestPriorityRepository.save(requestPriorityBig);

        RequestPosition requestPositionStart = this.createRequestPosition("start");
        this.requestPositionRepository.save(requestPositionStart);

        // creating actual tickets
        Ticket ticket = this.createTicket("This is a test subject", "This is a test request",
                ticketTypeSoftware , software.get(0).getName(), requestPriorityBig , requestPositionStart , user1);
        this.ticketRepository.save(ticket);


        // test if user is save correctly
        assertThat(user1).isEqualTo(this.userRepository.findByUsername(user1.getUsername()).get());

        // testing if groups are correctly save for user
        assertThat(this.userRepository.findAllByGroupsInvolved(group2)).containsOnly(user1, user3);
        assertThat(this.groupRepository.findAllByGroupManager(user1).get()).containsExactly(group1, group2);
        assertThat(this.groupRepository.findAllByUsersInGroup(user2).get()).containsOnly(group1 , group3);

        // testing request types
        assertThat(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(group2)).containsExactly(requestType1);
        assertThat(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(group3)).containsExactly(requestType2);
        assertThat(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(group1)).containsOnly(requestType1, requestType2);

        // test all inserted ticket types
        List<TicketType> findTicketType = new ArrayList<>();
        this.ticketTypeRepository.findAll().forEach(findTicketType::add);
        assertThat(findTicketType).containsExactly(ticketTypeSoftware, ticketTypeHardware);

        // test ticket subtypes
        assertThat(this.ticketSubtypeRepository.findAllByTicketType(ticketTypeSoftware)).containsExactly(software1, software2);
        assertThat(this.ticketSubtypeRepository.findAllByTicketType(ticketTypeHardware)).containsExactly(hardware1, hardware2);

        // test user's privileges
        Set<Group> groupsForUser1 = new HashSet<>(this.groupRepository.findAllByUsersInGroup(user1).get());
        assertThat(groupsForUser1).containsOnly(group1, group2);
        assertThat(this.requestTypeRepository.findByGroupsToSubmitDifferentRequestsIn(groupsForUser1)).containsOnly(requestType1);

        // test group privileges
        assertThat(this.ticketPrivilegesRepository.findAllByGroup(group1).get()).containsExactly(ticketPrivilegesHardware1,
                ticketPrivilegesHardware2,
                ticketPrivilegesSoftware1,
                ticketPrivilegesSoftware2);

        // test tickets to specific user
        assertThat(this.ticketRepository.findAllByCreator(user1)).containsExactly(ticket);

    }




}