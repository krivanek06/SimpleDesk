package rc.bootsecurity.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;

import java.util.List;

@Repository
public interface GroupRepository extends CrudRepository<Group, Integer > {
    List<Group> findAllByGroupManager(User groupManager);

}
