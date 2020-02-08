package rc.bootsecurity.requestModule.financeModule.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.requestModule.financeModule.entity.FinanceType;

import java.util.List;
import java.util.Optional;

@Repository
public interface FinanceTypeRepository extends CrudRepository<FinanceType, Integer> {
    FinanceType findByName(String name);
    List<FinanceType> findAllByNameIn(List<String> names);

    @Query(nativeQuery = true, value = "select * from get_finance_types_to_submit_for_user(?1);")
    Optional<List<FinanceType>> getFinanceTypesToSubmitForUser(String username);

    @Modifying
    @Query(nativeQuery = true, value = "delete from tbl_finance_type_privileges where group_id = (?1)")
    void deleteGroupAssociation(Integer GroupId);
}
