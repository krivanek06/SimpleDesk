package rc.bootsecurity.requestModule.commonModule.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.requestModule.commonModule.entity.RequestPosition;

@Repository
public interface RequestPositionRepository extends CrudRepository<RequestPosition, Integer> {
    RequestPosition findByName(String name);
}
