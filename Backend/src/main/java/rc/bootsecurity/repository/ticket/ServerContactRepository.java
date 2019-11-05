package rc.bootsecurity.repository.ticket;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.ticket.ServerContact;

@Repository
public interface ServerContactRepository extends CrudRepository<ServerContact, Integer> {
}
