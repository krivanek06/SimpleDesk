import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserStoreService } from '../services/user-store.service';

@Injectable({
  providedIn: 'root'
})
export class FinanceGuardGuard implements CanActivate {
  constructor(private router : Router ,private userStoreService: UserStoreService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>|boolean {
    return <Observable<boolean>> this.userStoreService.hasFinanceModuleAccess().pipe(switchMap((res: boolean) => {
      if(res){
        return of(true); 
      }
      this.router.navigate(['/request_new/ticket']);
      return of(false);
    }))

  }
}
