package rc.bootsecurity.repository.report;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.report.Report;
import rc.bootsecurity.model.entity.report.ReportAccessStored;

import java.util.List;

@Repository
public interface ReportAccessStoredRepository extends CrudRepository<ReportAccessStored, Integer> {

}
