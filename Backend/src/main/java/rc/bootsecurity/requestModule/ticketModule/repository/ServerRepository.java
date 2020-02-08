package rc.bootsecurity.requestModule.ticketModule.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.requestModule.ticketModule.entity.Server;

@Repository
public interface ServerRepository extends CrudRepository<Server, Integer> {
    Server findByName(String name);
}
