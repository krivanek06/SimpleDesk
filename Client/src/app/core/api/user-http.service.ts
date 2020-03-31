import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {User, ImageDTO, PasswordContainer, UserSimple} from 'app/core/model/User';
import {Observable} from 'rxjs';
import {environment} from 'environments/environment';
import {retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private http: HttpClient) {
  }

  public registerUser(user: UserSimple): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(environment.apiUrl + "user/registration", user, {headers});
  }

  public getAllUsers(): Observable<UserSimple[]> {
    return this.http.get<User[]>(environment.apiUrl + "user/secure/all");
  }

  public getUserDetials(username: string): Observable<User> {
    return this.http.get<User>(environment.apiUrl + `user/secure/${username}`);
  }

  public changePassword(password: PasswordContainer): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(environment.apiUrl + "user/changePassword", password, {headers});
  }

  public changeImage(image: ImageDTO): Observable<any> {
    const params = new HttpParams().set('imageToUpdate', image.name);
    return this.http.put(environment.apiUrl + "user/changeImage", null, {params});
  }

  public getAvailableAvatars(): Observable<ImageDTO[]> {
    return this.http.get<ImageDTO[]>(environment.apiUrl + "user/getImages");
  }

  public resetUserPassword(username: string): Observable<any> {
    return this.http.put(environment.apiUrl + `user/secure/resetPassword/${username}`, null);
  }

  public modifyUserState(username: string): Observable<any> {
    return this.http.put(environment.apiUrl + `user/secure/modifyState/${username}`, null);
  }

  public getBasicInformation(): Observable<User> {
    return this.http.get<User>(environment.apiUrl + "user/basicInformation");
  }

  public login(username: string, password: string): Observable<HttpResponse<Response>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Response>(environment.loginUrl + "login", {username, password}, {
      headers,
      observe: 'response'
    });
  }

}
