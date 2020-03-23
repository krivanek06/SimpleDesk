import {Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy} from '@angular/core';


@Component({
  selector: 'app-request-comment-sharing',
  templateUrl: './request-comment-sharing.component.html',
  styleUrls: ['./request-comment-sharing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestCommentSharingComponent implements OnInit {
  @Output() shareEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() groupDetailsEmitter: EventEmitter<string> = new EventEmitter<string>();

  @Input() clickedGroup: boolean;
  @Input() involvedInGroups: string[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  shareWith() {
    this.shareEmitter.emit();
  }

  getGroupDetails(groupName: string) {
    this.groupDetailsEmitter.emit(groupName);
  }

}
