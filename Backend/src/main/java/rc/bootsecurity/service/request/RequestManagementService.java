package rc.bootsecurity.service.request;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.exception.RequestNotFoundException;
import rc.bootsecurity.model.dto.UserSimpleDTO;
import rc.bootsecurity.model.dto.request.FinanceDTO;
import rc.bootsecurity.model.dto.request.ReportDTO;
import rc.bootsecurity.model.dto.request.TicketDTO;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.finance.Finance;
import rc.bootsecurity.model.entity.report.Report;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.ticket.Ticket;
import rc.bootsecurity.model.enums.REQUEST_POSITION;
import rc.bootsecurity.model.enums.MODULE_TYPE;
import rc.bootsecurity.repository.ModuleTypeRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.finance.FinanceTypeRepository;
import rc.bootsecurity.repository.report.ReportRefreshRepository;
import rc.bootsecurity.repository.report.ReportTypeRepository;
import rc.bootsecurity.repository.request.*;
import rc.bootsecurity.repository.ticket.TicketTypeRepository;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.List;

/**
 * service used for creating and modifying request
 */
@Service
public class RequestManagementService{
   /* @Autowired
    private TicketRepository ticketRepository;
    @Autowired
    private ReportRepository reportRepository;
    @Autowired
    private FinanceRepository financeRepository;*/
   @Autowired
   private RequestPositionRepository requestPositionRepository;
   @Autowired
   private RequestPriorityRepository requestPriorityRepository;
   @Autowired
   private UserRepository userRepository;
   @Autowired
   private TicketTypeRepository ticketTypeRepository;
    @Autowired
    private RequestRepository requestRepository;
    @Autowired
    private FinanceTypeRepository financeTypeRepository;
    @Autowired
    private ReportTypeRepository reportTypeRepository;
    @Autowired
    private ReportRefreshRepository reportRefreshRepository;
    @Autowired
    private ModuleTypeRepository moduleTypeRepository;



    public void saveOrUpdateRequest(Request request){
        this.requestRepository.save(request);
    }
    public void saveOrUpdateRequest(List<Request> requests){
        this.requestRepository.saveAll(requests);
    }

    private void setAttributesForRequest(Request request,String requestType, String name, String creator, String priority ){
        request.setTimestampCreation(new Timestamp(System.currentTimeMillis()));
        request.setCreator(this.userRepository.findByUsername(creator).get());
        request.setName(name);
        request.setRequestPosition(this.requestPositionRepository.findByName(REQUEST_POSITION.CREATED.name()));
        request.setModuleType(this.moduleTypeRepository.findByName(requestType));
        request.setRequestPriority(this.requestPriorityRepository.findByName(priority));
        request.setAllowCommenting(true);
    }

    public Ticket createTicket(TicketDTO ticketDTO){
        Ticket ticket = new Ticket();
        this.setAttributesForRequest(ticket, MODULE_TYPE.TICKET.name(),ticketDTO.getName(), ticketDTO.getCreator(), ticketDTO.getRequestPriority());

        ticket.setProblem(ticketDTO.getProblem());
        ticket.setTicketType(this.ticketTypeRepository.findByName(ticketDTO.getTicketType()));
        ticket.setTicketSubtypeName(ticketDTO.getTicketSubtypeName());

        return ticket;
    }

    public Report createReport(ReportDTO reportDTO){
        Report report = new Report();
        this.setAttributesForRequest(report, MODULE_TYPE.REPORT.name(),reportDTO.getName(), reportDTO.getCreator(), reportDTO.getRequestPriority());

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

    public Finance createFinance(FinanceDTO financeDTO){
        Finance finance = new Finance();
        this.setAttributesForRequest(finance, MODULE_TYPE.FINANCE.name(),financeDTO.getName(), financeDTO.getCreator(), financeDTO.getRequestPriority());

        finance.setFinanceType(this.financeTypeRepository.findByName(financeDTO.getFinanceType()));

        return finance;
    }

    // -----------------------------------------------------
    private Request findRequest(Integer requestId){
        return this.requestRepository.findById(requestId)
                .orElseThrow(() -> new RequestNotFoundException("Not found request with id : " + requestId));
    }

    public void setAssignUserAndSave(Integer requestId, UserSimpleDTO userSimpleDTO){
        User user = this.userRepository.findByFirstNameAndLastName(userSimpleDTO.getFirstName(),userSimpleDTO.getLastName());
        Request request = this.findRequest(requestId);
        request.setAssigned(user);
        this.saveOrUpdateRequest(request);
    }


    public void setSolverUserAndSave(Integer requestId, UserSimpleDTO userSimpleDTO, String solution){
        User user = this.userRepository.findByFirstNameAndLastName(userSimpleDTO.getFirstName(),userSimpleDTO.getLastName());
        Request request = this.findRequest(requestId);
        request.setSolver(user);
        request.setSolution(solution);
        this.saveOrUpdateRequest(request);
    }

    public void setClosedUserAndSave(Integer requestId, UserSimpleDTO userSimpleDTO){
        User user = this.userRepository.findByFirstNameAndLastName(userSimpleDTO.getFirstName(),userSimpleDTO.getLastName());
        Request request = this.findRequest(requestId);
        request.setClosed(user);
        this.saveOrUpdateRequest(request);
    }

    public void setWatchRequestAndSave(Integer requestId, UserSimpleDTO userSimpleDTO){
        Request request = this.findRequest(requestId);
        request.setUserWhoWatchThisRequest(new HashSet<>(this.userRepository.findAllByWatchedRequests(request)));
        request.getUserWhoWatchThisRequest().add(this.userRepository.findUserById(userSimpleDTO.getId()));
        this.saveOrUpdateRequest(request);
    }

    public void removeWatchRequestAndSave(Integer requestId, UserSimpleDTO userSimpleDTO){
        Request request = this.findRequest(requestId);
        request.setUserWhoWatchThisRequest(new HashSet<>(this.userRepository.findAllByWatchedRequests(request)));
        User user = this.userRepository.findUserById(userSimpleDTO.getId());
        request.getUserWhoWatchThisRequest().remove(user);
        this.saveOrUpdateRequest(request);
    }


}
