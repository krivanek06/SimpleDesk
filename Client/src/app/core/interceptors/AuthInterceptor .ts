import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';


@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService){

    }

    intercept(req: HttpRequest<any>,  next: HttpHandler): Observable<HttpEvent<any>> {

        const jwtToken = this.authService.getAccessToken();
        if (jwtToken) {
            req = req.clone({ headers: req.headers.set("Authorization", "Bearer " + jwtToken)  });
        }
        return next.handle(req);  
    }
}