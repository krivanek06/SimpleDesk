import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {RequestDetails, ReportDetails} from 'app/shared/models/RequestDetails';
import {tap} from 'rxjs/operators';
import {RequestHttpService} from 'app/api/request-http.service';

@Injectable({
  providedIn: 'root'
})
export class RequestStoreService {
  private requestDetails$: BehaviorSubject<RequestDetails> = new BehaviorSubject(null);

  constructor(private requestHttp: RequestHttpService) {
  }

  public addRequestDetails(id: any): Observable<RequestDetails> {
    return this.requestHttp.getRequestDetails(id).pipe(
      tap(requestDetails => {
        this.requestDetails = requestDetails;
      })
    )
  }

  public removeRequestDetails(): void {
    this.requestDetails$.next(null);
  }

  public getRequestDetials(): Observable<RequestDetails> {
    return this.requestDetails$.asObservable();
  }

  set requestDetails(requestDetails: RequestDetails) {
    this.requestDetails$.next(requestDetails);
  }

  get requestDetails(): RequestDetails {
    return this.requestDetails$.getValue();
  }

  get reportDetials(): ReportDetails {
    return <ReportDetails>this.requestDetails$.getValue();
  }


}
