package rc.bootsecurity.repository.request;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestComment;

import java.util.List;

@Repository
public interface RequestCommentRepository extends CrudRepository<RequestComment, Integer> {
    List<RequestComment> findAllByRequestOrderByTimestampAsc(Request request);
}
