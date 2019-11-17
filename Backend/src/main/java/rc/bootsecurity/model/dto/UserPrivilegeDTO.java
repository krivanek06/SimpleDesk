package rc.bootsecurity.model.dto;

import lombok.Data;

import java.util.Map;
import java.util.Set;

@Data
public class UserPrivilegeDTO {
    // GUI
    private Set<String> submitRequests;
    private Set<String> submitFinanceRequests;

    // JWT
    private Set<String> solveRequests;
    private Map<String, Set<String>> solveTickets;

}
