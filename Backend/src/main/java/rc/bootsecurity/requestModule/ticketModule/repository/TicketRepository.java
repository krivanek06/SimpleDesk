package rc.bootsecurity.requestModule.ticketModule.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.requestModule.commonModule.entity.RequestPosition;
import rc.bootsecurity.requestModule.commonModule.entity.RequestPriority;
import rc.bootsecurity.requestModule.ticketModule.entity.Ticket;
import rc.bootsecurity.requestModule.ticketModule.entity.TicketType;

import java.util.List;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Integer> {
    List<Ticket> findAllByTicketType(TicketType ticketType);
    List<Ticket> findAllByTicketTypeInAndClosedIsNull(List<TicketType> ticketType);
    List<Ticket> findAllByCreatorAndRequestPosition(User user , RequestPosition requestPosition);
    List<Ticket> findAllByTicketTypeAndRequestPosition(TicketType ticketType, RequestPosition requestPosition);
    List<Ticket> findAllByTicketTypeAndRequestPositionAndRequestPriority(TicketType ticketType, RequestPosition requestPosition, RequestPriority requestPriority);

}
