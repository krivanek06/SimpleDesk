package rc.bootsecurity.requestModule.commonModule.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.requestModule.commonModule.entity.RequestLog;
import rc.bootsecurity.userModule.entity.User;

import java.util.List;

@Repository
public interface RequestLogRepository extends CrudRepository<RequestLog, Integer> {
    List<RequestLog> findAllByRequestAndUser(Request request, User user);

    void deleteAllByRequest(Request request);
    void deleteAllByRequestAndUser(Request request, User user);
}
