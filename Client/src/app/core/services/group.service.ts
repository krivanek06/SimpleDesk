import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group, GroupContainer } from 'app/shared/models/UserGroups';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  public getAllGroupNamesForUser():Observable<string[]>{
    return this.http.get<string[]>(`${environment.apiUrl}group/available`);
  }

  public getAllGroupContainersForUser():Observable<GroupContainer>{
    return this.http.get<GroupContainer>(`${environment.apiUrl}group`);
  }
  public getGroupDetails(groupName: string):Observable<Group>{
    let params = new HttpParams().set('groupName' , groupName) ;
    return this.http.get<Group>(`${environment.apiUrl}group/details`, {params: params});
  }



  // accessed only user containing module privilege
  public getGroupDetailsWithUnsetPrivileges(groupName: string):Observable<Group>{
    let params = new HttpParams().set('groupName' , groupName) ;
    return this.http.get<Group>(`${environment.apiUrl}group/secure/manage/details`, {params: params});
  }

  public getAllGroups(): Observable<string[]>{
    return this.http.get<string[]>(`${environment.apiUrl}group/secure/manage/getAll`);
  }

  public registerGroup(group: Group): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Group>(`${environment.apiUrl}group/secure/manage/registration`, group, {headers: headers});
  }

  public modifyGroup( group: Group): Observable<any>{
    return this.http.put(`${environment.apiUrl}group/secure/manage/${group.name}/modifyGroup`, group);
  }

  public deleteGroup(name: string): Observable<any>{
    return this.http.delete(`${environment.apiUrl}group/secure/manage/${name}/removeGroup`);
  }


}
