import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {Observable, Subject} from 'rxjs';
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
  getOtherRequests, isDashboardLoaded,
} from "../store/request.reducer";
import {filter, takeUntil} from "rxjs/operators";
import {RequestState} from "../../../core/model/appState.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  viewTable = ['id', 'additionalInformation', 'creator', 'name', 'priority', 'assigned', 'timeCreated', 'details'];
  modifyTable = ['id', 'additionalInformation', 'creator', 'name', 'priority', 'assigned', 'userAction', 'timeCreated', 'details'];

  isAdmin$: Observable<boolean>;
  isGhost$: Observable<boolean>;
  isSolver$: Observable<boolean>;
  isManager$: Observable<boolean>;
  destroy$: Subject<boolean> = new Subject<boolean>();

  otherOpenRequests$: Observable<Request[]>;
  meAssignedRequests$: Observable<Request[]>;
  myCreatedRequests$: Observable<Request[]>;

  constructor(private spinner: NgxSpinnerService,
              private userStoreService: UserStoreService,
              private requestHttp: RequestHttpService,
              private router: Router,
              private swallNotification: SwallNotificationService,
              private store: Store<RequestState>) {
  }

  ngOnInit() {
    this.isAdmin$ = this.userStoreService.isAdmin();
    this.isGhost$ = this.userStoreService.isGhost();
    this.isSolver$ = this.userStoreService.isSolver();
    this.isManager$ = this.userStoreService.isManager();

    this.myCreatedRequests$ = this.store.pipe(select(getMyCreatedRequests(this.userStoreService.user.username)));
    this.meAssignedRequests$ = this.store.pipe(select(getMeAssignedRequests(this.userStoreService.user.username)));
    this.otherOpenRequests$ = this.store.pipe(select(getOtherRequests(this.userStoreService.user.username)));

    this.store.subscribe(x => console.log(x));

    this.spinner.show();

    this.store.pipe(select(isDashboardLoaded)).pipe(
      takeUntil(this.destroy$),
      filter(res => res)
    ).subscribe(() => this.spinner.hide());

    this.store.dispatch(RequestAction.getOpenRequests());

  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }


  modifyMeAsSolver(request: Request, assign: boolean) {
    const text = assign ? "prideliť na" : "odstrániť zo";
    this.swallNotification.generateQuestion(`Naozaj chcetete ${text} seba požiadavku s id: ${request.id}. ?`).then((result) => {
      if (result.value) {
        if (assign) {
          this.store.dispatch(RequestAction.assignMeOnRequest({request, userSimpleDTO: this.userStoreService.getUserSimple()}));
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

