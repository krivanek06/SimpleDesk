import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RequestComment, RequestCommentWrapper} from 'app/features/requirement/model/Request';
import {RequestCommentType} from "../../../../../model/request.enum";
import {Confirmable} from "../../../../../../../shared/utils/swall-notification";


@Component({
  selector: 'app-request-comment-form',
  templateUrl: './request-comment-form.component.html',
  styleUrls: ['./request-comment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestCommentFormComponent implements OnInit {
  commentInput = '';
  isChecked = true; // if checkbotton is checked
  isCheckedName = RequestCommentType.Notification; // name of checkButton
  requestCommentType: typeof RequestCommentType = RequestCommentType;

  @Output() addedCommentEmitter: EventEmitter<RequestCommentWrapper> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onChange(event: any) {
    this.isChecked = !this.isChecked;
    this.isCheckedName = event.source.name;
  }

  @Confirmable(`Odoslať komentár ?`)
  submit(): void {
    if (this.commentInput === '') {
      return;
    }

    const requestComment: RequestComment = {
      id: null,
      requestId: null,
      creator: undefined,
      comment: this.commentInput,
      isPrivate: this.isChecked && this.isCheckedName === RequestCommentType.Private,
      groupsToShare: [],
      timestamp: new Date()
    };

    const requestCommentWrapper: RequestCommentWrapper = {
      requestComment,
      sendEmail: this.isChecked &&
        (this.isCheckedName === RequestCommentType.Solution || this.isCheckedName === RequestCommentType.Notification),
      solution: this.isCheckedName === RequestCommentType.Solution
    };

    this.addedCommentEmitter.emit(requestCommentWrapper);
    this.commentInput = '';
  }

}
