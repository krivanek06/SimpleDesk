package rc.bootsecurity.model.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Map;
import java.util.Set;

@Getter
@Setter
@ToString
/**
 * container for all >
 *  - request types which I can submit - Ticket, Report, Finance
 *  - Finance Types - which I can submit
 *  - request types which I can solve
 *  - Ticket types and its subtypes which I can solve
 */
public class UserPrivilegeDTO {
    // GUI
    private Set<String> submitRequests;
    private Set<String> submitFinanceRequests;

    // JWT
    // ticket, reports
    private Set<String> solveRequests;
    // software -> sw1, sw2 ... hardware -> hw1, hw2
    private Map<String, Set<String>> solveTickets;

}
