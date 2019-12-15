import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,  next: HttpHandler): Observable<HttpEvent<any>> {

        const jwtToken = localStorage.getItem("Authorization");
        console.log('token');
        if (jwtToken) {
            req = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + jwtToken)
            });
        }
        return next.handle(req); 
    }
}