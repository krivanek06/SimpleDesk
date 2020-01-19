package rc.bootsecurity.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rc.bootsecurity.model.dto.GroupDTO;
import rc.bootsecurity.model.dto.request.RequestCommentDTO;
import rc.bootsecurity.model.entity.request.RequestComment;
import rc.bootsecurity.service.request.RequestCommentService;
import rc.bootsecurity.utils.converter.RequestConverter;
import rc.bootsecurity.utils.service.FileService;

@RestController
@RequestMapping("api/requests/comment")
public class RequestCommentController {
    private static final Logger LOGGER =  LoggerFactory.getLogger(RequestCommentController.class);


    @Autowired
    private RequestCommentService requestCommentService;


    @PostMapping
    public ResponseEntity<?> addComment(@RequestBody RequestCommentDTO requestCommentDTO,
                                        @RequestParam boolean sendEmail,
                                        @RequestParam boolean solution) {
        try {
            requestCommentDTO = this.requestCommentService.addRequestComment(requestCommentDTO, sendEmail, solution);
            return new ResponseEntity<>(requestCommentDTO, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed method addComment, to add comment: " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri zaznamenaní komentára pre požiadavku s id : " + requestCommentDTO.getRequestId() ,HttpStatus.BAD_REQUEST);
    }

    @PutMapping
    public ResponseEntity<?> editComment(@RequestBody RequestCommentDTO requestCommentDTO) {
        try {
            this.requestCommentService.modifyComment(requestCommentDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed method editComment, to add comment: " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri editovaní komentára pre požiadavku s id : " + requestCommentDTO.getRequestId() ,HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteComment(@RequestBody RequestCommentDTO requestCommentDTO) {
        try {
            this.requestCommentService.deleteComment(requestCommentDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed method deleteComment, to add comment: " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse z zmazanie komentára", HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/privacy")
    public ResponseEntity<?> changeCommentPrivacy(@RequestBody RequestCommentDTO requestCommentDTO) {
        try{
            this.requestCommentService.modifyComment(requestCommentDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed method changeCommentPrivacy, to add comment: " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse z zmazanie komentára", HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/share")
    public ResponseEntity<?> shareComment(@RequestBody RequestCommentDTO requestCommentDTO) {
        try{
            this.requestCommentService.shareCommentWith(requestCommentDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Failed method shareComment : " + e.getMessage());
        }
        return new ResponseEntity<>("Došlo ku chybe na strane servera pri pokuse z zdieľania komentára", HttpStatus.BAD_REQUEST);
    }
}
