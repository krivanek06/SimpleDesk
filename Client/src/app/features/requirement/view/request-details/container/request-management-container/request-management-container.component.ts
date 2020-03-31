import {Component, OnInit} from '@angular/core';
import {Request} from 'app/features/requirement/model/Request';
import {Observable} from 'rxjs';
import {RequestType} from 'app/features/requirement/model/request.enum';
import {SwallNotificationService} from 'app/core/services/swall-notification.service';
import {Store} from "@ngrx/store";
import {AppState} from "../../../../../../core/model/appState.model";
import {getRequestById} from "../../../../store/request.reducer";
import {User, UserSimple} from "../../../../../../core/model/User";

import * as RequestAction from '../../../../store/request.action';
import * as fromAuth from '../../../../../../core/store/auth/auth.reducer';
import * as fromAppManagement from '../../../../../app-management/store/app-management.reducer';
import * as appManagementAction from '../../../../../app-management/store/app-management.action';
import * as fromUser from '../../../../../../core/store/user/user.reducer';

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
  user$: Observable<User>;
  requestType: typeof RequestType = RequestType;

  request$: Observable<Request>;
  activeUsers$: Observable<UserSimple[]>;


  constructor(private swallNotification: SwallNotificationService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.activeUsers$ = this.store.select(fromAppManagement.getAllActiveUsers);
    this.user$ = this.store.select(fromUser.getUser);
    this.isSolver$ = this.store.select(fromAuth.isSolver);
    this.isManager$ = this.store.select(fromAuth.isManager);
    this.isAdmin$ = this.store.select(fromAuth.isAdmin);
    this.isSolverRightHand$ = this.store.select(fromAuth.isSolverRightHand);
    this.request$ = this.store.select(getRequestById);

    this.store.dispatch(appManagementAction.getAllUsers());
  }

  changePriority(request: Request, priority: string) {
    this.store.dispatch(RequestAction.changePriority({requestId: request.id, priority}));
  }

  changeSolver(request: Request, user: User) {
    this.store.dispatch(RequestAction.addRandomSolver({requestId: request.id, userSimpleDTO: user}));
  }

  changeCommenting(request: Request) {
    this.store.dispatch(RequestAction.toggleCommenting({request}));
  }

  addReportEvaluation(request: Request, days: number) {
    this.store.dispatch(RequestAction.addReportEvaluation({requestId: request.id, days}));
  }

  removeMeOnRequest(request: Request) {
    this.store.dispatch(RequestAction.removeMeOnRequest({request, assign: false}));
  }

  changeState(request: Request) {
    const state = request.closed ? 'otvoriť' : 'uzatvoriť';
    this.swallNotification.generateQuestion(`Naozaj chcetete ${state} požiadavku ?`).then((result) => {
      if (result.value) {
        if (request.closed) {
          // reopen Request
          this.store.dispatch(RequestAction.reopenRequest({requestId: request.id, date: undefined, close: false}));
        } else {
          // close Request
          this.store.dispatch(RequestAction.closeRequest({requestId: request.id, date: new Date(), close: true}));
        }
      }
    });
  }
}
