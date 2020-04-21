import {Component, ChangeDetectionStrategy, OnInit, ViewChild, TemplateRef, OnDestroy} from '@angular/core';
import {Reminder, ReminderContainer} from "../../../../model/Reminder.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CalendarEvent, CalendarEventAction} from "angular-calendar";
import {CalendarFormComponent} from "../../presentation/calendar-form/calendar-form.component";
import {ReminderConverterService} from "../../../../services/reminder-converter.service";
import {AppState} from "../../../../../../core/model/appState.model";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {SwallNotificationService} from "../../../../../../core/services/swall-notification.service";

import * as fromReminder from '../../../../store/reminder/reminder.reducer';
import * as reminderAction from '../../../../store/reminder/reminder.action';
import {userSectionModuleState} from "../../../../store/user/user-stat.reducer";
import {CalendarEventDetailsComponent} from "../../presentation/calendar-event-details/calendar-event-details.component";


@Component({
  selector: 'app-user-calendar',
  templateUrl: './user-calendar.component.html',
  styleUrls: ['./user-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCalendarComponent implements OnInit {
  @ViewChild('modalContent', {static: true}) modalContent: TemplateRef<any>;
  @ViewChild('calendarForm') calendarForm: CalendarFormComponent;
  @ViewChild('calendarEventDetails') calendarEventDetails: CalendarEventDetailsComponent;

  reminderContainers$: Observable<ReminderContainer[]>;
  selectedContainer$: Observable<ReminderContainer>;

  events: CalendarEvent[] = [];
  editReminder = false;

  constructor(private modal: NgbModal,
              private swallNotification: SwallNotificationService,
              private reminderConverterService: ReminderConverterService,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.reminderContainers$ = this.store.select(fromReminder.getAllReminderContainers);
    // async pipe unsubscribe
    this.reminderContainers$.subscribe(containers =>
      containers.forEach(container => this.events = [...this.events, container.calendarEvent]));

    this.store.subscribe(x => console.log(x));
    this.store.select(userSectionModuleState).subscribe(x => console.log(x));

    this.store.dispatch(reminderAction.getReminders());
  }


  addReminder(reminder: Reminder) {
    this.store.dispatch(reminderAction.createReminder({reminder}));
    this.calendarForm.resetForm();
  }


  openDetails(event: CalendarEvent) {
    this.selectedContainer$ = this.store.pipe(select(fromReminder.getReminderContainerByCalendarEvent, {event}));
    this.selectedContainer$.subscribe(x => console.log(x));
    this.modal.open(this.modalContent, {size: 'lg'});
  }

  deleteReminder(reminderContainer: ReminderContainer) {
    this.store.dispatch(reminderAction.deleteReminder({reminderContainer}));
  }

  toggleEdit() {
    console.log('aaaa');
    this.editReminder = !this.editReminder;
    console.log(this.editReminder);
    if (this.editReminder) {
      this.calendarEventDetails.edit();
    }
  }

  updateEditedReminder() {
    console.log(this.calendarEventDetails.copyReminderContainer);
    this.store.dispatch(reminderAction.editReminder({reminderContainer: this.calendarEventDetails.copyReminderContainer}));
  }
}
