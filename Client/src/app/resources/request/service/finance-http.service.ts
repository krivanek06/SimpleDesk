import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FinanceForm, FinanceType} from "../model/interface/Finance";
import {RequestFormsModule} from "../../../pages/request-forms/request-forms.module";
import {ResourcesModule} from "../../resources.module";

@Injectable({
  providedIn: ResourcesModule
})
export class FinanceHttpService {

  constructor(private http: HttpClient) {
  }

  // return available based on privileges
  public getFinanceTypes(): Observable<FinanceType[]> {
    return this.http.get<FinanceType[]>(environment.apiUrl + "requests/finance/types");
  }

  public getFinanceTypesAll(): Observable<FinanceType[]> {
    return this.http.get<FinanceType[]>(environment.apiUrl + "requests/finance/secure/types");
  }

  public submitFinance(financeForm: FinanceForm): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(environment.apiUrl + 'requests/finance', financeForm, {headers});
  }


}
