import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Reminder, ReminderContainer} from "../../features/user-section/model/Reminder.model";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReminderHttpService {

  constructor(private http: HttpClient) {
  }

  public createReminder(reminder: Reminder): Observable<Reminder> {
    return this.http.post<Reminder>(`${environment.apiUrl}reminder`, reminder);
  }

  public getReminders(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(`${environment.apiUrl}reminder`);
  }

  public editReminder(reminderContainer: ReminderContainer): Observable<any> {
    return this.http.put(`${environment.apiUrl}reminder`, reminderContainer.reminder);
  }

  public deleteReminder(reminderContainer: ReminderContainer): Observable<any> {
    const params = new HttpParams().set('reminderId', String(reminderContainer.reminder.id));
    return this.http.delete(`${environment.apiUrl}reminder`, {params});
  }

}
