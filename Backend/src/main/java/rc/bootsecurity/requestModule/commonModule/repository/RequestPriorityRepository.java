package rc.bootsecurity.requestModule.commonModule.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.requestModule.commonModule.entity.RequestPriority;

@Repository
public interface RequestPriorityRepository extends CrudRepository<RequestPriority, Integer> {
    RequestPriority findByName(String name);
}
