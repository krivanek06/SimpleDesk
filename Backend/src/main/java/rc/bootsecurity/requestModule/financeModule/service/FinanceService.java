package rc.bootsecurity.requestModule.financeModule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.requestModule.commonModule.dto.RequestDTO;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.requestModule.commonModule.service.RequestManagementService;
import rc.bootsecurity.requestModule.financeModule.dto.FinanceFormDTO;
import rc.bootsecurity.requestModule.financeModule.dto.FinanceTypeDTO;
import rc.bootsecurity.requestModule.financeModule.entity.Finance;
import rc.bootsecurity.requestModule.commonModule.enums.MODULE_TYPE;
import rc.bootsecurity.requestModule.financeModule.repository.FinanceTypeRepository;
import rc.bootsecurity.requestModule.commonModule.utils.RequestConverter;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FinanceService extends RequestManagementService {
    private RequestConverter requestConverter = new RequestConverter();

    @Autowired
    private FinanceTypeRepository financeTypeRepository;

    public RequestDTO createFinance(FinanceFormDTO financeFormDTO){
        Finance finance = new Finance();
        this.setAttributesForRequest(finance, MODULE_TYPE.Finance.name(),financeFormDTO.getName(), financeFormDTO.getRequestPriority());

        finance.setFinanceType(this.financeTypeRepository.findByName(financeFormDTO.getFinanceType()));

        super.saveOrUpdateRequest(finance);
        this.requestLogService.BroadcastRequest(finance, super.requestWebsockets.NEW_REQUEST);
        return requestConverter.convertRequestToRequestDTO(finance);
    }

    public List<FinanceTypeDTO> getFinanceTypesDTO(){
        List<FinanceTypeDTO> financeTypes =  new ArrayList<>();
        this.financeTypeRepository.findAll().forEach(financeType -> {
            financeTypes.add(this.requestConverter.convertFinanceTypeToFinanceTypeDTOWithoutGroups(financeType));
        });
        return financeTypes;
    }

}
