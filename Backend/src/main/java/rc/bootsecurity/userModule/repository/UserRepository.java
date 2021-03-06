package rc.bootsecurity.userModule.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.groupModule.entity.Group;
import rc.bootsecurity.userModule.entity.User;
import rc.bootsecurity.requestModule.commonModule.entity.Request;

import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
    List<User> findAllByUsernameIn(List<String> username);

    List<User> findAllByActiveTrueOrderById();
    List<User> findAllByOrderByIdAsc();

    List<User> findAllByGroupsInvolved(Group group);
    Optional<List<User>> findAllByGroupsActivityWatched(Group group);

 //   Optional<List<User>> findAllByWatchedRequests(Request request);

    @Query(nativeQuery = true, value = "select * from get_all_privileges_for_user_varchar(?1);")
    String findPrivilegesForUser(String searching_name);


    /**
     * @return list of userId who will get updated request through websockets, but not notification
     */
    @Query(nativeQuery = true, value = "select * from get_users_to_send_request_change(?1)")
    List<String> getUsersToSendRequestChange(Integer requestId);


}
