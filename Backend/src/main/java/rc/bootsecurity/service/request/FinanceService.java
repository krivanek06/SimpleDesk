package rc.bootsecurity.service.request;

import net.bytebuddy.matcher.FilterableList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rc.bootsecurity.model.dto.request.FinanceDTO;
import rc.bootsecurity.model.dto.request.FinanceTypeDTO;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.finance.Finance;
import rc.bootsecurity.model.entity.finance.FinanceType;
import rc.bootsecurity.model.enums.MODULE_TYPE;
import rc.bootsecurity.repository.finance.FinanceTypeRepository;
import rc.bootsecurity.utils.converter.RequestConverter;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
public class FinanceService extends RequestStateService{
    @Autowired
    private FinanceTypeRepository financeTypeRepository;

    public Finance createFinance(FinanceDTO financeDTO){
        Finance finance = new Finance();
        this.setAttributesForRequest(finance, MODULE_TYPE.Financie.name(),financeDTO.getName(), financeDTO.getRequestPriority());

        finance.setFinanceType(this.financeTypeRepository.findByName(financeDTO.getFinanceType()));

        return finance;
    }

    public List<FinanceTypeDTO> getFinanceTypesToSubmitForLoggedInUser(){
        Optional<List<FinanceType>> financeTypes = this.financeTypeRepository.getFinanceTypesToSubmitForUser(this.userService.getPrincipalUsername());

       if(financeTypes.isPresent()) {
            RequestConverter requestConverter = new RequestConverter();
            return financeTypes.get().stream().map(requestConverter::convertFinanceTypeToFinanceTypeDTOWithoutGroups).collect(Collectors.toList());
        }
        return new ArrayList<>();
    }

}
