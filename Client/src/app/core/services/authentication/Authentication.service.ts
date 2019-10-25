import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { share, map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from "rxjs";
import { User } from 'app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  // return currently logged in user
  public get currentUserValue(): Observable<User> {
    return this.currentUserSubject.asObservable();
  }


  /**
   * retrieve JWT token
   */
  login(username:string, password:string ) {
    return this.http.post<any>(environment.apiUrl + '/login', {"username" :username , "password" : password }, { 
            observe: 'response'
        }).pipe(
          share(),
          map(response => {
            localStorage.setItem('Authorization' , response.headers.get('Authorization'))
            this.retrieveUserData(response.headers.get('userobject'));
            return response;
          })
        );
  }

  /**
   * retrieve logged in user details 
   */
  private retrieveUserData(username: string){
    this.http.get(environment.apiUrl + '/PersonalDetails/basicInformation', { 
      params: {
        name: username
      }
    }).toPromise().then((user:User) => {
      this.currentUserSubject.next(user);
    })
  }

  logout() {
    localStorage.removeItem('Authorization');
    this.currentUserSubject.next(null);
  }


  public isLoggedIn(): boolean {
    return this.currentUserSubject.value !== null;
  }


}
