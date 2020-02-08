package rc.bootsecurity.security;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import rc.bootsecurity.requestModule.commonModule.dto.ApplicationPrivilegeDTO;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.requestModule.ticketModule.enums.TICKET_TYPE;
import java.util.*;

@Getter
@Setter
@ToString
public class UserPrincipal implements UserDetails {
    private User user;
    private ApplicationPrivilegeDTO applicationPrivilegeDTO;
    private List<String> groupsToManage;
    private List<String> groupsActivityToWatch;

    public UserPrincipal(){ }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));

        if(this.isAdmin()) {
            authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        }

        if(this.isGhost()) {
            authorities.add(new SimpleGrantedAuthority("ROLE_GHOST"));
        }

        if(this.getRequestTypesToSolve().length > 0){
            authorities.add(new SimpleGrantedAuthority("ROLE_SOLVER"));
        }

        if(!this.groupsToManage.isEmpty()){
            authorities.add(new SimpleGrantedAuthority("ROLE_MANAGER"));
        }
        if(!this.groupsActivityToWatch.isEmpty()){
            authorities.add(new SimpleGrantedAuthority("ROLE_MANAGER_RIGHT_HAND"));
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
        return this.getApplicationPrivilegeDTO().getModuleTypesToUse().toArray(String[]::new);
    }

    public String[] getRequestTypesToSolve(){
        return this.getApplicationPrivilegeDTO().getRequestTypesToSolve().toArray(String[]::new);
    }

    public String[] getFinanceTypeToSubmit(){
        return this.getApplicationPrivilegeDTO().getSubmitFinanceRequests().toArray(String[]::new);
    }

    public String[] getSolveTicketsTypeSoftware(){
        return this.getApplicationPrivilegeDTO().getSolveTickets().get(TICKET_TYPE.Software.name()).toArray(String[]::new);
    }

    public String[] getSolveTicketsTypeHardware(){
        return this.getApplicationPrivilegeDTO().getSolveTickets().get(TICKET_TYPE.Hardware.name()).toArray(String[]::new);
    }

    public String[] getSolveTicketsTypeServer(){
        return this.getApplicationPrivilegeDTO().getSolveTickets().get(TICKET_TYPE.Server.name()).toArray(String[]::new);
    }

    public String[] getSolveTicketsTypeUser(){
        return this.getApplicationPrivilegeDTO().getSolveTickets().get(TICKET_TYPE.User.name()).toArray(String[]::new);
     }

    public String[] getSolveTicketsTypeOther(){
        return this.getApplicationPrivilegeDTO().getSolveTickets().get(TICKET_TYPE.Other.name()).toArray(String[]::new);
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
