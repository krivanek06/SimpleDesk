import {Injectable} from "@angular/core";
import {GroupHttpService} from "../../../core/api/group-http.service";
import {UserHttpService} from "../../../core/api/user-http.service";
import {Observable, of} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Action, Store} from "@ngrx/store";
import {catchError, filter, map, switchMap, tap, withLatestFrom} from "rxjs/operators";
import {AppState} from "../../../core/model/appState.model";
import {RequestHttpService} from "../../../core/api/request-http.service";

import * as appManagementAction from './app-management.action';
import * as fromAppManagement from './app-management.reducer';
import {swallNotification} from "../../../shared/utils/swall-notification";


@Injectable()
export class AppManagementEffects {
  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private requestHttpService: RequestHttpService,
              private groupHttpService: GroupHttpService,
              private userHttpService: UserHttpService) {
  }

  getAllUsers$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(appManagementAction.getAllUsers),
    withLatestFrom(this.store.select(fromAppManagement.areUserLoaded)),
    filter(([_, loaded]) => !loaded),
    switchMap(() => this.userHttpService.getAllUsers()
      .pipe(
        map((users) => appManagementAction.getAllUsersSuccess({users})),
        catchError((error) => of(appManagementAction.getAllUsersFailure({error})))
      ))
  ));

  getAllGroups: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(appManagementAction.getAllGroupNames),
    withLatestFrom(this.store.select(fromAppManagement.areGroupsLoaded)),
    filter(([_, loaded]) => !loaded),
    switchMap(() => this.groupHttpService.getAllGroupNames()
      .pipe(
        map((groups) => appManagementAction.getAllGroupNamesSuccess({groups})),
        catchError((error) => of(appManagementAction.getAllGroupNamesFailure({error})))
      ))
  ));

  getUserDetails$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(appManagementAction.getUserDetails),
    switchMap((action) => this.userHttpService.getUserDetials(action.username)
      .pipe(
        map((user) => appManagementAction.getUserDetailsSuccess({user})),
        catchError((error) => of(appManagementAction.getUserDetailsFailure({error})))
      ))
  ));

  getGroupDetailsWithUnsetPrivileges$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(appManagementAction.getGroupDetailsWithUnsetPrivileges),
    switchMap((action) => this.groupHttpService.getGroupDetailsWithUnsetPrivileges(action.groupName)
      .pipe(
        map((group) => appManagementAction.getGroupDetailsWithUnsetPrivilegesSuccess({group})),
        catchError((error) => of(appManagementAction.getGroupDetailsWithUnsetPrivilegesFailure({error})))
      ))
  ));

  resetUserPassword$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(appManagementAction.resetUserPassword),
    switchMap((action) => this.userHttpService.resetUserPassword(action.username)
      .pipe(
        map(() => appManagementAction.resetUserPasswordSuccess),
        tap(() => swallNotification(`Heslo uživateľa bolo resetované`)),
        catchError((error) => of(appManagementAction.resetUserPasswordFailure({error})))
      ))
  ));

  modifyUserState$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(appManagementAction.modifyUserState),
    switchMap((action) => this.userHttpService.modifyUserState(action.user.username)
      .pipe(
        map(() => appManagementAction.modifyUserStateSuccess()),
        tap(() => swallNotification(`Stav uživateľa bol zmeneý`)),
        catchError((error) => of(appManagementAction.modifyUserStateFailure({error})))
      ))
  ));

  registerUser$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(appManagementAction.registerUser),
    switchMap((action) => this.userHttpService.registerUser(action.userSimple)
      .pipe(
        tap(() => swallNotification(`Žiadosť o vytvorenie uživateľa bolo zaslané`)),
        map(() => appManagementAction.registerUserSuccess({userSimple: action.userSimple})),
        tap(() => swallNotification(`Uživateľ bol zaregistrovaný, emailom sa bude notifikovať`)),
        catchError((error) => of(appManagementAction.registerUserFailure({error})))
      ))
  ));

  registerGroup$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(appManagementAction.registerGroup),
    switchMap((action) => this.groupHttpService.registerGroup(action.group)
      .pipe(
        tap(() => swallNotification(`Žiadosť o vytvorenie skupiny bolo zaslané`)),
        map(() => appManagementAction.registerGroupSuccess({groupName: action.group.name})),
        tap(() => swallNotification(`Skupina ${action.group.name} bola vytvorená`)),
        catchError((error) => of(appManagementAction.registerGroupFailure({error})))
      ))
  ));

  removeGroup$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(appManagementAction.removeGroup),
    switchMap(() => this.store.select(fromAppManagement.getGroupDetails)
      .pipe(
        filter(group => !!group),
        switchMap((group) => this.groupHttpService.deleteGroup(group.name)
          .pipe(
            tap(() => swallNotification(`Požiadavka zmazania skupiny zaslaná`)),
            map(() => appManagementAction.removeGroupSuccess({groupName: group.name})),
            tap(() => swallNotification(`Skupina bola zmazaná`)),
            catchError((error) => of(appManagementAction.removeGroupFailure({error})))
          ))
      ))
  ));

  editGroup$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(appManagementAction.editGroup),
    switchMap((action) => this.groupHttpService.editGroup(action.group)
      .pipe(
        tap(() => swallNotification(`Požiadavka editovanie skupiny zaslaná`)),
        map(() => appManagementAction.editGroupSuccess({group: action.group})),
        tap(() => swallNotification(`Skupina bola editovaná`)),
        catchError((error) => of(appManagementAction.editGroupFailure({error})))
      ))
  ));

  getRequestMonthlyStatistics$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(appManagementAction.getRequestMonthlyStatisticsForUser),
    switchMap((action) => this.requestHttpService.getRequestMonthlyStatisticsForUser(action.username)
      .pipe(
        map((requestStatistics) =>
          appManagementAction.getRequestMonthlyStatisticsSuccessForUser({userRequestStatistics: requestStatistics})
        ),
        catchError((error) => of(appManagementAction.getRequestMonthlyStatisticsErrorForUser({error})))
      ))
  ));


}



