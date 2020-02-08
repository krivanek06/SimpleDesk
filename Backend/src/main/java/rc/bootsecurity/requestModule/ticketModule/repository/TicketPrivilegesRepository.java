package rc.bootsecurity.requestModule.ticketModule.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import rc.bootsecurity.groupModule.entity.Group;
import rc.bootsecurity.requestModule.ticketModule.entity.TicketPrivileges;

import java.util.List;
import java.util.Optional;

@Repository
public interface TicketPrivilegesRepository extends CrudRepository<TicketPrivileges, Integer> {
    Optional<List<TicketPrivileges>> findAllByGroup(Group group);


    @Modifying
    @Transactional
    void deleteByIdIn(List<Integer> id);
}
