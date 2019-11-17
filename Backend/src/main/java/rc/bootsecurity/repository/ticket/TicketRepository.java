package rc.bootsecurity.repository.ticket;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.RequestPosition;
import rc.bootsecurity.model.entity.request.RequestPriority;
import rc.bootsecurity.model.entity.ticket.Ticket;
import rc.bootsecurity.model.entity.ticket.TicketType;

import java.util.List;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Integer> {
    List<Ticket> findAllByTicketType(TicketType ticketType);
    List<Ticket> findAllByTicketTypeAndRequestPosition(TicketType ticketType, RequestPosition requestPosition);
    List<Ticket> findAllByTicketTypeAndRequestPositionAndRequestPriority(TicketType ticketType, RequestPosition requestPosition, RequestPriority requestPriority);

}
