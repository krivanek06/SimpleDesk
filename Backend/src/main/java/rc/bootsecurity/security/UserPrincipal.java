package rc.bootsecurity.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.enums.APPLICATION;
import java.util.*;
import java.util.stream.Collectors;

public class UserPrincipal implements UserDetails {

    // separate distinct applications to its type -> Software: {X , Y , etc.}
    Map<String, Set<String>> taskPrivilegesHashMap = new HashMap<>();

    private User user;

    public UserPrincipal(User user){
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        this.saveApplicationPrivilegeIds();


        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN")); // delete !!!!!!

        // if user has at least one privilege to see any application then he becames a solver
        if(this.user.getGroupsInvolved().stream().anyMatch(x ->  Objects.nonNull(x.getTicketPrivilegesList()))){
            authorities.add(new SimpleGrantedAuthority("ROLE_SOLVER"));
        }

        if(this.user.getIsAdmin()){
            authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        }

        return authorities;
    }

    private void saveApplicationPrivilegeIds(){
        this.user.getGroupsInvolved().forEach(group -> group.getTicketPrivilegesList().forEach(
                privilege -> {
                        if(this.taskPrivilegesHashMap.containsKey(privilege.getTaskType().getName())) {
                            this.taskPrivilegesHashMap.get(privilege.getTaskType().getName()).add(privilege.getApplicationName());
                        }else {
                            this.taskPrivilegesHashMap.put(privilege.getTaskType().getName(), new HashSet<>());
                            this.taskPrivilegesHashMap.get(privilege.getTaskType().getName()).add(privilege.getApplicationName());
                        }
                }));

    }

    // check which software types I can see
    public Collection<? extends GrantedAuthority> getAuthoritiesSoftware() {
       return this.taskPrivilegesHashMap.getOrDefault(APPLICATION.SOFTWARE.toString(), new HashSet<>()).stream()
               .map(SimpleGrantedAuthority::new).collect(Collectors.toList());
    }

    // check which hardware types I can see
    public Collection<? extends GrantedAuthority> getAuthoritiesHardware() {
        return this.taskPrivilegesHashMap.getOrDefault(APPLICATION.HARDWARE.toString(), new HashSet<>()).stream()
                .map(SimpleGrantedAuthority::new).collect(Collectors.toList());
    }

    // check which server types I can see
    public Collection<? extends GrantedAuthority> getAuthoritiesServer() {
        return this.taskPrivilegesHashMap.getOrDefault(APPLICATION.SERVER.toString(), new HashSet<>()).stream()
                .map(SimpleGrantedAuthority::new).collect(Collectors.toList());
    }

    public boolean getAuthoritiesUser(){
        return this.taskPrivilegesHashMap.containsKey(APPLICATION.USER.toString());
    }

    public boolean getAuthoritiesOther(){
        return this.taskPrivilegesHashMap.containsKey(APPLICATION.OTHER.toString());
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
