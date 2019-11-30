package rc.bootsecurity.utils.modelmapper;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.UserDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;

@Service
public class UserModelMapper {

    @Autowired
    private ModelMapper modelMapper;

    public UserDTO getUserDTO(User user){
        UserDTO userDTOSimple = new UserDTO();

        userDTOSimple.setId(user.getId());
        userDTOSimple.setGroupsToMange(user.getGroupsToManage() != null ? user.getGroupsToManage().stream().map(Group::getGroupName).toArray(String[]::new) : null);
        userDTOSimple.setGroupsInvolved(user.getGroupsInvolved() != null ? user.getGroupsInvolved().stream().map(Group::getGroupName).toArray(String[]::new) : null);
        userDTOSimple.setUsername(user.getUsername());
        userDTOSimple.setLastName(user.getLastName());
        userDTOSimple.setFirstName(user.getFirstName());
        userDTOSimple.setEmail(user.getEmail());
        userDTOSimple.setActive(user.getActive());
        userDTOSimple.setPhoto(user.getPhoto());
        userDTOSimple.setDateCreation(user.getDateCreation());
        userDTOSimple.setDateEnding(user.getDateEnding());


        return  userDTOSimple;
    }


}
