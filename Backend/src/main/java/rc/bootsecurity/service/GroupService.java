package rc.bootsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import rc.bootsecurity.model.dto.ApplicationPrivilegeDTO;
import rc.bootsecurity.model.dto.GroupContainerDTO;
import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.dto.UserSimpleDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.ticket.TicketPrivileges;
import rc.bootsecurity.model.entity.ticket.TicketType;
import rc.bootsecurity.model.enums.TICKET_TYPE;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.ModuleTypeRepository;
import rc.bootsecurity.repository.finance.FinanceTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.repository.ticket.TicketTypeRepository;
import rc.bootsecurity.utils.converter.GroupConverter;
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
    @Autowired
    private ModuleTypeRepository moduleTypeRepository;
    @Autowired
    private FinanceTypeRepository financeTypeRepository;
    @Autowired
    private TicketPrivilegesRepository ticketPrivilegesRepository;
    @Autowired
    private TicketTypeRepository ticketTypeRepository;


    public List<Group> getGroupsToManageForUser(User user){
        return this.groupRepository.findAllByGroupManager(user).orElseGet(ArrayList::new);
    }

    public List<Group> getGroupToWatchActivity(User user){
        return this.groupRepository.findAllByUsersWatchingGroupActivity(user).orElseGet(ArrayList::new);
    }

    public void modifyGroupDescription(String groupName, String description){
        Group group = this.groupRepository.findByGroupName(groupName);
        group.setDescription(description);
        this.groupRepository.save(group);
    }

    public void modifyUsersInvolvedInGroupAndSave(String groupName, List<UserSimpleDTO> userDTO){
        Group group = this.groupRepository.findByGroupName(groupName);
        List<User> users = this.userService.loadUsersByUsername(userDTO.stream().map(UserSimpleDTO::getUsername).collect(Collectors.toList()));
        group.setUsersInGroup(new HashSet<>(users));
        this.groupRepository.save(group);
    }

    public void modifyManagerInGroupAndSave(String groupName, UserSimpleDTO userDTO){
        Group group = this.groupRepository.findByGroupName(groupName);
        User users = this.userService.loadUserByUsername(userDTO.getUsername());
        group.setGroupManager(users);
        this.groupRepository.save(group);
    }

    public void modifyUsersWatchGroupActivityAndSave(String groupName, List<UserSimpleDTO> userDTO){
        Group group = this.groupRepository.findByGroupName(groupName);
        List<User> users = this.userService.loadUsersByUsername(userDTO.stream().map(UserSimpleDTO::getUsername).collect(Collectors.toList()));
        group.setUsersWatchingGroupActivity(new HashSet<>(users));
        this.groupRepository.save(group);
    }

    public void removeGroup(String groupName){
        Group group = this.groupRepository.findByGroupName(groupName);
        this.groupRepository.delete(group);
    }

    //@Transactional(propagation = Propagation.REQUIRES_NEW)
   // @Transactional
   // @Async
    public void modifyGroupPrivileges(String name, ApplicationPrivilegeDTO applicationPrivilegeDTO){
        Group group = this.groupRepository.findByGroupName(name);

        List<TicketPrivileges> ticketPrivilegesOld = this.ticketPrivilegesRepository.findAllByGroup(group).orElse(new ArrayList<>());
        List<TicketPrivileges> ticketPrivilegesNew = this.convertTicketPrivilegesForGroupToDTO(group, applicationPrivilegeDTO);

        this.addPrivilegesToGroup(group, applicationPrivilegeDTO);
        this.groupRepository.save(group);
        this.ticketPrivilegesRepository.deleteAll(ticketPrivilegesOld);
        //this.ticketPrivilegesRepository.deleteByIdIn(ticketPrivilegesOld.stream().map(TicketPrivileges::getId).collect(Collectors.toList()));
        this.ticketPrivilegesRepository.saveAll(ticketPrivilegesNew);
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
        applicationPrivilegeDTO.getSubmitFinanceRequests().removeAll(groupDTO.getApplicationPrivilegeDTO().getSubmitFinanceRequests());
        for(String key : groupDTO.getApplicationPrivilegeDTO().getSolveTickets().keySet()) {
            for(String value : groupDTO.getApplicationPrivilegeDTO().getSolveTickets().get(key)){
                applicationPrivilegeDTO.getSolveTickets().get(key).remove(value);
            }
        }

        return applicationPrivilegeDTO;
    }

    public GroupContainerDTO getAllGroupsForUser(String name){
        GroupContainerDTO groupContainerDTO = new GroupContainerDTO();
        User user = this.userService.loadUserByUsername(name);

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

    public List<String> getAllGroups(){
        List<String> groups = new ArrayList<>();
        this.groupRepository.findAll().forEach( group -> groups.add(group.getGroupName()));
        return groups;
    }

    @Transactional
    public void registerGroup(GroupDTO groupDTO){
        // add manager as member of group
        if(!groupDTO.getUsersInGroup().contains(groupDTO.getGroupManager())){
            groupDTO.getUsersInGroup().add(groupDTO.getGroupManager());
        }

        Group group = new Group();
        group.setEmail(groupDTO.getEmail());
        group.setGroupName(groupDTO.getName());
        group.setDescription(groupDTO.getDescription());
        group.setGroupManager(this.userService.loadUserByUsername(groupDTO.getGroupManager().getUsername()));
        group.setUsersInGroup(new HashSet<>(this.userService.loadUsersByUsername(groupDTO.getUsersInGroup().stream().map(UserSimpleDTO::getUsername).collect(Collectors.toList()))));

        if(!groupDTO.getUsersWatchGroup().isEmpty()) {
            group.setUsersWatchingGroupActivity(new HashSet<>(this.userService.loadUsersByUsername(groupDTO.getUsersWatchGroup().stream().map(UserSimpleDTO::getUsername).collect(Collectors.toList()))));
        }

        List<TicketPrivileges> ticketPrivilegesList = this.convertTicketPrivilegesForGroupToDTO(group, groupDTO.getApplicationPrivilegeDTO());

        this.addPrivilegesToGroup(group, groupDTO.getApplicationPrivilegeDTO());
        this.groupRepository.save(group);
        this.ticketPrivilegesRepository.saveAll(ticketPrivilegesList);

    }

    private void addPrivilegesToGroup(Group group, ApplicationPrivilegeDTO applicationPrivilegeDTO){
        if(!applicationPrivilegeDTO.getModuleTypesToUse().isEmpty()) {
            group.setModuleTypesToUse(new HashSet<>(this.moduleTypeRepository.findAllByNameIn(applicationPrivilegeDTO.getModuleTypesToUse())));
        }
        if(!applicationPrivilegeDTO.getRequestTypesToSolve().isEmpty()) {
            group.setRequestTypesToSolve(new HashSet<>(this.moduleTypeRepository.findAllByNameIn(applicationPrivilegeDTO.getRequestTypesToSolve())));
        }
        if(!applicationPrivilegeDTO.getSubmitFinanceRequests().isEmpty()) {
            group.setFinanceTypes(new HashSet<>(this.financeTypeRepository.findAllByNameIn(applicationPrivilegeDTO.getSubmitFinanceRequests())));
        }
    }

    private List<TicketPrivileges> convertTicketPrivilegesForGroupToDTO(Group group, ApplicationPrivilegeDTO applicationPrivilegeDTO){
        List<TicketPrivileges> ticketPrivilegesList = new ArrayList<>();
        for(String ticketTypeName: applicationPrivilegeDTO.getSolveTickets().keySet()){
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
