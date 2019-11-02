package rc.bootsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.UserDTOSimple;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.task.TicketPrivileges;
import rc.bootsecurity.model.entity.task.TicketType;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.RequestTypeRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.task.ServerRepository;
import rc.bootsecurity.repository.task.TicketPrivilegesRepository;
import rc.bootsecurity.repository.task.TicketTypeRepository;
import rc.bootsecurity.utils.modelmapper.UserModelMapper;

import java.util.ArrayList;
import java.util.List;

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





    public UserDTOSimple userDTOInfo(int id){
       User user = this.userRepository.findById(id).get();

       List<Group> groupsInvolvedIn = this.groupRepository.findAllByUsersInGroup(user).get();
       groupsInvolvedIn.forEach(group -> {
           group.setTicketPrivilegesList(this.ticketPrivilegesRepository.findAllByGroup(group));
           group.setRequestTypesToSolve(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(group));
           group.setRequestTypesToSubmit(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(group));
       });
       user.setGroupsInvolved(groupsInvolvedIn);

       user.setGroupsToManage(this.groupRepository.findAllByGroupManager(user).get());

       return userModelMapper.getUserDTOSimple(user);
    }

    public User userInfo(int id){
        User user = this.userRepository.findById(id).get();

        List<Group> groupsInvolvedIn = this.groupRepository.findAllByUsersInGroup(user).get();
        groupsInvolvedIn.forEach(group -> {
            group.setTicketPrivilegesList(this.ticketPrivilegesRepository.findAllByGroup(group));
            group.setRequestTypesToSolve(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(group));
            group.setRequestTypesToSubmit(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(group));
        });
        user.setGroupsInvolved(groupsInvolvedIn);

        user.setGroupsToManage(this.groupRepository.findAllByGroupManager(user).get());

        return user;
    }


}
