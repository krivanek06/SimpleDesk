import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FinanceType } from 'app/shared/models/FinanceType';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { TicketSubtype } from 'app/shared/models/TicketSubtype';

@Injectable({
  providedIn: 'root'
})
export class RequestTypeService {

  constructor(private http : HttpClient) { }

  public getFinanceTypesForUseToSubmit(): Observable<FinanceType[]>{
    return this.http.get<FinanceType[]>(environment.apiUrl + "requests/finance/types");
  }

  public getFinanceTypesAll(): Observable<FinanceType[]>{
    return this.http.get<FinanceType[]>(environment.apiUrl + "requests/finance/secure/types");
  }

  public getTicketSubtype(ticketType: string): Observable<TicketSubtype[]>{
    let params = new HttpParams().set('ticketTypeName' ,ticketType) ;
    return this.http.get<TicketSubtype[]>(environment.apiUrl + "requests/ticket/ticketSubtype" , {params: params});
  }
}
