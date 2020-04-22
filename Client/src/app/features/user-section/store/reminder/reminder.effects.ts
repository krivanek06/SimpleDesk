import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UserHttpService} from "../../../../core/api/user-http.service";
import {ReminderHttpService} from "../../../../core/api/reminder-http.service";
import {SwallNotificationService} from "../../../../core/services/swall-notification.service";
import {Action, Store} from "@ngrx/store";
import {Observable, of} from "rxjs";
import {catchError, filter, map, switchMap, tap, withLatestFrom} from "rxjs/operators";

import * as userAction from "../../../../core/store/user/user.action";
import * as LoadingAction from "../../../../core/store/loading/loader.action";
import * as reminderAction from './reminder.action';
import * as fromReminder from './reminder.reducer';
import * as fromRequest from "../../../requirement/store/request.reducer";
import {AppState} from "../../../../core/model/appState.model";


@Injectable()
export class ReminderEffects {
  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private userHttpService: UserHttpService,
              private reminderHttpService: ReminderHttpService,
              private swallNotification: SwallNotificationService) {
  }


  getReminders$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(reminderAction.getReminders),
    withLatestFrom(this.store.select(fromReminder.areRemindersLoaded)),
    filter(([_, loaded]) => !loaded),
    switchMap(() => this.reminderHttpService.getReminders()
      .pipe(
        map((reminders) => reminderAction.getRemindersSuccess({reminders})),
        catchError((error) => of(reminderAction.getRemindersError({error})))
      ))
  ));


  createReminder$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(reminderAction.createReminder),
    switchMap((action) => this.reminderHttpService.createReminder(action.reminder)
      .pipe(
        map((reminder) => reminderAction.createReminderSuccess({reminder})),
        tap(() => this.swallNotification.generateNotification("Pripomienka vytvorená")),
        catchError((error) => of(reminderAction.createReminderError({error})))
      ))
  ));

  editReminder$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(reminderAction.editReminder),
    switchMap((action) => this.reminderHttpService.editReminder(action.reminder)
      .pipe(
        map(() => reminderAction.editReminderSuccess({reminder: action.reminder})),
        catchError((error) => of(reminderAction.editReminderError({error})))
      ))
  ));


  deleteReminder$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(reminderAction.deleteReminder),
    switchMap((action) => this.reminderHttpService.deleteReminder(action.reminder)
      .pipe(
        map(() => reminderAction.deleteReminderSuccess({reminder: action.reminder})),
        tap(() => this.swallNotification.generateNotification("Pripomienka vymazaná")),
        catchError((error) => of(reminderAction.deleteReminderError({error})))
      ))
  ));


}


