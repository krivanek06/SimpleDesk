import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Reminder} from "../../features/user-section/model/Reminder.model";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {flatMap, map, toArray} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ReminderHttpService {

  constructor(private http: HttpClient) {
  }

  public createReminder(reminder: Reminder): Observable<Reminder> {
    return this.http.post<Reminder>(`${environment.apiUrl}reminder`, reminder).pipe(
      map(result => {
        return {...result, end: new Date(result.end), start: new Date(result.start)};
      }),
    );
  }

  public getReminders(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(`${environment.apiUrl}reminder`).pipe(
      flatMap(reminders => reminders),
      map(reminder => {
        return {...reminder, end: new Date(reminder.end), start: new Date(reminder.start)};
      }),
      toArray()
    );
  }

  public editReminder(reminder: Reminder): Observable<any> {
    return this.http.put(`${environment.apiUrl}reminder`, reminder);
  }

  public deleteReminder(reminder: Reminder): Observable<any> {
    const params = new HttpParams().set('reminderId', String(reminder.id));
    return this.http.delete(`${environment.apiUrl}reminder`, {params});
  }

}
