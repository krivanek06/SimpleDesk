package rc.bootsecurity.requestModule.requestCommentModule.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class CommentNotFoundException extends  RuntimeException {
    public CommentNotFoundException() {
        super();
    }
    public CommentNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
    public CommentNotFoundException(String message) {
        super(message);
    }
    public CommentNotFoundException(Throwable cause) {
        super(cause);
    }
}
