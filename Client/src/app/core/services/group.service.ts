import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group, GroupContainer } from 'app/shared/models/Group';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  public getAllGroupsForUser():Observable<GroupContainer>{
    return this.http.get<GroupContainer>(environment.apiUrl + "group");
  }

  public getGroupDetails(groupName: string):Observable<Group>{
    let params = new HttpParams().set('groupName' , groupName) ;
    return this.http.get<Group>(environment.apiUrl + "group/details", {params: params});
  }

  public registerGroup(group: Group): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Group>(environment.apiUrl + "group/secure/manage/registration", group, {headers: headers});
  }

}
