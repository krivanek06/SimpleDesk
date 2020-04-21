import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reminder, ReminderContainer} from "../../../../model/Reminder.model";

@Component({
  selector: 'app-calendar-event-details',
  templateUrl: './calendar-event-details.component.html',
  styleUrls: ['./calendar-event-details.component.scss']
})
export class CalendarEventDetailsComponent implements OnInit {
  @Input() readonly reminderContainer: ReminderContainer;
  @Input() editReminder: boolean;

  @Output() closeEmitter: EventEmitter<any> = new EventEmitter<any>();

  copyReminderContainer: ReminderContainer;


  constructor() {
  }

  ngOnInit(): void {
  }

  close() {
    this.closeEmitter.emit();
  }

  edit() {
    this.copyReminderContainer = JSON.parse(JSON.stringify(this.reminderContainer));
    console.log(this.copyReminderContainer);
  }

}
