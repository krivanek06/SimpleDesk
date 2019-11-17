package rc.bootsecurity.test.creator;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.finance.Finance;
import rc.bootsecurity.model.entity.finance.FinanceType;
import rc.bootsecurity.model.entity.report.*;
import rc.bootsecurity.model.entity.request.RequestPosition;
import rc.bootsecurity.model.entity.request.RequestPriority;
import rc.bootsecurity.model.entity.request.RequestType;
import rc.bootsecurity.model.entity.ticket.*;

import java.sql.Timestamp;
import java.util.List;
import java.util.Set;

public class Creator {

    public static FinanceType createFinanceType(String name){
        FinanceType financeType = new FinanceType();
        financeType.setName(name);

        return financeType;
    }

    public static Finance createFinance(String subject, RequestPriority requestPriority, RequestPosition requestPosition, User user){
        Finance finance = new Finance();
        finance.setSubject(subject);
        finance.setRequestPriority(requestPriority);
        finance.setRequestPosition(requestPosition);
        finance.setCreator(user);

        return finance;
    }

    public static User createUser(String firstName, String lastName, String username, String email, String password){
        User user = new User();
        user.setPassword(new BCryptPasswordEncoder().encode(password));
        user.setEmail(email);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setUsername(username);

        return user;
    }


    public  static Group createGroup(String groupName, User manager, Set<User> users){
        Group group = new Group();
        group.setGroupName(groupName);
        group.setGroupManager(manager);
        group.setUsersInGroup(users);

        return group;
    }



    public static TicketPrivileges creatTicketPrivileges(Group group, TicketType ticketType, String applicatioName){
        TicketPrivileges ticketPrivileges = new TicketPrivileges();
        ticketPrivileges.setGroup(group);
        ticketPrivileges.setTicketType(ticketType);
        ticketPrivileges.setApplicationName(applicatioName);

        return ticketPrivileges;
    }


    // ************** START REQUEST **********************

    public static RequestPosition createRequestPosition(String name){
        RequestPosition requestPosition = new RequestPosition();
        requestPosition.setName(name);

        return requestPosition;
    }

    public static RequestPriority createRequestPriority(String name){
        RequestPriority requestPriority = new RequestPriority();
        requestPriority.setName(name);

        return requestPriority;
    }
    // , Set<Group> groupToSolve, Set<Group> groupToSubmit
    public static RequestType createRequestType(String name){
        RequestType requestType = new RequestType();
        requestType.setName(name);
       // requestType.setGroupsToSolveDifferentRequests(groupToSolve);
       // requestType.setGroupsToSubmitDifferentRequests(groupToSubmit);

        return requestType;
    }

    // ************** END REQUEST **********************



    // ************** START TICKET **********************
    public static TicketType createTicketType(String name){
        TicketType ticketType = new TicketType();
        ticketType.setName(name);

        return ticketType;
    }

    public static TicketSubtype createSoftwareSubtype(String name, TicketType ticketType){
        TicketSubtype software = new Software();
        software.setName(name);
        software.setTicketType(ticketType);

        return software;
    }

    public static TicketSubtype createHardwareSubtype(String name, TicketType ticketType){
        TicketSubtype hardware = new Hardware();
        hardware.setName(name);
        hardware.setTicketType(ticketType);

        return hardware;
    }

    public static Ticket createTicket(TicketType ticketType, RequestPriority requestPriority, RequestPosition requestPosition, User user){
        Ticket ticket = new Ticket();
        ticket.setSubject("EMPTY");
        ticket.setRequest("EMPTY");
        ticket.setTicketType(ticketType);
        ticket.setTicketSubtypeName("EMPTY");
        ticket.setRequestPriority(requestPriority);
        ticket.setRequestPosition(requestPosition);
        ticket.setCreator(user);

        return ticket;
    }

    // ************** END TICKET **********************


    // ************** START REPORT **********************
    public static ReportType createReportType(String name){
        ReportType reportType = new ReportType();
        reportType.setName(name);
        return reportType;
    }

    public static ReportAccess createReportAccess(String name){
        ReportAccess reportAccess = new ReportAccess();
        reportAccess.setName(name);
        return reportAccess;
    }

    public static ReportRefresh createReportRefresh(String name){
        ReportRefresh reportRefresh = new ReportRefresh();
        reportRefresh.setName(name);
        return reportRefresh;
    }

    public static ReportAccessStored createReportAccessStored(String path, ReportAccess reportAccess){
        ReportAccessStored reportAccessStored = new ReportAccessStored();
        reportAccessStored.setPath(path);
        reportAccessStored.setReportAccess(reportAccess);
        return reportAccessStored;
    }

    public static Report createReport(User creator, RequestPriority requestPriority, RequestPosition requestPosition,
                                      RequestType requestType, ReportRefresh reportRefresh, ReportType reportType,
                                      List<ReportAccessStored> reportAccessStoredList){
        Report report = new Report();
        report.setCreator(creator);
        report.setRequestPriority(requestPriority);
        report.setRequestPosition(requestPosition);
        report.setRequestType(requestType);
        report.setSubject("EMPTY");

        report.setOwner("EMPTY");
        report.setPurpose("EMPTY");
        report.setCriteria("EMPTY");
        report.setVisibleData("EMPTY");
        report.setOtherInformation("EMPTY");
        report.setAccessBy("EMPTY");
        report.setDeadline(new Timestamp(System.currentTimeMillis()));
        report.setReportRefresh(reportRefresh);
        report.setReportType(reportType);
        report.setReportAccessStoredList(reportAccessStoredList);

        return report;
    }

    // ************** END REPORT **********************


}
