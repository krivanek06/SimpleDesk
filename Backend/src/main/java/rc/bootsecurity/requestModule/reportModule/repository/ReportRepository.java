package rc.bootsecurity.requestModule.reportModule.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.requestModule.reportModule.entity.Report;

@Repository
public interface ReportRepository extends JpaRepository<Report, Integer> {
}
