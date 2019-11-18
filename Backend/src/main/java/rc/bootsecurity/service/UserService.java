package rc.bootsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.RequestContainerDTO;
import rc.bootsecurity.model.dto.UserDTOSimple;
import rc.bootsecurity.model.dto.UserPrivilegeDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestType;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.request.RequestTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.utils.modelmapper.UserModelMapper;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TicketPrivilegesRepository ticketPrivilegesRepository;

    @Autowired
    private UserModelMapper userModelMapper;
    @Autowired
    private GroupService groupService;

    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private RequestTypeRepository requestTypeRepository;




    public UserPrivilegeDTO getPrivilegesForUser(User user){
        UserPrivilegeDTO userPrivilegeDTO = new UserPrivilegeDTO();
        List<Group> groupInvolved = this.groupRepository.findAllByUsersInGroup(user);
        groupInvolved.forEach(group -> this.groupService.setGroupPrivilegeInformation(group));

        // distinct requests name to solve
        userPrivilegeDTO.setSolveRequests(groupInvolved.stream().flatMap(group -> group.getRequestTypesToSolve()
                .stream().map(RequestType::getName)).collect(Collectors.toSet()));

        // distinct requests name to submit
        userPrivilegeDTO.setSubmitRequests(groupInvolved.stream().flatMap(group -> group.getRequestTypesToSubmit()
                .stream().map(RequestType::getName)).collect(Collectors.toSet()));

        // distinct ticket types
        userPrivilegeDTO.setSolveTickets(this.getTicketPrivileges(groupInvolved));

        // distinct finance types to submit - DOTO !!!!!!

        return userPrivilegeDTO;
    }

    // helper method to fetch distinct ticket privileges
    private Map<String, Set<String>> getTicketPrivileges(List<Group> groups){
        Map<String, Set<String>> ticketPrivilegesHashMap = new HashMap<>();
        groups.forEach(group -> group.getTicketPrivilegesList().forEach(privilege -> {
            if(ticketPrivilegesHashMap.containsKey(privilege.getTicketType().getName())) {
                ticketPrivilegesHashMap.get(privilege.getTicketType().getName()).add(privilege.getApplicationName());
            }else {
                ticketPrivilegesHashMap.put(privilege.getTicketType().getName(), new HashSet<>());
                ticketPrivilegesHashMap.get(privilege.getTicketType().getName()).add(privilege.getApplicationName());
            }
        }));
        return ticketPrivilegesHashMap;
    }


    public User loadUser(String name){
        return this.userRepository.findByUsername(name).orElseThrow(() -> new UsernameNotFoundException("Not found " + name ));
    }

    public UserDTOSimple getUserDTOSimple(String name){
        User user = this.loadUser(name);

        user.setGroupsToManage(this.groupService.getGroupsToManageForUser(user));
        user.setGroupsInvolved(this.groupService.getInvolvedGroupsForUser(user));

        return this.userModelMapper.getUserDTOSimple(user);
    }






}
