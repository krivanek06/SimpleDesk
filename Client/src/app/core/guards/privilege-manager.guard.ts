import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, of, forkJoin, combineLatest} from 'rxjs';
import {UserStoreService} from '../services/user-store.service';

@Injectable({
  providedIn: 'root'
})
export class PrivilegeManagerGuard implements CanActivate {
  constructor(private userStoreService: UserStoreService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return combineLatest(
      this.userStoreService.hasPrivilegeAccess(),
      this.userStoreService.isAdmin(),
      this.userStoreService.isGhost(),
      (bool1, bool2, bool3) => (bool1 || bool2 || bool3)
    );
  }

}
