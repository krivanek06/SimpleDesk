import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { JWToken } from 'app/shared/models/JWToken';
import { User } from 'app/shared/models/User';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { tap, mapTo, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$: BehaviorSubject<User>;
  private userDetailsInformation = '';

  constructor(private http: HttpClient) { 
    console.log('aa')
  }

  public getUser():Observable<User>{
    return this.user$.asObservable();
  }

  public getUserInformation (): Observable<boolean> {
    //const body = new HttpParams().set('username', username).set('password', password);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<User>(this.userDetailsInformation, null, {headers})
      .pipe(
        tap(user => {
          console.log(user);
          this.user$ = new BehaviorSubject<User>(user);
        }),
        mapTo(true),
        catchError(error => {
          console.log(error);
          return of(false);
        }));
  }
}
