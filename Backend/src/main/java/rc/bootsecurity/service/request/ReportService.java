package rc.bootsecurity.service.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.request.ReportDTO;
import rc.bootsecurity.model.entity.report.Report;
import rc.bootsecurity.model.enums.MODULE_TYPE;
import rc.bootsecurity.repository.report.ReportRefreshRepository;
import rc.bootsecurity.repository.report.ReportRepository;
import rc.bootsecurity.repository.report.ReportTypeRepository;

@Service
public class ReportService extends RequestStateService{
    @Autowired
    private ReportRepository reportRepository;
    @Autowired
    private ReportTypeRepository reportTypeRepository;
    @Autowired
    private ReportRefreshRepository reportRefreshRepository;

    public Report createReport(ReportDTO reportDTO){
        Report report = new Report();
        this.setAttributesForRequest(report, MODULE_TYPE.Report.name(),reportDTO.getName(), reportDTO.getRequestPriority());

        report.setReportType(this.reportTypeRepository.findByName(reportDTO.getReportType()));
        report.setReportRefresh(this.reportRefreshRepository.findByName(reportDTO.getReportRefresh()));
        report.setAccessBy(reportDTO.getAccessBy());
        report.setOtherInformation(reportDTO.getOtherInformation());
        report.setVisibleData(reportDTO.getVisibleData());
        report.setCriteria(reportDTO.getCriteria());
        report.setPurpose(reportDTO.getPurpose());
        report.setOwner(reportDTO.getOwner());
        report.setDeadline(reportDTO.getDeadline());
        return report;
    }

}
