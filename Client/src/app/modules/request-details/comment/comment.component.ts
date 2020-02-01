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

  constructor(public userService: UserService, private commentHttp: CommentHttpService,
    private requestService: RequestModificationService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.requestDetails$ = this.requestService.getRequestDetials();
    this.isSolver$ = this.authService.isSolver();
    this.isGhost$ = this.authService.isGhost();
    this.isAdmin$ = this.authService.isAdmin();
  }

  async editComment(requestComment: RequestComment){
    const { value: formValues } = await Swal.fire({
      html:
        '<label for="commentText">Zmente komentár a potvrdte</label>' +
        '<textarea id="commentText" class="swal2-input" style = "height: 200px;">'+requestComment.comment+'</textarea>' ,
      focusConfirm: false,
      width: 750,
      preConfirm: () => { return [(<HTMLInputElement>document.getElementById('commentText')).value]}
    });
    if (formValues) {
      requestComment.comment = formValues[0];
      this.commentHttp.editComment(requestComment).subscribe(() => {
        Swal.fire({ position: 'top-end', text: 'Komentár bol zmenený', showConfirmButton: false, timer: 1500 })
      })
    }
  }

  deleteComment(requestComment: RequestComment){
    Swal.fire({
      title: 'Naozaj chcete zmazať komentár ?',
      text: requestComment.comment,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: 'rgb(40, 171, 22)',
      cancelButtonText: "Zatvoriť",
      confirmButtonText: 'Zmazať',
    }).then((result) => {
      if (result.value) {
        this.commentHttp.deleteComment(requestComment).subscribe(() => {
          const index = this.requestComments.indexOf(requestComment);
          if (index > -1) {
            this.requestComments.splice(index, 1);
          }

          Swal.fire({ position: 'top-end', text: 'Komentár bol zmazaný', showConfirmButton: false, timer: 1500 })
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
      Swal.fire({ position: 'top-end', text: 'Viditeľnosť komentára bolo zmenené', showConfirmButton: false, timer: 1500 })
    });
  }

  changeFrames(requestComment: RequestComment){
    this.changeFramws = !this.changeFramws;
    this.sharingComment = requestComment;
  }

  shareWith(group: Group){
    Swal.fire({
      text: `Naozaj chcete vyzdieľať komentár so skupinou : ${group.name} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0077ec',
      cancelButtonColor: '#d33',
      cancelButtonText: "zatvoriť",
      confirmButtonText: 'Zdieľať',
    }).then((result) => {
      if (result.value) {
        this.sharingComment.groupsToShare.push(group.name);
        this.commentHttp.shareComment(this.sharingComment).subscribe(() => {
          Swal.fire({ position: 'top-end', text: 'Komentár bol vyzdieľaný', showConfirmButton: false, timer: 1500 })
        })
      }
    })
  }

}
