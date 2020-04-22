package rc.bootsecurity.requestModule.commonModule.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class RequestStatistics {
    private List<String> dateText = new ArrayList<>();
    private List<Integer> sentRequests = new ArrayList<>();
    private List<Integer> solvedRequests = new ArrayList<>();
}
