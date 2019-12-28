package rc.bootsecurity.utils.converter;

import rc.bootsecurity.model.dto.ApplicationPrivilegeDTO;
import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.ModuleType;
import rc.bootsecurity.model.entity.finance.Finance;
import rc.bootsecurity.model.entity.finance.FinanceType;
import rc.bootsecurity.model.entity.ticket.TicketPrivileges;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class GroupConverter {
    private UserConverter userConverter = new UserConverter();
    private RequestConverter requestConverter = new RequestConverter();


    public GroupDTO convertGroupToDTO(Group group){
        GroupDTO groupDTO = new GroupDTO();
        groupDTO.setId(group.getId());
        groupDTO.setName(group.getGroupName());
        groupDTO.setDescription(group.getDescription());
        groupDTO.setEmail(group.getEmail());
        groupDTO.setGroupManager(this.userConverter.convertUserToSimpleDTO(group.getGroupManager()));
        groupDTO.setUsersInGroup(group.getUsersInGroup() != null ? group.getUsersInGroup().stream()
                .map(user -> this.userConverter.convertUserToSimpleDTO(user)).collect(Collectors.toList()) : null);

        ApplicationPrivilegeDTO applicationPrivilegeDTO = new ApplicationPrivilegeDTO();
        applicationPrivilegeDTO.setModuleTypesToUse(group.getModuleTypesToUse() != null ? group.getModuleTypesToUse().stream()
                .map(ModuleType::getName).collect(Collectors.toList()) : new ArrayList<>());
        applicationPrivilegeDTO.setRequestTypesToSolve(group.getRequestTypesToSolve() != null ? group.getRequestTypesToSolve().stream()
                .map(ModuleType::getName).collect(Collectors.toList()) : new ArrayList<>());
        applicationPrivilegeDTO.setSubmitFinanceRequests(group.getFinanceTypes() != null ? group.getFinanceTypes().stream()
                .map(FinanceType::getName).collect(Collectors.toList()) : new ArrayList<>());

        Map<String, List<String>> map = new HashMap<>();
        if(group.getTicketPrivilegesList() != null){
            group.getTicketPrivilegesList().forEach(ticketPrivileges -> {
                if(!map.containsKey(ticketPrivileges.getTicketType().getName())){
                    map.put(ticketPrivileges.getTicketType().getName(), new ArrayList<>());
                }
                map.get(ticketPrivileges.getTicketType().getName()).add(ticketPrivileges.getApplicationName());
            });
        }
        applicationPrivilegeDTO.setSolveTickets(map);
        groupDTO.setApplicationPrivilegeDTO(applicationPrivilegeDTO);

        return groupDTO;
    }

}
