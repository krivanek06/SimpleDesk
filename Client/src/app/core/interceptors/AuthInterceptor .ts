import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";
import {Auth} from "../model/appState.model";
import {select, Store} from "@ngrx/store";

import * as fromAuth from './../store/auth/auth.reducer';
import * as authAction from './../store/auth/auth.action';
import {first, mergeMap, retry, shareReplay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private store: Store<Auth>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.store.select(fromAuth.isTokenValid)) {
      console.log('logging out');
      this.store.dispatch(authAction.logout());
    }

    return this.store.pipe(
      select(fromAuth.getAccessToken),
      first(),
      mergeMap(token => {
        const authReq = !!token ? req.clone({setHeaders: {Authorization: 'Bearer ' + token}}) : req;
        return next.handle(authReq);
      }),
      retry(1),
      shareReplay()
    );
  }
}
