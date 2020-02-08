package rc.bootsecurity.requestModule.requestCommentModule.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.groupModule.entity.Group;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.requestModule.requestCommentModule.entity.RequestComment;

import java.util.List;
import java.util.Optional;

@Repository
public interface RequestCommentRepository extends CrudRepository<RequestComment, Integer> {
    Optional<List<RequestComment>> findAllByRequestOrderByTimestampAsc(Request request);

    void deleteAllByGroupsToViewRequestComment(Group group);

}
