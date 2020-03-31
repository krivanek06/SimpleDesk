import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Store} from "@ngrx/store";
import {Auth} from "../../../../../core/model/appState.model";
import {hasFinanceModuleAccess} from "../../../../../core/store/user/user.reducer";

@Injectable({
  providedIn: 'root'
})
export class FinanceGuardGuard implements CanActivate {
  constructor(private router: Router, private storeAuth: Store<Auth>) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.storeAuth.select(hasFinanceModuleAccess).pipe(switchMap((res: boolean) => {
      if (res) {
        return of(true);
      }
      this.router.navigate(['/request_new/ticket']);
      return of(false);
    })) as Observable<boolean>;

  }
}
