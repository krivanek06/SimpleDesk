package rc.bootsecurity.test.inserter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.finance.FinanceType;
import rc.bootsecurity.model.entity.report.ReportRefresh;
import rc.bootsecurity.model.entity.report.ReportType;
import rc.bootsecurity.model.entity.request.RequestPosition;
import rc.bootsecurity.model.entity.request.RequestPriority;
import rc.bootsecurity.model.entity.ticket.Ticket;
import rc.bootsecurity.model.entity.ticket.TicketPrivileges;
import rc.bootsecurity.model.entity.ticket.TicketSubtype;
import rc.bootsecurity.model.entity.ticket.TicketType;
import rc.bootsecurity.model.enums.REQUEST_POSITION;
import rc.bootsecurity.model.enums.REQUEST_PRIORITY;
import rc.bootsecurity.model.enums.TICKET_TYPE;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.finance.FinanceRepository;
import rc.bootsecurity.repository.finance.FinanceTypeRepository;
import rc.bootsecurity.repository.report.*;
import rc.bootsecurity.repository.request.RequestPositionRepository;
import rc.bootsecurity.repository.request.RequestPriorityRepository;
import rc.bootsecurity.repository.ModuleTypeRepository;
import rc.bootsecurity.repository.ticket.TicketPrivilegesRepository;
import rc.bootsecurity.repository.ticket.TicketRepository;
import rc.bootsecurity.repository.ticket.TicketSubtypeRepository;
import rc.bootsecurity.repository.ticket.TicketTypeRepository;
import rc.bootsecurity.test.creator.Creator;
import rc.bootsecurity.test.creator.NAMES;

import java.util.Arrays;
import java.util.List;

@Service
public class InserterRequests {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private ModuleTypeRepository moduleTypeRepository;
    @Autowired
    private TicketTypeRepository ticketTypeRepository;
    @Autowired
    private TicketSubtypeRepository ticketSubtypeRepository;
    @Autowired
    private TicketPrivilegesRepository ticketPrivilegesRepository;
    @Autowired
    private RequestPriorityRepository requestPriorityRepository;
    @Autowired
    private RequestPositionRepository requestPositionRepository;
    @Autowired
    private TicketRepository ticketRepository;
    @Autowired
    private ReportTypeRepository reportTypeRepository;
    @Autowired
    private ReportRefreshRepository reportRefreshRepository;
    @Autowired
    private ReportRepository reportRepository;
    @Autowired
    private FinanceRepository financeRepository;
    @Autowired
    private FinanceTypeRepository financeTypeRepository;

    public void insertRequestFinance(){
        FinanceType financeType1 = Creator.createFinanceType(NAMES.FINANCE_TYPE_1);
        FinanceType financeType2 = Creator.createFinanceType(NAMES.FINANCE_TYPE_2);
        FinanceType financeType3 = Creator.createFinanceType(NAMES.FINANCE_TYPE_3);
        FinanceType financeType4 = Creator.createFinanceType(NAMES.FINANCE_TYPE_4);
        FinanceType financeType5 = Creator.createFinanceType(NAMES.FINANCE_TYPE_5);
        this.financeTypeRepository.saveAll(Arrays.asList(financeType1,financeType2,financeType3,financeType4,financeType5));

    }

    public void insertRequestReports(){
        ReportType reportType1 = Creator.createReportType(NAMES.REPORT_TYPE_1);
        ReportType reportType2 = Creator.createReportType(NAMES.REPORT_TYPE_2);
        ReportType reportType3 = Creator.createReportType(NAMES.REPORT_TYPE_3);

        ReportRefresh reportRefresh1 = Creator.createReportRefresh(NAMES.REPORT_REFRESH_1);
        ReportRefresh reportRefresh2 = Creator.createReportRefresh(NAMES.REPORT_REFRESH_2);
        ReportRefresh reportRefresh3 = Creator.createReportRefresh(NAMES.REPORT_REFRESH_3);

        this.reportTypeRepository.saveAll(List.of(reportType1, reportType2, reportType3));
        this.reportRefreshRepository.saveAll(List.of(reportRefresh1, reportRefresh2, reportRefresh3));

    }


    public void insertRequestTickets(){
        TicketType ticketTypeSoftware = Creator.createTicketType(TICKET_TYPE.Software.name());
        TicketType ticketTypeHardware = Creator.createTicketType(TICKET_TYPE.Hardware.name());
        TicketType ticketTypeServer = Creator.createTicketType(TICKET_TYPE.Server.name());
        TicketType ticketTypeUser = Creator.createTicketType(TICKET_TYPE.User.name());
        TicketType ticketTypeOther = Creator.createTicketType(TICKET_TYPE.Other.name());
        this.ticketTypeRepository.saveAll(List.of(ticketTypeSoftware, ticketTypeHardware,ticketTypeServer,ticketTypeUser,ticketTypeOther));

        List<TicketSubtype> software = List.of(Creator.createSoftwareSubtype(NAMES.SOFTWARE_1, ticketTypeSoftware),
                Creator.createSoftwareSubtype(NAMES.SOFTWARE_2, ticketTypeSoftware),
                Creator.createSoftwareSubtype(NAMES.SOFTWARE_3, ticketTypeSoftware),
                Creator.createSoftwareSubtype(NAMES.SOFTWARE_4, ticketTypeSoftware));

        List<TicketSubtype> hardware = List.of( Creator.createHardwareSubtype(NAMES.HARDWARE_1, ticketTypeHardware),
                Creator.createHardwareSubtype(NAMES.HARDWARE_2, ticketTypeHardware),
                Creator.createHardwareSubtype(NAMES.HARDWARE_3, ticketTypeHardware),
                Creator.createHardwareSubtype(NAMES.HARDWARE_4, ticketTypeHardware));

        List<TicketSubtype> server = List.of( Creator.createServerSubtype(NAMES.SERVER_1, ticketTypeServer),
                Creator.createServerSubtype(NAMES.SERVER_2, ticketTypeServer));

        this.ticketSubtypeRepository.saveAll(software);
        this.ticketSubtypeRepository.saveAll(hardware);
        this.ticketSubtypeRepository.saveAll(server);
    }

    public void insertTicketsForUsers(){

    }

    public void insertPrivilegesForSolvers(){


    }


}
