package rc.bootsecurity.service.request;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.exception.RequestNotFoundException;
import rc.bootsecurity.model.dto.request.RequestDTO;
import rc.bootsecurity.model.dto.request.RequestDashboardDTO;
import rc.bootsecurity.model.dto.request.RequestTableDTO;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestLog;
import rc.bootsecurity.repository.request.*;
import rc.bootsecurity.service.UserService;
import rc.bootsecurity.test.creator.Creator;
import rc.bootsecurity.utils.converter.RequestConverter;
import rc.bootsecurity.utils.service.FileService;
import rc.bootsecurity.utils.service.JsonStringParser;

import java.util.HashSet;
import java.util.List;

@Service
public class RequestService {
    private JsonStringParser jsonStringParser = new JsonStringParser();
    private RequestConverter requestConverter = new RequestConverter();
    private FileService fileService = new FileService();

    @Autowired
    protected RequestLogRepository requestLogRepository;
    @Autowired
    private RequestRepository requestRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private RequestCommentService requestCommentService;

    public List<RequestLog> getLogsForRequest(Request request){
        return this.requestLogRepository.findAllByRequestOrderByTimestampAsc(request);
    }

    /**
     * @param request which will be changed
     * @param user who initialise some changing on request
     * @param changingObject which column in tbl_request is updated
     * @param oldState what value was present in that column
     * @param newState what value will be present in that column
     */
    protected void logRequestModification(Request request, User user, String changingObject, String oldState, String newState){
        String log =  "Stav " + changingObject + " sa zmenil z " + oldState + " na " + newState + ". "+ "Požiadavka bola inicializovaná uživateľom : " + user.getFullName();
        this.requestLogRepository.save(Creator.createRequestLog(log, user, request));
    }

    private Request loadRequestById(Integer requestId){
        return this.requestRepository.findById(requestId).orElseThrow(()
                -> new RequestNotFoundException("Could not found request with id : " + requestId));
    }

    public RequestDashboardDTO getRequestOnDashboard(){
        String username = this.userService.getPrincipalUsername();
        String rawJson = this.requestRepository.findOpenRequestOnDashboard(username);
        RequestDashboardDTO requestDashboardDTO = this.jsonStringParser.parseFromRawJsonToRequestDashboardDTO(rawJson);

        this.setImageForRequestTableDTO(requestDashboardDTO.getMyOpen());
        this.setImageForRequestTableDTO(requestDashboardDTO.getAssignedOnMe());
        this.setImageForRequestTableDTO(requestDashboardDTO.getAssignedOnMyTeam());
        this.setImageForRequestTableDTO(requestDashboardDTO.getSentByMyTeam());
        this.setImageForRequestTableDTO(requestDashboardDTO.getOtherOpen());

        return requestDashboardDTO;
    }

    public List<RequestTableDTO> getClosedRequests(String dateClosed1, String dateClosed2){
        User user = this.userService.loadUser(this.userService.getPrincipalUsername());
        String rawJson = this.requestRepository.findClosedRequestsBetweenDate(user.getId(), user.getUsername(), dateClosed1, dateClosed2);
        JSONObject requestJsonObject = new JSONObject(rawJson);
        List<RequestTableDTO> requestTableDTOS = this.jsonStringParser.convertRawJsonToRequestTableDTO(requestJsonObject,"closed_requests" );
        this.setImageForRequestTableDTO(requestTableDTOS);
        return requestTableDTOS;
    }

    private void setImageForRequestTableDTO(List<RequestTableDTO> list){
        FileService fileService = new FileService();

        for(RequestTableDTO requestTableDTO: list){
            requestTableDTO.setCreatorImageByte(fileService.getUserImage(requestTableDTO.getCreatorImageString()));
            if(requestTableDTO.getAssignedImageString() != null) {
                requestTableDTO.setAssignedImageByte(fileService.getUserImage(requestTableDTO.getAssignedImageString()));
            }
            if(requestTableDTO.getClosedImageString() != null) {
                requestTableDTO.setClosedImageByte(fileService.getUserImage(requestTableDTO.getClosedImageString()));
            }
        }
    }

   public byte[] getFileForRequest(Integer id, String name){
        return this.fileService.getFileForRequest(id, name);
   }

   public RequestDTO getRequestDetails(Integer requestId){
       Request request =  this.loadRequestById(requestId);
       request.setUserWhoWatchThisRequest(new HashSet<>(this.userService.getUsersWatchedRequest(request)));
       request.setRequestComments(this.requestCommentService.getRequestCommentsForRequest(request));

       RequestDTO requestDTO =  this.requestConverter.convertRequestToRequestDTO(request);
       requestDTO.setDocuments(this.fileService.getFileForRequest(requestId));

       return requestDTO;
   }


}
