import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ReportForm} from "../core/model/Request";

@Injectable({
  providedIn: 'root'
})
export class ReportHttpService {

  constructor(private http: HttpClient) {
  }

  public submitReport(reportForm: ReportForm): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(environment.apiUrl + "requests/report", reportForm, {headers});
  }

  public addEvaluation(requestid: number, days: number): Observable<any> {
    const params = new HttpParams().set('days', String(days));
    return this.http.put(environment.apiUrl + `requests/report/${requestid}/evaluation`, null, {params});
  }
}
