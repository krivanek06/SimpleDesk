package rc.bootsecurity.requestModule.commonModule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.requestModule.commonModule.dto.RequestStatistics;
import rc.bootsecurity.requestModule.commonModule.exception.RequestNotFoundException;
import rc.bootsecurity.requestModule.commonModule.repository.RequestLogRepository;
import rc.bootsecurity.requestModule.commonModule.repository.RequestRepository;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.userModule.enums.USER_TYPE;
import rc.bootsecurity.userModule.service.UserService;
import rc.bootsecurity.requestModule.commonModule.utils.RequestConverter;
import rc.bootsecurity.util.fileModule.FileService;
import rc.bootsecurity.util.JsonStringParser;

import java.util.*;

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


    public void saveRequest(Request request){
        this.requestRepository.save(request);
    }

    public Request loadRequestById(Integer requestId){
        return this.requestRepository.findById(requestId).orElseThrow(() -> new RequestNotFoundException("Could not found request with id : " + requestId));
    }


    public List<HashMap> getRequestsOnDashboard(){
        String username = this.userService.getPrincipalUsername();

        String rawJson = (username.equalsIgnoreCase(USER_TYPE.Ghost.name()) || username.equalsIgnoreCase(USER_TYPE.Admin.name())) ?
                      this.requestRepository.findAllOpenRequestOnDashboard() : this.requestRepository.findOpenRequestOnDashboard(username);

        List<HashMap> requestDashboardDTO = this.jsonStringParser.convertRawJsonToRequestTableDTO(rawJson, "open_requests");
        requestDashboardDTO.forEach(requestTableDTO -> {
            requestTableDTO.put("documents", this.fileService.getFileForRequest((Integer) requestTableDTO.get("id")));
        });

        return requestDashboardDTO;
    }

    public List<HashMap> getClosedRequests(String dateClosed1, String dateClosed2){
        User user = this.userService.loadUserByUsername(this.userService.getPrincipalUsername());
        String rawJson = (user.getUsername().equalsIgnoreCase(USER_TYPE.Ghost.name()) || user.getUsername().equalsIgnoreCase(USER_TYPE.Admin.name())) ?
                 this.requestRepository.findAllClosedRequestsBetweenDate(dateClosed1, dateClosed2) :
                    this.requestRepository.findClosedRequestsBetweenDate(user.getId(), user.getUsername(), dateClosed1, dateClosed2);


        List<HashMap> requestTableDTOS = this.jsonStringParser.convertRawJsonToRequestTableDTO(rawJson,"closed_requests" );
        requestTableDTOS.forEach(requestTableDTO -> {
            requestTableDTO.put("documents", this.fileService.getFileForRequest((Integer) requestTableDTO.get("id")));
        });

        return requestTableDTOS;
    }

   public byte[] getFileForRequest(Integer id, String name){
        return this.fileService.getFileForRequest(id, name);
   }

   public RequestStatistics getRequestMonthlyStatistics(){
       List<Object[]> getRequestMonthStatistics = this.requestRepository.getRequestMonthStatistics(this.userService.getPrincipalUsername());
       return this.requestConverter.convertObjectIntoRequestStatistics(getRequestMonthStatistics);
   }

    public RequestStatistics getRequestMonthlyStatistics(String username){
        List<Object[]> getRequestMonthStatistics = this.requestRepository.getRequestMonthStatistics(username);
        return this.requestConverter.convertObjectIntoRequestStatistics(getRequestMonthStatistics);
    }



}
