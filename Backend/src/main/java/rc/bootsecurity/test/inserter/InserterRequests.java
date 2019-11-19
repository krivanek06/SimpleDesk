package rc.bootsecurity.test.inserter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.finance.FinanceType;
import rc.bootsecurity.model.entity.report.ReportAccess;
import rc.bootsecurity.model.entity.report.ReportRefresh;
import rc.bootsecurity.model.entity.report.ReportType;
import rc.bootsecurity.model.entity.request.RequestPosition;
import rc.bootsecurity.model.entity.request.RequestPriority;
import rc.bootsecurity.model.entity.ticket.Ticket;
import rc.bootsecurity.model.entity.ticket.TicketPrivileges;
import rc.bootsecurity.model.entity.ticket.TicketSubtype;
import rc.bootsecurity.model.entity.ticket.TicketType;
import rc.bootsecurity.model.enums.TICKET_TYPE;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.finance.FinanceRepository;
import rc.bootsecurity.repository.finance.FinanceTypeRepository;
import rc.bootsecurity.repository.report.*;
import rc.bootsecurity.repository.request.RequestPositionRepository;
import rc.bootsecurity.repository.request.RequestPriorityRepository;
import rc.bootsecurity.repository.request.RequestTypeRepository;
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
    private RequestTypeRepository requestTypeRepository;
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
    private ReportAccessRepository reportAccessRepository;
    @Autowired
    private ReportTypeRepository reportTypeRepository;
    @Autowired
    private ReportRefreshRepository reportRefreshRepository;
    @Autowired
    private ReportAccessStoredRepository reportAccessStoredRepository;
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

        ReportAccess reportAccess1 = Creator.createReportAccess(NAMES.REPORT_ACCESS_1);
        ReportAccess reportAccess2 = Creator.createReportAccess(NAMES.REPORT_ACCESS_2);
        ReportAccess reportAccess3 = Creator.createReportAccess(NAMES.REPORT_ACCESS_3);

        this.reportTypeRepository.saveAll(List.of(reportType1, reportType2, reportType3));
        this.reportRefreshRepository.saveAll(List.of(reportRefresh1, reportRefresh2, reportRefresh3));
        this.reportAccessRepository.saveAll(List.of(reportAccess1, reportAccess2, reportAccess3));

    }


    public void insertRequestTickets(){
        TicketType ticketTypeSoftware = Creator.createTicketType(TICKET_TYPE.SOFTWARE.name());
        TicketType ticketTypeHardware = Creator.createTicketType(TICKET_TYPE.HARDWARE.name());
        TicketType ticketTypeServer = Creator.createTicketType(TICKET_TYPE.SERVER.name());
        TicketType ticketTypeUser = Creator.createTicketType(TICKET_TYPE.USER.name());
        TicketType ticketTypeOther = Creator.createTicketType(TICKET_TYPE.OTHER.name());
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
        User user1 = this.userRepository.findByUsername("user1").get();
        User user2 = this.userRepository.findByUsername("user2").get();
        RequestPriority requestPriority1 = this.requestPriorityRepository.findByName(NAMES.PRIORITY_1);
        RequestPriority requestPriority2 = this.requestPriorityRepository.findByName(NAMES.PRIORITY_2);
        RequestPosition requestPosition1 = this.requestPositionRepository.findByName(NAMES.POSITION_1);
        RequestPosition requestPosition2 = this.requestPositionRepository.findByName(NAMES.POSITION_2);

        TicketType ticketTypeSoftware = this.ticketTypeRepository.findByName(TICKET_TYPE.SOFTWARE.name());
        TicketType ticketTypeHardware = this.ticketTypeRepository.findByName(TICKET_TYPE.HARDWARE.name());

        Ticket ticket1 = Creator.createTicket(ticketTypeSoftware,requestPriority1,requestPosition1, user1);
        Ticket ticket2 = Creator.createTicket(ticketTypeSoftware,requestPriority2,requestPosition1, user1);
        Ticket ticket3 = Creator.createTicket(ticketTypeSoftware,requestPriority1,requestPosition2, user1);

        Ticket ticket4 = Creator.createTicket(ticketTypeHardware,requestPriority1,requestPosition1, user1);
        Ticket ticket5 = Creator.createTicket(ticketTypeHardware,requestPriority2,requestPosition2, user1);

        Ticket ticket6 = Creator.createTicket(ticketTypeSoftware,requestPriority1,requestPosition1, user2);
        Ticket ticket7 = Creator.createTicket(ticketTypeSoftware,requestPriority2,requestPosition1, user2);
        Ticket ticket8 = Creator.createTicket(ticketTypeSoftware,requestPriority1,requestPosition2, user2);

        Ticket ticket9 = Creator.createTicket(ticketTypeHardware,requestPriority1,requestPosition1, user2);
        Ticket ticket10 = Creator.createTicket(ticketTypeHardware,requestPriority2,requestPosition2, user2);

        this.ticketRepository.saveAll(List.of(ticket1, ticket2, ticket3, ticket4, ticket5, ticket6, ticket7, ticket8, ticket9, ticket10));
    }

    public void insertPrivilegesForSolvers(){
        Group group1 = this.groupRepository.findByGroupName("TESTGROUP1");
        Group group2 = this.groupRepository.findByGroupName("TESTGROUP2");
        Group group5 = this.groupRepository.findByGroupName("TESTGROUP5");

        TicketType ticketTypeSoftware = this.ticketTypeRepository.findByName(TICKET_TYPE.SOFTWARE.name());
        TicketType ticketTypeHardware = this.ticketTypeRepository.findByName(TICKET_TYPE.HARDWARE.name());

        List<TicketSubtype> ticketSubtypeSoftware = this.ticketSubtypeRepository.findAllByTicketType(ticketTypeSoftware);
        List<TicketSubtype> ticketSubtypesHardware = this.ticketSubtypeRepository.findAllByTicketType(ticketTypeHardware);

        TicketPrivileges ticketPrivilegesSoftware1 = Creator.creatTicketPrivileges(group1 , ticketTypeSoftware , ticketSubtypeSoftware.get(0).getName());
        TicketPrivileges ticketPrivilegesSoftware2 = Creator.creatTicketPrivileges(group1 , ticketTypeSoftware , ticketSubtypeSoftware.get(1).getName());

        TicketPrivileges ticketPrivilegesHardware1 = Creator.creatTicketPrivileges(group2 , ticketTypeHardware , ticketSubtypesHardware.get(0).getName());
        TicketPrivileges ticketPrivilegesHardware2 = Creator.creatTicketPrivileges(group2 , ticketTypeHardware , ticketSubtypesHardware.get(1).getName());

        TicketPrivileges ticketPrivilegesSoftware3 = Creator.creatTicketPrivileges(group5 , ticketTypeSoftware , ticketSubtypeSoftware.get(0).getName());
        TicketPrivileges ticketPrivilegesSoftware4 = Creator.creatTicketPrivileges(group5 , ticketTypeSoftware , ticketSubtypeSoftware.get(1).getName());

        this.ticketPrivilegesRepository.saveAll(List.of(ticketPrivilegesHardware1, ticketPrivilegesHardware2,
                ticketPrivilegesSoftware1, ticketPrivilegesSoftware2,
                ticketPrivilegesSoftware3, ticketPrivilegesSoftware4));

    }


}
