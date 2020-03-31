import {Component, Input, OnInit} from '@angular/core';
import {RequestComment, Request, RequestCommentWrapper} from 'app/features/requirement/model/Request';
import {Observable} from 'rxjs';
import {SwallNotificationService} from 'app/core/services/swall-notification.service';
import {Group, GroupContainer} from "../../../../../../core/model/Group";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../../../core/model/appState.model";
import {getRequestById} from "../../../../store/request.reducer";
import {User} from "../../../../../../core/model/User";

import * as RequestAction from '../../../../store/request.action';
import * as fromRequest from '../../../../store/request.reducer';
import * as fromAuth from '../../../../../../core/store/auth/auth.reducer';
import * as fromUser from '../../../../../../core/store/user/user.reducer';

@Component({
  selector: 'app-request-comment-container',
  templateUrl: './request-comment-container.component.html',
  styleUrls: ['./request-comment-container.component.scss']
})
export class RequestCommentContainerComponent implements OnInit {

  @Input() applyZIndex = true;

  showWindowCommentSharing = false;

  private sharingComment: RequestComment; // comment which will be shared

  user$: Observable<User>;
  isGhost$: Observable<boolean>;
  isSolver$: Observable<boolean>;
  request$: Observable<Request>;
  selectedGroup$: Observable<Group>;
  groupContainer$: Observable<GroupContainer>;


  constructor(private swallNotification: SwallNotificationService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.isGhost$ = this.store.select(fromAuth.isGhost);
    this.isSolver$ = this.store.select(fromAuth.isSolver);
    this.groupContainer$ = this.store.select(fromUser.getGroupContainer);
    this.user$ = this.store.select(fromUser.getUser);
    this.request$ = this.store.select(getRequestById);
    this.selectedGroup$ = this.store.select(fromRequest.getGroupToShare);
  }

  async editComment(requestComment: RequestComment) {
    const {value: formValues} = await this.swallNotification.editComment(requestComment.comment);
    if (formValues) {
      this.store.dispatch(RequestAction.editComment({requestComment, comment: formValues[0]}));
    }
  }

  deleteComment(requestComment: RequestComment) {
    this.swallNotification.generateDeleteQuestion('komentár', requestComment.comment).then((result) => {
      if (result.value) {
        this.store.dispatch(RequestAction.deleteComment({requestComment}));
      }
    });
  }

  changeCommentPrivacy(requestComment: RequestComment) {
    this.store.dispatch(RequestAction.changeCommentPrivacy({requestComment}));
  }

  changeFrames(requestComment: RequestComment) {
    this.showWindowCommentSharing = !this.showWindowCommentSharing;
    this.sharingComment = requestComment;
  }

  shareWith(groupName: string) {
    this.swallNotification.generateQuestion(`Naozaj chcete vyzdieľať komentár so skupinou: ${groupName} ?`).then((result) => {
      if (result.value) {
        this.store.dispatch(RequestAction.shareComment({requestComment: this.sharingComment, groupName}));
      }
    });
  }

  getGroupDetails(groupName: string) {
    this.store.dispatch(RequestAction.getGroupToShare({groupName}));
  }

  addComment(requestCommentWrapper: RequestCommentWrapper, request: Request) {
    requestCommentWrapper.requestComment.requestId = request.id;
    this.store.dispatch(RequestAction.addComment({request, requestCommentWrapper}));
  }

}
