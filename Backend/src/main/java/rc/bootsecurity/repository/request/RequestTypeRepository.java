package rc.bootsecurity.repository.request;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestType;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface RequestTypeRepository extends JpaRepository<RequestType, Integer> {
    Optional<Set<RequestType>> findAllByGroupsToSolveDifferentRequests(Group group);
    Optional<Set<RequestType>> findAllByGroupsToSolveDifferentRequests(Set<Group> group);

    Optional<Set<RequestType>> findAllByGroupsToSubmitDifferentRequests(Group group);
    Optional<Set<RequestType>> findAllByGroupsToSubmitDifferentRequestsIn(Set<Group> group);

    @Query("Select r From RequestType r where r.name = :name ")
    RequestType selectByName(@Param("name") String name);

    RequestType findRequestTypesByName(String name);
    RequestType findAllByName(String name);
}
