import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {SwallNotificationService} from 'app/core/services/swall-notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router,
              private swallNotification: SwallNotificationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      console.log(err);
      if (err.status === 401) {
        this.authenticationFailed(err.error.error);
      } else if (err.status === 403) {
        this.swallNotification.generateErrorNotification(err.error).then(() => this.router.navigate(['/unauthorized']));
      } else if (err.status === 404) {
        console.log("404 error, shoud be created an error page");
      } else {
        this.generalError(err.error);
      }
      return throwError(err.error.error);
    }));
  }

  private generalError(error: string) {
    this.swallNotification.generateErrorNotification(`Požiadavka zlyhala, chyba hlášky : ${error}`);
  }


  private authenticationFailed(error: string): void {
    console.log(error);
    if (error === 'Not found anonymousUser') {
      console.log('missing token : Not found anonymousUser');
      return;
    }
    this.swallNotification.generateErrorNotification(`Zadali ste nesprávne prihlasovacie údaje.`);
  }
}
