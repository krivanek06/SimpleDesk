import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from 'environments/environment';
import {
  CustomDocument,
  FinanceForm,
  FinanceType,
  ReportForm,
  Request, RequestComment,
  RequestCommentWrapper, RequestStatistics,
  TicketForm,
  TicketSubtype,
} from 'app/features/requirement/model/Request';
import {User} from "../model/User";
import {RxStompService} from "@stomp/ng2-stompjs";

@Injectable({
  providedIn: 'root'
})
export class RequestHttpService {

  constructor(private http: HttpClient, private rxStompService: RxStompService) {
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

  public assignSolver(requestiId: number, userSimpleDTO: User): Observable<User> {
    return this.http.put<User>(environment.apiUrl + `requests/modification/secure/${requestiId}/addSolver`, userSimpleDTO);
  }

  public uploadFileForRequest(id: number, customDocuments: CustomDocument[]): Observable<any> {
    if (!customDocuments || customDocuments.length === 0) {
      return of(false);
    }

    const formData: FormData = new FormData();
    customDocuments.forEach(item => formData.append("filesToUpload", item.file));

    return this.http.post(environment.apiUrl + `requests/requestDetails/${id}/files`, formData);
  }


  public downloadFileForRequest(id: number, fileName: string): Observable<any> {
    const params = new HttpParams().set('fileName', fileName);
    return this.http.get(environment.apiUrl + `requests/requestDetails/${id}/download`, {
      params,
      responseType: 'blob'
    });
  }

  public initializeWebsocketConnection(username: string): Observable<any> {
    return this.rxStompService.watch('/request/' + username);
  }

  public getRequestMonthlyStatistics(): Observable<RequestStatistics> {
    return this.http.get<RequestStatistics>(`${environment.apiUrl}requests/statistics`);
  }

  public getRequestMonthlyStatisticsForUser(username: string): Observable<RequestStatistics> {
    return this.http.get<RequestStatistics>(`${environment.apiUrl}requests/statistics/secure/${username}`);
  }


  /* ------------------------------------------------------------*/

  // Finance
  public getFinanceTypesAll(): Observable<FinanceType[]> {
    return this.http.get<FinanceType[]>(environment.apiUrl + "requests/finance/secure/types");
  }

  public submitFinance(financeForm: FinanceForm): Observable<Request> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Request>(environment.apiUrl + 'requests/finance', financeForm, {headers});
  }


  /* ------------------------------------------------------------*/

  // Ticket
  public getTicketSubtype(): Observable<TicketSubtype[]> {
    return this.http.get<TicketSubtype[]>(environment.apiUrl + "requests/ticket/ticketSubtype", );
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

  public editComment(requestComment: RequestComment, comment: string): Observable<any> {
    const params = new HttpParams()
      .set("requestId", String(requestComment.requestId))
      .set("commentId", String(requestComment.id));
    return this.http.put(environment.apiUrl + `requests/comment`, comment, {params});
  }

  public deleteComment(requestComment: RequestComment): Observable<any> {
    return this.http.request('delete', environment.apiUrl + `requests/comment`, {body: requestComment});
  }

  public changePrivacy(requestComment: RequestComment): Observable<any> {
    return this.http.put(environment.apiUrl + `requests/comment/privacy`, requestComment);
  }

  public shareComment(requestComment: RequestComment, groupName: string): Observable<any> {
    const params = new HttpParams().set("groupName", groupName);
    return this.http.put(environment.apiUrl + `requests/comment/share`, requestComment, {params});
  }

}
