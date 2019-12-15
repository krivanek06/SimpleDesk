import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication/Authentication.service';


@Injectable({ providedIn: 'root' }) 
export class AuthGuard implements CanActivate {
    constructor(  private router: Router,   private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       /* if(localStorage.getItem("Authorization")){
           return true; 
        }
         this.router.navigate(['/login']);
         return false;*/
         return true;
        
    }
}