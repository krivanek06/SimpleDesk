package rc.bootsecurity.repository.report;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.report.Report;

@Repository
public interface ReportRepository extends JpaRepository<Report, Integer> {
}
