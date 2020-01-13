import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FinanceGuardGuard implements CanActivate {
  constructor(private router : Router ,private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>|boolean {
    return <Observable<boolean>> this.authService.hasFinanceModuleAccess().pipe(switchMap((res: boolean) => {
      if(res){
        return of(true); 
      }
      this.router.navigate(['/request_new/ticket']);
      return of(false);
    }))

  }
}
