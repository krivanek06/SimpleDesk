import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs';
import {SwallNotificationService} from 'app/core/services/swall-notification.service';
import {select, Store} from "@ngrx/store";
import {Request} from "../../model/Request";
import {Auth, RequestState} from "../../../../core/model/appState.model";

import * as RequestAction from '../../store/request.action';
import * as fromRequest from '../../store/request.reducer';
import * as fromAuth from '../../../../core/store/auth/auth.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  viewTable = ['id', 'additionalInformation', 'creator', 'name', 'priority', 'assigned', 'timeCreated', 'details'];
  modifyTable = ['id', 'additionalInformation', 'creator', 'name', 'priority', 'assigned', 'userAction', 'timeCreated', 'details'];

  isSolver$: Observable<boolean>;
  otherOpenRequests$: Observable<Request[]>;
  meAssignedRequests$: Observable<Request[]>;
  myCreatedRequests$: Observable<Request[]>;

  constructor(private swallNotification: SwallNotificationService,
              private store: Store<RequestState>,
              private storeAuth: Store<Auth>) {
  }

  ngOnInit() {
    this.isSolver$ = this.storeAuth.select(fromAuth.isSolver);
    this.myCreatedRequests$ = this.store.pipe(select(fromRequest.getMyCreatedRequests));
    this.meAssignedRequests$ = this.store.pipe(select(fromRequest.getMeAssignedRequests));
    this.otherOpenRequests$ = this.store.pipe(select(fromRequest.getOtherRequests));

    this.store.dispatch(RequestAction.getOpenRequests());
    this.store.dispatch(RequestAction.initializeWebsocketConnectionForRequests());
  }

  modifyMeAsSolver(request: Request, assign: boolean) {
    const text = assign ? "prideliť na" : "odstrániť zo";
    this.swallNotification.generateQuestion(`Naozaj chcetete ${text} seba požiadavku s id: ${request.id}. ?`).then((result) => {
      if (result.value) {
        if (assign) {
          this.store.dispatch(RequestAction.assignMeOnRequest({request, assign: true}));
        } else {
          this.store.dispatch(RequestAction.removeMeOnRequest({request, assign: false}));
        }
      }
    });

  }

  removeLogs(request: Request) {
    this.store.dispatch(RequestAction.removeLogs({requestId: request.id}));
  }
}

