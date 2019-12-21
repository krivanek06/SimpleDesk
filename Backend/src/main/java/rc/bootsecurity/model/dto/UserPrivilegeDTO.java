package rc.bootsecurity.model.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;


/**
 * container for all >
 *  - request types which I can submit - Ticket, Report, Finance
 *  - Finance Types - which I can submit
 *  - request types which I can solve
 *  - Ticket types and its subtypes which I can solve
 */
@Getter
@Setter
@ToString
public class UserPrivilegeDTO {
    private boolean isSolver;

    // GUI
    private List<String> moduleTypesToUse;
    private List<String> submitFinanceRequests;

    // JWT
    // ticket, reports , privileges, documents
    private List<String> requestTypesToSolve;
    // software -> sw1, sw2 ... hardware -> hw1, hw2
    private Map<String, List<String>> solveTickets;

}
