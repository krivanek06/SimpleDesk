package rc.bootsecurity.requestModule.commonModule.utils;

import rc.bootsecurity.requestModule.financeModule.dto.FinanceExtendedInformationDTO;
import rc.bootsecurity.requestModule.reportModule.dto.ReportExtendedInformationDTO;
import rc.bootsecurity.requestModule.ticketModule.dto.TicketExtendedInformationDTO;
import rc.bootsecurity.requestModule.ticketModule.dto.TicketPrivilegeDTO;
import rc.bootsecurity.groupModule.entity.Group;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDTO;
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
import rc.bootsecurity.util.fileModule.FileService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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
        requestDTO.setRequestCommentDTOS(request.getRequestComments() != null ?
                request.getRequestComments().stream().map(this::convertRequestCommentToDTO).collect(Collectors.toList()) : null);

    }

    public void addImage(HashMap requestDTO){
        FileService fileService = new FileService();

        HashMap creator = (HashMap) requestDTO.get("creator");
        creator.put("userImageByte", fileService.getUserImage((String) creator.get("userImageString")));


        if(requestDTO.get("assigned") != null){
            HashMap assigned = (HashMap) requestDTO.get("assigned");
            assigned.put("userImageByte", fileService.getUserImage((String) assigned.get("userImageString")));
        }

        if(requestDTO.get("closed") != null){
            HashMap closed = (HashMap) requestDTO.get("closed");
            closed.put("userImageByte", fileService.getUserImage((String) closed.get("userImageString")));
        }

        if(requestDTO.get("requestCommentDTOS") != null){
            List<HashMap> requestCommentDTOS = (List) requestDTO.get("requestCommentDTOS");
            for(HashMap comment: requestCommentDTOS){
                HashMap commentCreator = (HashMap) comment.get("creator");
                commentCreator.put("userImageByte", fileService.getUserImage((String) commentCreator.get("userImageString")));
            }
        }

    }



    private TicketDTO convertTicketToTicketDTO(Ticket ticket){
        TicketDTO ticketDTO = new TicketDTO();
        this.setRequestDTOValuesFromRequest(ticketDTO, ticket);

        TicketExtendedInformationDTO ticketExtendedInformationDTO = new TicketExtendedInformationDTO();
        ticketExtendedInformationDTO.setTicketSubtypeName(ticket.getTicketSubtypeName());
        ticketExtendedInformationDTO.setTicketType(ticket.getTicketType().getName());
        ticketExtendedInformationDTO.setProblem(ticket.getProblem());

        if(ticketExtendedInformationDTO.getTicketType().equalsIgnoreCase(TICKET_TYPE.User.name())){
            ticketExtendedInformationDTO.setTicketType("Uživateľ");
        }

        if(ticketExtendedInformationDTO.getTicketType().equalsIgnoreCase(TICKET_TYPE.Other.name())){
            ticketExtendedInformationDTO.setTicketType("Iné");
        }

        ticketDTO.setExtendedInformation(ticketExtendedInformationDTO);

        return ticketDTO;
    }

    private ReportDTO convertReportToReportDTO(Report report){
        ReportDTO reportDTO = new ReportDTO();
        this.setRequestDTOValuesFromRequest(reportDTO,report);

        ReportExtendedInformationDTO reportExtendedInformationDTO = new ReportExtendedInformationDTO();
        reportExtendedInformationDTO.setAccessMethods(report.getAccessMethods());
        reportExtendedInformationDTO.setAccessByPeople(report.getAccessByPeople());
        reportExtendedInformationDTO.setCriteria(report.getCriteria());
        reportExtendedInformationDTO.setDeadline(report.getDeadline());
        reportExtendedInformationDTO.setOtherInformation(report.getOtherInformation());
        reportExtendedInformationDTO.setOwner(report.getOwner());
        reportExtendedInformationDTO.setPurpose(report.getPurpose());
        reportExtendedInformationDTO.setReportRefresh(report.getReportRefresh().getName());
        reportExtendedInformationDTO.setVisibleData(report.getVisibleData());
        reportExtendedInformationDTO.setEvaluation(report.getEvaluation());
        reportExtendedInformationDTO.setReportType(report.getReportType().getName());

        reportDTO.setExtendedInformation(reportExtendedInformationDTO);

        return reportDTO;
    }

    private FinanceDTO convertFinanceToFinanceDTO(Finance finance){
        FinanceDTO financeDTO = new FinanceDTO();
        this.setRequestDTOValuesFromRequest(financeDTO, finance);

        FinanceExtendedInformationDTO financeExtendedInformationDTO = new FinanceExtendedInformationDTO();
        financeExtendedInformationDTO.setFinanceType(finance.getFinanceType().getName());

        financeDTO.setExtendedInformation(financeExtendedInformationDTO);
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
