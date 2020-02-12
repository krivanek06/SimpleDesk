import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RequestComment } from 'app/shared/models/RequestDetails';

@Component({
  selector: 'app-request-comment-options',
  templateUrl: './request-comment-options.component.html',
  styleUrls: ['./request-comment-options.component.scss']
})
export class RequestCommentOptionsComponent implements OnInit {
  @Input() isPrivate: boolean;
  @Input() isSolution: boolean;

  @Output() editEmitter: EventEmitter<RequestComment> = new EventEmitter();
  @Output() lockEmitter: EventEmitter<RequestComment> = new EventEmitter();
  @Output() shareEmitter: EventEmitter<RequestComment> = new EventEmitter();
  @Output() deleteEmitter: EventEmitter<RequestComment> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  editComment(){
    this.editEmitter.emit();
  }
  lockComment(){
    this.lockEmitter.emit();
  }
  shareComment(){
    this.shareEmitter.emit();
  }
  deleteComment(){
    this.deleteEmitter.emit();
  }

}
