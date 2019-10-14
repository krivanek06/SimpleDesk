package rc.bootsecurity.repository.task;

import org.springframework.data.repository.CrudRepository;
import rc.bootsecurity.model.entity.task.Hardware;

import java.util.List;
import java.util.Set;

public interface HardwareRepository extends CrudRepository<Hardware, Integer> {
    List<Hardware> findAllByIdIn(Set<Integer> ids);
}
