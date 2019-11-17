package rc.bootsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.RequestType;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.request.RequestTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.utils.modelmapper.UserModelMapper;

import java.util.*;

@Service
public class GroupService {

    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TicketPrivilegesRepository ticketPrivilegesRepository;
    @Autowired
    private RequestTypeRepository requestTypeRepository;



    public List<Group> getInvolvedGroupsForUser(User user){
        return this.groupRepository.findAllByUsersInGroup(user);
    }

    public List<Group> getGroupsToManageForUser(User user){
        return this.groupRepository.findAllByGroupManager(user).orElseGet(ArrayList::new);
    }

    /**
     * set privileges for specific group
     * 1. ticket privileges
     * 2. requests which a group can solve
     * 3. requests which a group can submit
     */
    public void setGroupPrivilegeInformation(Group group){
        Optional<Set<RequestType>> requestsToSolve = this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(group);

        group.setRequestTypesToSolve(new HashSet<>(requestsToSolve.orElse(new HashSet<>())));

        group.setRequestTypesToSubmit(new HashSet<>(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(group).orElse(new HashSet<>())));
        group.setTicketPrivilegesList(this.ticketPrivilegesRepository.findAllByGroup(group).orElse(new ArrayList<>()));
    }

}
