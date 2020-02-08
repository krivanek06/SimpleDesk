import { Component, OnInit, Input } from '@angular/core';
import { RequestComment, RequestDetails } from 'app/shared/models/RequestDetails';
import { UserService } from 'app/core/services/user.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Group } from 'app/shared/models/UserGroups';
import { RequestModificationService } from 'app/core/services/request-modification.service';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { CommentHttpService } from 'app/core/services/comment-http.service';
import { SwallNotificationService } from 'app/shared/services/swall-notification.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  public changeFramws = false;
  private sharingComment: RequestComment;

  public requestDetails$: Observable<RequestDetails>;
  public isSolver$: Observable<boolean>;
  public isGhost$: Observable<boolean>;
  public isAdmin$: Observable<boolean>;

  @Input() public requestComments:RequestComment[];

  constructor(public userService: UserService, 
              private commentHttp: CommentHttpService,
              private requestService: RequestModificationService, 
              private authService: AuthenticationService,
              private swallNotification: SwallNotificationService) { }

  ngOnInit() {
    this.requestDetails$ = this.requestService.getRequestDetials();
    this.isSolver$ = this.authService.isSolver();
    this.isGhost$ = this.authService.isGhost();
    this.isAdmin$ = this.authService.isAdmin();
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
          const index = this.requestComments.indexOf(requestComment);
          if (index > -1) {
            this.requestComments.splice(index, 1);
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
    this.changeFramws = !this.changeFramws;
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

}
