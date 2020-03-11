import {Injectable} from '@angular/core';
import {HttpClient,  HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'environments/environment';
import {RequestDashboard, RequestTable} from 'app/resources/request/model/interface/RequestTable';
import { Request} from 'app/resources/request/model/interface/Request';
import {UserSimple} from "../resources/user/model/User";

@Injectable({
  providedIn: 'root'
})
export class RequestHttpService {

  constructor(private http: HttpClient) {
  }

  public getRequestOnDashboard(): Observable<RequestDashboard> {
    return this.http.get<RequestDashboard>(`${environment.apiUrl}requests/dashboard`);
  }

  public getRequestDetails(id: any): Observable<Request> {
    return this.http.get<Request>(`${environment.apiUrl}requests/requestDetails/${id}`);
  }

  public getClosedRequests(dateFrom: string, dateTo: string): Observable<RequestTable[]> {
    const params = new HttpParams().set('dateFrom', dateFrom).set('dateTo', dateTo);
    return this.http.get<RequestTable[]>(environment.apiUrl + "requests/closed", {params});
  }


  public assignOrRemoveRequestOnMe(requestid: number, assign: boolean): Observable<any> {
    const params = new HttpParams().set('assign', String(assign));
    return this.http.put(environment.apiUrl + `requests/modification/${requestid}/solver`, null, {params});
  }

  public changePriority(requestid: number, priority: string): Observable<any> {
    const params = new HttpParams().set('priority', priority);
    return this.http.put(environment.apiUrl + `requests/modification/${requestid}/priority`, null, {params});
  }

  public changeState(requestId: number, close: boolean): Observable<any> {
    const params = new HttpParams().set('close', String(close));
    return this.http.put(environment.apiUrl + `requests/modification/${requestId}/state`, null, {params});
  }

  public changeCommenting(requestId: number): Observable<any> {
    return this.http.put(environment.apiUrl + `requests/modification/${requestId}/commenting`, null);
  }

  public removeLogs(requestId: number): Observable<any> {
    // return this.http.delete(environment.apiUrl + `requests/modification/${requestId}/logs`);
    return this.http.request('delete', environment.apiUrl + `requests/modification/${requestId}/logs`, );
  }

  public assignSolver(requestid: number, userSimple: UserSimple): Observable<UserSimple> {
    return this.http.put<UserSimple>(environment.apiUrl + `requests/modification/secure/${requestid}/addSolver`, userSimple);
  }

  public removeSolver(requestid: number): Observable<any> {
    return this.http.put(environment.apiUrl + `requests/modification/secure/${requestid}/removeSolver`, null);
  }



}
