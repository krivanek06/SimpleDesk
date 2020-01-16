import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserSimpleDTO } from 'app/shared/models/UserGroups';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { RequestDetails, UserSimple } from 'app/shared/models/RequestDetails';
import { UserService } from 'app/core/services/user.service';
import { RequestModificationService } from 'app/core/services/request-modification.service';
import Swal from 'sweetalert2';
import { takeWhile } from 'rxjs/operators';
import { BehaviorSubject, Subject, Subscription, Observable } from 'rxjs';
import { AuthenticationService } from 'app/core/services/authentication.service';

@Component({
  selector: 'app-request-side-options',
  templateUrl: './request-side-options.component.html',
  styleUrls: ['./request-side-options.component.scss']
})
export class RequestSideOptionsComponent implements OnInit, OnDestroy {
  
  public allusers: UserSimpleDTO[] = [];
  private priority: string;
  private userSimple: UserSimple;
  private reportEvaluation: number;

  public requestDetails: RequestDetails;
  private subscription: Subscription;

  public isSolver$: Observable<boolean>;
  public isManager$: Observable<boolean>;
  public isManagerRightHand$: Observable<boolean>;
  public isAdmin$: Observable<boolean>;

  public isSolverRightHand$: Observable<boolean>;

  constructor( public userService: UserService,  private requestService: RequestModificationService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.getAllUsers();
    this.subscription = this.requestService.getRequestDetials().subscribe( requestDetails => {
      this.requestDetails = requestDetails;
    });
    this.isSolver$ = this.authService.isSolver();
    this.isManager$ = this.authService.isManager();
    this.isManagerRightHand$ = this.authService.isManagerRightHand();
    this.isAdmin$ = this.authService.isAdmin();
    this.isSolverRightHand$ = this.authService.isSolverRightHand();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getAllUsers(){
    this.userService.getAllUsers().subscribe(users =>{
      this.allusers = users;
    })
  }

  private changePriority(){
    if(this.priority === undefined){
      return;
    }

    this.requestService.changePriority( this.requestDetails.id, this.priority).subscribe(() => {
      this.requestDetails.requestPriority = this.priority;
      Swal.fire({ position: 'top-end', text: 'Priorita bola zmenená', showConfirmButton: false, timer: 1500 })
    })
  }

  private changeAssignedUser(){
    if(this.userSimple === undefined){
      return;
    }
    
    this.requestService.assignSolver(this.requestDetails.id, this.userSimple).subscribe((userSimple) => {
      this.requestDetails.assigned = userSimple;
      Swal.fire({ position: 'top-end', text: 'Riešiteľ zmenený', showConfirmButton: false, timer: 1500 })
    })
  }

  private changeCommenting(){
    this.requestService.changeCommenting(this.requestDetails.id).subscribe(() => {
      this.requestDetails.allowCommenting = ! this.requestDetails.allowCommenting;
      if(this.requestDetails.allowCommenting){
        Swal.fire({ position: 'top-end', text: 'Komentovanie požiadavky sa zakázalo', showConfirmButton: false, timer: 1500 })
      }else{
        Swal.fire({ position: 'top-end', text: 'Komentovanie požiadavky sa povolilo', showConfirmButton: false, timer: 1500 })
      }
    })

  }

  private closeRequest(){
    Swal.fire({ text: "Naozaj chcetete uzatvoriť požiadavku ?", icon: 'warning', showCancelButton: true,
    confirmButtonColor: '#3085d6',  cancelButtonColor: '#d33',  cancelButtonText: "Zrušiť",  confirmButtonText: 'Ano'
  }).then((result) => {
    if (result.value) {
      this.requestService.changeState(this.requestDetails.id, true).subscribe(() =>{
        this.requestDetails.closed = this.userService.getUserSimple();
        this.requestDetails.timestampClosed = new Date();
        Swal.fire({ position: 'top-end', text: 'Požiadavka ' + this.requestDetails.id + ". bola uzavretá.", showConfirmButton: false, timer: 1200 })
      }) 
    }
  })
    
  }

  private reopenRequest(){
    Swal.fire({ text: "Naozaj chcetete znovu otvoriť požiadavku ?", icon: 'warning', showCancelButton: true,
    confirmButtonColor: '#3085d6',  cancelButtonColor: '#d33',  cancelButtonText: "Zrušiť",  confirmButtonText: 'Ano'
  }).then((result) => {
    if (result.value) {
        this.requestService.changeState(this.requestDetails.id, false).subscribe(() =>{
          this.requestDetails.closed = null;
          this.requestDetails.timestampClosed = null;
          Swal.fire({ position: 'top-end', text: 'Požiadavka ' + this.requestDetails.id + ". bola otvorená.", showConfirmButton: false, timer: 1200 })
        }) 
      }
    })
  }

  private addEvaluationForReport(){
    if(this.reportEvaluation === undefined){
      return;
    }
    this.requestService.reportAddEvaluation(this.requestDetails.id, this.reportEvaluation).subscribe(() =>{
      this.reportEvaluation = undefined;
      Swal.fire({ position: 'top-end', text: 'Nadhodnocenie reportu bolo zaznamenané', showConfirmButton: false, timer: 1200 })
    }) 
  }

  private selectedPriority(priority: string){
    this.priority = priority;
   
  }

  private selectedUser(userSimple: UserSimple){
    this.userSimple = userSimple;
  }

  private addedEvaluation(evaluation: number){
    this.reportEvaluation = evaluation;
  }

  private isAssignedOnMe():boolean{
    return this.requestDetails.assigned != null && this.requestDetails.assigned.username === this.userService.user.username;
  }

  private dropRequest(){
    this.requestService.removeSolver(this.requestDetails.id).subscribe(() => {
      Swal.fire({ position: 'top-end', text: 'Riešiteľ bol odstránený', showConfirmButton: false, timer: 1200 })
      this.requestDetails.assigned = null;
    })
  }


}
