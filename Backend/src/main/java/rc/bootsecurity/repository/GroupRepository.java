package rc.bootsecurity.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.finance.FinanceType;
import rc.bootsecurity.model.entity.ModuleType;

import java.util.List;
import java.util.Optional;

@Repository
public interface GroupRepository extends CrudRepository<Group, Integer > {
    Optional<List<Group>> findAllByGroupManager(User groupManager);

    List<Group> findAllByUsersInGroup(User users);
    List<Group> findAllByGroupNameIn(List<String> groupsNames);
    Group findByGroupName(String name);

    Optional<List<Group>> findAllByModuleTypesToManage(ModuleType moduleType);
    Optional<List<Group>> findAllByRequestTypesToSubmit(ModuleType moduleType);
    Optional<List<Group>> findAllByFinanceTypes(FinanceType financeType);

}
