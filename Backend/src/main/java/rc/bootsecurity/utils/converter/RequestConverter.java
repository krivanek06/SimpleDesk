package rc.bootsecurity.utils.converter;

import rc.bootsecurity.model.dto.TicketPrivilegeDTO;
import rc.bootsecurity.model.dto.request.*;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.finance.Finance;
import rc.bootsecurity.model.entity.report.Report;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestComment;
import rc.bootsecurity.model.entity.ticket.Ticket;
import rc.bootsecurity.model.entity.ticket.TicketPrivileges;

import java.util.stream.Collectors;


public class RequestConverter {

    private UserConverter userConverter = new UserConverter();

    private void setRequestDTOValuesFromRequest(RequestDTO requestDTO, Request request){
        requestDTO.setRequestType(request.getModuleType().getName());
        requestDTO.setCreator(request.getCreator().getFullName());
        requestDTO.setAssigned(request.getAssigned() != null ? request.getAssigned().getFullName() : null);
        requestDTO.setSolver(request.getSolver() != null ? request.getSolver().getFullName() : null);
        requestDTO.setSolution(request.getSolution());
        requestDTO.setClosed(request.getClosed() != null ? request.getClosed().getFullName() : null);
        requestDTO.setAllowCommenting(request.getAllowCommenting());
        requestDTO.setId(request.getId());
        requestDTO.setName(request.getName());
        requestDTO.setRequestPosition(request.getRequestPosition().getName());
        requestDTO.setRequestPriority(request.getRequestPriority().getName());
        requestDTO.setTimestampCreation(request.getTimestampCreation());
        requestDTO.setTimestampClosed(request.getTimestampClosed());
        requestDTO.setUserToWatchRequest(request.getUserWhoWatchThisRequest() != null ?
                request.getUserWhoWatchThisRequest().stream().map(user -> this.userConverter.convertUserToSimpleDTO(user))
                        .collect(Collectors.toList()) : null);
    }

    public RequestTableDTO convertRequestToRequestTableDTO(Request request, Boolean watch){
        RequestTableDTO requestTableDTO = new RequestTableDTO();
        requestTableDTO.setId(request.getId());
        requestTableDTO.setTimestampCreation(request.getTimestampCreation());
        requestTableDTO.setTimestampClosed(request.getTimestampClosed());
        requestTableDTO.setName(request.getName());
        requestTableDTO.setRequestPriority(request.getRequestPriority().getName());
        requestTableDTO.setRequestPosition(request.getRequestPosition().getName());
        requestTableDTO.setRequestType(request.getModuleType().getName());
        requestTableDTO.setCreator(request.getCreator().getFullName());
        requestTableDTO.setAssigned(request.getAssigned().getFullName());
        requestTableDTO.setClosed(request.getClosed().getFullName());
        requestTableDTO.setWatched(watch);

        return requestTableDTO;
    }

    public TicketDTO convertTicketToTicketDTO(Ticket ticket){
        TicketDTO ticketDTO = new TicketDTO();
        this.setRequestDTOValuesFromRequest(ticketDTO, ticket);

        ticketDTO.setTicketSubtypeName(ticket.getTicketSubtypeName());
        ticketDTO.setProblem(ticket.getProblem());
        ticketDTO.setTicketType(ticket.getTicketType().getName());

        return ticketDTO;
    }

    public ReportDTO convertReportToReportDTO(Report report){
        ReportDTO reportDTO = new ReportDTO();
        this.setRequestDTOValuesFromRequest(reportDTO,report);

        reportDTO.setAccessBy(report.getAccessBy());
        reportDTO.setCriteria(report.getCriteria());
        reportDTO.setDeadline(report.getDeadline());
        reportDTO.setOtherInformation(report.getOtherInformation());
        reportDTO.setOwner(report.getOwner());
        reportDTO.setPurpose(report.getPurpose());
        reportDTO.setReportRefresh(report.getReportRefresh().getName());
        reportDTO.setVisibleData(report.getVisibleData());
        reportDTO.setEvaluation(report.getEvaluation());
        reportDTO.setReportType(report.getReportType().getName());

        return reportDTO;
    }

    public FinanceDTO convertFinanceToFinanceDTO(Finance finance){
        FinanceDTO financeDTO = new FinanceDTO();
        this.setRequestDTOValuesFromRequest(financeDTO, finance);

        financeDTO.setFinanceType(finance.getFinanceType().getName());

        return financeDTO;
    }

    public RequestCommentDTO convertRequestCommentToDTO(RequestComment requestComment){
        RequestCommentDTO requestCommentDTO = new RequestCommentDTO();
        requestCommentDTO.setIsPrivate(requestComment.getIsPrivate());
        requestCommentDTO.setCreatorFullName(requestComment.getUser().getFullName());
        requestCommentDTO.setCreatorUserName(requestComment.getUser().getUsername());
        requestCommentDTO.setRequestId(requestComment.getRequest().getId());
        requestCommentDTO.setComment(requestComment.getComment());
        requestCommentDTO.setId(requestComment.getId());

        if(requestComment.getIsPrivate() && requestComment.getGroupsToViewRequestComment() != null && !requestComment.getGroupsToViewRequestComment().isEmpty()) {
            requestCommentDTO.setGroupsToShare(requestComment.getGroupsToViewRequestComment()
                    .stream().map(Group::getGroupName).collect(Collectors.toList()));
        }

        return requestCommentDTO;
    }

    public TicketPrivilegeDTO convertTicketPrivilegeToDTO(TicketPrivileges ticketPrivileges){
        TicketPrivilegeDTO ticketPrivilegeDTO = new TicketPrivilegeDTO();
        ticketPrivilegeDTO.setId(ticketPrivileges.getId());
        ticketPrivilegeDTO.setTicketType(ticketPrivileges.getTicketType().getName());
        ticketPrivilegeDTO.setApplicationName(ticketPrivileges.getApplicationName());
        return ticketPrivilegeDTO;
    }




}
