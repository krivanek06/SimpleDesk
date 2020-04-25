import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {UserSimple} from 'app/core/model/User';
import {UserFormComponent} from 'app/features/app-management/presentation/user/user-form/user-form.component';
import {Store} from "@ngrx/store";
import {AppState} from "../../../../core/model/appState.model";

import * as appManagementAction from '../../store/app-management.action';
import {Confirmable} from "../../../../shared/utils/swall-notification";


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRegistrationComponent implements OnInit {
  @ViewChild('userForm') userForm: UserFormComponent;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  @Confirmable(`Naozaj chcetete vytvoriť uživateľa ?`)
  userRegistration(userSimple: UserSimple): void {
    this.store.dispatch(appManagementAction.registerUser({userSimple}));
    this.userForm.resetForm();
  }
}
