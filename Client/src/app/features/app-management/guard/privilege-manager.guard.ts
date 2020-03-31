import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, combineLatest} from 'rxjs';
import {Store} from "@ngrx/store";
import {AppState, Auth} from "../../../core/model/appState.model";

import * as fromAuth from '../../../core/store/auth/auth.reducer';
import * as fromUser from '../../../core/store/user/user.reducer';

@Injectable({
  providedIn: 'root'
})
export class PrivilegeManagerGuard implements CanActivate {
  constructor(private store: Store<AppState>) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return combineLatest(
      this.store.select(fromUser.hasPrivilegeAccess),
      this.store.select(fromAuth.isAdmin),
      this.store.select(fromAuth.isGhost),
      (bool1, bool2, bool3) => (bool1 || bool2 || bool3)
    );
  }

}
