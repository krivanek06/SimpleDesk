import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserSimpleDTO, User } from 'app/shared/models/UserGroups';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { PasswordContainer } from 'app/shared/models/PasswordContainer';
import { ImageDTO } from 'app/shared/models/ImageDTO';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private http: HttpClient) { }

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

  public changePassword(password: PasswordContainer): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(environment.apiUrl + "user/changePassword" ,password, {headers : headers});
  }

  public changeImage(image: ImageDTO) : Observable<any>{
    let params = new HttpParams().set('imageToUpdate' , image.name) ;
    return this.http.put(environment.apiUrl + "user/changeImage", null , {params: params});
  }

  public getAvailableAvatars(): Observable<ImageDTO[]>{
    return this.http.get<ImageDTO[]>(environment.apiUrl + "user/getImages");
  }

  public resetUserPassword(username: string): Observable<any>{
    return this.http.put(environment.apiUrl + `user/secure/resetPassword/${username}`, null);
  }

  public modifyUserState(username: string): Observable<any>{
    return this.http.put(environment.apiUrl + `user/secure/modifyState/${username}`, null);
  }

  public getBasicInformation(): Observable<User>{
    return this.http.get<User>(environment.apiUrl + "user/basicInformation")
  }
}
