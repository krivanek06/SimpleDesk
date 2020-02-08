import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserSimpleDTO } from 'app/shared/models/UserGroups';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { RequestDetails, UserSimple, ReportDetails } from 'app/shared/models/RequestDetails';
import { UserService } from 'app/core/services/user.service';
import { RequestModificationService } from 'app/core/services/request-modification.service';
import Swal from 'sweetalert2';
import { takeWhile } from 'rxjs/operators';
import { BehaviorSubject, Subject, Subscription, Observable } from 'rxjs';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { RequestPosition } from 'app/shared/enums/request-position.enum';

@Component({
  selector: 'app-request-side-options',
  templateUrl: './request-side-options.component.html',
  styleUrls: ['./request-side-options.component.scss']
})
export class RequestSideOptionsComponent implements OnInit {
  private priority: string;
  private userSimple: UserSimple;
  private reportEvaluation: number;

  requestDetail$: Observable<RequestDetails>;
  isSolver$: Observable<boolean>;
  isManager$: Observable<boolean>;
  isManagerRightHand$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  allusers$: Observable<UserSimpleDTO[]>;
  isSolverRightHand$: Observable<boolean>;

  constructor( public userService: UserService,  private requestService: RequestModificationService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.allusers$ = this.userService.getAllActiveUsers();
    this.requestDetail$ = this.requestService.getRequestDetials();
    this.isSolver$ = this.authService.isSolver();
    this.isManager$ = this.authService.isManager();
    this.isManagerRightHand$ = this.authService.isManagerRightHand();
    this.isAdmin$ = this.authService.isAdmin();
    this.isSolverRightHand$ = this.authService.isSolverRightHand();
  }

  changePriority(requestDetails : RequestDetails){
    if(this.priority === undefined){
      return;
    }

    this.requestService.changePriority( requestDetails.id, this.priority).subscribe(() => {
      requestDetails.requestPriority = this.priority;
      Swal.fire({ position: 'top-end', text: 'Priorita bola zmenená', showConfirmButton: false, timer: 1500 })
    })
  }

  changeAssignedUser(requestDetails : RequestDetails){
    if(this.userSimple === undefined){
      return;
    }
    
    this.requestService.assignSolver(requestDetails.id, this.userSimple).subscribe((userSimple) => {
      requestDetails.assigned = userSimple;
      requestDetails.requestPosition = RequestPosition.Assigned;
      Swal.fire({ position: 'top-end', text: 'Riešiteľ zmenený', showConfirmButton: false, timer: 1500 })
    })
  }

   changeCommenting(requestDetails : RequestDetails){
    this.requestService.changeCommenting(requestDetails.id).subscribe(() => {
      requestDetails.allowCommenting = !requestDetails.allowCommenting;
      if(requestDetails.allowCommenting){
        Swal.fire({ position: 'top-end', text: 'Komentovanie požiadavky sa zakázalo', showConfirmButton: false, timer: 1500 })
      }else{
        Swal.fire({ position: 'top-end', text: 'Komentovanie požiadavky sa povolilo', showConfirmButton: false, timer: 1500 })
      }
    })

  }

  closeRequest(requestDetails : RequestDetails){
    Swal.fire({ text: "Naozaj chcetete uzatvoriť požiadavku ?", icon: 'warning', showCancelButton: true,
    confirmButtonColor: '#3085d6',  cancelButtonColor: '#d33',  cancelButtonText: "Zrušiť",  confirmButtonText: 'Ano'
  }).then((result) => {
    if (result.value) {
      this.requestService.changeState(requestDetails.id, true).subscribe(() =>{
        requestDetails.closed = this.userService.getUserSimple();
        requestDetails.timestampClosed = new Date();
        requestDetails.requestPosition = RequestPosition.Closed;
        Swal.fire({ position: 'top-end', text: 'Požiadavka ' + requestDetails.id + ". bola uzavretá.", showConfirmButton: false, timer: 1200 })
      }) 
    }
  })
    
  }

  reopenRequest(requestDetails : RequestDetails){
    Swal.fire({ text: "Naozaj chcetete znovu otvoriť požiadavku ?", icon: 'warning', showCancelButton: true,
    confirmButtonColor: '#3085d6',  cancelButtonColor: '#d33',  cancelButtonText: "Zrušiť",  confirmButtonText: 'Ano'
  }).then((result) => {
    if (result.value) {
        this.requestService.changeState(requestDetails.id, false).subscribe(() =>{
          requestDetails.closed = null;
          requestDetails.timestampClosed = null;
          requestDetails.requestPosition = RequestPosition.Assigned;
          Swal.fire({ position: 'top-end', text: 'Požiadavka ' + requestDetails.id + ". bola otvorená.", showConfirmButton: false, timer: 1200 })
        }) 
      }
    })
  }

  addEvaluationForReport(requestDetails : ReportDetails){
    if(this.reportEvaluation === undefined){
      return;
    }
    this.requestService.reportAddEvaluation(requestDetails.id, this.reportEvaluation).subscribe(() =>{
      requestDetails.evaluation =  this.reportEvaluation ;
      this.reportEvaluation = undefined;
      Swal.fire({ position: 'top-end', text: 'Nadhodnocenie reportu bolo zaznamenané', showConfirmButton: false, timer: 1200 })
    }) 
  }

  selectedPriority(priority: string){
    this.priority = priority;
   
  }

  selectedUser(userSimple: UserSimple){
    this.userSimple = userSimple;
  }

  addedEvaluation(evaluation: number){
    this.reportEvaluation = evaluation;
  }

  isAssignedOnMe(requestDetails : RequestDetails):boolean{
    return requestDetails.assigned != null && requestDetails.assigned.username === this.userService.user.username;
  }

  dropRequest(requestDetails : RequestDetails){
    this.requestService.removeSolver(requestDetails.id).subscribe(() => {
      Swal.fire({ position: 'top-end', text: 'Riešiteľ bol odstránený', showConfirmButton: false, timer: 1200 })
      requestDetails.assigned = null;
      requestDetails.requestPosition = RequestPosition.UnAssigned;
    })
  }


}
