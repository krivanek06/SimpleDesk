package rc.bootsecurity.requestModule.commonModule.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.groupModule.entity.Group;
import rc.bootsecurity.requestModule.commonModule.entity.ModuleType;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface ModuleTypeRepository extends JpaRepository<ModuleType, Integer> {

    ModuleType findByName(String name);
    List<ModuleType> findAllByNameIn(List<String> names);
    List<ModuleType> findAllByNameIn(Set<String> names);
}
