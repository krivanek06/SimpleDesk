import {Component, Input, OnInit} from '@angular/core';
import {RequestComment, Request, RequestCommentWrapper} from 'app/core/model/Request';
import {Observable} from 'rxjs';
import {RequestStoreService} from 'app/core/services/request-store.service';
import {CommentHttpService} from 'app/api/comment-http.service';
import {SwallNotificationService} from 'app/shared/services/swall-notification.service';
import {UserStoreService} from 'app/core/services/user-store.service';
import {RequestService} from 'app/core/services/request.service';
import {GroupHttpService} from "../../../../api/group-http.service";
import {Group} from "../../../../core/model/Group";

@Component({
  selector: 'app-request-comment-container',
  templateUrl: './request-comment-container.component.html',
  styleUrls: ['./request-comment-container.component.scss']
})
export class RequestCommentContainerComponent implements OnInit {
  @Input() applyZIndex = true;
  @Input() requestDetails: Request;

  showWindowCommentSharing = false;
  clickedGroup = false;
  selectedGroup: Group;
  loggedInUsername: string;


  private sharingComment: RequestComment;
  isGhost$: Observable<boolean>;
  isSolver$: Observable<boolean>;


  involvedInGroups$: Observable<string[]>;


  constructor(private swallNotification: SwallNotificationService,
              public userStoreService: UserStoreService,
              private commentHttp: CommentHttpService,
              private requestService: RequestService,
              private groupService: GroupHttpService,
              private requestStore: RequestStoreService) {
  }

  ngOnInit() {
    this.isGhost$ = this.userStoreService.isGhost();
    this.isSolver$ = this.userStoreService.isSolver();
    this.involvedInGroups$ = this.groupService.getAllGroupNamesForUser();
    this.loggedInUsername = this.userStoreService.user.username;
  }

  async editComment(requestComment: RequestComment) {
    const {value: formValues} = await this.swallNotification.editComment(requestComment.comment);
    if (formValues) {
      requestComment.comment = formValues[0];
      this.commentHttp.editComment(requestComment).subscribe(() => {
        this.swallNotification.generateNotification(`Komentár bol zmenený`);
      });
    }
  }

  deleteComment(requestComment: RequestComment) {
    this.swallNotification.generateDeleteQuestion('komentár', requestComment.comment).then((result) => {
      if (result.value) {
        this.commentHttp.deleteComment(requestComment).subscribe(() => {
          const index = this.requestStore.requestDetails.requestCommentDTOS.indexOf(requestComment);
          if (index > -1) {
            this.requestStore.requestDetails.requestCommentDTOS.splice(index, 1);
          }
          this.swallNotification.generateNotification(`Komentár bol zmazaný`);
        });
      }
    });
  }

  changeCommentPrivacy(requestComment: RequestComment) {
    requestComment.isPrivate = !requestComment.isPrivate;
    this.commentHttp.changePrivacy(requestComment).subscribe(() => {
      if (!requestComment.isPrivate) {
        requestComment.groupsToShare = [];
      }
      this.swallNotification.generateNotification(`Viditeľnosť komentára bolo zmenené`);
    });
  }

  changeFrames(requestComment: RequestComment) {
    this.showWindowCommentSharing = !this.showWindowCommentSharing;
    this.sharingComment = requestComment;
  }

  shareWith() {
    this.swallNotification.generateQuestion(`Naozaj chcete vyzdieľať komentár so skupinou : ${this.selectedGroup.name} ?`)
      .then((result) => {
        if (result.value) {
          this.sharingComment.groupsToShare.push(this.selectedGroup.name);
          this.commentHttp.shareComment(this.sharingComment).subscribe(() => {
            this.swallNotification.generateNotification(`Komentár bol vyzdieľaný`);
          });
        }
      });
  }

  getGroupDetails(groupName: string) {
    this.groupService.getGroupDetails(groupName).subscribe(group => {
      this.clickedGroup = true;
      this.selectedGroup = group;
    });
  }

  addComment(requestCommentWrapper: RequestCommentWrapper) {
    requestCommentWrapper.requestComment.requestId = this.requestStore.requestDetails.id;
    this.commentHttp.addComment(requestCommentWrapper).subscribe(requestComment => {
      this.requestStore.requestDetails.requestCommentDTOS.push(requestComment);
      if (requestCommentWrapper.solution) {
        this.requestStore.requestDetails.solutionComment = requestComment.id;
      }
      this.swallNotification.generateNotification(`Komentár bol odoslaný`);
    });
  }

}
