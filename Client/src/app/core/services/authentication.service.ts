import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { JWToken } from 'app/shared/models/JWToken';
import { User } from 'app/shared/models/User';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { JwtHelperService } from "@auth0/angular-jwt";
import { tap, mapTo, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private urlLogin = environment.loginUrl + "login";
  private urlRefreshToken = '';
  private jwtHelper: JwtHelperService;
  private JWToken$: BehaviorSubject<JWToken>;
  

  constructor( private http: HttpClient) {
    this.jwtHelper = new JwtHelperService();
  }

  public getDecodedToken():Observable<JWToken>{
    if(this.JWToken$ === undefined){
      this.JWToken$= new BehaviorSubject<JWToken>(this.jwtHelper.decodeToken(this.getAccessToken()));
    }
    return this.JWToken$.asObservable();
  }

  public login (username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<Response>(this.urlLogin, {username: username, password: password}, {headers, observe: 'response'})
      .pipe(
        tap(ressponse => {
          this.setAccessToken(ressponse.headers.get("authorization"));
         // this.setRefreshToken(tokens.refresh_token);
        }),
        mapTo(true),
        catchError(error => {
          this.handleAuthenticationError(error);
          return of(false);
        }));
  }

  public logout () {
    this.setAccessToken(null);
    this.setRefreshToken(null);
  }

  public isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

  public isTokenValid(): boolean{
    return !this.jwtHelper.isTokenExpired(this.getAccessToken());
  }

  private handleAuthenticationError (err: any) {
    // TODO: Only for authentication error codes
    this.setAccessToken(null);
    this.setRefreshToken(null);
  }

  private setAccessToken (accessToken: string) {
    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
      this.saveJwtToken(accessToken);
    } else {
      localStorage.removeItem('access_token');
      this.saveJwtToken(null);
    }
  }

  private saveJwtToken(accessToken: string){
    if(this.JWToken$){
      this.JWToken$.next(this.jwtHelper.decodeToken(accessToken));
    }else{
      this.JWToken$= new BehaviorSubject<JWToken>(this.jwtHelper.decodeToken(accessToken));
    }
  }

  private setRefreshToken (refreshToken: string) {
    if (refreshToken) {
      localStorage.setItem('refresh_token', refreshToken);
    } else {
      localStorage.removeItem('refresh_token');
    }
  }

  public getAccessToken () {
    return localStorage.getItem('access_token');
  }

  private getRefreshToken () {
    return localStorage.getItem('refresh_token');
  }


}