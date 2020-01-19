import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { RequestComment, RequestDetails, UserSimple } from 'app/shared/models/RequestDetails';
import { UserService } from 'app/core/services/user.service';
import { RequestModificationService } from 'app/core/services/request-modification.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { CommentHttpService } from 'app/core/services/comment-http.service';



@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  public requestDetails$: Observable<RequestDetails>;
  public isSolver$: Observable<boolean>;
  public isGhost$: Observable<boolean>;
  public isAdmin$: Observable<boolean>;
  public commentInput: string = '';
  public isChecked: boolean = false; // if checkbotton is checked
  public isCheckedName: string = ''; // name of checkButton


  @Output() addedCommentEmitter: EventEmitter<RequestComment> = new EventEmitter();
   
  constructor(private userService: UserService, private requestService: RequestModificationService, private formBuilder: FormBuilder,
    private authService: AuthenticationService, private commentService: CommentHttpService) { }

  ngOnInit() {
    this.requestDetails$ = this.requestService.getRequestDetials();
    this.isSolver$ = this.authService.isSolver();
    this.isGhost$ = this.authService.isGhost();
    this.isAdmin$ = this.authService.isAdmin();
    
  }
   
  private onChange(event: any) {
    this.isChecked = !this.isChecked;
    this.isCheckedName = event.source.name;
  }

  
  private submit(): void{
    if(this.commentInput === ''){ 
      return;
    }
   
    // send solution
    if(this.isChecked &&  this.isCheckedName === "Solution"){
      this.constructRequestComment(this.userService.getUserSimple())
          .subscribe(commentDTO => this.sendComment(commentDTO, false, true));
        
      return;
    }
    // send simple comment
    this.constructRequestComment(this.userService.getUserSimple())
          .subscribe(commentDTO => this.sendComment(commentDTO, this.isChecked && this.isCheckedName === "Notification", false));
  }

  private constructRequestComment(userSimple: UserSimple): Observable<RequestComment>{
    return this.requestDetails$.pipe(map(request => {
      let commentDTO: RequestComment = {
          id: null,
          requestId: request.id,
          creator: userSimple,
          comment: this.commentInput,
          isPrivate: this.isChecked && this.isCheckedName === "Private",
          groupsToShare: [],
          timestamp: new Date()
      }   
      return commentDTO;
    }));
  }

  private sendComment(commentDTO: RequestComment, sendEmail: boolean, solution: boolean){
    if(this.commentInput === '')
      return;

    Swal.fire({
      title: 'Odoslať komentár ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0077ec',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Odoslať'
    }).then((result) => {
      if (result.value) {
        this.commentService.addComment(commentDTO,  sendEmail, solution).subscribe((addedComment: RequestComment) => {
          this.addedCommentEmitter.emit(addedComment);
          this.commentInput = '';
          if(solution){
            this.requestDetails$.subscribe(requst => requst.solutionComment = addedComment.id)
          }
          Swal.fire({ position: 'top-end', text: 'Komentár bol odoslaný', showConfirmButton: false, timer: 1500 })
        })
      }
    })
  }



}
