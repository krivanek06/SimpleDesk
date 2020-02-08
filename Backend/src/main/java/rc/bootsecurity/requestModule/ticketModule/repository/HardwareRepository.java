package rc.bootsecurity.requestModule.ticketModule.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.requestModule.ticketModule.entity.Hardware;

@Repository
public interface HardwareRepository extends CrudRepository<Hardware, Integer> {
    Hardware findByName(String name);
}
