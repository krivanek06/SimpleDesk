import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AppState} from "../../../core/model/appState.model";
import {Store} from "@ngrx/store";

import * as fromAuth from '../../../core/store/auth/auth.reducer';
import * as fromUser from '../../../core/store/user/user.reducer';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  hasPrivilegeAccess$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  isGhost$: Observable<boolean>;
  hasFinanceModuleAccess$: Observable<boolean>;
  hasTicketModuleAccess$: Observable<boolean>;
  hasReportModuleAccess$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.isAdmin$ = this.store.select(fromAuth.isAdmin);
    this.isGhost$ = this.store.select(fromAuth.isGhost);
    this.hasPrivilegeAccess$ = this.store.select(fromUser.hasPrivilegeAccess);
    this.hasFinanceModuleAccess$ = this.store.select(fromUser.hasFinanceModuleAccess);
    this.hasTicketModuleAccess$ = this.store.select(fromUser.hasTicketModuleAccess);
    this.hasReportModuleAccess$ = this.store.select(fromUser.hasReportModuleAccess);
  }

}
