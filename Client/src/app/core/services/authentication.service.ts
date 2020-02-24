import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, combineLatest} from 'rxjs';
import {JWToken} from 'app/core/model/JWToken';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {JwtHelperService} from "@auth0/angular-jwt";
import {tap, mapTo, catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private jwtHelper: JwtHelperService;
  private JWToken$: BehaviorSubject<JWToken>;


  constructor(private http: HttpClient) {
    this.jwtHelper = new JwtHelperService();
  }

  getDecodedToken(): Observable<JWToken> {
    if (this.JWToken$ === undefined) {
      this.JWToken$ = new BehaviorSubject<JWToken>(this.jwtHelper.decodeToken(this.getAccessToken()));
    }
    return this.JWToken$.asObservable();
  }

  get decodedTokenValue(): JWToken {
    return this.JWToken$.getValue();
  }

  login(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<Response>(environment.loginUrl + "login",
      {username: username.toLowerCase(), password},
      {headers, observe: 'response'}
    ).pipe(
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

  logout() {
    this.setAccessToken(null);
    this.setRefreshToken(null);
    this.JWToken$.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

  isTokenValid(): boolean {
    return !this.jwtHelper.isTokenExpired(this.getAccessToken());
  }

  private handleAuthenticationError(err: any) {
    this.setAccessToken(null);
    this.setRefreshToken(null);
  }

  private setAccessToken(accessToken: string) {
    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
      this.saveJwtToken(accessToken);
    } else {
      localStorage.removeItem('access_token');
      this.saveJwtToken(null);
    }
  }

  private saveJwtToken(accessToken: string) {
    if (this.JWToken$) {
      this.JWToken$.next(this.jwtHelper.decodeToken(accessToken));
    } else {
      this.JWToken$ = new BehaviorSubject<JWToken>(this.jwtHelper.decodeToken(accessToken));
    }
  }

  private setRefreshToken(refreshToken: string) {
    if (refreshToken) {
      localStorage.setItem('refresh_token', refreshToken);
    } else {
      localStorage.removeItem('refresh_token');
    }
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  private getRefreshToken() {
    return localStorage.getItem('refresh_token');
  }

}
