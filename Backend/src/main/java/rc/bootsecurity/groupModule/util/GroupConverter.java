package rc.bootsecurity.groupModule.util;

import rc.bootsecurity.groupModule.dto.GroupDTO;
import rc.bootsecurity.groupModule.entity.Group;
import rc.bootsecurity.requestModule.commonModule.utils.RequestConverter;
import rc.bootsecurity.userModule.util.UserConverter;

import java.util.ArrayList;
import java.util.stream.Collectors;

public class GroupConverter {
    private UserConverter userConverter = new UserConverter();
    private RequestConverter requestConverter = new RequestConverter();


    public GroupDTO convertGroupToDTO(Group group){
        GroupDTO groupDTO = new GroupDTO();
        groupDTO.setName(group.getGroupName());
        groupDTO.setDescription(group.getDescription());
        groupDTO.setEmail(group.getEmail());
        groupDTO.setGroupManager(this.userConverter.convertUserToSimpleDTO(group.getGroupManager()));
        groupDTO.setUsersInGroup(group.getUsersInGroup() != null ? group.getUsersInGroup().stream()
                .map(user -> this.userConverter.convertUserToSimpleDTO(user)).collect(Collectors.toList()) : new ArrayList<>());
        groupDTO.setUsersWatchGroup(group.getUsersWatchingGroupActivity() != null ? group.getUsersWatchingGroupActivity().stream()
                .map(user -> this.userConverter.convertUserToSimpleDTO(user)).collect(Collectors.toList()) : new ArrayList<>());
        return groupDTO;
    }


}
