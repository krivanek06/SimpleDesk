import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from 'environments/environment';
import {
  FinanceForm,
  FinanceType,
  ReportForm,
  Request, RequestComment,
  RequestCommentWrapper,
  TicketForm,
  TicketSubtype,
} from 'app/core/model/Request';
import {UserSimpleDTO} from "../core/model/User";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RequestHttpService {

  constructor(private http: HttpClient) {
  }

  public getRequestOnDashboard(): Observable<Request[]> {
    return this.http.get<Request[]>(`${environment.apiUrl}requests/dashboard`);
  }

  public getClosedRequests(dateFrom: string, dateTo: string): Observable<Request[]> {
    const params = new HttpParams().set('dateFrom', dateFrom).set('dateTo', dateTo);
    return this.http.get<Request[]>(environment.apiUrl + "requests/closed", {params});
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
    return this.http.request('delete', environment.apiUrl + `requests/modification/${requestId}/logs`);
  }

  public assignSolver(requestiId: number, userSimpleDTO: UserSimpleDTO): Observable<UserSimpleDTO> {
    return this.http.put<UserSimpleDTO>(environment.apiUrl + `requests/modification/secure/${requestiId}/addSolver`, userSimpleDTO);
  }

  public uploadFileForRequest(id: number, fileList: FileList): Observable<boolean> {
    if (!fileList || fileList.length === 0) {
      return of(false);
    }

    const formData: FormData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append("filesToUpload", fileList.item(i));
    }
    return this.http.post(environment.apiUrl + `requests/requestDetails/${id}/files`, formData).pipe(map(() => {
      return true;
    }));
  }


  public downloadFileForRequest(id: number, fileName: string): Observable<any> {
    const params = new HttpParams().set('fileName', fileName);
    return this.http.get(environment.apiUrl + `requests/requestDetails/${id}/download`, {
      params,
      responseType: 'blob'
    });
  }


  /* ------------------------------------------------------------*/

  // Finance
  public getFinanceTypes(): Observable<FinanceType[]> {
    return this.http.get<FinanceType[]>(environment.apiUrl + "requests/finance/types");
  }

  public getFinanceTypesAll(): Observable<FinanceType[]> {
    return this.http.get<FinanceType[]>(environment.apiUrl + "requests/finance/secure/types");
  }

  public submitFinance(financeForm: FinanceForm): Observable<Request> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Request>(environment.apiUrl + 'requests/finance', financeForm, {headers});
  }


  /* ------------------------------------------------------------*/

  // Ticket
  public getTicketSubtype(ticketType: string): Observable<TicketSubtype[]> {
    const params = new HttpParams().set('ticketTypeName', ticketType);
    return this.http.get<TicketSubtype[]>(environment.apiUrl + "requests/ticket/ticketSubtype", {params});
  }

  public submitTicket(ticketForm: TicketForm): Observable<Request> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Request>(environment.apiUrl + 'requests/ticket', ticketForm, {headers});
  }


  /* ------------------------------------------------------------*/

  // Report
  public submitReport(reportForm: ReportForm): Observable<Request> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Request>(environment.apiUrl + "requests/report", reportForm, {headers});
  }

  public addReportEvaluation(requestid: number, days: number): Observable<any> {
    const params = new HttpParams().set('days', String(days));
    return this.http.put(environment.apiUrl + `requests/report/${requestid}/evaluation`, null, {params});
  }


  /* ------------------------------------------------------------*/

  // Request comments

  public addComment(requestCommentWrapper: RequestCommentWrapper): Observable<RequestComment> {
    const params = new HttpParams()
      .set("sendEmail", String(requestCommentWrapper.sendEmail))
      .set("solution", String(requestCommentWrapper.solution));
    return this.http.post<RequestComment>(environment.apiUrl + `requests/comment`, requestCommentWrapper.requestComment, {params});
  }

  public editComment(requestComment: RequestComment): Observable<any> {
    return this.http.put(environment.apiUrl + `requests/comment`, requestComment);
  }

  public deleteComment(requestComment: RequestComment): Observable<any> {
    return this.http.request('delete', environment.apiUrl + `requests/comment`, {body: requestComment});
  }

  public changePrivacy(requestComment: RequestComment): Observable<any> {
    return this.http.put(environment.apiUrl + `requests/comment/privacy`, requestComment);
  }

  public shareComment(requestComment: RequestComment): Observable<any> {
    return this.http.put(environment.apiUrl + `requests/comment/share`, requestComment);
  }

}
