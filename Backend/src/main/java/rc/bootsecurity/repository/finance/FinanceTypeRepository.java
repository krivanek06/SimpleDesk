package rc.bootsecurity.repository.finance;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.finance.FinanceType;

import java.util.List;
import java.util.Set;

@Repository
public interface FinanceTypeRepository extends CrudRepository<FinanceType, Integer> {
    List<FinanceType> findAllByGroupsToSubmitSpecificFinanceType(Set<Group> groups);
    FinanceType findByName(String name);
}
