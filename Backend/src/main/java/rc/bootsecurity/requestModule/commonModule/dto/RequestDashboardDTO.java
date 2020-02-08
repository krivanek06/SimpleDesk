package rc.bootsecurity.requestModule.commonModule.dto;

import lombok.Data;

import java.util.List;

@Data
public class RequestDashboardDTO {
    List<RequestTableDTO> myOpen;
    List<RequestTableDTO> assignedOnMe;
    List<RequestTableDTO> otherOpen;
}
