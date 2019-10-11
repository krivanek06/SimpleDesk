package rc.bootsecurity.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.Group;

@Repository
public interface GroupRepository extends CrudRepository<Integer, Group> {

}
