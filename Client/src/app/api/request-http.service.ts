import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { RequestDashboard, RequestTable } from 'app/shared/models/RequestTable';
import { UserSimple, RequestDetails } from 'app/shared/models/RequestDetails';
import { FinanceType } from 'app/shared/models/FinanceType';
import { TicketSubtype } from 'app/shared/models/TicketSubtype';
@Injectable({
  providedIn: 'root'
})
export class RequestHttpService {

  constructor(private http: HttpClient) { }

  public getRequestOnDashboard():Observable<RequestDashboard>{
    return this.http.get<RequestDashboard>(`${environment.apiUrl}requests/dashboard`);
  }

  public getRequestDetails(id: any):Observable<RequestDetails>{
    return this.http.get<RequestDetails>(`${environment.apiUrl}requests/requestDetails/${id}`);
  }

  public getClosedRequests(dateFrom: string, dateTo: string):Observable<RequestTable[]>{
    let params = new HttpParams().set('dateFrom' , dateFrom).set('dateTo' , dateTo) ;
    return  this.http.get<RequestTable[]>(environment.apiUrl + "requests/closed", {params: params});
  }

 /* public getTicketDetials():Observable<TicketDetails>{
    return this.requestDetails.pipe(
      map( detials => <TicketDetails> detials)
    );
  }

  public getReportDetails():Observable<ReportDetails>{
    return this.requestDetails.pipe(
      map( detials => <ReportDetails> detials)
    );
  }

  public getFinanceDetials():Observable<FinanceDetails>{
    return this.requestDetails.pipe(
      map( detials => <FinanceDetails> detials)
    );
  }*/

  public assignOrRemoveRequestOnMe(requestid: number, assign: boolean): Observable<any>{
    let params = new HttpParams().set('assign' , String(assign)) ;
    return this.http.put(environment.apiUrl + `requests/modification/${requestid}/solver`,null, {params : params} );
  }

  public changePriority(requestid: number, priority: string): Observable<any>{
    let params = new HttpParams().set('priority' , priority) ;
    return this.http.put(environment.apiUrl + `requests/modification/${requestid}/priority`,null, {params : params} );
  }

  public changeState(requestid: number, close: boolean): Observable<any>{
    let params = new HttpParams().set('close' , String(close)) ;
    return this.http.put(environment.apiUrl + `requests/modification/${requestid}/state`, null, {params : params} );
  }

  public changeCommenting(requestid: number): Observable<any>{
    return this.http.put(environment.apiUrl + `requests/modification/${requestid}/commenting`,null );
  }

  public assignSolver(requestid: number, userSimple: UserSimple): Observable<UserSimple>{
    return this.http.put<UserSimple>(environment.apiUrl + `requests/modification/secure/${requestid}/addSolver`,userSimple );
  }

  public removeSolver(requestid: number): Observable<any>{
    return this.http.put(environment.apiUrl + `requests/modification/secure/${requestid}/removeSolver`,null );
  }


  
  //Report modification
  public reportAddEvaluation(requestid: number, days: number): Observable<any>{
    let params = new HttpParams().set('days' , String(days)) ;
    return this.http.put(environment.apiUrl + `requests/report/${requestid}/evaluation`, null, {params : params} );
  }

  //Finance 
  public getFinanceTypesForUseToSubmit(): Observable<FinanceType[]>{
    return this.http.get<FinanceType[]>(environment.apiUrl + "requests/finance/types");
  }

  public getFinanceTypesAll(): Observable<FinanceType[]>{
    return this.http.get<FinanceType[]>(environment.apiUrl + "requests/finance/secure/types");
  }

  // Tickets
  public getTicketSubtype(ticketType: string): Observable<TicketSubtype[]>{
    let params = new HttpParams().set('ticketTypeName' ,ticketType) ;
    return this.http.get<TicketSubtype[]>(environment.apiUrl + "requests/ticket/ticketSubtype" , {params: params});
  }

}
