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
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.ModuleTypeRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.finance.FinanceTypeRepository;
import rc.bootsecurity.repository.report.ReportRefreshRepository;
import rc.bootsecurity.repository.report.ReportTypeRepository;
import rc.bootsecurity.repository.request.*;
import rc.bootsecurity.service.UserService;
import rc.bootsecurity.utils.converter.UserConverter;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.List;

/**
 * service used for creating and modifying request
 */
@Service
public class RequestManagementService{
    @Autowired
    private RequestRepository requestRepository;
    @Autowired
    protected UserService userService;
    @Autowired
    protected GroupRepository groupRepository;
    @Autowired
    protected UserRepository userRepository;
    @Autowired
    protected RequestCommentService requestCommentService;

    private UserConverter userConverter = new UserConverter();

    public void saveOrUpdateRequest(Request request){
        this.requestRepository.save(request);
    }
    public void saveOrUpdateRequest(List<Request> requests){
        this.requestRepository.saveAll(requests);
    }


    private Request findRequest(Integer requestId){
        return this.requestRepository.findById(requestId)
                .orElseThrow(() -> new RequestNotFoundException("Not found request with id : " + requestId));
    }

    public void removeMeAsAssignUserAndSave(Integer requestId){
        Request request = this.findRequest(requestId);
        String username = this.userService.getPrincipalUsername();
        if(request.getAssigned().getUsername().equalsIgnoreCase(username)) {
            request.setAssigned(null);
            this.saveOrUpdateRequest(request);
        }
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

    public UserSimpleDTO setAssignUserAndSave(Integer requestId, UserSimpleDTO userSimpleDTO){
        User user = this.userService.loadUser(userSimpleDTO.getUsername());
        Request request = this.findRequest(requestId);
        request.setAssigned(user);
        this.saveOrUpdateRequest(request);
        return this.userConverter.convertUserToSimpleDTO(user);
    }


    public void setSolverUserAndSave(Integer requestId, UserSimpleDTO userSimpleDTO, String solution){
        User user = this.userService.loadUser(userSimpleDTO.getUsername());
        Request request = this.findRequest(requestId);
        request.setSolver(user);
        request.setSolution(solution);
        this.saveOrUpdateRequest(request);
    }

    public void setWatchRequestAndSave(Integer requestId, UserSimpleDTO userSimpleDTO){
        Request request = this.findRequest(requestId);
        request.setUserWhoWatchThisRequest(new HashSet<>(this.userService.getUsersWatchedRequest(request)));
        request.getUserWhoWatchThisRequest().add(this.userService.loadUser(userSimpleDTO.getUsername()));
        this.saveOrUpdateRequest(request);
    }

    public void removeWatchRequestAndSave(Integer requestId, UserSimpleDTO userSimpleDTO){
        Request request = this.findRequest(requestId);
        request.setUserWhoWatchThisRequest(new HashSet<>(this.userService.getUsersWatchedRequest(request)));
        User user = this.userService.loadUser(userSimpleDTO.getUsername());
        request.getUserWhoWatchThisRequest().remove(user);
        this.saveOrUpdateRequest(request);
    }




}
