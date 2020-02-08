package rc.bootsecurity.requestModule.reportModule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.requestModule.reportModule.dto.ReportDTO;
import rc.bootsecurity.requestModule.reportModule.entity.Report;
import rc.bootsecurity.requestModule.commonModule.enums.MODULE_TYPE;
import rc.bootsecurity.requestModule.reportModule.repository.ReportRefreshRepository;
import rc.bootsecurity.requestModule.reportModule.repository.ReportTypeRepository;
import rc.bootsecurity.requestModule.commonModule.service.RequestStateService;

@Service
public class ReportService extends RequestStateService {
    @Autowired
    private ReportTypeRepository reportTypeRepository;
    @Autowired
    private ReportRefreshRepository reportRefreshRepository;


    public Report createReport(ReportDTO reportDTO){
        Report report = new Report();
        this.setAttributesForRequest(report, MODULE_TYPE.Report.name(),reportDTO.getName(), reportDTO.getRequestPriority());

        report.setReportType(this.reportTypeRepository.findByName(reportDTO.getReportType()));
        report.setReportRefresh(this.reportRefreshRepository.findByName(reportDTO.getReportRefresh()));

        report.setAccessMethods(reportDTO.getAccessMethods());
        report.setAccessByPeople(reportDTO.getAccessByPeople());
        report.setOtherInformation(reportDTO.getOtherInformation());
        report.setVisibleData(reportDTO.getVisibleData());
        report.setCriteria(reportDTO.getCriteria());
        report.setPurpose(reportDTO.getPurpose());
        report.setOwner(reportDTO.getOwner());
        report.setDeadline(reportDTO.getDeadline());
        return report;
    }

    public void addEvaluation(Integer reportId, Double days){
        Report report = (Report) this.findRequest(reportId);
        report.setEvaluation(days);
        this.saveOrUpdateRequest(report);
    }

}
