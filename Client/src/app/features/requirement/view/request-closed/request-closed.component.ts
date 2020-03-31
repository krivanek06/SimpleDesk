import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {FilterRequest, Request} from "../../model/Request";
import {AppState, CustomDate} from "../../../../core/model/appState.model";
import {select, Store} from "@ngrx/store";
import {filter, takeUntil} from "rxjs/operators";
import {DatePipe} from "@angular/common";
import {UserSimple} from "../../../../core/model/User";

import * as RequestAction from '../../store/request.action';
import * as fromRequest from '../../store/request.reducer';
import * as fromAppManagement from '../../../app-management/store/app-management.reducer';
import * as appManagementAction from '../../../app-management/store/app-management.action';

@Component({
  selector: 'app-request-closed',
  templateUrl: './request-closed.component.html',
  styleUrls: ['./request-closed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestClosedComponent implements OnInit, OnDestroy {

  viewTable = ['id', 'additionalInformation', 'creator', 'name', 'priority', 'closed', 'timeCreated', 'timeClosed', 'details'];

  allUsers$: Observable<UserSimple[]>;
  customDate$: Observable<CustomDate>;
  closedRequests$: Observable<Request[]>;
  filterRequests$: Observable<FilterRequest>;

  private destroy$: Subject<boolean> = new Subject();

  constructor(private router: Router,
              private store: Store<AppState>,
              private datepipe: DatePipe) {
  }

  ngOnInit() {
    this.allUsers$ = this.store.select(fromAppManagement.getAllUsers);
    this.closedRequests$ = this.store.pipe(select(fromRequest.getClosedRequests));
    this.customDate$ = this.store.pipe(select(fromRequest.getClosedRequestDateRange));
    this.filterRequests$ = this.store.pipe(select(fromRequest.getClosedRequestFilterState));

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

    this.store.dispatch(appManagementAction.getAllUsers());
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
