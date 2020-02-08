package rc.bootsecurity.requestModule.ticketModule.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.requestModule.ticketModule.entity.ServerContact;

@Repository
public interface ServerContactRepository extends CrudRepository<ServerContact, Integer> {
}
