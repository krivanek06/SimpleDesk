package rc.bootsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import rc.bootsecurity.exception.UserNotFoundException;
import rc.bootsecurity.model.dto.UserDTOSimple;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.task.TaskPrivileges;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.task.TaskPrivilegesRepository;
import rc.bootsecurity.utils.modelmapper.UserModelMapper;

import java.util.*;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TaskPrivilegesRepository taskPrivilegesRepository;

    @Autowired
    private UserModelMapper userModelMapper;
    @Autowired
    private GroupService groupService;


    /**
     * @return user entity, all groups where user is involved as groupsInvolved,
     * and for each group add taskPrivilegesList ["software", 1],
     * this number 1 has to be then mapped as ID for Software entity
     */
    // get authorities
    public void loadPrivilegesToUser(User user){
        List<Group> groups = this.groupService.getInvolvedGroupsForUser(user);
        groups.forEach(x -> {
            List<TaskPrivileges> taskPrivilegesList = new ArrayList<>();
            this.taskPrivilegesRepository.findAllByGroup(x).forEach(g -> taskPrivilegesList.add(g));
            x.setTaskPrivilegesList(taskPrivilegesList);
        });
        user.setGroupsInvolved(groups);
    }

    private User loadUser(String name){
        return this.userRepository.findByUsername(name).orElseThrow(() -> new UsernameNotFoundException("Not found " + name ));
    }

    public UserDTOSimple getUserDTOSimple(String name){
        User user = this.loadUser(name);

        user.setGroupsToManage(this.groupService.getGroupsToManageForUser(user));
        user.setGroupsInvolved(this.groupService.getInvolvedGroupsForUser(user));

        return this.userModelMapper.getUserDTOSimple(user);
    }






}
