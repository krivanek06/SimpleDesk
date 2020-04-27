import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UserHttpService} from "../../../../core/api/user-http.service";
import {GroupHttpService} from "../../../../core/api/group-http.service";
import {RequestHttpService} from "../../../../core/api/request-http.service";
import {Action, Store} from "@ngrx/store";
import {Loading, UserSection} from "../../../../core/model/appState.model";
import {Observable, of} from "rxjs";
import {catchError, filter, map, switchMap, tap, withLatestFrom} from "rxjs/operators";

import * as userAction from "../../../../core/store/user/user.action";
import * as LoadingAction from "../../../../core/store/loading/loader.action";
import * as userSectionAction from './user-stat.action';
import * as fromUserSection from './user-stat.reducer';
import {swallNotification} from "../../../../shared/utils/swall-notification";


@Injectable()
export class UserStatEffets {
  constructor(private actions$: Actions,
              private userHttpService: UserHttpService,
              private requestHttpService: RequestHttpService,
              private groupHttpService: GroupHttpService,
              private store: Store<UserSection>) {
  }




  changeImage$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(userSectionAction.changeImage),
    switchMap((action) => this.userHttpService.changeImage(action.image)
      .pipe(
        map(() => userAction.changeImageSuccess({image: action.image})),
        tap(() => swallNotification(`Váš obrázok bol zmenený`)),
        catchError((error) => of(userSectionAction.changeImageError({error})))
      ))
  ));

  changePassword$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(userSectionAction.changePassword),
    switchMap((action) => this.userHttpService.changePassword(action.password)
      .pipe(
        map(() => userSectionAction.changePasswordSuccess),
        tap(() => swallNotification(`Heslo bolo zmenené`)),
        catchError((error) => of(userSectionAction.changePasswordFailure({error})))
      ))
  ));

  getAvailableAvatars$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(userSectionAction.getAvailableAvatars),
    withLatestFrom(this.store.select(fromUserSection.isAvailableAvatarsLoaded)),
    filter(([_, loaded]) => !loaded),
    tap(() => this.store.dispatch(LoadingAction.loadingStart())),
    switchMap(() => this.userHttpService.getAvailableAvatars()
      .pipe(
        map((images) => userSectionAction.getAvailableAvatarsSuccess({images})),
        tap(() => this.store.dispatch(LoadingAction.loadingFinished())),
        catchError((error) => of(userSectionAction.getAvailableAvatarsFailure({error})))
      ))
  ));

  getGroupDetails$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(userSectionAction.getGroupDetails),
    switchMap((action) => this.groupHttpService.getGroupDetails(action.groupName)
      .pipe(
        map((group) => userSectionAction.getGroupDetailsSuccess({group})),
        catchError((error) => of(userSectionAction.getGroupDetailsFailure({error})))
      ))
  ));

  getRequestMonthlyStatistics$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(userSectionAction.getRequestMonthlyStatistics),
    switchMap(() => this.requestHttpService.getRequestMonthlyStatistics()
      .pipe(
        map((requestStatistics) => userSectionAction.getRequestMonthlyStatisticsSuccess({requestStatistics})),
        catchError((error) => of(userSectionAction.getRequestMonthlyStatisticsError({error})))
      ))
  ));

}
