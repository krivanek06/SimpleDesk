package rc.bootsecurity.utils.converter;

import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.ModuleType;
import rc.bootsecurity.model.entity.finance.FinanceType;

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
        groupDTO.setFinanceTypes(group.getFinanceTypes() != null ? group.getFinanceTypes().stream()
                .map(FinanceType::getName).collect(Collectors.toList()) : null);
        groupDTO.setModuleTypeToManage(group.getRequestTypesToSolve() != null ? group.getRequestTypesToSolve().stream()
                .map(ModuleType::getName).collect(Collectors.toList()) : null);
        groupDTO.setRequestTypesToSubmit(group.getModuleTypesToUse() != null ? group.getModuleTypesToUse().stream()
                .map(ModuleType::getName).collect(Collectors.toList()) : null);
        groupDTO.setTicketPrivilegesList(group.getTicketPrivilegesList() != null ? group.getTicketPrivilegesList().stream()
                .map(ticketPrivileges -> this.requestConverter.convertTicketPrivilegeToDTO(ticketPrivileges)).collect(Collectors.toList()) : null);

        return groupDTO;
    }

}
