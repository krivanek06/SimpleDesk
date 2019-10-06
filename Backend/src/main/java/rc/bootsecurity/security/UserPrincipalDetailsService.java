package rc.bootsecurity.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.model.entity.User;

@Service
public class UserPrincipalDetailsService implements UserDetailsService {
    private UserRepository userRepository;

    public UserPrincipalDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    // when user performs authentification this will be called
    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user = this.userRepository.findByUsername(s).orElseThrow(() -> new UsernameNotFoundException("not found " + s ));
        UserPrincipal userPrincipal = new UserPrincipal(user);

        return userPrincipal;
     }
}
