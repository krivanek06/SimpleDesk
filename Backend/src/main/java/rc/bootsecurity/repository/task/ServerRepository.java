package rc.bootsecurity.repository.task;

import org.springframework.data.repository.CrudRepository;
import rc.bootsecurity.model.entity.task.Server;

import java.util.List;
import java.util.Set;

public interface ServerRepository extends CrudRepository<Server, Integer> {
    List<Server> findAllByIdIn(Set<Integer> ids);
}
