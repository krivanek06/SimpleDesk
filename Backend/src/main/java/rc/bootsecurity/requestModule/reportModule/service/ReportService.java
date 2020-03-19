package rc.bootsecurity.requestModule.reportModule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDTO;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.requestModule.commonModule.service.RequestManagementService;
import rc.bootsecurity.requestModule.commonModule.utils.RequestConverter;
import rc.bootsecurity.requestModule.reportModule.dto.ReportFormDTO;
import rc.bootsecurity.requestModule.reportModule.entity.Report;
import rc.bootsecurity.requestModule.commonModule.enums.MODULE_TYPE;
import rc.bootsecurity.requestModule.reportModule.repository.ReportRefreshRepository;
import rc.bootsecurity.requestModule.reportModule.repository.ReportTypeRepository;

@Service
public class ReportService extends RequestManagementService {
    @Autowired
    private ReportTypeRepository reportTypeRepository;
    @Autowired
    private ReportRefreshRepository reportRefreshRepository;

    public RequestDTO createReport(ReportFormDTO reportFormDTO){
        Report report = new Report();
        RequestConverter requestConverter = new RequestConverter();
        this.setAttributesForRequest(report, MODULE_TYPE.Report.name(),reportFormDTO.getName(), reportFormDTO.getRequestPriority());

        report.setReportType(this.reportTypeRepository.findByName(reportFormDTO.getReportType()));
        report.setReportRefresh(this.reportRefreshRepository.findByName(reportFormDTO.getReportRefresh()));

        report.setAccessMethods(reportFormDTO.getAccessMethods());
        report.setAccessByPeople(reportFormDTO.getAccessByPeople());
        report.setOtherInformation(reportFormDTO.getOtherInformation());
        report.setVisibleData(reportFormDTO.getVisibleData());
        report.setCriteria(reportFormDTO.getCriteria());
        report.setPurpose(reportFormDTO.getPurpose());
        report.setOwner(reportFormDTO.getOwner());
        report.setDeadline(reportFormDTO.getDeadline());

        super.saveOrUpdateRequest(report);

        this.requestLogService.saveLogAndBroadCast(report, super.requestWebsockets.NEW_REQUEST + ((Request) report).getId());

        return requestConverter.convertRequestToRequestDTO(report);
    }

    public void addEvaluation(Integer reportId, Double days){
        Report report = (Report) this.findRequest(reportId);
        report.setEvaluation(days);
        this.saveOrUpdateRequest(report);

        this.requestLogService.saveLogAndBroadCast(report, super.requestWebsockets.ADDED_EVALUATION + ((Request) report).getId());
    }

}
