package rc.bootsecurity.utils.modelmapper;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.UserDTOSimple;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;

@Service
public class UserModelMapper {

    @Autowired
    private ModelMapper modelMapper;

    public UserDTOSimple getUserDTOSimple(User user){
        UserDTOSimple userDTOSimple = new UserDTOSimple();

        userDTOSimple.setGroupsToMange(user.getGroupsToManage().stream().map(Group::getGroupName).toArray(String[]::new));
        userDTOSimple.setGroupsInvolved(user.getGroupsInvolved().stream().map(Group::getGroupName).toArray(String[]::new));
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
