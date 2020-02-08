import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, combineLatest } from 'rxjs';
import { JWToken } from 'app/shared/models/JWToken';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { JwtHelperService } from "@auth0/angular-jwt";
import { tap, mapTo, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private jwtHelper: JwtHelperService;
  private JWToken$: BehaviorSubject<JWToken>;
  

  constructor( private http: HttpClient) {
    this.jwtHelper = new JwtHelperService();
  }

  public getDecodedToken():Observable<JWToken>{
    if(this.JWToken$ === undefined){
      this.JWToken$ = new BehaviorSubject<JWToken>(this.jwtHelper.decodeToken(this.getAccessToken()));
    }
    return this.JWToken$.asObservable();
  }

  public login (username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<Response>( environment.loginUrl + "login", 
        {username: username.toLowerCase(), password: password}, 
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

  public logout () {
    this.setAccessToken(null);
    this.setRefreshToken(null);
    this.JWToken$.next(null);
  }

  public isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

  public isTokenValid(): boolean{
    return !this.jwtHelper.isTokenExpired(this.getAccessToken());
  }

  private handleAuthenticationError (err: any) {
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


  /* ----------------- privileges ------------------- */
  public isSolverRightHand(): Observable<boolean> {
    return combineLatest(
      this.isSolver(),
      this.isManagerRightHand(), 
      this.isManager() , 
      (one,two,three ) => (one && (two ||  three))
    );
  }

  public isAdmin(): Observable<boolean> {
    return this.getDecodedToken().pipe(map(x =>  x.AUTHORITIES.includes("ROLE_ADMIN")));
  }

  public isGhost(): Observable<boolean> {
    return this.getDecodedToken().pipe(map(x =>  x.AUTHORITIES.includes("ROLE_GHOST")));
  }

  public isManager(): Observable<boolean> {
    return this.getDecodedToken().pipe(map(x =>  x.AUTHORITIES.includes("ROLE_MANAGER")));
  }

  public isManagerRightHand(): Observable<boolean> {
    return this.getDecodedToken().pipe(map(x =>  x.AUTHORITIES.includes("ROLE_MANAGER_RIGHT_HAND")));
  }

  public isSolver(): Observable<boolean> {
    return this.getDecodedToken().pipe(map(x =>  x.AUTHORITIES.includes("ROLE_SOLVER")));
  }

  public hasPrivilegeAccess(): Observable<boolean> {
    return this.getDecodedToken().pipe(map(x =>  x.MODULE_TYPES_TO_USE.includes("Privilege")));
  }

  public hasFinanceModuleAccess(): Observable<boolean> {
    return this.getDecodedToken().pipe(map(x =>  x.MODULE_TYPES_TO_USE.includes("Finance")));
  }

  public hasTicketModuleAccess(): Observable<boolean> {
    return this.getDecodedToken().pipe(map(x =>  x.MODULE_TYPES_TO_USE.includes("Ticket")));
  }

  public hasReportModuleAccess(): Observable<boolean> {
    return this.getDecodedToken().pipe(map(x =>  x.MODULE_TYPES_TO_USE.includes("Report")));
  }

  public isMoreThanNormalUser(): Observable<boolean>{
    return combineLatest(
      this.isAdmin(), 
      this.isGhost(), 
      this.isSolver(), 
      this.isManager(), 
      this.isManagerRightHand(),
      (one,two,three, four, five ) => (one || two ||  three || four || five));
  }


}
