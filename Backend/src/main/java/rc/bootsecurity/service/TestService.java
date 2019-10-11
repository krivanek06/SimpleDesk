package rc.bootsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class TestService {
    @Autowired
    GroupRepository groupRepository;

    @Autowired
    UserRepository userRepository;

    public List<Group> group(){
        List<Group> groups = new ArrayList<>();
        this.groupRepository.findAll().forEach(x -> groups.add(x));
        return groups;

    }
    public User user(){
        User user =  this.userRepository.findById(2).get();
        user.setGroupsToManage(this.groupRepository.findAllByGroupManager(user));

        return user;
    }


}
