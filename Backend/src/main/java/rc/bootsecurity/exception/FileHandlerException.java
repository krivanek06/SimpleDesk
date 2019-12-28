package rc.bootsecurity.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class FileHandlerException extends RuntimeException {
    public FileHandlerException() {
        super();
    }
    public FileHandlerException(String message, Throwable cause) {
        super(message, cause);
    }
    public FileHandlerException(String message) {
        super(message);
    }
    public FileHandlerException(Throwable cause) {
        super(cause);
    }
}
