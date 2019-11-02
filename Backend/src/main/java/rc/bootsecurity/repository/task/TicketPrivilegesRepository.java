package rc.bootsecurity.repository.task;

import org.springframework.data.repository.CrudRepository;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.task.TicketPrivileges;

import java.util.List;

public interface TicketPrivilegesRepository extends CrudRepository<TicketPrivileges, Integer> {
    List<TicketPrivileges> findAllByGroup(Group group);
}
