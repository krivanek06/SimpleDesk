import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrivilegeManagerGuard implements CanActivate {
  constructor(private router : Router , private authService: AuthenticationService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return <Observable<boolean>> this.authService.hasPrivilegeAccess().pipe(switchMap((res: boolean) => {
        if(res){
          return of(true); 
        }
        this.router.navigate(['/unauthorized']);
        return of(false);
      }))
  
  }
  
}
