package rc.bootsecurity.notificationModule.calendarModule.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ReminderNotFoundException extends RuntimeException{
    public ReminderNotFoundException() {
        super();
    }
    public ReminderNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
    public ReminderNotFoundException(String message) {
        super(message);
    }
    public ReminderNotFoundException(Throwable cause) {
        super(cause);
    }

}
