import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpParams, HttpClient } from '@angular/common/http';
import { UserSimple, RequestDetails, TicketDetails, ReportDetails, FinanceDetails, RequestComment } from 'app/shared/models/RequestDetails';
import { mapTo, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestModificationService {
  private requestDetails: BehaviorSubject<RequestDetails> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  public updateRequestDetails(details : RequestDetails){
    this.requestDetails.next(details);
  }

  public getRequestDetials():Observable<RequestDetails>{
    return this.requestDetails.asObservable();
  }

  public getTicketDetials():Observable<TicketDetails>{
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
  }

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

  
  /*public setSolution(requestid: number, solution: string): Observable<RequestComment>{
    return this.http.put<RequestComment>(environment.apiUrl + `requests/modification/${requestid}/solution`,solution );
  }*/


  /**
   * Report modification
   */

  public reportAddEvaluation(requestid: number, days: number): Observable<any>{
    let params = new HttpParams().set('days' , String(days)) ;
    return this.http.put(environment.apiUrl + `requests/report/${requestid}/evaluation`, null, {params : params} );
  }

  
}
