package rc.bootsecurity.utils.modelmapper;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.UserPrivilegeDTO;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class JsonStringParser {

    /**
     * Parse string json privileges for users what application can he user or solve
     * and return DTO
     */
    public UserPrivilegeDTO parseFromRawJsonToUserPrivilegeDTO(String userPrivilegesRawJson){
        UserPrivilegeDTO userPrivilegeDTO = new UserPrivilegeDTO();
        Map<String, List<String>> ticketTypeToSolve = new HashMap<>();

        JSONObject userPrivileges = new JSONObject(userPrivilegesRawJson);

        if(!userPrivileges.isNull("ticketTypeToSolve")) {
            JSONArray ticketTypeToSolveRawJson = userPrivileges.getJSONArray("ticketTypeToSolve");
            for (int i = 0; i < ticketTypeToSolveRawJson.length(); i++) {
                try {
                    ticketTypeToSolve.putAll(new ObjectMapper().readValue(ticketTypeToSolveRawJson.get(i).toString(), Map.class));
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        userPrivilegeDTO.setSolveTickets(ticketTypeToSolve);

        if(!userPrivileges.isNull("moduleTypesToManage")) {
            userPrivilegeDTO.setManageModules(userPrivileges.getJSONArray("moduleTypesToManage")
                    .toList().stream().map(x -> (String) x).collect(Collectors.toList()));
        }
        if(!userPrivileges.isNull("requestTypeToSubmit")) {
            userPrivilegeDTO.setSubmitRequests(userPrivileges.getJSONArray("requestTypeToSubmit")
                    .toList().stream().map(x -> (String) x).collect(Collectors.toList()));
        }

        if(!userPrivileges.isNull("FinanceTypeToSubmit")) {
            userPrivilegeDTO.setSubmitFinanceRequests(userPrivileges.getJSONArray("FinanceTypeToSubmit")
                    .toList().stream().map(x -> (String) x).collect(Collectors.toList()));
        }
        userPrivilegeDTO.setSolver(!(userPrivilegeDTO.getManageModules() == null));
        return userPrivilegeDTO;
    }
}
