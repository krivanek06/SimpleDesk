import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UserSimpleDTO} from 'app/core/model/User';
import {Request} from 'app/core/model/Request';
import {UserStoreService} from 'app/core/services/user-store.service';
import {Observable, Subject} from 'rxjs';
import {RequestType} from 'app/core/enum/request.enum';
import {SwallNotificationService} from 'app/shared/services/swall-notification.service';
import * as RequestAction from '../../../store/request.action';
import {Store} from "@ngrx/store";
import {UserHttpService} from 'app/api/user-http.service';
import {RequestState} from "../../../../../core/model/appState.model";
import {getRequestById} from "../../../store/request.reducer";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-request-management-container',
  templateUrl: './request-management-container.component.html',
  styleUrls: ['./request-management-container.component.scss']
})
export class RequestManagementContainerComponent implements OnInit {
  isSolver$: Observable<boolean>;
  isManager$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  isSolverRightHand$: Observable<boolean>;
  requestType: typeof RequestType = RequestType;

  request$: Observable<Request>;
  allusers$: Observable<UserSimpleDTO[]>;


  constructor(private userHttp: UserHttpService,
              public userStoreService: UserStoreService,
              private swallNotification: SwallNotificationService,
              private store: Store<RequestState>) {
  }

  ngOnInit() {
    this.allusers$ = this.userHttp.getAllActiveUsers();
    this.isSolver$ = this.userStoreService.isSolver();
    this.isManager$ = this.userStoreService.isManager();
    this.isAdmin$ = this.userStoreService.isAdmin();
    this.isSolverRightHand$ = this.userStoreService.isSolverRightHand();
    this.request$ = this.store.select(getRequestById);
  }

  changePriority(request: Request, priority: string) {
    this.store.dispatch(RequestAction.changePriority({requestId: request.id, priority}));
  }

  changeSolver(request: Request, userSimpleDTO: UserSimpleDTO) {
    this.store.dispatch(RequestAction.addRandomSolver({requestId: request.id, userSimpleDTO}));
  }

  changeCommenting(request: Request) {
    this.store.dispatch(RequestAction.toggleCommenting({request}));
  }

  addReportEvaluation(request: Request, days: number) {
    this.store.dispatch(RequestAction.addReportEvaluation({requestId: request.id, days}));
  }

  removeMeOnRequest(request: Request) {
    this.store.dispatch(RequestAction.removeMeOnRequest({request, userSimpleDTO: undefined}));
  }

  changeState(request: Request) {
    const state = request.closed ? 'otvoriť' : 'uzatvoriť';
    this.swallNotification.generateQuestion(`Naozaj chcetete ${state} požiadavku ?`).then((result) => {
      if (result.value) {
        if (request.closed) {
          // reopen Request
          this.store.dispatch(RequestAction.reopenRequest({
            requestId: request.id,
            date: undefined,
            userSimpleDTO: undefined
          }));
        } else {
          // close Request
          this.store.dispatch(RequestAction.closeRequest({
            requestId: request.id,
            userSimpleDTO: this.userStoreService.getUserSimple(),
            date: new Date(),
          }));
        }
      }
    });
  }
}
