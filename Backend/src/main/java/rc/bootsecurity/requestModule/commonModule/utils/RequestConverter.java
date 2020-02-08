package rc.bootsecurity.requestModule.commonModule.utils;

import rc.bootsecurity.requestModule.ticketModule.dto.TicketPrivilegeDTO;
import rc.bootsecurity.groupModule.entity.Group;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDTO;
import rc.bootsecurity.requestModule.commonModule.dto.RequestTableDTO;
import rc.bootsecurity.requestModule.financeModule.dto.FinanceDTO;
import rc.bootsecurity.requestModule.financeModule.dto.FinanceTypeDTO;
import rc.bootsecurity.requestModule.financeModule.entity.Finance;
import rc.bootsecurity.requestModule.financeModule.entity.FinanceType;
import rc.bootsecurity.requestModule.reportModule.dto.ReportDTO;
import rc.bootsecurity.requestModule.reportModule.entity.Report;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.requestModule.requestCommentModule.dto.RequestCommentDTO;
import rc.bootsecurity.requestModule.requestCommentModule.entity.RequestComment;
import rc.bootsecurity.requestModule.ticketModule.dto.TicketDTO;
import rc.bootsecurity.requestModule.ticketModule.entity.Ticket;
import rc.bootsecurity.requestModule.ticketModule.entity.TicketPrivileges;
import rc.bootsecurity.requestModule.commonModule.enums.MODULE_TYPE;
import rc.bootsecurity.requestModule.ticketModule.enums.TICKET_TYPE;
import rc.bootsecurity.userModule.util.UserConverter;

import java.util.ArrayList;
import java.util.stream.Collectors;


public class RequestConverter {
    private UserConverter userConverter = new UserConverter();

    private void setRequestDTOValuesFromRequest(RequestDTO requestDTO, Request request){
        requestDTO.setRequestType(request.getModuleType().getName());
        requestDTO.setCreator( this.userConverter.convertUserToSimpleDTO(request.getCreator()));
        requestDTO.setAssigned(request.getAssigned() != null ?  this.userConverter.convertUserToSimpleDTO(request.getAssigned()) : null);
        requestDTO.setClosed(request.getClosed() != null ? this.userConverter.convertUserToSimpleDTO(request.getClosed()) : null);
        requestDTO.setSolutionComment(request.getSolutionComment());
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

        if(ticketDTO.getTicketType().equalsIgnoreCase(TICKET_TYPE.User.name())){
            ticketDTO.setTicketType("Uživateľ");
        }

        if(ticketDTO.getTicketType().equalsIgnoreCase(TICKET_TYPE.Other.name())){
            ticketDTO.setTicketType("Iné");
        }


        return ticketDTO;
    }

    private ReportDTO convertReportToReportDTO(Report report){
        ReportDTO reportDTO = new ReportDTO();
        this.setRequestDTOValuesFromRequest(reportDTO,report);

        reportDTO.setAccessMethods(report.getAccessMethods());
        reportDTO.setAccessByPeople(report.getAccessByPeople());
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
        if(request.getModuleType().getName().equalsIgnoreCase(MODULE_TYPE.Finance.name())){
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
