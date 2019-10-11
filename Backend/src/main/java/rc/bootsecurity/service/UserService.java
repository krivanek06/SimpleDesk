package rc.bootsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<String> getRoleList(User user){
        return new ArrayList<>();
    }

    public List<String> getPermissionList(User user){
        return new ArrayList<>();
    }

}
