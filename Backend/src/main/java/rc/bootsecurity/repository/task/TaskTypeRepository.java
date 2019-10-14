package rc.bootsecurity.repository.task;

import org.springframework.data.repository.CrudRepository;
import rc.bootsecurity.model.entity.task.TaskType;

public interface TaskTypeRepository extends CrudRepository<TaskType, Integer> {
}
