package rc.bootsecurity.security;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import rc.bootsecurity.model.dto.UserPrivilegeDTO;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.enums.TICKET_TYPE;
import java.util.*;
import java.util.stream.Collectors;

@Getter
@Setter
@ToString
public class UserPrincipal implements UserDetails {
    private User user;
    private UserPrivilegeDTO userPrivilegeDTO;
    private List<String> groupsToManage;
    private List<String> groupsActivityToWatch;

    public UserPrincipal(){ }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();

        if(user.getUsername().equalsIgnoreCase("admin")) {
            authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        }

        if(user.getUsername().equalsIgnoreCase("ghost")) {
            authorities.add(new SimpleGrantedAuthority("ROLE_GHOST"));
        }

        return authorities;
    }

    public boolean isAdmin(){
        return this.user.getUsername().equalsIgnoreCase("admin");
    }

    public boolean isGhost(){
        return this.user.getUsername().equalsIgnoreCase("ghost");
    }

    public String[] getModuleTypesToUse(){
        return (getUserPrivilegeDTO().getModuleTypesToUse() != null) ?
                this.getUserPrivilegeDTO().getModuleTypesToUse().toArray(String[]::new) : null;
    }

    public String[] getRequestTypesToSolve(){
        return (getUserPrivilegeDTO().getRequestTypesToSolve() != null) ?
                this.getUserPrivilegeDTO().getRequestTypesToSolve().toArray(String[]::new) : null;
    }

    public String[] getFinanceTypeToSubmit(){
        return (getUserPrivilegeDTO().getSubmitFinanceRequests() != null) ?
                this.getUserPrivilegeDTO().getSubmitFinanceRequests().toArray(String[]::new) : null;
    }

    public String[] getSolveTicketsTypeSoftware(){
        return (this.getUserPrivilegeDTO().getSolveTickets() != null) ?
                this.getUserPrivilegeDTO().getSolveTickets()
                        .getOrDefault(TICKET_TYPE.SOFTWARE.name(), new ArrayList<>()).toArray(String[]::new) : null;
    }

    public String[] getSolveTicketsTypeHardware(){
        return (this.getUserPrivilegeDTO().getSolveTickets() != null) ?
                this.getUserPrivilegeDTO().getSolveTickets()
                        .getOrDefault(TICKET_TYPE.HARDWARE.name(), new ArrayList<>()).toArray(String[]::new) : null;
    }

    public String[] getSolveTicketsTypeServer(){
        return (this.getUserPrivilegeDTO().getSolveTickets() != null) ?
                this.getUserPrivilegeDTO().getSolveTickets()
                        .getOrDefault(TICKET_TYPE.SERVER.name(), new ArrayList<>()).toArray(String[]::new) : null;
    }

    public boolean getSolveTicketsTypeUser(){
        return (this.getUserPrivilegeDTO().getSolveTickets() != null) && getUserPrivilegeDTO().getSolveTickets().containsKey(TICKET_TYPE.USER.name());
    }

    public boolean getSolveTicketsTypeOther(){
        return (this.getUserPrivilegeDTO().getSolveTickets() != null) && getUserPrivilegeDTO().getSolveTickets().containsKey(TICKET_TYPE.OTHER.name());
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
