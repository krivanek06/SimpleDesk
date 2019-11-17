package rc.bootsecurity.repository.report;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.report.ReportAccessStored;

@Repository
public interface ReportAccessStoredRepository extends CrudRepository<ReportAccessStored, Integer> {
}
