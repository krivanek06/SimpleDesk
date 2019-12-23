import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.authenticationFailed();
            }else if(err.status === 403){
                console.log("403 error, handle it ! ")
            }else if(err.status === 404){
                console.log("404 error, shoud be created an error page")
            }
            console.log('error got : ')
            console.log(err)
            return throwError(err.error.error);
        }))
    }


    private authenticationFailed():void{
        Swal.fire({
            icon: 'error',
            text: 'Zadali ste nesprávne prihlasovacie údaje.',
          })
    }
}