package rc.bootsecurity.model.dto.request;

import lombok.Data;

import java.util.List;

@Data
public class RequestDashboardDTO {
    List<RequestTableDTO> myOpen;
    List<RequestTableDTO> assignedOnMe;
    List<RequestTableDTO> sentByMyTeam;
    List<RequestTableDTO> assignedOnMyTeam;
    List<RequestTableDTO> otherOpen;
}
