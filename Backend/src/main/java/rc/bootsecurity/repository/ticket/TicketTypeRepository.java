package rc.bootsecurity.repository.ticket;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.ticket.Ticket;
import rc.bootsecurity.model.entity.ticket.TicketType;

@Repository
public interface TicketTypeRepository extends CrudRepository<TicketType, Integer> {

}
