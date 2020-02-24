import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';
import {UserStoreService} from "../services/user-store.service";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService,
              private userStoreService: UserStoreService,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.authService.isTokenValid()) {
      this.router.navigateByUrl("/login");
      this.userStoreService.logOut();
      this.authService.logout();
    }

    const jwtToken = this.authService.getAccessToken();
    if (jwtToken) {
      req = req.clone({headers: req.headers.set("Authorization", "Bearer " + jwtToken)});
    }

    return next.handle(req);
  }
}
