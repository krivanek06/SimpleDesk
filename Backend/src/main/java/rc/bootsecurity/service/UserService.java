package rc.bootsecurity.service;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.exception.UserNotFoundException;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.task.TaskPrivileges;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.task.TaskPrivilegesRepository;

import java.util.*;

@Service
public class UserService {
    private User user;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private TaskPrivilegesRepository taskPrivilegesRepository;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    /**
     * @return user entity, all groups where user is involved as groupsInvolved,
     * and for each group add taskPrivilegesList ["software", 1],
     * this number 1 has to be then mapped as ID for Software entity
     */
    // get authorities
    public void loadPrivilegesToUser(){
        Optional<List<Group>> optionalGroups = this.groupRepository.findAllByUsersInGroup(List.of(user));
        if(optionalGroups.isPresent()) {
            List<Group> groups = optionalGroups.get();
            groups.forEach(x -> {
                List<TaskPrivileges> taskPrivilegesList = new ArrayList<>();
                this.taskPrivilegesRepository.findAllByGroup(x).forEach(g -> taskPrivilegesList.add(g));
                x.setTaskPrivilegesList(taskPrivilegesList);
            });
            user.setGroupsInvolved(groups);
        }
    }

    private void loadUserIfNotAlreadyPresent(Integer id){
        if(this.user == null){
            Optional<User> user = this.userRepository.findById(id);
            if(!user.isPresent()){
                throw new UserNotFoundException("There is not user with id : " + id);
            }
            this.user = user.get();
        }
    }




}
