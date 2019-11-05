package rc.bootsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.repository.GroupRepository;

import java.util.*;

@Service
public class GroupService {

    @Autowired
    GroupRepository groupRepository;

    public List<Group> getInvolvedGroupsForUser(User user){
        return this.groupRepository.findAllByUsersInGroup(user).orElseGet(ArrayList::new);
    }

    public List<Group> getGroupsToManageForUser(User user){
        return this.groupRepository.findAllByGroupManager(user).orElseGet(ArrayList::new);
    }

}
