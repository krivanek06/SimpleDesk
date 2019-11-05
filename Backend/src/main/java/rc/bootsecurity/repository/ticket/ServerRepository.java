package rc.bootsecurity.repository.ticket;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.ticket.Server;

import java.util.List;
import java.util.Set;

@Repository
public interface ServerRepository extends CrudRepository<Server, Integer> {
    List<Server> findAllByIdIn(Set<Integer> ids);
}
