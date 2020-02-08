package rc.bootsecurity.requestModule.reportModule.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.requestModule.reportModule.entity.ReportType;

@Repository
public interface ReportTypeRepository extends CrudRepository<ReportType, Integer> {
    ReportType findByName(String name);
}
