package rc.bootsecurity.requestModule.commonModule.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.requestModule.commonModule.entity.Request;

import java.util.List;
import java.util.Optional;

@Repository
public interface RequestRepository extends JpaRepository<Request, Integer> {

    @Query(nativeQuery = true, value = "select * from get_requests_on_dashboard_for_user_varchar(?1);")
    String findOpenRequestOnDashboard(String searching_name);

    @Query(nativeQuery = true, value = "select * from get_all_requests_on_dashboard()")
    String findAllOpenRequestOnDashboard();

    @Query(nativeQuery = true, value = "select * from get_closed_requests_for_user_varchar(?1, ?2, ?3, ?4);")
    String findClosedRequestsBetweenDate(Integer searching_id , String searching_name, String date_closed1, String date_closed2);

    @Query(nativeQuery = true, value = "select * from get_all_closed_requests(?1, ?2);")
    String findAllClosedRequestsBetweenDate(String date_closed1, String date_closed2);

    @Query(nativeQuery = true, value = "select * from get_access_for_request(?1, ?2, ?3)")
    Boolean hasAccessForRequest(Integer requestId, String requestType, String username);

}
