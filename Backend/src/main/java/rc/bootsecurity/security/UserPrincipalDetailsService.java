package rc.bootsecurity.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.ApplicationPrivilegeDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.service.GroupService;
import rc.bootsecurity.service.UserService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserPrincipalDetailsService implements UserDetailsService {
    @Autowired
    private UserService userService;
    @Autowired
    private GroupService groupService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user =  this.userService.loadUserByUsername(username);
        ApplicationPrivilegeDTO applicationPrivilegeDTO = this.userService.getPrivilegesForUser(username);
        List<Group> groupsToManage = this.groupService.getGroupsToManageForUser(user);
        List<Group> groupToWatchActivity = this.groupService.getGroupsToWatchActivity(user);

        // privileges
        UserPrincipal userPrincipal = new UserPrincipal();
        userPrincipal.setUser(user);
        userPrincipal.setApplicationPrivilegeDTO(applicationPrivilegeDTO);
        userPrincipal.setGroupsToManage(groupsToManage.stream().map(Group::getGroupName).collect(Collectors.toList()));
        userPrincipal.setGroupsActivityToWatch(groupToWatchActivity.stream().map(Group::getGroupName).collect(Collectors.toList()));

        return userPrincipal;
     }
}
