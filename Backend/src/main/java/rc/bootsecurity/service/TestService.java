package rc.bootsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.UserDTOSimple;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.request.RequestTypeRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.ticket.ServerRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.repository.ticket.TicketTypeRepository;
import rc.bootsecurity.utils.modelmapper.UserModelMapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class TestService {
    @Autowired
    GroupRepository groupRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ServerRepository serverRepository;

    @Autowired
    TicketTypeRepository ticketTypeRepository;

    @Autowired
    TicketPrivilegesRepository ticketPrivilegesRepository;

    @Autowired
    RequestTypeRepository requestTypeRepository;

    @Autowired
    UserModelMapper userModelMapper;

    // test whole user information dto
    public UserDTOSimple userDTOInfo(int id){
       User user = this.userRepository.findById(id).get();

       List<Group> groupsInvolvedIn = this.groupRepository.findAllByUsersInGroup(user).get();
       groupsInvolvedIn.forEach(group -> {
           group.setTicketPrivilegesList(this.ticketPrivilegesRepository.findAllByGroup(group).get());
           group.setRequestTypesToSolve(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(group));
           group.setRequestTypesToSubmit(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(group));
       });
       user.setGroupsInvolved(groupsInvolvedIn);

       user.setGroupsToManage(this.groupRepository.findAllByGroupManager(user).get());

       return userModelMapper.getUserDTOSimple(user);
    }

    // test whole user information object
    public User userInfo(int id){
        User user = this.userRepository.findById(id).get();

        List<Group> groupsInvolvedIn = this.groupRepository.findAllByUsersInGroup(user).get();
        groupsInvolvedIn.forEach(group -> {
            group.setTicketPrivilegesList(this.ticketPrivilegesRepository.findAllByGroup(group).orElse(new ArrayList<>()));
            group.setRequestTypesToSolve(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(group));
            group.setRequestTypesToSubmit(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(group));
        });
        user.setGroupsInvolved(groupsInvolvedIn);

        user.setGroupsToManage(this.groupRepository.findAllByGroupManager(user).get());

        return user;
    }




}
