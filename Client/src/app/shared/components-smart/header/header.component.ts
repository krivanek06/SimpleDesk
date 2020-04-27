import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../../core/model/User";
import {Store} from "@ngrx/store";
import {AppState} from "../../../core/model/appState.model";

import * as fromUser from "../../../core/store/user/user.reducer";
import * as fromAuth from "../../../core/store/auth/auth.action";
import * as fromReminder from "../../../features/user-section/store/reminder/reminder.reducer";
import {Reminder} from "../../../features/user-section/model/Reminder.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$: Observable<User>;
  reminders$: Observable<Reminder[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.user$ = this.store.select(fromUser.getUser);
    this.reminders$ = this.store.select(fromReminder.getAllReminderContainers);
  }

  logout(): void {
    this.store.dispatch(fromAuth.logout());
  }
}
