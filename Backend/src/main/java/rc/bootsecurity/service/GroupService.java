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
import rc.bootsecurity.utils.converter.RequestConverter;
import rc.bootsecurity.utils.converter.UserConverter;

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

    private UserConverter userConverter = new UserConverter();
    private RequestConverter requestConverter = new RequestConverter();



    public List<Group> getInvolvedGroupsForUser(User user){
        return this.groupRepository.findAllByUsersInGroup(user);
    }

    public List<Group> getGroupsToManageForUser(User user){
        return this.groupRepository.findAllByGroupManager(user).orElseGet(ArrayList::new);
    }

    public List<Group> getGroupToWatchActivity(User user){
        return this.groupRepository.findAllByUsersWatchingGroupActivity(user).orElseGet(ArrayList::new);
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

}
