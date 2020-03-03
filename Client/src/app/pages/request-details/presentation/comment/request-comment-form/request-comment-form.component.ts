import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RequestComment, RequestCommentWrapper} from 'app/resources/request/model/interface/Request';
import {UserStoreService} from 'app/core/services/user-store.service';
import {SwallNotificationService} from 'app/shared/services/swall-notification.service';
import {UserSimple} from "../../../../../resources/user/model/User";
import {RequestCommentType} from "../../../../../resources/request/model/enum/request.enum";


@Component({
  selector: 'app-request-comment-form',
  templateUrl: './request-comment-form.component.html',
  styleUrls: ['./request-comment-form.component.scss']
})
export class RequestCommentFormComponent implements OnInit {
  commentInput = '';
  isChecked = true; // if checkbotton is checked
  isCheckedName = RequestCommentType.Notification; // name of checkButton
  requestCommentType: typeof RequestCommentType = RequestCommentType;

  @Output() addedCommentEmitter: EventEmitter<RequestCommentWrapper> = new EventEmitter();

  constructor(private userStoreService: UserStoreService, private swallNotification: SwallNotificationService) {
  }

  ngOnInit() {
  }

  onChange(event: any) {
    this.isChecked = !this.isChecked;
    this.isCheckedName = event.source.name;
  }


  submit(): void {
    if (this.commentInput === '') {
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

  private constructRequestCommentWrapper(requestComment: RequestComment): RequestCommentWrapper {
    const requestCommentWrapper: RequestCommentWrapper = {
      requestComment,
      sendEmail: this.isChecked && (this.isCheckedName === RequestCommentType.Solution || this.isCheckedName === RequestCommentType.Notification),
      solution: this.isCheckedName === RequestCommentType.Solution
    };
    return requestCommentWrapper;
  }

  private constructRequestComment(userSimple: UserSimple): RequestComment {
    return {
      id: null,
      requestId: null,
      creator: userSimple,
      comment: this.commentInput,
      isPrivate: this.isChecked && this.isCheckedName === RequestCommentType.Private,
      groupsToShare: [],
      timestamp: new Date()
    };
  }

}
