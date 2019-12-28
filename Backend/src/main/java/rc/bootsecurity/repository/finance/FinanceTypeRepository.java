package rc.bootsecurity.repository.finance;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.finance.FinanceType;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface FinanceTypeRepository extends CrudRepository<FinanceType, Integer> {
    //List<FinanceType> findAllByGroupsToSubmitSpecificFinanceType(Set<Group> groups);
    FinanceType findByName(String name);
    List<FinanceType> findAllByNameIn(List<String> names);
    Optional<List<FinanceType>> findAllByGroupsToSubmitSpecificFinanceType(Group group);
   // Optional<List<FinanceType>> findAllByGroupsToSubmitSpecificFinanceType(List<Group> group);


    @Query(nativeQuery = true, value = "select * from get_finance_types_to_submit_for_user(?1);")
    Optional<List<FinanceType>> getFinanceTypesToSubmitForUser(String username);
}
