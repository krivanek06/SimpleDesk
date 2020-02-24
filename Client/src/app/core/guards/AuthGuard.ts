import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {Observable} from 'rxjs';
import {UserStoreService} from "../services/user-store.service";


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService, private userStoreService: UserStoreService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.authService.isAuthenticated() && this.authService.isTokenValid()) {
      return true;
    }
    this.authService.logout();
    this.userStoreService.logOut();
    this.router.navigate(['/login']);
    return false;

  }
}
