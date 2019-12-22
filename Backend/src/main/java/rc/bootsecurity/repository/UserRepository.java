package rc.bootsecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
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

    @Query(nativeQuery = true, value = "select * from get_all_privileges_for_user_varchar(?1);")
    String findPrivilegesForUser(String searching_name);

   /* @Query(nativeQuery = true, value = "select * from get_all_privileges_for_user_json(?1);")
    String findPrivilegesForUser(Integer userId);*/


    User findUserById(Integer id);

}
