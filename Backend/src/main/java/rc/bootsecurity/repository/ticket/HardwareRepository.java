package rc.bootsecurity.repository.ticket;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.ticket.Hardware;

import java.util.List;
import java.util.Set;

@Repository
public interface HardwareRepository extends CrudRepository<Hardware, Integer> {
    Hardware findByName(String name);
}
