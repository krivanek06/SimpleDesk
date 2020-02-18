import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {Request, ReportDetails} from 'app/resources/request/model/interface/Request';
import {tap} from 'rxjs/operators';
import {RequestHttpService} from 'app/api/request-http.service';

@Injectable({
  providedIn: 'root'
})
export class RequestStoreService {
  private requestDetails$: BehaviorSubject<Request> = new BehaviorSubject(null);

  constructor(private requestHttp: RequestHttpService) {
  }

  public addRequestDetails(id: any): Observable<Request> {
    return this.requestHttp.getRequestDetails(id).pipe(
      tap(requestDetails => {
        // this.requestDetails = requestDetails;
        this.requestDetails$.next(requestDetails);
      })
    );
  }

  public removeRequestDetails(): void {
    this.requestDetails$.next(null);
  }

  public getRequestDetials(): Observable<Request> {
    return this.requestDetails$.asObservable();
  }

  set requestDetails(requestDetails: Request) {
    this.requestDetails$.next(requestDetails);
  }

  get requestDetails(): Request {
    return this.requestDetails$.getValue();
  }

  get reportDetials(): ReportDetails {
    return this.requestDetails$.getValue() as ReportDetails;
  }


}
