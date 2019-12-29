package rc.bootsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.ApplicationPrivilegeDTO;
import rc.bootsecurity.model.dto.GroupContainerDTO;
import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.dto.UserSimpleDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.ModuleTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.utils.converter.GroupConverter;
import rc.bootsecurity.utils.converter.RequestConverter;
import rc.bootsecurity.utils.converter.UserConverter;
import rc.bootsecurity.utils.service.JsonStringParser;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class GroupService {
    private GroupConverter groupConverter = new GroupConverter();
    private JsonStringParser jsonStringParser = new JsonStringParser();

    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private UserService userService;

    public List<Group> getGroupsToManageForUser(User user){
        return this.groupRepository.findAllByGroupManager(user).orElseGet(ArrayList::new);
    }

    public List<Group> getGroupToWatchActivity(User user){
        return this.groupRepository.findAllByUsersWatchingGroupActivity(user).orElseGet(ArrayList::new);
    }


    public void addUserIntoGroupsAndSave(UserSimpleDTO userDTO, List<String> groupNames){
        List<Group> groups = this.groupRepository.findAllByGroupNameIn(groupNames);
        User user = this.userService.loadUser(userDTO.getUsername());
        groups.forEach(group -> group.getUsersInGroup().add(user));
        this.groupRepository.saveAll(groups);
    }

    public void removeUserFromGroupsAndSave(UserSimpleDTO userDTO, List<String> groupNames){
        List<Group> groups = this.groupRepository.findAllByGroupNameIn(groupNames);
        User user = this.userService.loadUser(userDTO.getUsername());
        groups.forEach(group -> group.getUsersInGroup().remove(user));

        this.groupRepository.saveAll(groups);
    }

    public GroupDTO getGroupDetails(String groupName){
        Group group = this.groupRepository.findByGroupName(groupName);
        group.setUsersInGroup(new HashSet<>(this.userService.getUsersInvolvedInGroup(group)));
        group.setUsersWatchingGroupActivity(new HashSet<>(this.userService.getUsersWatchedGroup(group)));

        GroupDTO groupDTO = this.groupConverter.convertGroupToDTO(group);

        ApplicationPrivilegeDTO applicationPrivilegeDTO = this.jsonStringParser.parseFromRawJsonToUserPrivilegeDTO(this.groupRepository.findPrivilegesForGroup(groupName));
        groupDTO.setApplicationPrivilegeDTO(applicationPrivilegeDTO);

        return groupDTO;
    }

    public GroupContainerDTO getAllGroupsForUser(String name){
        GroupContainerDTO groupContainerDTO = new GroupContainerDTO();
        User user = this.userService.loadUser(name);

        List<Group> userInGroups = this.groupRepository.findAllByUsersInGroup(user);
        List<Group> managerOfGroups = this.groupRepository.findAllByGroupManager(user).orElse(new ArrayList<>());
        List<Group> watchedGroupActivities = this.groupRepository.findAllByUsersWatchingGroupActivity(user).orElse(new ArrayList<>());

        groupContainerDTO.setUserInGroups(userInGroups != null ? userInGroups.stream().map(Group::getGroupName).collect(Collectors.toList()): null);
        groupContainerDTO.setManagerOfGroups( managerOfGroups.stream().map(Group::getGroupName).collect(Collectors.toList()));
        groupContainerDTO.setWatchedGroupActivity( watchedGroupActivities.stream().map(Group::getGroupName).collect(Collectors.toList()));

        return groupContainerDTO;
    }

    public GroupContainerDTO getAllGroupsForLoggedInUser(){
        return this.getAllGroupsForUser(this.userService.getPrincipalUsername());
    }


}
