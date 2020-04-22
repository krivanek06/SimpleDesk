package rc.bootsecurity.groupModule.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.groupModule.entity.Group;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.requestModule.financeModule.entity.FinanceType;
import rc.bootsecurity.requestModule.commonModule.entity.ModuleType;

import java.util.List;
import java.util.Optional;

@Repository
public interface GroupRepository extends CrudRepository<Group, Integer > {
    Optional<List<Group>> findAllByGroupManager(User groupManager);
    Optional<List<Group>> findAllByUsersWatchingGroupActivity(User user);
    Optional<List<Group>> findAllByUsersInGroup(User users);

    Group findByGroupName(String name);

    @Query(nativeQuery = true, value = "select * from get_all_privileges_for_group_varchar(?1);")
    String findPrivilegesForGroup(String searching_name);

    @Query(nativeQuery = true, value = "select * from get_all_existing_privileges()")
    String findAllExistingPrivileges();

}
