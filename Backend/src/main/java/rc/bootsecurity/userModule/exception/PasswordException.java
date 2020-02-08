package rc.bootsecurity.userModule.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_ACCEPTABLE)
public class PasswordException extends RuntimeException{
    public PasswordException() {
        super();
    }
    public PasswordException(String message, Throwable cause) {
        super(message, cause);
    }
    public PasswordException(String message) {
        super(message);
    }
    public PasswordException(Throwable cause) {
        super(cause);
    }
}

