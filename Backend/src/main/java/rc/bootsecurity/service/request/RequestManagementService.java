package rc.bootsecurity.service.request;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.exception.RequestNotFoundException;
import rc.bootsecurity.model.dto.UserSimpleDTO;
import rc.bootsecurity.model.dto.request.FinanceDTO;
import rc.bootsecurity.model.dto.request.ReportDTO;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.finance.Finance;
import rc.bootsecurity.model.entity.report.Report;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.enums.REQUEST_POSITION;
import rc.bootsecurity.model.enums.MODULE_TYPE;
import rc.bootsecurity.repository.ModuleTypeRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.finance.FinanceTypeRepository;
import rc.bootsecurity.repository.report.ReportRefreshRepository;
import rc.bootsecurity.repository.report.ReportTypeRepository;
import rc.bootsecurity.repository.request.*;
import rc.bootsecurity.service.UserService;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.List;

/**
 * service used for creating and modifying request
 */
@Service
public class RequestManagementService{
   @Autowired
   private RequestPositionRepository requestPositionRepository;
   @Autowired
   private RequestPriorityRepository requestPriorityRepository;
   @Autowired
   private UserRepository userRepository;
    @Autowired
    private RequestRepository requestRepository;
    @Autowired
    private ModuleTypeRepository moduleTypeRepository;
    @Autowired
    protected UserService userService;


    public void saveOrUpdateRequest(Request request){
        this.requestRepository.save(request);
    }
    public void saveOrUpdateRequest(List<Request> requests){
        this.requestRepository.saveAll(requests);
    }

    protected void setAttributesForRequest(Request request,String requestType, String name,  String priority ){
        request.setTimestampCreation(new Timestamp(System.currentTimeMillis()));
        request.setCreator(this.userRepository.findByUsername(this.userService.getPrincipalUsername()).get());
        request.setName(name);
        request.setRequestPosition(this.requestPositionRepository.findByName(REQUEST_POSITION.Vytvorené.name()));
        request.setModuleType(this.moduleTypeRepository.findByName(requestType));
        request.setRequestPriority(this.requestPriorityRepository.findByName(priority));
        request.setAllowCommenting(true);
    }




    // -----------------------------------------------------
    private Request findRequest(Integer requestId){
        return this.requestRepository.findById(requestId)
                .orElseThrow(() -> new RequestNotFoundException("Not found request with id : " + requestId));
    }

    public void removeAssignUserAndSave(Integer requestId){
        Request request = this.findRequest(requestId);
        request.setAssigned(null);
        this.saveOrUpdateRequest(request);
    }

    public void setAssignUserAndSave(Integer requestId){
        User user = this.userService.loadUser(this.userService.getPrincipalUsername());
        Request request = this.findRequest(requestId);
        request.setAssigned(user);
        this.saveOrUpdateRequest(request);
    }

    public void setAssignUserAndSave(Integer requestId, UserSimpleDTO userSimpleDTO){
        User user = this.userRepository.findByFirstNameAndLastName(userSimpleDTO.getFirstName(),userSimpleDTO.getLastName());
        Request request = this.findRequest(requestId);
        request.setAssigned(user);
        this.saveOrUpdateRequest(request);
    }


    public void setSolverUserAndSave(Integer requestId, UserSimpleDTO userSimpleDTO, String solution){
        User user = this.userRepository.findByFirstNameAndLastName(userSimpleDTO.getFirstName(),userSimpleDTO.getLastName());
        Request request = this.findRequest(requestId);
        request.setSolver(user);
        request.setSolution(solution);
        this.saveOrUpdateRequest(request);
    }

    public void setClosedUserAndSave(Integer requestId, UserSimpleDTO userSimpleDTO){
        User user = this.userRepository.findByFirstNameAndLastName(userSimpleDTO.getFirstName(),userSimpleDTO.getLastName());
        Request request = this.findRequest(requestId);
        request.setClosed(user);
        this.saveOrUpdateRequest(request);
    }

    public void setWatchRequestAndSave(Integer requestId, UserSimpleDTO userSimpleDTO){
        Request request = this.findRequest(requestId);
        request.setUserWhoWatchThisRequest(new HashSet<>(this.userRepository.findAllByWatchedRequests(request)));
        request.getUserWhoWatchThisRequest().add(this.userRepository.findUserById(userSimpleDTO.getId()));
        this.saveOrUpdateRequest(request);
    }

    public void removeWatchRequestAndSave(Integer requestId, UserSimpleDTO userSimpleDTO){
        Request request = this.findRequest(requestId);
        request.setUserWhoWatchThisRequest(new HashSet<>(this.userRepository.findAllByWatchedRequests(request)));
        User user = this.userRepository.findUserById(userSimpleDTO.getId());
        request.getUserWhoWatchThisRequest().remove(user);
        this.saveOrUpdateRequest(request);
    }


}
