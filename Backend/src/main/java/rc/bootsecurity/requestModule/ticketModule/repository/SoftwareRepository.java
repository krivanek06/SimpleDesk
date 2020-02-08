package rc.bootsecurity.requestModule.ticketModule.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.requestModule.ticketModule.entity.Software;

@Repository
public interface SoftwareRepository extends CrudRepository<Software, Integer> {
    Software findByName(String name);
}
