package rc.bootsecurity.repository.ticket;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.ticket.Ticket;
import rc.bootsecurity.model.entity.ticket.TicketType;

import java.util.List;
import java.util.Set;

@Repository
public interface TicketTypeRepository extends CrudRepository<TicketType, Integer> {
    TicketType findByName(String name);
    List<TicketType> findAllByNameIn(List<String> names);
    List<TicketType> findAllByNameIn(Set<String> names);
}
