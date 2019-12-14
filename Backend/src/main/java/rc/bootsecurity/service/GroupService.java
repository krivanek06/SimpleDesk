package rc.bootsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.dto.UserSimpleDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.finance.FinanceType;
import rc.bootsecurity.model.entity.ModuleType;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.ModuleTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.service.request.RequestConverterService;

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
    private ModuleTypeRepository moduleTypeRepository;
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


    public void addUserIntoGroupsAndSave(UserSimpleDTO userDTO, List<String> groupNames){
        List<Group> groups = this.groupRepository.findAllByGroupNameIn(groupNames);
        User user = this.userRepository.findUserById(userDTO.getId());
        groups.forEach(group -> group.getUsersInGroup().add(user));
        this.groupRepository.saveAll(groups);
    }

    public void removeUserFromGroupsAndSave(UserSimpleDTO userDTO, List<String> groupNames){
        List<Group> groups = this.groupRepository.findAllByGroupNameIn(groupNames);
        User user = this.userRepository.findUserById(userDTO.getId());
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
        groupDTO.setModuleTypeToManage(group.getModuleTypesToManage() != null ? group.getModuleTypesToManage().stream()
                .map(ModuleType::getName).collect(Collectors.toList()) : null);
        groupDTO.setRequestTypesToSubmit(group.getRequestTypesToSubmit() != null ? group.getRequestTypesToSubmit().stream()
                .map(ModuleType::getName).collect(Collectors.toList()) : null);
        groupDTO.setTicketPrivilegesList(group.getTicketPrivilegesList() != null ? group.getTicketPrivilegesList().stream()
                .map(ticketPrivileges -> this.requestConverterService.convertTicketPrivilegeToDTO(ticketPrivileges)).collect(Collectors.toList()) : null);

        return groupDTO;
    }

}
