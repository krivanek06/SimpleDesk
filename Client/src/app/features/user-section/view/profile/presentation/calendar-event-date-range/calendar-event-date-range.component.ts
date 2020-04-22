import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reminder, ReminderDateContainer} from "../../../../model/Reminder.model";
import {MatDatetimePickerInputEvent} from "@angular-material-components/datetime-picker";

@Component({
  selector: 'app-calendar-event-date-range',
  templateUrl: './calendar-event-date-range.component.html',
  styleUrls: ['./calendar-event-date-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarEventDateRangeComponent implements OnInit {
  @Input() reminders: Reminder[] = [];
  @Output() dateChangeEmitter: EventEmitter<ReminderDateContainer> = new EventEmitter<ReminderDateContainer>();

  constructor() {
  }

  ngOnInit(): void {
  }



  saveStart(event: MatDatetimePickerInputEvent<Date>, reminder: Reminder) {
    this.dateChangeEmitter.emit({reminder, start: event.value, end: undefined});
  }

  saveEnd(event: MatDatetimePickerInputEvent<Date>, reminder: Reminder) {
    this.dateChangeEmitter.emit({reminder, start: undefined, end: event.value});
  }
}
