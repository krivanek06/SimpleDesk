package rc.bootsecurity.repository;

import org.springframework.data.repository.CrudRepository;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.RequestType;

import java.util.List;

public interface RequestTypeRepository extends CrudRepository<RequestType, Integer> {
    List<RequestType> findAllByGroupsToSolveDifferentRequests(Group group);

    List<RequestType> findAllByGroupsToSubmitDifferentRequests(Group group);
}
