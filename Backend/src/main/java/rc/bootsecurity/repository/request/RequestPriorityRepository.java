package rc.bootsecurity.repository.request;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.request.RequestPriority;

@Repository
public interface RequestPriorityRepository extends CrudRepository<RequestPriority, Integer> {

}
