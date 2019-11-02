package rc.bootsecurity.repository.task;

import org.springframework.data.repository.CrudRepository;
import rc.bootsecurity.model.entity.task.TicketType;

public interface TicketTypeRepository extends CrudRepository<TicketType, Integer> {
}
