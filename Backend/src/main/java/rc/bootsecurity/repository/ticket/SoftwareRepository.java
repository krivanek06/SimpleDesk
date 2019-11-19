package rc.bootsecurity.repository.ticket;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.ticket.Software;

import java.util.List;
import java.util.Set;

@Repository
public interface SoftwareRepository extends CrudRepository<Software, Integer> {
    Software findByName(String name);
}
