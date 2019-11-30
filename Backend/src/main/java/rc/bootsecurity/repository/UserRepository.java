package rc.bootsecurity.repository;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import rc.bootsecurity.model.dto.UserPrivileges;
import rc.bootsecurity.model.entity.Group;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.Request;

import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);

    List<User> findAllByGroupsInvolved(Group group);

    User findByFirstNameAndLastName(String firstName, String lastName);
    List<User> findAllByWatchedRequests(Request request);
    List<User> findAllByUsernameIn(List<String> usernames);

    @Query(nativeQuery = true, value = "select * from get_all_privileges_for_user_json(?1);")
    JsonNode findPrivilegesForUser(Integer userId);

    User findUserById(Integer id);

}
