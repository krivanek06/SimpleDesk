import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User, UserSimple} from "../../../../core/model/User";
import {AppState} from "../../../../core/model/appState.model";
import {Store} from "@ngrx/store";

import * as fromAuth from '../../../../core/store/auth/auth.reducer';
import * as fromAppManagement from '../../store/app-management.reducer';
import * as appManagementAction from '../../store/app-management.action';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserManagementComponent implements OnInit {
  isGhost$: Observable<boolean>;
  allUsers$: Observable<UserSimple[]>;
  userDetails$: Observable<User>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.isGhost$ = this.store.select(fromAuth.isGhost);
    this.allUsers$ = this.store.select(fromAppManagement.getAllUsers);
    this.userDetails$ = this.store.select(fromAppManagement.getUserDetails);
  }

  selectUser(username: string) {
    this.store.dispatch(appManagementAction.getUserDetails({username}));
  }

  resetUserPassword(username: string) {
    this.store.dispatch(appManagementAction.resetUserPassword({username}));
  }

  modifyUserState(user: User) {
    this.store.dispatch(appManagementAction.modifyUserState({user}));
  }

}
