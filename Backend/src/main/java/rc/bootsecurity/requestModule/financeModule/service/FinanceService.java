package rc.bootsecurity.requestModule.financeModule.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.requestModule.commonModule.service.RequestManagementService;
import rc.bootsecurity.requestModule.financeModule.dto.FinanceDTO;
import rc.bootsecurity.requestModule.financeModule.dto.FinanceTypeDTO;
import rc.bootsecurity.requestModule.financeModule.entity.Finance;
import rc.bootsecurity.requestModule.commonModule.enums.MODULE_TYPE;
import rc.bootsecurity.requestModule.financeModule.repository.FinanceTypeRepository;
import rc.bootsecurity.requestModule.commonModule.utils.RequestConverter;
import rc.bootsecurity.userModule.entity.User;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FinanceService extends RequestManagementService {
    private RequestConverter requestConverter = new RequestConverter();

    @Autowired
    private FinanceTypeRepository financeTypeRepository;

    public Finance createFinance(FinanceDTO financeDTO){
        Finance finance = new Finance();
        this.setAttributesForRequest(finance, MODULE_TYPE.Finance.name(),financeDTO.getName(), financeDTO.getRequestPriority());

        finance.setFinanceType(this.financeTypeRepository.findByName(financeDTO.getFinanceType()));

        super.saveOrUpdateRequest(finance);
        this.requestLogService.saveLogAndBroadCast(finance, super.requestWebsockets.NEW_REQUEST + ((Request) finance).getId());
        return finance;
    }

    public List<FinanceTypeDTO> getFinanceTypesToSubmitForLoggedInUser(){
        return this.financeTypeRepository.getFinanceTypesToSubmitForUser(this.userService.getPrincipalUsername())
                    .map(types -> types.stream().map(requestConverter::convertFinanceTypeToFinanceTypeDTOWithoutGroups)
                            .collect(Collectors.toList())).orElseGet(ArrayList::new);
    }

    public List<FinanceTypeDTO> getFinanceTypesDTO(){
        List<FinanceTypeDTO> financeTypes =  new ArrayList<>();
        this.financeTypeRepository.findAll().forEach(financeType -> {
            financeTypes.add(this.requestConverter.convertFinanceTypeToFinanceTypeDTOWithoutGroups(financeType));
        });
        return financeTypes;
    }

}
