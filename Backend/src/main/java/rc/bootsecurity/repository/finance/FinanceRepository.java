package rc.bootsecurity.repository.finance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.finance.Finance;
import rc.bootsecurity.model.entity.request.RequestPosition;

import java.util.List;

@Repository
public interface FinanceRepository extends JpaRepository<Finance, Integer> {
    List<Finance> findAllByCreator(User user);

    List<Finance> findAllByCreatorAndRequestPosition(User user, RequestPosition requestPosition);

    List<Finance> findAllByAssignedAndRequestPosition(User user, RequestPosition requestPosition);
}
