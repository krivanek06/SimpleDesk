import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from "@ngrx/store";
import {AppState, Auth} from "../../core/model/appState.model";

import * as fromAuth from '../../core/store/auth/auth.reducer';
import * as fromUser from '../../core/store/user/user.reducer';
@Component({
  selector: 'app-app-management',
  templateUrl: './app-management.component.html',
  styleUrls: ['./app-management.component.scss']
})
export class AppManagementComponent implements OnInit {
  isAdmin$: Observable<boolean>;
  hasPrivilegeAccess$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.isAdmin$ = this.store.select(fromAuth.isAdmin);
    this.hasPrivilegeAccess$ = this.store.select(fromUser.hasPrivilegeAccess);
   }

  ngOnInit() {
  }

}
