package rc.bootsecurity.repository.report;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.report.ReportRefresh;

@Repository
public interface ReportRefreshRepository extends CrudRepository<ReportRefresh, Integer> {
    ReportRefresh findByName(String name);
}
