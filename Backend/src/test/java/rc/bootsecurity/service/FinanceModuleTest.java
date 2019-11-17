package rc.bootsecurity.service;

import io.zonky.test.db.AutoConfigureEmbeddedDatabase;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.finance.Finance;
import rc.bootsecurity.model.entity.finance.FinanceType;
import rc.bootsecurity.model.entity.request.RequestPosition;
import rc.bootsecurity.model.entity.request.RequestPriority;
import rc.bootsecurity.model.entity.request.RequestType;
import rc.bootsecurity.repository.GroupRepository;
import rc.bootsecurity.repository.UserRepository;
import rc.bootsecurity.repository.finance.FinanceRepository;
import rc.bootsecurity.repository.finance.FinanceTypeRepository;
import rc.bootsecurity.repository.request.RequestTypeRepository;
import rc.bootsecurity.test.creator.Creator;

import java.util.List;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureEmbeddedDatabase
public class FinanceModuleTest {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FinanceTypeRepository financeTypeRepository;

    @Autowired
    private FinanceRepository financeRepository;

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private RequestTypeRepository requestTypeRepository;

    /**
     * otestovat
     * 1. vytvorenie financeho typu - ok
     * 2. vytvorenie financie - ok
     * 3. vytvorenie skupin - ok
     * 4. vytvorenie Request type finance - ok
     * 5. opravenie niekotrim skupinam riestit financny modul, inym nie - ok
     * 6. opravnenia groupon submitovat financny modul, aky typ - ok
     * 7. loadny moje financne requesty
     * 8. pridelit riesitela na financny modul a dat do stavu riesene
     * 9. 3x comment k financnemu modulu
     * 10. zatvorit financny modul
     * 11. dat skupine riesit len jeden typ financneho modulu
     */

    @Test
    public void financeModuleTest(){
        User user1 = Creator.createUser("Eduard" , "krivanek", "user1" , "fakemail@gmail.com" , "123456");
        User user2 = Creator.createUser("Tomas" , "Maly", "user2" , "fakemail2@gmail.com" , "123456");
        User user3 = Creator.createUser("Test" , "Test", "user3" , "fakemail3@gmail.com" , "123456");
        this.userRepository.saveAll(List.of(user1, user2, user3));

        // 1. vytvorenie financeho typu
        FinanceType financeType1 = Creator.createFinanceType("FinanceType1");
        FinanceType financeType2 = Creator.createFinanceType("FinanceType2");
        this.financeTypeRepository.saveAll(List.of(financeType1, financeType2));

        // 3. vytvorenie skupin
        Group group1 = Creator.createGroup("TESTGROUP1" , user1, Set.of(user1,user2, user3));
        Group group2 = Creator.createGroup("TESTGROUP2" , user1, Set.of(user1,user2));
        this.groupRepository.saveAll(List.of(group1, group2));

        // 4, 5 , 6 - Request type finance
        //RequestType requestType1 = Creator.createRequestType("Finance", Set.of(group1), Set.of(group2));
       // this.requestTypeRepository.save(requestType1);

        // 11.
        financeType1.setGroupsToSubmitSpecificFinanceType(Set.of(group2));
        this.financeTypeRepository.save(financeType1);
        assertThat(this.financeTypeRepository.findAllByGroupsToSubmitSpecificFinanceType(Set.of(group2))).containsOnly(financeType1);

        RequestPriority requestPriority = Creator.createRequestPriority("high");
        RequestPosition requestPositionNew = Creator.createRequestPosition("new");
        RequestPosition requestPositionClosed = Creator.createRequestPosition("closed");

        // 2.
        Finance finance1 = Creator.createFinance("Finance request 1", requestPriority, requestPositionNew, user2);
        Finance finance2 = Creator.createFinance("Finance request 2", requestPriority, requestPositionNew, user2);
        finance1.setFinanceType(financeType1);
        finance2.setFinanceType(financeType1);
        this.financeRepository.saveAll(List.of(finance1, finance2));


        assertThat(this.financeRepository.findAllByCreator(user2)).containsOnly(finance1, finance2);



    }
}
