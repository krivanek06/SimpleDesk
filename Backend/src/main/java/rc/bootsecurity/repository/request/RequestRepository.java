package rc.bootsecurity.repository.request;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestPosition;
import rc.bootsecurity.model.entity.request.RequestPriority;
import rc.bootsecurity.model.entity.ModuleType;

import java.util.List;
import java.util.Optional;

@Repository
public interface RequestRepository extends JpaRepository<Request, Integer> {
    List<Request> findAllByRequestPriority(RequestPriority requestPriority);

    List<Request> findAllByOrderByIdAsc();
    List<Request> findAllByCreator(User user);
    List<Request> findAllByCreatorAndRequestPosition(User user, RequestPosition requestPosition);
    List<Request> findAllByCreatorAndRequestPositionAndRequestPriority(User user, RequestPosition requestPosition, RequestPriority requestPriority);
    List<Request> findAllByCreatorAndRequestPriority(User user, RequestPriority requestPriority);
    List<Request> findAllByCreatorAndModuleType(User user, ModuleType moduleType);
    List<Request> findAllByModuleType(ModuleType moduleType);
    // displayed on Dashboard
    List<Request> findAllByCreatorAndClosedIsNull(User user); // open requests by user
    List<Request> findAllByAssignedAndClosedIsNull(User user); // assigned on user
    List<Request> findAllByUserWhoWatchThisRequestContainsOrderByIdAsc(User user); // watched by user, may be even closed request
    Optional<List<Request>> findAllByModuleTypeAndClosedIsNull(ModuleType moduleType);

    Optional<List<Request>> findAllByNameStartingWithOrderByIdAsc(String subject);

        List<Request> findAllByAssigned(User user);
        List<Request> findByClosed(User user);


    List<Request> findAllByRequestPosition(RequestPosition requestPosition);
    List<Request> findAllByRequestPriorityAndRequestPosition(RequestPriority requestPriority, RequestPosition requestPosition);

    @Query(nativeQuery = true, value = "select * from get_requests_on_dashboard_for_user_varchar(?1);")
    String findOpenRequestOnDashboard(String searching_name);

    @Query(nativeQuery = true, value = "select * from get_closed_requests_for_user_varchar(?1, ?2, ?3, ?4);")
    String findClosedRequestsBetweenDate(Integer searching_id , String searching_name, String date_closed1, String date_closed2);

    @Query(nativeQuery = true, value = "select * from get_access_for_request(?1, ?2, ?3)")
    Boolean hasAccessForRequest(Integer requestId, String requestType, String username);

}
