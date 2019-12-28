package rc.bootsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.dto.UserSimpleDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.ModuleTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.utils.converter.RequestConverter;
import rc.bootsecurity.utils.converter.UserConverter;

import java.util.*;

@Service
public class GroupService {

    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private UserRepository userRepository;

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

    public GroupDTO getGroupDetails(String groupName){
        GroupDTO groupDTO = new GroupDTO();

        return groupDTO;
    }

}
