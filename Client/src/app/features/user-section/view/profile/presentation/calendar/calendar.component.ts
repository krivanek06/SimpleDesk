import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, OnInit, EventEmitter, Input, Output,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import {Subject} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {
  @Output() openDetailsEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Input() events: CalendarEvent[];

  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  activeDayIsOpen = false;

  constructor() {
  }

  ngOnInit(): void {
  }


  dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
    console.log('dayClicked', events);
    if (isSameMonth(date, this.viewDate)) {
      this.activeDayIsOpen = !((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0);
      this.viewDate = date;
    }
  }

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    console.log('eventTimesChanged', event);
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent(event);
  }

  handleEvent(event: CalendarEvent): void {
    console.log('handleEvent',  event);
    // this.modalData = {event, action};
    this.openDetailsEmitter.emit(event);
    // this.modal.open(this.modalContent, {size: 'lg'});
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}
