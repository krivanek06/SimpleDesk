package rc.bootsecurity.repository.request;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestLog;

import java.util.List;

@Repository
public interface RequestLogRepository extends CrudRepository<RequestLog, Integer> {
    List<RequestLog> findAllByRequestOrderByTimestampAsc(Request request);
}
