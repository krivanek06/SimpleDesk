package rc.bootsecurity.service.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.request.FinanceDTO;
import rc.bootsecurity.model.entity.finance.Finance;
import rc.bootsecurity.model.enums.MODULE_TYPE;
import rc.bootsecurity.repository.finance.FinanceTypeRepository;

@Service
public class FinanceService extends RequestManagementService{
    @Autowired
    private FinanceTypeRepository financeTypeRepository;

    public Finance createFinance(FinanceDTO financeDTO){
        Finance finance = new Finance();
        this.setAttributesForRequest(finance, MODULE_TYPE.Financie.name(),financeDTO.getName(), financeDTO.getRequestPriority());

        finance.setFinanceType(this.financeTypeRepository.findByName(financeDTO.getFinanceType()));

        return finance;
    }

}
