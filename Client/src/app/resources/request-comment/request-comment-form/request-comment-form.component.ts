import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestComment, UserSimple, RequestCommentWrapper } from 'app/shared/models/RequestDetails';
import { UserStoreService } from 'app/core/services/user-store.service';
import { CommentHttpService } from 'app/api/comment-http.service';
import { SwallNotificationService } from 'app/shared/services/swall-notification.service';


@Component({
  selector: 'app-request-comment-form',
  templateUrl: './request-comment-form.component.html',
  styleUrls: ['./request-comment-form.component.scss']
})
export class RequestCommentFormComponent implements OnInit {
  commentInput: string = '';
  isChecked: boolean = false; // if checkbotton is checked
  isCheckedName: string = ''; // name of checkButton

  @Output() addedCommentEmitter: EventEmitter<RequestCommentWrapper> = new EventEmitter();

  constructor(private userStoreService: UserStoreService, private swallNotification: SwallNotificationService) { }

  ngOnInit() {    
  }
   
  onChange(event: any) {
    this.isChecked = !this.isChecked;
    this.isCheckedName = event.source.name;
  }

  
  submit(): void{
    if(this.commentInput === ''){ 
      return;
    }
    
    const requestComment = this.constructRequestComment(this.userStoreService.getUserSimple());
    const requestCommentWrapper = this.constructRequestCommentWrapper(requestComment);

    this.swallNotification.generateQuestion(`Odoslať komentár ?`).then((result) => {
      if (result.value) {
        this.addedCommentEmitter.emit(requestCommentWrapper);
        this.commentInput = '';
      }
    });
  }

  private constructRequestCommentWrapper(requestComment: RequestComment): RequestCommentWrapper{
    const requestCommentWrapper : RequestCommentWrapper = {
      requestComment : requestComment,
      sendEmail: this.isChecked && (this.isCheckedName === "Solution" || this.isCheckedName === "Notification"),
      solution: this.isCheckedName === "Solution"
    }
    return requestCommentWrapper;
  }

  private constructRequestComment(userSimple: UserSimple): RequestComment{
      const commentDTO: RequestComment = {
          id: null,
          requestId: null,
          creator: userSimple,
          comment: this.commentInput,
          isPrivate: this.isChecked && this.isCheckedName === "Private",
          groupsToShare: [],
          timestamp: new Date()
      }   
      return commentDTO;
  }

}
