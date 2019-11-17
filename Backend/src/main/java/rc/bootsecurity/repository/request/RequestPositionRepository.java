package rc.bootsecurity.repository.request;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.request.RequestPosition;

@Repository
public interface RequestPositionRepository extends CrudRepository<RequestPosition, Integer> {
    RequestPosition findByName(String name);
}
