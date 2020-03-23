import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {RequestComment} from 'app/core/model/Request';
import {UserStoreService} from 'app/core/services/user-store.service';


@Component({
  selector: 'app-request-comment-body',
  templateUrl: './request-comment-body.component.html',
  styleUrls: ['./request-comment-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestCommentBodyComponent implements OnInit {
  @Input() requestComment: RequestComment;
  @Input() solutionId: number;

  constructor(public userStoreService: UserStoreService) {
  }

  ngOnInit() {

  }

}
