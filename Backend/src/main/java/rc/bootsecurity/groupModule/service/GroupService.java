package rc.bootsecurity.groupModule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rc.bootsecurity.groupModule.dto.GroupContainerDTO;
import rc.bootsecurity.groupModule.dto.GroupDTO;
import rc.bootsecurity.groupModule.entity.Group;
import rc.bootsecurity.groupModule.repository.GroupRepository;
import rc.bootsecurity.groupModule.util.GroupConverter;
import rc.bootsecurity.requestModule.commonModule.dto.ApplicationPrivilegeDTO;
import rc.bootsecurity.userModule.dto.UserDTO;
import rc.bootsecurity.userModule.service.UserService;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.requestModule.ticketModule.entity.TicketPrivileges;
import rc.bootsecurity.requestModule.ticketModule.entity.TicketType;
import rc.bootsecurity.requestModule.commonModule.enums.MODULE_TYPE;
import rc.bootsecurity.requestModule.ticketModule.enums.TICKET_TYPE;
import rc.bootsecurity.requestModule.commonModule.repository.ModuleTypeRepository;
import rc.bootsecurity.requestModule.financeModule.repository.FinanceTypeRepository;
import rc.bootsecurity.requestModule.requestCommentModule.repository.RequestCommentRepository;
import rc.bootsecurity.requestModule.ticketModule.repository.TicketPrivilegesRepository;
import rc.bootsecurity.requestModule.ticketModule.repository.TicketTypeRepository;
import rc.bootsecurity.util.JsonStringParser;

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
    @Autowired
    private ModuleTypeRepository moduleTypeRepository;
    @Autowired
    private FinanceTypeRepository financeTypeRepository;
    @Autowired
    private TicketPrivilegesRepository ticketPrivilegesRepository;
    @Autowired
    private TicketTypeRepository ticketTypeRepository;
    @Autowired
    private RequestCommentRepository requestCommentRepository;


    public List<Group> getGroupsToManageForUser(User user){
        return this.groupRepository.findAllByGroupManager(user).orElseGet(ArrayList::new);
    }

    public List<Group> getGroupsToWatchActivity(User user){
        return this.groupRepository.findAllByUsersWatchingGroupActivity(user).orElseGet(ArrayList::new);
    }

    public List<Group> getGroupsWhereUserIsInvolved(User user){
        return this.groupRepository.findAllByUsersInGroup(user).orElseGet(ArrayList::new);
    }

    @Transactional
    public void removeGroup(String groupName){
        Group group = this.groupRepository.findByGroupName(groupName);
        this.requestCommentRepository.deleteAllByGroupsToViewRequestComment(group);
        this.groupRepository.delete(group);
    }

    public Group getGroupByGroupName(String groupName){
        return this.groupRepository.findByGroupName(groupName);
    }

   // @Async
   // cannot be transactional because we delete same entity which will be pushed there
    @Transactional
    public void modifyGroupPrivileges(Group group, ApplicationPrivilegeDTO applicationPrivilegeDTO){
        if(!applicationPrivilegeDTO.getModuleTypesToUse().contains(MODULE_TYPE.Finance.name())){
            this.financeTypeRepository.deleteGroupAssociation(group.getId());
        }
        group.setModuleTypesToUse(new HashSet<>(this.moduleTypeRepository.findAllByNameIn(applicationPrivilegeDTO.getModuleTypesToUse())));

        List<TicketPrivileges> ticketPrivilegesOld = this.ticketPrivilegesRepository.findAllByGroup(group).orElse(new ArrayList<>());
        List<TicketPrivileges> ticketPrivilegesNew = this.convertTicketPrivilegesForGroupToDTO(group, applicationPrivilegeDTO);
        List<TicketPrivileges> save = new ArrayList<>(); // contains distinct new privileges
        for(TicketPrivileges ticketPrivileges : ticketPrivilegesNew){
            if(!ticketPrivilegesOld.contains(ticketPrivileges))
                save.add(ticketPrivileges);
            ticketPrivilegesOld.remove(ticketPrivileges);
        }

        this.addPrivilegesToGroup(group, applicationPrivilegeDTO);

        this.ticketPrivilegesRepository.deleteAll(ticketPrivilegesOld);
        this.ticketPrivilegesRepository.saveAll(save);
        this.groupRepository.save(group);
    }

    @Transactional
    public void modifyGroup(String name, GroupDTO groupDTO){
        Group group = this.groupRepository.findByGroupName(name);
        group.setGroupName(groupDTO.getName());
        group.setEmail(groupDTO.getEmail());
        groupDTO.setDescription(groupDTO.getDescription());

        if(!group.getGroupManager().getUsername().equalsIgnoreCase(groupDTO.getGroupManager().getUsername()))
            group.setGroupManager(this.userService.loadUserByUsername(groupDTO.getGroupManager().getUsername()));

        // check if any new user was added to the group, if yes, reaload all members
        List<String> userNamesInGroup = groupDTO.getUsersInGroup().stream().map(UserDTO::getUsername).collect(Collectors.toList());
        if(!group.getUsersInGroup().stream().map(User::getUsername).collect(Collectors.toList()).equals(userNamesInGroup))
            group.setUsersInGroup(new HashSet<>(this.userService.loadUsersByUsername(userNamesInGroup)));

        // check if any new user was added to watch group, if yes, reaload all members
        List<String> userNamesWatchedGroup = groupDTO.getUsersWatchGroup().stream().map(UserDTO::getUsername).collect(Collectors.toList());
        if(!group.getUsersWatchingGroupActivity().stream().map(User::getUsername).collect(Collectors.toList()).equals(userNamesWatchedGroup))
            group.setUsersWatchingGroupActivity(new HashSet<>(this.userService.loadUsersByUsername(userNamesWatchedGroup)));

        this.modifyGroupPrivileges(group, groupDTO.getApplicationPrivilegeDTO());
        this.groupRepository.save(group);

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

    public ApplicationPrivilegeDTO getUnsetPrivilegesForGroup(GroupDTO groupDTO){
        ApplicationPrivilegeDTO applicationPrivilegeDTO = this.jsonStringParser.parseFromRawJsonToUserPrivilegeDTO(this.groupRepository.findAllExistingPrivileges());
        applicationPrivilegeDTO.getModuleTypesToUse().removeAll(groupDTO.getApplicationPrivilegeDTO().getModuleTypesToUse());
        applicationPrivilegeDTO.getRequestTypesToSolve().removeAll(groupDTO.getApplicationPrivilegeDTO().getRequestTypesToSolve());
        applicationPrivilegeDTO.getRequestTypesToSolve().remove(MODULE_TYPE.Privilege.toString());
        applicationPrivilegeDTO.getSubmitFinanceRequests().removeAll(groupDTO.getApplicationPrivilegeDTO().getSubmitFinanceRequests());
        for(String key : groupDTO.getApplicationPrivilegeDTO().getSolveTickets().keySet()) {
            for(String value : groupDTO.getApplicationPrivilegeDTO().getSolveTickets().get(key)){
                applicationPrivilegeDTO.getSolveTickets().get(key).remove(value);
            }
        }

        return applicationPrivilegeDTO;
    }

    public GroupContainerDTO getAllGroupsDTOForUsername(String name){
        GroupContainerDTO groupContainerDTO = new GroupContainerDTO();
        User user = this.userService.loadUserByUsername(name);

        List<Group> userInGroups = this.getGroupsWhereUserIsInvolved(user);
        List<Group> managerOfGroups = this.getGroupsToManageForUser(user);
        List<Group> watchedGroupActivities = this.getGroupsToWatchActivity(user);

        groupContainerDTO.setUserInGroups(userInGroups != null ? userInGroups.stream().map(Group::getGroupName).collect(Collectors.toList()): null);
        groupContainerDTO.setManagerOfGroups( managerOfGroups.stream().map(Group::getGroupName).collect(Collectors.toList()));
        groupContainerDTO.setWatchedGroupActivity( watchedGroupActivities.stream().map(Group::getGroupName).collect(Collectors.toList()));

        return groupContainerDTO;
    }


    public List<String> getAllGroups(){
        List<String> groups = new ArrayList<>();
        this.groupRepository.findAll().forEach( group -> groups.add(group.getGroupName()));
        return groups;
    }

    @Transactional
    public void registerGroup(GroupDTO groupDTO){
        Group group = new Group();
        group.setEmail(groupDTO.getEmail());
        group.setGroupName(groupDTO.getName());
        group.setDescription(groupDTO.getDescription());
        group.setGroupManager(this.userService.loadUserByUsername(groupDTO.getGroupManager().getUsername()));
        group.setUsersInGroup(new HashSet<>(this.userService.loadUsersByUsername(groupDTO.getUsersInGroup().stream().map(UserDTO::getUsername).collect(Collectors.toList()))));

        if(!groupDTO.getUsersWatchGroup().isEmpty()) {
            group.setUsersWatchingGroupActivity(new HashSet<>(this.userService.loadUsersByUsername(groupDTO.getUsersWatchGroup().stream().map(UserDTO::getUsername).collect(Collectors.toList()))));
        }

        List<TicketPrivileges> ticketPrivilegesList = this.convertTicketPrivilegesForGroupToDTO(group, groupDTO.getApplicationPrivilegeDTO());

        this.addPrivilegesToGroup(group, groupDTO.getApplicationPrivilegeDTO());
        this.groupRepository.save(group);
        this.ticketPrivilegesRepository.saveAll(ticketPrivilegesList);

    }

    private void addPrivilegesToGroup(Group group, ApplicationPrivilegeDTO applicationPrivilegeDTO){
        group.setModuleTypesToUse((!applicationPrivilegeDTO.getModuleTypesToUse().isEmpty()) ?
                new HashSet<>(this.moduleTypeRepository.findAllByNameIn(applicationPrivilegeDTO.getModuleTypesToUse())) : null);

        group.setRequestTypesToSolve((!applicationPrivilegeDTO.getRequestTypesToSolve().isEmpty()) ?
                new HashSet<>(this.moduleTypeRepository.findAllByNameIn(applicationPrivilegeDTO.getRequestTypesToSolve())) : null);

        group.setFinanceTypes((!applicationPrivilegeDTO.getSubmitFinanceRequests().isEmpty()) ?
                new HashSet<>(this.financeTypeRepository.findAllByNameIn(applicationPrivilegeDTO.getSubmitFinanceRequests())): null);
    }

    private List<TicketPrivileges> convertTicketPrivilegesForGroupToDTO(Group group, ApplicationPrivilegeDTO applicationPrivilegeDTO){
        if(applicationPrivilegeDTO.getSolveTickets() == null){
            return new ArrayList<>();
        }

        List<TicketPrivileges> ticketPrivilegesList = new ArrayList<>();
        for(String ticketTypeName: applicationPrivilegeDTO.getSolveTickets().keySet()){
            if(applicationPrivilegeDTO.getSolveTickets().get(ticketTypeName) == null || applicationPrivilegeDTO.getSolveTickets().get(ticketTypeName).size() == 0 ) {
                continue;
            }

            TicketType ticketType = this.ticketTypeRepository.findByName(ticketTypeName);

            if(ticketTypeName.equalsIgnoreCase(TICKET_TYPE.User.name()) || ticketTypeName.equalsIgnoreCase(TICKET_TYPE.Other.name())){
                TicketPrivileges ticketPrivileges = new TicketPrivileges();
                ticketPrivileges.setApplicationName(null);
                ticketPrivileges.setGroup(group);
                ticketPrivileges.setTicketType(ticketType);
                ticketPrivilegesList.add(ticketPrivileges);
                continue;
            }

            for(String ticketSubtypeName: applicationPrivilegeDTO.getSolveTickets().get(ticketTypeName)){
                TicketPrivileges ticketPrivileges = new TicketPrivileges();
                ticketPrivileges.setApplicationName(ticketSubtypeName);
                ticketPrivileges.setGroup(group);
                ticketPrivileges.setTicketType(ticketType);
                ticketPrivilegesList.add(ticketPrivileges);
            }
        }
        return ticketPrivilegesList;
    }


}
