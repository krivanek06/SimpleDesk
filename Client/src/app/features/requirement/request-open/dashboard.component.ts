import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs';
import {UserStoreService} from 'app/core/services/user-store.service';
import {SwallNotificationService} from 'app/shared/services/swall-notification.service';
import {RequestHttpService} from 'app/api/request-http.service';
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import * as RequestAction from '../store/request.action';
import {Request} from "../../../core/model/Request";
import {
  getMeAssignedRequests,
  getMyCreatedRequests,
  getOtherRequests,
} from "../store/request.reducer";
import {RequestState} from "../../../core/model/appState.model";

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

  constructor(private userStoreService: UserStoreService,
              private requestHttp: RequestHttpService,
              private router: Router,
              private swallNotification: SwallNotificationService,
              private store: Store<RequestState>) {
  }

  ngOnInit() {
    this.isSolver$ = this.userStoreService.isSolver();
    this.myCreatedRequests$ = this.store.pipe(select(getMyCreatedRequests(this.userStoreService.user.username)));
    this.meAssignedRequests$ = this.store.pipe(select(getMeAssignedRequests(this.userStoreService.user.username)));
    this.otherOpenRequests$ = this.store.pipe(select(getOtherRequests(this.userStoreService.user.username)));

    this.store.dispatch(RequestAction.getOpenRequests());
  }


  modifyMeAsSolver(request: Request, assign: boolean) {
    const text = assign ? "prideliť na" : "odstrániť zo";
    this.swallNotification.generateQuestion(`Naozaj chcetete ${text} seba požiadavku s id: ${request.id}. ?`).then((result) => {
      if (result.value) {
        if (assign) {
          this.store.dispatch(RequestAction.assignMeOnRequest({
            request,
            userSimpleDTO: this.userStoreService.getUserSimple()
          }));
        } else {
          this.store.dispatch(RequestAction.removeMeOnRequest({request, userSimpleDTO: undefined}));
        }
      }
    });
  }

  removeLogs(request: Request) {
    this.store.dispatch(RequestAction.removeLogs({requestId: request.id}));
  }
}

