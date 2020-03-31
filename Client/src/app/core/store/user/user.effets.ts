import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, filter, map, retry, switchMap, tap, withLatestFrom} from "rxjs/operators";
import {User} from "../../model/User";
import {UserHttpService} from "../../api/user-http.service";
import {Router} from "@angular/router";


import * as userAction from "./user.action";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions,
              private userHttpService: UserHttpService,
              private router: Router) {
  }

  loadUser$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(userAction.loadUser),
    switchMap(() => this.userHttpService.getBasicInformation()
      .pipe(
        map((user: User) => userAction.loadUserSuccess({user})),
        tap(() => this.router.navigate(['/requests/dashboard'])) ,
        catchError((error) => of(userAction.loadUserError({error})))
      ))
  ));

}
