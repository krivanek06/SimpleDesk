package rc.bootsecurity.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.RequestType;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface GroupRepository extends CrudRepository<Group, Integer > {
    Optional<List<Group>> findAllByGroupManager(User groupManager);

    List<Group> findAllByUsersInGroup(User users);

    Group findByGroupName(String name);

    Optional<List<Group>> findAllByRequestTypesToSolve(RequestType requestType);
    Optional<List<Group>> findAllByRequestTypesToSubmit(RequestType requestType);
}
