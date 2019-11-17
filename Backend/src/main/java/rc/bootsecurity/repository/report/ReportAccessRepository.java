package rc.bootsecurity.repository.report;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.report.ReportAccess;

@Repository
public interface ReportAccessRepository extends CrudRepository<ReportAccess, Integer> {
    ReportAccess findByName(String name);
}
