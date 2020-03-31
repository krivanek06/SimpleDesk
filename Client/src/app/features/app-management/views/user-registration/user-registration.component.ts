import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {User, UserSimple} from 'app/core/model/User';
import {SwallNotificationService} from 'app/core/services/swall-notification.service';
import {UserFormComponent} from 'app/features/app-management/presentation/user/user-form/user-form.component';
import {Store} from "@ngrx/store";
import {AppState} from "../../../../core/model/appState.model";

import * as appManagementAction from '../../store/app-management.action';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRegistrationComponent implements OnInit {
  @ViewChild('userForm') userForm: UserFormComponent;

  constructor(private swallNotification: SwallNotificationService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  userRegistration(userSimple: UserSimple): void {
    this.swallNotification.generateQuestion(`Naozaj chcetete vytvoriť uživateľa ?`).then((res) => {
      if (res.value) {
        this.store.dispatch(appManagementAction.registerUser({userSimple}));
        this.userForm.resetForm();
      }
    });
  }
}
