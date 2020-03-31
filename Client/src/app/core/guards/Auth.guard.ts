import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {Auth} from "../model/appState.model";
import { tap} from "rxjs/operators";

import * as fromAuth from '../store/auth/auth.reducer';
import * as authAction from '../store/auth/auth.action';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<Auth>, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.store.select(fromAuth.isTokenValid).pipe(
      tap((valid) => {
        if (!valid) {
          this.store.dispatch(authAction.logout());
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
