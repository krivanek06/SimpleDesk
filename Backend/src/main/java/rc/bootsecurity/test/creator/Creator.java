package rc.bootsecurity.test.creator;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.dto.TicketPrivilegeDTO;
import rc.bootsecurity.model.dto.UserSimpleDTO;
import rc.bootsecurity.model.dto.request.FinanceDTO;
import rc.bootsecurity.model.dto.request.ReportDTO;
import rc.bootsecurity.model.dto.request.RequestCommentDTO;
import rc.bootsecurity.model.dto.request.TicketDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.ModuleType;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.finance.Finance;
import rc.bootsecurity.model.entity.finance.FinanceType;
import rc.bootsecurity.model.entity.report.*;
import rc.bootsecurity.model.entity.request.*;
import rc.bootsecurity.model.entity.ticket.*;
import rc.bootsecurity.model.enums.MODULE_TYPE;

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
        finance.setName(subject);
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
    public static ModuleType createRequestType(String name){
        ModuleType moduleType = new ModuleType();
        moduleType.setName(name);
       // requestType.setGroupsToSolveDifferentRequests(groupToSolve);
       // requestType.setGroupsToSubmitDifferentRequests(groupToSubmit);

        return moduleType;
    }
    public static RequestComment createRequestComment(Request request, User user, String comment) {
        RequestComment requestComment = new RequestComment();
        requestComment.setRequest(request);
        requestComment.setUser(user);
        requestComment.setComment(comment);
        return requestComment;
    }

    public static RequestLog createRequestLog(String log, User user, Request request){
        RequestLog requestLog = new RequestLog();
        requestLog.setLog(log);
        requestLog.setRequest(request);
        requestLog.setUser(user);
        return requestLog;
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

    public static TicketSubtype createServerSubtype(String name, TicketType ticketType){
        TicketSubtype server = new Server();
        server.setName(name);
        server.setTicketType(ticketType);

        return server;
    }

    public static Ticket createTicket(TicketType ticketType, RequestPriority requestPriority, RequestPosition requestPosition, User user){
        Ticket ticket = new Ticket();
        ticket.setName("EMPTY");
        ticket.setProblem("EMPTY");
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


    // ************** END REPORT **********************
    public static FinanceDTO createFinanceDTO(String creator, String requestPriority, String financeType){
        FinanceDTO financeDTO = new FinanceDTO();
        financeDTO.setCreator(creator);
        financeDTO.setRequestPriority(requestPriority);
        financeDTO.setRequestType(MODULE_TYPE.Financie.name());
        financeDTO.setName("FINANCE_NAME");
        financeDTO.setFinanceType(financeType);


        return financeDTO;
    }

    public static ReportDTO createReportDTO(String creator, String requestPriority, String reportType, String reportRefresh){
        ReportDTO report = new ReportDTO();
        report.setCreator(creator);
        report.setRequestPriority(requestPriority);
        report.setRequestType(MODULE_TYPE.Report.name());
        report.setName("REPORT_NAME");

        report.setOwner("OWNER");
        report.setPurpose("PURPOSE");
        report.setCriteria("CRITERIA");
        report.setVisibleData("VISIBLE_DATA");
        report.setOtherInformation("OTHER_INFORMATION");
        report.setAccessBy("ACCESS_BY");
        report.setDeadline(new Timestamp(System.currentTimeMillis()));
        report.setReportRefresh(reportRefresh);
        report.setReportType(reportType);

        return report;
    }

    public static TicketDTO createTicketDTO(String user , String requestPriority , String ticketType, String ticketSubtypeName ){
        TicketDTO ticketDTO = new TicketDTO();
        ticketDTO.setName("TICKET_NAME");
        ticketDTO.setProblem("TICKET_PROBLEM");
        ticketDTO.setTicketType(ticketType);
        ticketDTO.setRequestPriority(requestPriority);
        ticketDTO.setCreator(user);
        ticketDTO.setTicketSubtypeName(ticketSubtypeName);
        ticketDTO.setRequestType(MODULE_TYPE.Ticket.name());
        return ticketDTO;
    }

    public static RequestCommentDTO createRequestCommentDTO(Integer requestId, String username, Boolean isPrivate){
        RequestCommentDTO requestCommentDTO = new RequestCommentDTO();
        requestCommentDTO.setComment("COMMENT");
        requestCommentDTO.setRequestId(requestId);
        requestCommentDTO.setCreatorUserName(username);
        requestCommentDTO.setIsPrivate(isPrivate);
        return requestCommentDTO;
    }

    public static RequestCommentDTO createRequestCommentDTO(Integer requestId, String username,String comment, Boolean isPrivate){
        RequestCommentDTO requestCommentDTO = new RequestCommentDTO();
        requestCommentDTO.setComment(comment);
        requestCommentDTO.setRequestId(requestId);
        requestCommentDTO.setCreatorUserName(username);
        requestCommentDTO.setIsPrivate(isPrivate);
        return requestCommentDTO;
    }

    public static UserSimpleDTO createUserSimpleDTO(User user){
        UserSimpleDTO userSimpleDTO = new UserSimpleDTO();
        userSimpleDTO.setFirstName(user.getFirstName());
        userSimpleDTO.setLastName(user.getLastName());
        return userSimpleDTO;
    }

    public static TicketPrivilegeDTO createTicketPrivilegeDTO(String ticketType, String application){
        TicketPrivilegeDTO ticketPrivilegeDTO = new TicketPrivilegeDTO();
        ticketPrivilegeDTO.setTicketType(ticketType);
        ticketPrivilegeDTO.setApplicationName(application);
        return ticketPrivilegeDTO;
    }

    public static GroupDTO createGroupDTOWithTicketPrivileges(String name, List<TicketPrivilegeDTO> ticketPrivilegeDTOs){
        GroupDTO groupDTO = new GroupDTO();
        groupDTO.setName(name);
        groupDTO.setTicketPrivilegesList(ticketPrivilegeDTOs);

        return groupDTO;
    }

    public static GroupDTO createGroupDTOWithRequestPrivilegesToSubmit(String name, List<String> requestNames){
        GroupDTO groupDTO = new GroupDTO();
        groupDTO.setName(name);
        groupDTO.setRequestTypesToSubmit(requestNames);

        return groupDTO;
    }

    public static GroupDTO createGroupDTOWithRequestPrivilegesToSolve(String name, List<String> requestNames){
        GroupDTO groupDTO = new GroupDTO();
        groupDTO.setName(name);
        groupDTO.setModuleTypeToManage(requestNames);

        return groupDTO;
    }


    public static GroupDTO createGroupDTOWithFinanceType(String name, List<String> financeType){
        GroupDTO groupDTO = new GroupDTO();
        groupDTO.setName(name);
        groupDTO.setFinanceTypes(financeType);

        return groupDTO;
    }


}
