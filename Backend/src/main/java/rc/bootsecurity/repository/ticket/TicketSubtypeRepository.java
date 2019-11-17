package rc.bootsecurity.repository.ticket;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.ticket.TicketSubtype;
import rc.bootsecurity.model.entity.ticket.TicketType;

import java.util.List;

@Repository
public interface TicketSubtypeRepository extends CrudRepository<TicketSubtype, Integer> {
    List<TicketSubtype> findAllByTicketType(TicketType ticketType);
    TicketSubtype findByName(String name);
}
