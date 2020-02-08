package rc.bootsecurity.requestModule.reportModule.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.requestModule.reportModule.entity.ReportRefresh;

@Repository
public interface ReportRefreshRepository extends CrudRepository<ReportRefresh, Integer> {
    ReportRefresh findByName(String name);
}
