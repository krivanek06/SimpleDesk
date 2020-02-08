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
import { SwallNotificationService } from 'app/shared/services/swall-notification.service';

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

  constructor( public userService: UserService,  
              private requestService: RequestModificationService, 
              private authService: AuthenticationService,
              private swallNotification: SwallNotificationService) { }

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
      this.swallNotification.generateNotification(`Priorita bola zmenená`);
    })
  }

  changeAssignedUser(requestDetails : RequestDetails){
    if(this.userSimple === undefined){
      return;
    }
    
    this.requestService.assignSolver(requestDetails.id, this.userSimple).subscribe((userSimple) => {
      requestDetails.assigned = userSimple;
      requestDetails.requestPosition = RequestPosition.Assigned;
      this.swallNotification.generateNotification(`Riešiteľ zmenený`);
    })
  }

   changeCommenting(requestDetails : RequestDetails){
    this.requestService.changeCommenting(requestDetails.id).subscribe(() => {
      requestDetails.allowCommenting = !requestDetails.allowCommenting;
      this.swallNotification.generateNotification(requestDetails.allowCommenting ? 
          'Komentovanie požiadavky sa zakázalo' : 'Komentovanie požiadavky sa povolilo');
    })

  }

  closeRequest(requestDetails : RequestDetails){
    this.swallNotification.generateQuestion( "Naozaj chcetete uzatvoriť požiadavku ?").then((result) => {
      if (result.value) {
        this.requestService.changeState(requestDetails.id, true).subscribe(() =>{
          requestDetails.closed = this.userService.getUserSimple();
          requestDetails.timestampClosed = new Date();
          requestDetails.requestPosition = RequestPosition.Closed;
          this.swallNotification.generateNotification(`Požiadavka ${requestDetails.id}. bola uzavretá`);
        }) 
      }
    })
    
  }

  reopenRequest(requestDetails : RequestDetails){
    this.swallNotification.generateQuestion("Naozaj chcetete otvoriť požiadavku ?").then((result) => {
      if (result.value) {
          this.requestService.changeState(requestDetails.id, false).subscribe(() =>{
            requestDetails.closed = null;
            requestDetails.timestampClosed = null;
            requestDetails.requestPosition = RequestPosition.Assigned;
            this.swallNotification.generateNotification(`Požiadavka ${requestDetails.id}. bola otvorená`);
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
      this.swallNotification.generateNotification(`Nadhodnocenie reportu bolo zaznamenané`);
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
      this.swallNotification.generateNotification(`Riešiteľ bol odstránený`);
      requestDetails.assigned = null;
      requestDetails.requestPosition = RequestPosition.UnAssigned;
    })
  }


}
