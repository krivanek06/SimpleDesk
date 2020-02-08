package rc.bootsecurity.requestModule.commonModule.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.requestModule.commonModule.entity.RequestLog;

import java.util.List;

@Repository
public interface RequestLogRepository extends CrudRepository<RequestLog, Integer> {
    List<RequestLog> findAllByRequestOrderByTimestampAsc(Request request);
}
