import { Component, OnInit} from '@angular/core';
import { UserSimpleDTO } from 'app/shared/models/UserGroups';
import { RequestDetails, UserSimple } from 'app/shared/models/RequestDetails';
import { UserStoreService } from 'app/core/services/user-store.service';
import { RequestStoreService } from 'app/core/services/request-store.service';
import { Observable, combineLatest, of } from 'rxjs';
import { RequestPosition } from 'app/shared/enums/request-position.enum';
import { SwallNotificationService } from 'app/shared/services/swall-notification.service';
import { RequestHttpService } from 'app/api/request-http.service';
import { UserHttpService } from 'app/api/user-http.service';
import { RequestService } from 'app/core/services/request.service';

@Component({
  selector: 'app-request-management-container',
  templateUrl: './request-management-container.component.html',
  styleUrls: ['./request-management-container.component.scss']
})
export class RequestManagementContainerComponent implements OnInit {
  private isSolver$: Observable<boolean>;
  private isManager$: Observable<boolean>;
  private isAdmin$: Observable<boolean>;
  private isSolverRightHand$: Observable<boolean>;

  requestDetails: RequestDetails;
  allusers$: Observable<UserSimpleDTO[]>;
  

  constructor(private userHttp: UserHttpService,  
              private requestSerivce: RequestService,
              private requestStoreService: RequestStoreService, 
              private userStoreService: UserStoreService,
              private requestHttp: RequestHttpService,
              private swallNotification: SwallNotificationService) { }

  ngOnInit() {
    this.allusers$ = this.userHttp.getAllActiveUsers();
    this.isSolver$ = this.userStoreService.isSolver();
    this.isManager$ = this.userStoreService.isManager();
    this.isAdmin$ = this.userStoreService.isAdmin();
    this.isSolverRightHand$ = this.userStoreService.isSolverRightHand();
    this.requestDetails = this.requestStoreService.requestDetails;
  }

  changePriority(priority : string){
    this.requestHttp.changePriority(this.requestDetails.id, priority).subscribe(() => {
      this.requestDetails.requestPriority = priority;
      this.swallNotification.generateNotification(`Priorita bola zmenená`);
    })
  }

  changeSolver(userSimple : UserSimple){    
    this.requestHttp.assignSolver(this.requestDetails.id, userSimple).subscribe((userSimple) => {
      this.requestDetails.assigned = userSimple;
      this.requestDetails.requestPosition = RequestPosition.Assigned;
      this.swallNotification.generateNotification(`Riešiteľ zmenený`);
    })
  }

  changeCommenting(){
    this.requestHttp.changeCommenting(this.requestDetails.id).subscribe(() => {
      this.requestDetails.allowCommenting = !this.requestDetails.allowCommenting;
      this.swallNotification.generateNotification(this.requestDetails.allowCommenting ? 
          'Komentovanie požiadavky sa zakázalo' : 'Komentovanie požiadavky sa povolilo');
    })

  }

  changeState(){
    if(this.requestDetails.closed){
      this.reopenRequest();
    }else{
      this.closeRequest();
    }
  }

  addReportEvaluation(days : number){
    this.requestHttp.reportAddEvaluation(this.requestDetails.id, days)
      .subscribe(() =>{
        this.requestStoreService.reportDetials.evaluation =  days;
        this.swallNotification.generateNotification(`Nadhodnocenie reportu bolo zaznamenané`);
    }) 
  }

  removeSolver(){
    this.requestHttp.removeSolver(this.requestDetails.id).subscribe(() => {
      this.swallNotification.generateNotification(`Riešiteľ bol odstránený`);
      this.requestDetails.assigned = null;
      this.requestDetails.requestPosition = RequestPosition.UnAssigned;
    })
  }


  private closeRequest(){
    this.swallNotification.generateQuestion( "Naozaj chcetete uzatvoriť požiadavku ?").then((result) => {
      if (result.value) {
        this.requestHttp.changeState(this.requestDetails.id, true).subscribe(() =>{
          this.requestDetails.closed = this.userStoreService.getUserSimple();
          this.requestDetails.timestampClosed = new Date();
          this.requestDetails.requestPosition = RequestPosition.Closed;
          this.swallNotification.generateNotification(`Požiadavka ${this.requestDetails.id}. bola uzavretá`);
        }) 
      }
    })
  }
  
  private reopenRequest(){
    this.swallNotification.generateQuestion("Naozaj chcetete otvoriť požiadavku ?").then((result) => {
      if (result.value) {
          this.requestHttp.changeState(this.requestDetails.id, false).subscribe(() =>{
            this.requestDetails.closed = null;
            this.requestDetails.timestampClosed = null;
            this.requestDetails.requestPosition = RequestPosition.Assigned;
            this.swallNotification.generateNotification(`Požiadavka ${this.requestDetails.id}. bola otvorená`);
          }) 
        }
      })
    }

  

  get enableChangeState(): Observable<boolean>{
    return combineLatest(
      this.isAdmin$, 
      this.requestSerivce.isAssignedOnMe(),
      this.requestSerivce.amICreator(),
      (admin, assigned, creator) =>  (admin || assigned || creator));
  }

  get enableCommenting(): Observable<boolean>{
    return combineLatest(
      this.isAdmin$, 
      this.requestSerivce.isAssignedOnMe(),
      (admin, assigned) =>  (admin || assigned )); 
  }

  get enableRemoveSolver(): Observable<boolean>{
    return combineLatest(
      this.isAdmin$, 
      this.requestSerivce.isAssignedOnMe(),
      (admin, assigned) =>  (admin || assigned )); 
  }

  get enableChangeSolver(): Observable<boolean>{
      return combineLatest(
        this.isAdmin$, 
        this.isManager$,
        this.isSolver$,
        this.isSolverRightHand$,
        (isAdmin, isManager, isSolver, isSolverRightHand) =>  
        (isAdmin || ( isSolver && ( isManager || isSolverRightHand)))); 
  }

  get enableChangePriority(): Observable<boolean>{
    return combineLatest(
      this.isAdmin$, 
      this.isSolver$,
      this.requestSerivce.isAssignedOnMe(),
      (isAdmin, isSolver, isAssignedOnMe) =>  (isAdmin || isSolver || isAssignedOnMe));
  }

  get enableEvaluation(): Observable<boolean>{
    return combineLatest(
      of(this.requestDetails.requestType === "Report"),
      this.isAdmin$, 
      this.requestSerivce.isAssignedOnMe(),
      (isReport, isAdmin, isAssignedOnMe) =>  (isReport && (isAdmin || isAssignedOnMe) ));
  }

}
