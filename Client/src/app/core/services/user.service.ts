import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { JWToken } from 'app/shared/models/JWToken';
import { User } from 'app/shared/models/User';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { tap, mapTo, catchError } from 'rxjs/operators';
import { ImageDTO } from 'app/shared/models/ImageDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userPrefix: string = 'logged_in_user';
  public user: User;
  private userInformationURL = environment.apiUrl + "user/basicInformation";

  constructor(private http: HttpClient) {  
    this.checkIfUserAvailable();
  }


  public loadLoggedInUser (): Observable<boolean> {
    return this.http.get<User>(this.userInformationURL)
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

}
