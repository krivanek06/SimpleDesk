package rc.bootsecurity.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.enums.TICKET_TYPE;
import java.util.*;
import java.util.stream.Collectors;

public class UserPrincipal implements UserDetails {
    private User user;

    public UserPrincipal(User user){
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {



        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN")); // delete !!!!!!

        // if user has at least one privilege to see any application then he becames a solver
       /* if(this.user.getGroupsInvolved().stream().anyMatch(x ->  Objects.nonNull(x.getTicketPrivilegesList()))){
            authorities.add(new SimpleGrantedAuthority("ROLE_SOLVER"));
        }*/

       /* if(this.user.getIsAdmin()){
            authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        }*/

        return authorities;
    }



    @Override
    public String getPassword() {
        return this.user.getPassword();
    }

    @Override
    public String getUsername() {
        return this.user.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return this.user.getActive();
    }
}
