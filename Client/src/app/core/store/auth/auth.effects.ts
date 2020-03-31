import {Observable, of} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AppState, Auth} from "../../model/appState.model";
import {catchError, concatMap, exhaustMap, flatMap, map, switchMap, tap} from "rxjs/operators";
import {UserHttpService} from "../../api/user-http.service";

import * as authAction from './auth.action';
import * as userAction from '../user/user.action';
import {Router} from "@angular/router";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
              private router: Router,
              private userHttpService: UserHttpService,
              private store: Store<AppState>) {
  }

  login$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(authAction.login),
    switchMap((action) => this.userHttpService.login(action.username, action.password)
      .pipe(
        map((response) => authAction.loginSuccess({token: response.headers.get("authorization")})),
        tap(() => this.store.dispatch(userAction.loadUser())),
        catchError((error) => of(authAction.loginError({error})))
      ))
  ));

  logout$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(authAction.logout),
    tap(() => this.router.navigate(["/login"]))
  ), { dispatch: false });

}


