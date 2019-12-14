package rc.bootsecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.ModuleType;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface ModuleTypeRepository extends JpaRepository<ModuleType, Integer> {
    Optional<List<ModuleType>> findAllByGroupsToManageDifferentModules(Group group);
    Optional<List<ModuleType>> findAllByGroupsToManageDifferentModules(Set<Group> group);

    Optional<List<ModuleType>> findAllByGroupsToSubmitDifferentRequests(Group group);
    Optional<List<ModuleType>> findAllByGroupsToSubmitDifferentRequestsIn(Set<Group> group);

    @Query("Select r From ModuleType r where r.name = :name ")
    ModuleType selectByName(@Param("name") String name);

    ModuleType findRequestTypesByName(String name);
    ModuleType findByName(String name);
    List<ModuleType> findAllByNameIn(List<String> names);
    List<ModuleType> findAllByNameIn(Set<String> names);
}
