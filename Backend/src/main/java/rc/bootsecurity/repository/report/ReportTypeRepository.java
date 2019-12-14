package rc.bootsecurity.repository.report;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.report.ReportType;

@Repository
public interface ReportTypeRepository extends CrudRepository<ReportType, Integer> {
    ReportType findByName(String name);
}
