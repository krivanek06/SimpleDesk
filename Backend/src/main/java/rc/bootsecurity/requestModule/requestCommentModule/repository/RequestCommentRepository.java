package rc.bootsecurity.requestModule.requestCommentModule.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.groupModule.entity.Group;
import rc.bootsecurity.requestModule.commonModule.entity.Request;
import rc.bootsecurity.requestModule.requestCommentModule.entity.RequestComment;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Repository
public interface RequestCommentRepository extends CrudRepository<RequestComment, Integer> {
    void deleteAllByGroupsToViewRequestComment(Group group);

    @Query(nativeQuery = true, value = "select * from get_request_comment_dto_varchar(?1, ?2);")
    String getRequestCommentDtoForUser(Integer searching_request_id, String searching_user_name);

    @Query(nativeQuery = true, value = "select * from get_request_comment_dto_all(?1);")
    String getAllRequestCommentDto(Integer searching_request_id);

}
