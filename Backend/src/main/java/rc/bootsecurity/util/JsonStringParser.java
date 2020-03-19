package rc.bootsecurity.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import rc.bootsecurity.requestModule.commonModule.dto.ApplicationPrivilegeDTO;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDTO;
import rc.bootsecurity.requestModule.ticketModule.enums.TICKET_TYPE;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;


public class JsonStringParser {
    private static final Logger LOGGER =  LoggerFactory.getLogger(JsonStringParser.class);

    /**
     * Parse string json privileges for users what application can he user or solve
     * and return DTO
     */
    public ApplicationPrivilegeDTO parseFromRawJsonToUserPrivilegeDTO(String userPrivilegesRawJson){
        ApplicationPrivilegeDTO applicationPrivilegeDTO = new ApplicationPrivilegeDTO();
        Map<String, List<String>> ticketTypeToSolve = new HashMap<>();

        JSONObject userPrivileges = new JSONObject(userPrivilegesRawJson);

        if(!userPrivileges.isNull("ticketTypeToSolve")) {
            JSONArray ticketTypeToSolveRawJson = userPrivileges.getJSONArray("ticketTypeToSolve");
            for (int i = 0; i < ticketTypeToSolveRawJson.length(); i++) {
                try {
                    ticketTypeToSolve.putAll(new ObjectMapper().readValue(ticketTypeToSolveRawJson.get(i).toString(), Map.class));
                } catch (IOException e) {
                    LOGGER.error("error in method parseFromRawJsonToUserPrivilegeDTO : " + e.getMessage());
                }
            }
        }

        ticketTypeToSolve.putIfAbsent(TICKET_TYPE.Software.name(), new ArrayList<>());
        ticketTypeToSolve.putIfAbsent(TICKET_TYPE.Hardware.name(), new ArrayList<>());
        ticketTypeToSolve.putIfAbsent(TICKET_TYPE.Server.name(), new ArrayList<>());
        ticketTypeToSolve.put(TICKET_TYPE.User.name(),ticketTypeToSolve.containsKey(TICKET_TYPE.User.name()) ?
                new ArrayList<>(Collections.singletonList("True")) :  new ArrayList<>() );
        ticketTypeToSolve.put(TICKET_TYPE.Other.name(),ticketTypeToSolve.containsKey(TICKET_TYPE.Other.name()) ?
                new ArrayList<>(Collections.singletonList("True")) :  new ArrayList<>() );

        applicationPrivilegeDTO.setSolveTickets(ticketTypeToSolve);


        applicationPrivilegeDTO.setRequestTypesToSolve(!userPrivileges.isNull("requestTypeToSolve") ?
                userPrivileges.getJSONArray("requestTypeToSolve").toList().stream()
                        .map(x -> (String) x).collect(Collectors.toList()): new ArrayList<>());

        applicationPrivilegeDTO.setModuleTypesToUse(!userPrivileges.isNull("moduleTypeToUse") ?
                userPrivileges.getJSONArray("moduleTypeToUse").toList().stream()
                        .map(x -> (String) x).collect(Collectors.toList()) : new ArrayList<>());

        applicationPrivilegeDTO.setSubmitFinanceRequests(!userPrivileges.isNull("financeTypeToSubmit") ?
                userPrivileges.getJSONArray("financeTypeToSubmit").toList().stream()
                        .map(x -> (String) x).collect(Collectors.toList()) : new ArrayList<>());

        return applicationPrivilegeDTO;
    }



    public List<HashMap> convertRawJsonToRequestTableDTO(String rawJson , String jsonField){
        List<HashMap> result = new ArrayList<>();
        JSONObject requestsJson = new JSONObject(rawJson);
        ObjectMapper objectMapper = new ObjectMapper();

        if(!requestsJson.isNull(jsonField)) {
            try {
                result = objectMapper.readValue( requestsJson.getJSONArray(jsonField).toString(), List.class);

                for(HashMap request: result){
                    request.computeIfAbsent("requestCommentDTOS", k -> new ArrayList<>());
                }
            }catch (IOException e){
                LOGGER.error("error in method parseFromRawJsonToRequestTableDTO : " + e.getMessage());
            }
        }
        return result;
    }


}
