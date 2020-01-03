package rc.bootsecurity.utils.converter;

import rc.bootsecurity.model.dto.ApplicationPrivilegeDTO;
import rc.bootsecurity.model.dto.TicketPrivilegeDTO;
import rc.bootsecurity.model.dto.request.*;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.finance.Finance;
import rc.bootsecurity.model.entity.finance.FinanceType;
import rc.bootsecurity.model.entity.report.Report;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestComment;
import rc.bootsecurity.model.entity.ticket.Ticket;
import rc.bootsecurity.model.entity.ticket.TicketPrivileges;
import rc.bootsecurity.model.enums.MODULE_TYPE;

import java.util.ArrayList;
import java.util.stream.Collectors;


public class RequestConverter {
    private UserConverter userConverter = new UserConverter();

    private void setRequestDTOValuesFromRequest(RequestDTO requestDTO, Request request){
        requestDTO.setRequestType(request.getModuleType().getName());
        requestDTO.setCreator( this.userConverter.convertUserToSimpleDTO(request.getCreator()));
        requestDTO.setAssigned(request.getAssigned() != null ?  this.userConverter.convertUserToSimpleDTO(request.getAssigned()) : null);
        requestDTO.setSolver(request.getSolver() != null ?  this.userConverter.convertUserToSimpleDTO(request.getSolver()) : null);
        requestDTO.setSolution(request.getSolution());
        requestDTO.setClosed(request.getClosed() != null ? this.userConverter.convertUserToSimpleDTO(request.getClosed()) : null);
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
        requestDTO.setRequestCommentDTOS(request.getRequestComments() != null ?
                request.getRequestComments().stream().map(this::convertRequestCommentToDTO)
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

    private TicketDTO convertTicketToTicketDTO(Ticket ticket){
        TicketDTO ticketDTO = new TicketDTO();
        this.setRequestDTOValuesFromRequest(ticketDTO, ticket);

        ticketDTO.setTicketSubtypeName(ticket.getTicketSubtypeName());
        ticketDTO.setProblem(ticket.getProblem());
        ticketDTO.setTicketType(ticket.getTicketType().getName());

        return ticketDTO;
    }

    private ReportDTO convertReportToReportDTO(Report report){
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

    private FinanceDTO convertFinanceToFinanceDTO(Finance finance){
        FinanceDTO financeDTO = new FinanceDTO();
        this.setRequestDTOValuesFromRequest(financeDTO, finance);

        financeDTO.setFinanceType(finance.getFinanceType().getName());

        return financeDTO;
    }

    public RequestDTO convertRequestToRequestDTO(Request request){
        if(request.getModuleType().getName().equalsIgnoreCase(MODULE_TYPE.Ticket.name())){
            return this.convertTicketToTicketDTO((Ticket) request);
        }
        if(request.getModuleType().getName().equalsIgnoreCase(MODULE_TYPE.Report.name())){
            return this.convertReportToReportDTO((Report) request);
        }
        if(request.getModuleType().getName().equalsIgnoreCase(MODULE_TYPE.Financie.name())){
            return this.convertFinanceToFinanceDTO((Finance) request);
        }
        return null;
    }

    public RequestCommentDTO convertRequestCommentToDTO(RequestComment requestComment){
        RequestCommentDTO requestCommentDTO = new RequestCommentDTO();
        requestCommentDTO.setIsPrivate(requestComment.getIsPrivate());
        requestCommentDTO.setCreator(this.userConverter.convertUserToSimpleDTO(requestComment.getUser()));
        requestCommentDTO.setRequestId(requestComment.getRequest().getId());
        requestCommentDTO.setComment(requestComment.getComment());
        requestCommentDTO.setId(requestComment.getId());
        requestCommentDTO.setTimestamp(requestComment.getTimestamp());

        if(requestComment.getIsPrivate() && requestComment.getGroupsToViewRequestComment() != null && !requestComment.getGroupsToViewRequestComment().isEmpty()) {
            requestCommentDTO.setGroupsToShare(requestComment.getGroupsToViewRequestComment()
                    .stream().map(Group::getGroupName).collect(Collectors.toList()));
        }else{
            requestCommentDTO.setGroupsToShare(new ArrayList<>());
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

    public FinanceTypeDTO convertFinanceTypeToFinanceTypeDTO(FinanceType financeType){
        FinanceTypeDTO financeTypeDTO = new FinanceTypeDTO();
        financeTypeDTO.setId(financeType.getId());
        financeTypeDTO.setName(financeType.getName());
        if(financeType.getGroupsToSubmitSpecificFinanceType() != null) {
            financeTypeDTO.setGroupsToSubmitSpecificFinanceType(new ArrayList<>(financeType.getGroupsToSubmitSpecificFinanceType()));
        }
        return financeTypeDTO;
    }

    public FinanceTypeDTO convertFinanceTypeToFinanceTypeDTOWithoutGroups(FinanceType financeType){
        FinanceTypeDTO financeTypeDTO = new FinanceTypeDTO();
        financeTypeDTO.setId(financeType.getId());
        financeTypeDTO.setName(financeType.getName());

        return financeTypeDTO;
    }



}
