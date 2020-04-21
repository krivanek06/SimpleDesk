package rc.bootsecurity.notificationModule.calendarModule.repository;

import org.springframework.data.repository.CrudRepository;
import rc.bootsecurity.notificationModule.calendarModule.entity.Reminder;
import rc.bootsecurity.userModule.entity.User;

import java.util.List;

public interface ReminderRepository extends CrudRepository<Reminder, Integer> {
    List<Reminder> getAllByUser(User user);
}
