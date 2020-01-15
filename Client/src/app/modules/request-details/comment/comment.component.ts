import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RequestComment, UserSimple, RequestDetails } from 'app/shared/models/RequestDetails';
import { UserService } from 'app/core/services/user.service';
import Swal from 'sweetalert2';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Group } from 'app/shared/models/UserGroups';
import { RequestModificationService } from 'app/core/services/request-modification.service';
import { AuthenticationService } from 'app/core/services/authentication.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit, OnDestroy {
  public changeFramws = false;
  public commentForm: FormGroup;
  public requestDetails: RequestDetails;
  private subscription: Subscription;
  private sharingComment: RequestComment;

  public isSolver$: Observable<boolean>;
  public isGhost$: Observable<boolean>;
  public isAdmin$: Observable<boolean>;

  @Input() public requestComments:RequestComment[];

  constructor(public userService: UserService, private http: HttpClient, private formBuilder: FormBuilder, 
    private requestService: RequestModificationService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      commentField: ['' ],
      isPrivate: [false],
    });

    this.subscription = this.requestService.getRequestDetials().subscribe( requestDetails => {
      this.requestDetails = requestDetails;
    });

    this.isSolver$ = this.authService.isSolver();
    this.isGhost$ = this.authService.isGhost();
    this.isAdmin$ = this.authService.isAdmin();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private async editComment(requestComment: RequestComment){
    const { value: formValues } = await Swal.fire({
      html:
        '<label for="commentText">Zmente komentár a potvrdte</label>' +
        ' <textarea id="commentText" class="swal2-input" style = "height: 200px;">'+requestComment.comment+'</textarea>' ,
      focusConfirm: false,
      width: 750,
      preConfirm: () => {
        return [
          (<HTMLInputElement>document.getElementById('commentText')).value,
        ]
      }
    });
    if (formValues) {
      requestComment.comment = formValues[0];
      this.addComment(requestComment, true).subscribe(() => {
        Swal.fire({ position: 'top-end', text: 'Komentár bol zmenený', showConfirmButton: false, timer: 1500 })
      })
    }
  }

  private deleteComment(requestComment: RequestComment){
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
        this.http.request('delete', environment.apiUrl + `requests/comment`, {body: requestComment}).subscribe(() => {
          const index = this.requestComments.indexOf(requestComment);
          if (index > -1) {
            this.requestComments.splice(index, 1);
          }

          Swal.fire({ position: 'top-end', text: 'Komentár bol zmazaný', showConfirmButton: false, timer: 1500 })
        })
      }
    })
  }

  private changeCommentPrivacy(requestComment: RequestComment){
    requestComment.isPrivate = !requestComment.isPrivate;
    this.http.put(environment.apiUrl + `requests/comment` ,requestComment).subscribe(() => {
      if(!requestComment.isPrivate){
        requestComment.groupsToShare = [];
      }
      Swal.fire({ position: 'top-end', text: 'Viditeľnosť komentára bolo zmenené', showConfirmButton: false, timer: 1500 })
    });
  }


  private addComment(requestComment: RequestComment, existing: boolean): Observable<any>{
    let params = new HttpParams().set('existingComment' , String(existing)) ;
    return this.http.post(environment.apiUrl + `requests/comment` ,requestComment ,{params: params});
  }

  public changeToPrivate(checked): void{
    if(checked){
      this.commentForm.patchValue({'isPrivate' : true});
    }else{
      this.commentForm.patchValue({'isPrivate' : false});
    }
  }

  
  private submit(): void{
    if(this.commentForm.get('commentField').value === ''){ 
      return;
    }
    let values = this.commentForm.value;

    let userSimple: UserSimple = {
      username: this.userService.user.username,
      firstName: this.userService.user.firstName,
      lastName: this.userService.user.lastName,
      photoBytes: this.userService.user.photoBytes,
    };
    
    let commentDTO: RequestComment = {
        id: null,
        requestId: this.requestDetails.id,
        creator: userSimple,
        comment: values.commentField,
        isPrivate: values.isPrivate,
        groupsToShare: [],
        timestamp: new Date()
    }

    Swal.fire({
      title: 'Odoslať komentár ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0077ec',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Odoslať'
    }).then((result) => {
      if (result.value) {
        this.addComment(commentDTO, false).subscribe((addedComment: RequestComment) => {
          this.requestComments.push(addedComment);
          this.commentForm.patchValue({'commentField' : ''});
          Swal.fire({ position: 'top-end', text: 'Komentár bol odoslaný', showConfirmButton: false, timer: 1500 })
        })
      }
    })
  }

  get commentField(){
    return this.commentForm.get("commentField");
  }

  private changeFrames(requestComment: RequestComment){
    this.changeFramws = !this.changeFramws;
    this.sharingComment = requestComment;
  }

  private shareWith(group: Group){
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
        this.http.put(environment.apiUrl + `requests/comment/share`, this.sharingComment).subscribe(() => {
          Swal.fire({ position: 'top-end', text: 'Komentár bol vyzdieľaný', showConfirmButton: false, timer: 1500 })
        })
      }
    })
  }

}
