package rc.bootsecurity.requestModule.financeModule.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.requestModule.financeModule.entity.Finance;
import rc.bootsecurity.requestModule.commonModule.entity.RequestPosition;

import java.util.List;

@Repository
public interface FinanceRepository extends JpaRepository<Finance, Integer> {
    List<Finance> findAllByCreator(User user);

    List<Finance> findAllByCreatorAndRequestPosition(User user, RequestPosition requestPosition);

    List<Finance> findAllByAssignedAndRequestPosition(User user, RequestPosition requestPosition);
}
