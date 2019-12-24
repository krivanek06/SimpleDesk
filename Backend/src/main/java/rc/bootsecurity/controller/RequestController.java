package rc.bootsecurity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rc.bootsecurity.model.dto.request.RequestDTO;
import rc.bootsecurity.model.dto.request.RequestDashboardDTO;
import rc.bootsecurity.model.dto.request.RequestTableDTO;
import rc.bootsecurity.service.request.RequestService;

@RestController
@RequestMapping("api/requests")
public class RequestController {
    @Autowired
    private RequestService requestService;


    @GetMapping("/dashboard")
    public RequestDashboardDTO getRequestOnDashboard(){
        return this.requestService.getRequestOnDashboard();
    }
}
