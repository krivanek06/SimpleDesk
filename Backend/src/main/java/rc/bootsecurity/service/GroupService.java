package rc.bootsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.repository.GroupRepository;

import java.util.List;

@Service
public class GroupService {
    @Autowired
    GroupRepository groupRepository;


}
