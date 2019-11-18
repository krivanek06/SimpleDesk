package rc.bootsecurity.repository.request;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rc.bootsecurity.model.entity.User;
import rc.bootsecurity.model.entity.request.Request;
import rc.bootsecurity.model.entity.request.RequestPosition;
import rc.bootsecurity.model.entity.request.RequestPriority;
import rc.bootsecurity.model.entity.request.RequestType;
import rc.bootsecurity.model.entity.ticket.Ticket;

import java.util.List;
import java.util.Optional;

@Repository
public interface RequestRepository extends JpaRepository<Request, Integer> {
    List<Request> findAllByCreator(User user);
    List<Request> findAllByCreatorAndRequestPosition(User user, RequestPosition requestPosition);
    List<Request> findAllByCreatorAndRequestPositionAndRequestPriority(User user, RequestPosition requestPosition, RequestPriority requestPriority);
    List<Request> findAllByCreatorAndRequestPriority(User user, RequestPriority requestPriority);

    // displayed on Dashboard
    List<Request> findAllByCreatorAndClosedIsNull(User user); // open requests by user
    List<Request> findAllByAssignedAndClosedIsNull(User user); // assigned on user
    List<Request> findAllByUserWhoWatchThisRequestContains(User user); // watched by user, may be even closed request
    Optional<List<Request>> findAllByRequestTypeAndClosedIsNull(RequestType requestType);

    Optional<List<Request>> findAllBySubjectStartingWith(String subject);

    List<Request> findAllByAssigned(User user);
    List<Request> findByClosed(User user);

    List<Request> findAllByRequestPriority(RequestPriority requestPriority);
    List<Request> findAllByRequestPosition(RequestPosition requestPosition);
    List<Request> findAllByRequestPriorityAndRequestPosition(RequestPriority requestPriority, RequestPosition requestPosition);


}
