import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {UserHttpService} from "../../../api/user-http.service";
import {UserSimpleDTO} from "../../../core/model/User";
import {FilterRequest, Request} from "../../../core/model/Request";
import {CustomDate, RequestState} from "../../../core/model/appState.model";
import {select, Store} from "@ngrx/store";
import {
  getClosedRequestDateRange,
  getClosedRequestFilterState,
  getClosedRequests,
  isClosedLoaded
} from "../store/request.reducer";
import {filter, takeUntil} from "rxjs/operators";
import {DatePipe} from "@angular/common";
import * as RequestAction from '../store/request.action';


@Component({
  selector: 'app-request-closed',
  templateUrl: './request-closed.component.html',
  styleUrls: ['./request-closed.component.scss']
})
export class RequestClosedComponent implements OnInit, OnDestroy {

  viewTable = ['id', 'additionalInformation', 'creator', 'name', 'priority', 'closed', 'timeCreated', 'timeClosed', 'details'];

  allUsers$: Observable<UserSimpleDTO[]>;
  customDate$: Observable<CustomDate>;
  closedRequests$: Observable<Request[]>;
  filterRequests$: Observable<FilterRequest>;

  private destroy$: Subject<boolean> = new Subject();

  constructor(private spinner: NgxSpinnerService,
              private router: Router,
              private store: Store<RequestState>,
              private userHttp: UserHttpService,
              private datepipe: DatePipe) {
  }

  ngOnInit() {
    this.allUsers$ = this.userHttp.getAllActiveUsers();
    this.closedRequests$ = this.store.pipe(select(getClosedRequests));
    this.customDate$ = this.store.pipe(select(getClosedRequestDateRange));
    this.filterRequests$ = this.store.pipe(select(getClosedRequestFilterState));

    this.store.pipe(
      select(isClosedLoaded),
      takeUntil(this.destroy$)
    ).subscribe((loaded) => {
      if (loaded) {
        this.spinner.hide();
      } else {
        this.spinner.show();
      }
    });

    // initial loading when date is not set
    this.customDate$.pipe(
      filter(customDate => !customDate),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      const today = new Date();
      const dateTo = this.datepipe.transform(today, 'dd.MM.yyyy');

      today.setDate(today.getDate() - 30);
      const dateFrom = this.datepipe.transform(today, 'dd.MM.yyyy');
      this.store.dispatch(RequestAction.getClosedRequests({customDate: {dateFrom, dateTo}}));
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  changeDate(customDate: CustomDate) {
    this.store.dispatch(RequestAction.getClosedRequests({customDate}));
  }

  filterClosedRequests(filterRequests: FilterRequest) {
    this.store.dispatch(RequestAction.changeClosedRequestFilter({filterRequests}));
  }

}
