import { Component, OnInit, Input } from '@angular/core';
import { RequestComment, RequestDetails, RequestCommentWrapper } from 'app/shared/models/RequestDetails';
import { Observable, combineLatest, of } from 'rxjs';
import { Group } from 'app/shared/models/UserGroups';
import { RequestStoreService } from 'app/core/services/request-store.service';
import { CommentHttpService } from 'app/api/comment-http.service';
import { SwallNotificationService } from 'app/shared/services/swall-notification.service';
import { UserStoreService } from 'app/core/services/user-store.service';
import { RequestService } from 'app/core/services/request.service';

@Component({
  selector: 'app-request-comment-container',
  templateUrl: './request-comment-container.component.html',
  styleUrls: ['./request-comment-container.component.scss']
})
export class RequestCommentContainerComponent implements OnInit {
  showWindowCommentSharing = false;

  private sharingComment: RequestComment;
  private isAdmin$: Observable<boolean>;
  requestDetails$: Observable<RequestDetails>;

  
  constructor(private swallNotification: SwallNotificationService,
              public userStoreService: UserStoreService,
              private commentHttp: CommentHttpService,
              private requestService: RequestService,
              private requestStore: RequestStoreService,) { }

  ngOnInit() {
    this.isAdmin$ = this.userStoreService.isAdmin();
    this.requestDetails$ = this.requestStore.getRequestDetials();
  }

  async editComment(requestComment: RequestComment){
    const { value: formValues } = await this.swallNotification.editComment(requestComment.comment);
    if (formValues) {
      requestComment.comment = formValues[0];
      this.commentHttp.editComment(requestComment).subscribe(() => {
        this.swallNotification.generateNotification(`Komentár bol zmenený`);
      })
    }
  }

  deleteComment(requestComment: RequestComment){
    this.swallNotification.generateDeleteQuestion('komentár', requestComment.comment).then((result) => {
      if (result.value) {
        this.commentHttp.deleteComment(requestComment).subscribe(() => {
          const index = this.requestStore.requestDetails.requestComments.indexOf(requestComment);
          if (index > -1) {
            this.requestStore.requestDetails.requestComments.splice(index, 1);
          }
          this.swallNotification.generateNotification(`Komentár bol zmazaný`);
        })
      }
    })
  }

  changeCommentPrivacy(requestComment: RequestComment){
    requestComment.isPrivate = !requestComment.isPrivate;
    this.commentHttp.changePrivacy(requestComment).subscribe(() => {
      if(!requestComment.isPrivate){
        requestComment.groupsToShare = [];
      }
      this.swallNotification.generateNotification(`Viditeľnosť komentára bolo zmenené`);
    });
  }

  changeFrames(requestComment: RequestComment){
    this.showWindowCommentSharing = !this.showWindowCommentSharing;
    this.sharingComment = requestComment;
  }

  shareWith(group: Group){
    this.swallNotification.generateQuestion(`Naozaj chcete vyzdieľať komentár so skupinou : ${group.name} ?`)
    .then((result) => {
      if (result.value) {
        this.sharingComment.groupsToShare.push(group.name);
        this.commentHttp.shareComment(this.sharingComment).subscribe(() => {
          this.swallNotification.generateNotification(`Komentár bol vyzdieľaný`);
        })
      }
    })
  }

  addComment(requestComment: RequestCommentWrapper){
    requestComment.requestId = this.requestStore.requestDetails.id;
    console.log(requestComment)
    this.swallNotification.generateNotification(`Komentár bol odoslaný`);
  }


  get enableCommentModification(): Observable<boolean>{
    /*(requestComment.creator.username === userStoreService.user.username 
      || (isAdmin$ | async)) && (requestDetails$ | async).closed === null*/
      return combineLatest(
        this.requestService.amICreator(),
        this.isAdmin$,
        (creator, admin) => (creator || admin)
      );
  }

}
