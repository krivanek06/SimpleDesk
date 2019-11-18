package rc.bootsecurity.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_IMPLEMENTED)
public class PrivilegeException extends RuntimeException {
    public PrivilegeException() {
        super();
    }
    public PrivilegeException(String message, Throwable cause) {
        super(message, cause);
    }
    public PrivilegeException(String message) {
        super(message);
    }
    public PrivilegeException(Throwable cause) {
        super(cause);
    }
}
