package rc.bootsecurity.repository.report;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.report.ReportType;
import rc.bootsecurity.model.entity.request.RequestType;

@Repository
public interface ReportTypeRepository extends CrudRepository<ReportType, Integer> {
    ReportType findByName(String name);
}
