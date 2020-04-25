import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RequestCommentWrapper} from 'app/features/requirement/model/Request';
import {RequestCommentType} from "../../../../../model/request.enum";
import {RequestConstructorService} from "../../../../../services/request-constructor.service";
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

  constructor(private requestConstructorService: RequestConstructorService) {
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

    const requestComment = this.requestConstructorService.constructRequestComment(
      this.commentInput,
      this.isChecked && this.isCheckedName === RequestCommentType.Private
    );
    const requestCommentWrapper = this.requestConstructorService.constructRequestCommentWrapper(
      requestComment,
      this.isChecked && (this.isCheckedName === RequestCommentType.Solution || this.isCheckedName === RequestCommentType.Notification),
      this.isCheckedName === RequestCommentType.Solution
    );

    this.addedCommentEmitter.emit(requestCommentWrapper);
    this.commentInput = '';
  }

}
