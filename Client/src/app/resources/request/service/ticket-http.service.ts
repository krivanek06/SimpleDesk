import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {TicketForm, TicketSubtype} from "../model/Ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketHttpService {

  constructor(private http: HttpClient) {
  }

  public getTicketSubtype(ticketType: string): Observable<TicketSubtype[]> {
    const params = new HttpParams().set('ticketTypeName', ticketType);
    return this.http.get<TicketSubtype[]>(environment.apiUrl + "requests/ticket/ticketSubtype", {params});
  }

  public submitTicket(ticketForm: TicketForm): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(environment.apiUrl + 'requests/ticket', ticketForm, {headers});
  }
}
