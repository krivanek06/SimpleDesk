import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of, forkJoin, combineLatest } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { switchMap, map, tap, take, takeLast } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrivilegeManagerGuard implements CanActivate {
  constructor(private router : Router , private authService: AuthenticationService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return combineLatest(this.authService.hasPrivilegeAccess() , this.authService.isAdmin(), this.authService.isGhost(),
        (bool1, bool2, bool3) => (bool1 || bool2 || bool3)
      );
  }
  
}
