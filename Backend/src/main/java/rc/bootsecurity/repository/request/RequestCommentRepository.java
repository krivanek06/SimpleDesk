package rc.bootsecurity.repository.request;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestComment;

import java.util.List;
import java.util.Optional;

@Repository
public interface RequestCommentRepository extends CrudRepository<RequestComment, Integer> {
    Optional<List<RequestComment>> findAllByRequestOrderByTimestampAsc(Request request);

    void deleteAllByGroupsToViewRequestComment(Group group);
}
