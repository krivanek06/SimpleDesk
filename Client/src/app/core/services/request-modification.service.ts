import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpParams, HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { UserSimple } from 'app/shared/models/RequestDetails';

@Injectable({
  providedIn: 'root'
})
export class RequestModificationService {

  constructor(private http: HttpClient) { }


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



  
  /**
   * Report modification
   */

  public reportAddEvaluation(requestid: number, days: number): Observable<any>{
    let params = new HttpParams().set('days' , String(days)) ;
    return this.http.put(environment.apiUrl + `requests/report/${requestid}/evaluation`, null, {params : params} );
  }

  
}
