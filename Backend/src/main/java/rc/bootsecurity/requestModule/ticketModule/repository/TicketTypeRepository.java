package rc.bootsecurity.requestModule.ticketModule.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.requestModule.ticketModule.entity.TicketType;

import java.util.List;
import java.util.Set;

@Repository
public interface TicketTypeRepository extends CrudRepository<TicketType, Integer> {
    TicketType findByName(String name);
}
