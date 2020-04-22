package rc.bootsecurity.notificationModule.calendarModule.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ReminderImpersonatingException extends RuntimeException {
    public ReminderImpersonatingException() {
        super();
    }
    public ReminderImpersonatingException(String message, Throwable cause) {
        super(message, cause);
    }
    public ReminderImpersonatingException(String message) {
        super(message);
    }
    public ReminderImpersonatingException(Throwable cause) {
        super(cause);
    }
}
