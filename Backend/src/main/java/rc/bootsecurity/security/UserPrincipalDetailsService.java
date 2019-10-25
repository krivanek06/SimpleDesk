package rc.bootsecurity.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.service.UserService;

@Service
public class UserPrincipalDetailsService implements UserDetailsService {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    // when user performs authentication this will be called
    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        // load user
        User user = this.userRepository.findByUsername(s).orElseThrow(() -> new UsernameNotFoundException("Not found " + s ));
        this.userService.loadPrivilegesToUser(user);

        UserPrincipal userPrincipal = new UserPrincipal(user);
        return userPrincipal;
     }
}
