package rc.bootsecurity.repository.task;

import org.springframework.data.repository.CrudRepository;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.task.TaskPrivileges;

import java.util.List;

public interface TaskPrivilegesRepository extends CrudRepository<TaskPrivileges, Integer> {
    List<TaskPrivileges> findAllByGroup(Group group);
}
