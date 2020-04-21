import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UserHttpService} from "../../../../core/api/user-http.service";
import {ReminderHttpService} from "../../../../core/api/reminder-http.service";
import {SwallNotificationService} from "../../../../core/services/swall-notification.service";
import {Action, Store} from "@ngrx/store";
import {AppState} from "../../../../core/model/appState.model";
import {Observable, of} from "rxjs";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {ReminderConverterService} from "../../services/reminder-converter.service";

import * as userAction from "../../../../core/store/user/user.action";
import * as LoadingAction from "../../../../core/store/loading/loader.action";
import * as reminderAction from './reminder.action';
import * as fromReminder from './reminder.reducer';


@Injectable()
export class ReminderEffects {
  constructor(private actions$: Actions,
              private userHttpService: UserHttpService,
              private reminderHttpService: ReminderHttpService,
              private reminderConverterService: ReminderConverterService,
              private swallNotification: SwallNotificationService,
              private store: Store<AppState>) {
  }


  getReminders$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(reminderAction.getReminders),
    switchMap(() => this.reminderHttpService.getReminders()
      .pipe(
        map((reminder) => reminderAction.getRemindersSuccess({
          reminderContainers: this.reminderConverterService.convertRemindersIntoReminderContainers(reminder)
        })),
        catchError((error) => of(reminderAction.getRemindersError({error})))
      ))
  ));


  createReminder$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(reminderAction.createReminder),
    switchMap((action) => this.reminderHttpService.createReminder(action.reminder)
      .pipe(
        map((res) => reminderAction.createReminderSuccess({
          reminderContainer: this.reminderConverterService.convertRemindersIntoReminderContainer(res)
        })),
        tap(() => this.swallNotification.generateNotification("Pripomienka vytvorená")),
        catchError((error) => of(reminderAction.createReminderError({error})))
      ))
  ));

  editReminder$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(reminderAction.editReminder),
    switchMap((action) => this.reminderHttpService.editReminder(action.reminderContainer)
      .pipe(
        map(() => reminderAction.editReminderSuccess({reminderContainer: action.reminderContainer})),
        catchError((error) => of(reminderAction.editReminderError({error})))
      ))
  ));


  deleteReminder$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(reminderAction.deleteReminder),
    switchMap((action) => this.reminderHttpService.deleteReminder(action.reminderContainer)
      .pipe(
        map(() => reminderAction.deleteReminderSuccess({reminderContainer: action.reminderContainer})),
        tap(() => this.swallNotification.generateNotification("Pripomienka vymazaná")),
        catchError((error) => of(reminderAction.deleteReminderError({error})))
      ))
  ));


}


