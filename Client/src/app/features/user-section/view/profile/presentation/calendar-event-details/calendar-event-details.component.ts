import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Reminder} from "../../../../model/Reminder.model";

@Component({
  selector: 'app-calendar-event-details',
  templateUrl: './calendar-event-details.component.html',
  styleUrls: ['./calendar-event-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarEventDetailsComponent implements OnInit {
  @Input() reminder: Reminder;
  @Input() editReminder: boolean;


  constructor() {
  }

  ngOnInit(): void {
  }


}
