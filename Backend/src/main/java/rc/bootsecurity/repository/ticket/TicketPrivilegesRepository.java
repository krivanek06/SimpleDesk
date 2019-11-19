package rc.bootsecurity.repository.ticket;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.ticket.TicketPrivileges;
import rc.bootsecurity.model.entity.ticket.TicketType;

import java.util.List;
import java.util.Optional;

@Repository
public interface TicketPrivilegesRepository extends CrudRepository<TicketPrivileges, Integer> {
    Optional<List<TicketPrivileges>> findAllByGroup(Group group);
    Optional<List<TicketPrivileges>> findAllByTicketType(TicketType ticketType);
    Optional<List<TicketPrivileges>> findAllByApplicationName(String name);
}
