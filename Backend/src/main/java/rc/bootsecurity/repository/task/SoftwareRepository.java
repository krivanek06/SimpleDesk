package rc.bootsecurity.repository.task;

import org.springframework.data.repository.CrudRepository;
import rc.bootsecurity.model.entity.task.Software;

import java.util.List;
import java.util.Set;

public interface SoftwareRepository extends CrudRepository<Software, Integer> {
    List<Software> findAllByIdIn(Set<Integer> ids);
}
