package rc.bootsecurity.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;
import java.util.Map;

@Getter
@Setter
@ToString
public class UserPrivileges {
    // GUI
    @JsonProperty("requestTypeToSubmit")
    private List<String> submitRequests;
    @JsonProperty("FinanceTypeToSubmit")
    private List<String> submitFinanceRequests;

    // JWT
    // ticket, reports
    @JsonProperty("requestTypeToSolve")
    private List<String> solveRequests;
    // software -> sw1, sw2 ... hardware -> hw1, hw2
    @JsonProperty("ticketTypeToSolve")
    private Map<String, List<String>> solveTickets;
}
