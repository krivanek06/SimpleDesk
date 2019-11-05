package rc.bootsecurity.repository.ticket;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.ticket.Ticket;

import java.util.List;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Integer> {
    List<Ticket> findAllByCreator(User user);
}
