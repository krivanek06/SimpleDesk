package rc.bootsecurity.model.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import rc.bootsecurity.model.entity.request.Request;

import java.util.List;
import java.util.Map;

@Getter
@Setter
@ToString
public class RequestContainerDTO {
    List<Request> requestsCreatedByUser;

    /**
     * only fetch when I am a solver
     */
    List<Request> requestsAssignedToUser;
    List<Request> requestsWatchedByUser;
    List<Request> requestsOpen; // <-- open request by user which will be assigned to my team

    /**
     * only fetch when I am a manager or Group_Activities_Watched_by_user gives me rights.
     * Team -> List<Requests>
     */
    Map<String, List<Request>> requestsAssignedToMyTeam;
    Map<String, List<Request>> requestSendByMyTeam;
}
