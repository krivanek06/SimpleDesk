import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { JWToken } from 'app/shared/models/JWToken';
import { User, UserSimpleDTO } from 'app/shared/models/UserGroups';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { tap, mapTo, catchError } from 'rxjs/operators';
import { ImageDTO } from 'app/shared/models/ImageDTO';
import { UserSimple } from 'app/shared/models/RequestDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userPrefix: string = 'logged_in_user';
  public user: User;

  constructor(private http: HttpClient) {  
    this.checkIfUserAvailable();
  }


  public loadLoggedInUser (): Observable<boolean> {
    return this.http.get<User>(environment.apiUrl + "user/basicInformation")
      .pipe(
        tap(user => {
          this.saveUserToLocalStorage(user);
          this.user = user 
        }),
        mapTo(true),
        catchError(error => {
          console.log(error);
          return of(false);
        }));
  }

  private checkIfUserAvailable():void{
    if(this.user === undefined){
      this.user = JSON.parse(localStorage.getItem(this.userPrefix));
    }
  }

  private saveUserToLocalStorage(user: User): void{
    localStorage.setItem(this.userPrefix, JSON.stringify(user));
  }

  public removeUserFromLocalStorage(){
    localStorage.removeItem(this.userPrefix);
  }

  public changeUserImage(image: ImageDTO){
    this.user.photoBytes = image.imageBytes;
    this.saveUserToLocalStorage(this.user);
  }


  public getUserSimple(): UserSimple{
    let user: UserSimple = {
      username: this.user.username,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      photoBytes: this.user.photoBytes,
    }
    return user;
  }


  // endpoints
  public registerUser(user : UserSimpleDTO):Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(environment.apiUrl + "user/registration", user , {headers: headers});
  } 

  public getAllActiveUsers(): Observable<UserSimpleDTO[]>{
    return this.http.get<UserSimpleDTO[]>(environment.apiUrl + "user/secure/allActive");
  }

  public getAllUsers(): Observable<UserSimpleDTO[]>{
    return this.http.get<UserSimpleDTO[]>(environment.apiUrl + "user/secure/all");
  }

  public getUserDetials(username: string): Observable<User>{
    return this.http.get<User>(environment.apiUrl + `user/secure/${username}`);
  }

  public resetUserPassword(username: string): Observable<any>{
    return this.http.put(environment.apiUrl + `user/secure/resetPassword/${username}`, null);
  }

  public modifyUserState(username: string): Observable<any>{
    return this.http.put(environment.apiUrl + `user/secure/modifyState/${username}`, null);
  }


}
