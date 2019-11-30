package rc.bootsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.dto.UserDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.finance.FinanceType;
import rc.bootsecurity.model.entity.request.RequestType;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.request.RequestTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.service.request.RequestConverterService;
import rc.bootsecurity.utils.modelmapper.UserModelMapper;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class GroupService {

    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TicketPrivilegesRepository ticketPrivilegesRepository;
    @Autowired
    private RequestTypeRepository requestTypeRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private RequestConverterService requestConverterService;



    public List<Group> getInvolvedGroupsForUser(User user){
        return this.groupRepository.findAllByUsersInGroup(user);
    }

    public List<Group> getGroupsToManageForUser(User user){
        return this.groupRepository.findAllByGroupManager(user).orElseGet(ArrayList::new);
    }

    /**
     * set privileges for specific group
     * 1. ticket privileges
     * 2. requests which a group can solve
     * 3. requests which a group can submit
     */
    public void setGroupPrivilegeInformation(Group group){
        group.setRequestTypesToSolve(new HashSet<>(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(group).orElse(new ArrayList<>())));
        group.setRequestTypesToSubmit(new HashSet<>(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(group).orElse(new ArrayList<>())));
        group.setTicketPrivilegesList(this.ticketPrivilegesRepository.findAllByGroup(group).orElse(new ArrayList<>()));
    }

    public void addUserIntoGroupsAndSave(UserDTO userDTO, List<String> groupNames){
        List<Group> groups = this.groupRepository.findAllByGroupNameIn(groupNames);
        User user = this.userRepository.findByUsername(userDTO.getUsername()).get();
        groups.forEach(group -> group.getUsersInGroup().add(user));
        this.groupRepository.saveAll(groups);
    }

    public void removeUserFromGroupsAndSave(UserDTO userDTO, List<String> groupNames){
        List<Group> groups = this.groupRepository.findAllByGroupNameIn(groupNames);
        User user = this.userRepository.findByUsername(userDTO.getUsername()).get();
        groups.forEach(group -> group.getUsersInGroup().remove(user));

        this.groupRepository.saveAll(groups);
    }

    public GroupDTO convertGroupToDTO(Group group){
        GroupDTO groupDTO = new GroupDTO();
        groupDTO.setId(group.getId());
        groupDTO.setName(group.getGroupName());
        groupDTO.setDescription(group.getDescription());
        groupDTO.setEmail(group.getEmail());
        groupDTO.setGroupManager(this.userService.convertUserToSimpleDTO(group.getGroupManager()));
        groupDTO.setUsersInGroup(group.getUsersInGroup() != null ? group.getUsersInGroup().stream()
                .map(user -> this.userService.convertUserToSimpleDTO(user)).collect(Collectors.toList()) : null);
        groupDTO.setFinanceTypes(group.getFinanceTypes() != null ? group.getFinanceTypes().stream()
                .map(FinanceType::getName).collect(Collectors.toList()) : null);
        groupDTO.setRequestTypesToSolve(group.getRequestTypesToSolve() != null ? group.getRequestTypesToSolve().stream()
                .map(RequestType::getName).collect(Collectors.toList()) : null);
        groupDTO.setRequestTypesToSubmit(group.getRequestTypesToSubmit() != null ? group.getRequestTypesToSubmit().stream()
                .map(RequestType::getName).collect(Collectors.toList()) : null);
        groupDTO.setTicketPrivilegesList(group.getTicketPrivilegesList() != null ? group.getTicketPrivilegesList().stream()
                .map(ticketPrivileges -> this.requestConverterService.convertTicketPrivilegeToDTO(ticketPrivileges)).collect(Collectors.toList()) : null);

        return groupDTO;
    }

}
