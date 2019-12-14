package rc.bootsecurity.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.UserPrivilegeDTO;
import rc.bootsecurity.model.dto.UserSimpleDTO;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.ModuleTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.utils.modelmapper.JsonStringParser;
import rc.bootsecurity.utils.modelmapper.UserModelMapper;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TicketPrivilegesRepository ticketPrivilegesRepository;

    @Autowired
    private UserModelMapper userModelMapper;
    @Autowired
    private GroupService groupService;

    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private ModuleTypeRepository moduleTypeRepository;
    @Autowired
    private JsonStringParser jsonStringParser;


    public UserPrivilegeDTO getPrivilegesForUser(UserSimpleDTO userSimpleDTO){
        return this.jsonStringParser.parseFromRawJsonToUserPrivilegeDTO(
                this.userRepository.findPrivilegesForUser(userSimpleDTO.getId()));
    }


    public User loadUser(String name){
        return this.userRepository.findByUsername(name).orElseThrow(() -> new UsernameNotFoundException("Not found " + name ));
    }


    public UserSimpleDTO convertUserToSimpleDTO(User user){
        UserSimpleDTO userSimpleDTO = new UserSimpleDTO();
        userSimpleDTO.setId(user.getId());
        userSimpleDTO.setFirstName(user.getFirstName());
        userSimpleDTO.setLastName(user.getLastName());

        return userSimpleDTO;
    }






}
