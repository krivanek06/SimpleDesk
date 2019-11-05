package rc.bootsecurity.repository.request;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.request.RequestType;

import java.util.List;
import java.util.Set;

@Repository
public interface RequestTypeRepository extends JpaRepository<RequestType, Integer> {
    Set<RequestType> findAllByGroupsToSolveDifferentRequests(Group group);
    Set<RequestType> findAllByGroupsToSolveDifferentRequests(Set<Group> group);

    Set<RequestType> findAllByGroupsToSubmitDifferentRequests(Group group);
    Set<RequestType> findByGroupsToSubmitDifferentRequestsIn(Set<Group> group);
}
