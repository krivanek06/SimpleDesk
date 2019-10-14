package rc.bootsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.task.Server;
import rc.bootsecurity.model.entity.task.TaskPrivileges;
import rc.bootsecurity.model.entity.task.TaskType;
import rc.bootsecurity.model.enums.APPLICATION;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.task.ServerRepository;
import rc.bootsecurity.repository.task.TaskPrivilegesRepository;
import rc.bootsecurity.repository.task.TaskTypeRepository;

import java.util.ArrayList;
import java.util.HashSet;
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
    TaskTypeRepository taskTypeRepository;

    @Autowired
    TaskPrivilegesRepository taskPrivilegesRepository;



    public List<Group> group(){
        List<Group> groups = new ArrayList<>();

        this.groupRepository.findAll().forEach(x -> {
            List<TaskPrivileges> taskPrivilegesList = new ArrayList<>();
            this.taskPrivilegesRepository.findAllByGroup(x).forEach(g -> taskPrivilegesList.add(g));
            x.setTaskPrivilegesList(taskPrivilegesList);
            groups.add(x);
        });
        return groups;

    }

    /**
     *
     * @return user entity, all groups where user is involved as groupsInvolved,
     * and for each group add taskPrivilegesList ["software", 1],
     * this number 1 has to be then mapped as ID for Software entity
     */
    // get authorities
    public User getUserWithPrivileges(){
        User user = this.userRepository.findById(2).get();
        return user;
    }


    public User user(){
        User user =  this.userRepository.findById(2).get();
        user.setGroupsToManage(this.groupRepository.findAllByGroupManager(user));

        return user;
    }

    public Server getServer(){
        Server server = this.serverRepository.findById(2).get();
        return server;
    }

    public List<TaskType> getTaskTypes(){
        List<TaskType> list = new ArrayList<>();
        this.taskTypeRepository.findAll().forEach(x -> list.add(x));
        return list;
    }


}
