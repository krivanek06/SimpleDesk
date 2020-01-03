import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpParams, HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RequestModificationService {

  constructor(private http: HttpClient) { }


  public assignOrRemoveRequestOnMe(requestid: number, assign: boolean): Observable<any>{
    let params = new HttpParams().set('assign' , String(assign)) ;
    return this.http.put(environment.apiUrl + `requests/modification/${requestid}/solver`,null, {params : params} );
  }



  
}
