package rc.bootsecurity.utils.converter;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONArray;
import org.json.JSONObject;
import org.modelmapper.internal.asm.TypeReference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.UserPrivilegeDTO;
import rc.bootsecurity.model.dto.request.RequestDashboardDTO;
import rc.bootsecurity.model.dto.request.RequestTableDTO;
import rc.bootsecurity.service.UserService;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class JsonStringParser {
    private static final Logger LOGGER =  LoggerFactory.getLogger(JsonStringParser.class);


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

        if(!userPrivileges.isNull("requestTypeToSolve")) {
            userPrivilegeDTO.setRequestTypesToSolve(userPrivileges.getJSONArray("requestTypeToSolve")
                    .toList().stream().map(x -> (String) x).collect(Collectors.toList()));
        }
        if(!userPrivileges.isNull("moduleTypeToUse")) {
            userPrivilegeDTO.setModuleTypesToUse(userPrivileges.getJSONArray("moduleTypeToUse")
                    .toList().stream().map(x -> (String) x).collect(Collectors.toList()));
        }

        if(!userPrivileges.isNull("financeTypeToSubmit")) {
            userPrivilegeDTO.setSubmitFinanceRequests(userPrivileges.getJSONArray("financeTypeToSubmit")
                    .toList().stream().map(x -> (String) x).collect(Collectors.toList()));
        }
        userPrivilegeDTO.setSolver(!(userPrivilegeDTO.getRequestTypesToSolve() == null));
        return userPrivilegeDTO;
    }

    private List<RequestTableDTO> convertRawJsonToRequestTableDTO(JSONObject requestsJson , String jsonField){
        List<RequestTableDTO> result = new ArrayList<>();
        ObjectMapper objectMapper = new ObjectMapper();

        if(!requestsJson.isNull(jsonField)) {
            JSONArray myOpenRequestsJson = requestsJson.getJSONArray(jsonField);
            try {
                RequestTableDTO[] requests = objectMapper.readValue(myOpenRequestsJson.toString(), RequestTableDTO[].class);
                result = new ArrayList<>(Arrays.asList(requests));
            }catch (IOException e){
                LOGGER.error("error in method parseFromRawJsonToRequestTableDTO : " + e.getMessage());
            }
        }
        return result;
    }

    public RequestDashboardDTO parseFromRawJsonToRequestTableDTO(String rawJson) {
        RequestDashboardDTO requestDashboardDTO = new RequestDashboardDTO();
        JSONObject requestJsonObject = new JSONObject(rawJson);

        requestDashboardDTO.setMyOpen(this.convertRawJsonToRequestTableDTO(requestJsonObject,"my_open_requests" ));
        requestDashboardDTO.setAssignedOnMe(this.convertRawJsonToRequestTableDTO(requestJsonObject,"assigned_on_me" ));
        requestDashboardDTO.setSentByMyTeam(this.convertRawJsonToRequestTableDTO(requestJsonObject,"sent_by_my_team" ));
        requestDashboardDTO.setAssignedOnMyTeam(this.convertRawJsonToRequestTableDTO(requestJsonObject,"assigned_on_my_team" ));
        requestDashboardDTO.setOtherOpen(this.convertRawJsonToRequestTableDTO(requestJsonObject,"all_open_requests" ));

        return requestDashboardDTO;
    }
}
