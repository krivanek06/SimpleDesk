import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {RequestComment} from 'app/core/model/Request';

@Component({
  selector: 'app-request-comment-options',
  templateUrl: './request-comment-options.component.html',
  styleUrls: ['./request-comment-options.component.scss']
})
export class RequestCommentOptionsComponent implements OnInit {
  @Input() requestComment: RequestComment;
  @Input() isSolution: boolean;

  @Output() editEmitter: EventEmitter<RequestComment> = new EventEmitter();
  @Output() lockEmitter: EventEmitter<RequestComment> = new EventEmitter();
  @Output() shareEmitter: EventEmitter<RequestComment> = new EventEmitter();
  @Output() deleteEmitter: EventEmitter<RequestComment> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  editComment() {
    this.editEmitter.emit(this.requestComment);
  }

  lockComment() {
    this.lockEmitter.emit(this.requestComment);
  }

  shareComment() {
    this.shareEmitter.emit(this.requestComment);
  }

  deleteComment() {
    this.deleteEmitter.emit(this.requestComment);
  }

}
