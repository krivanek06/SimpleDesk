package rc.bootsecurity.requestModule.ticketModule.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.requestModule.ticketModule.entity.TicketSubtype;
import rc.bootsecurity.requestModule.ticketModule.entity.TicketType;

import java.util.List;

@Repository
public interface TicketSubtypeRepository extends CrudRepository<TicketSubtype, Integer> {
    List<TicketSubtype> findAllByTicketType(TicketType ticketType);
    TicketSubtype findByName(String name);
}
