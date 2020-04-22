import {Component, ChangeDetectionStrategy, OnInit, ViewChild, TemplateRef} from '@angular/core';
import {Reminder, ReminderDateContainer} from "../../../../model/Reminder.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CalendarEventFormComponent} from "../../presentation/calendar-event-form/calendar-event-form.component";
import {AppState} from "../../../../../../core/model/appState.model";
import { Store} from "@ngrx/store";
import {Observable} from "rxjs";

import * as fromReminder from '../../../../store/reminder/reminder.reducer';
import * as reminderAction from '../../../../store/reminder/reminder.action';
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap/modal/modal-ref";


@Component({
  selector: 'app-user-calendar',
  templateUrl: './user-calendar.component.html',
  styleUrls: ['./user-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCalendarComponent implements OnInit {
  @ViewChild('modalContent', {static: true}) modalContent: TemplateRef<any>;
  @ViewChild('calendarForm') calendarForm: CalendarEventFormComponent;

  reminders$: Observable<Reminder[]>;

  selectedReminder: Reminder;
  selectedReminderCopy: Reminder;

  editReminder = false;

  private modal: NgbModalRef;

  constructor(private modalService: NgbModal,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.reminders$ = this.store.select(fromReminder.getAllReminderContainers);
    this.store.dispatch(reminderAction.getReminders());
  }


  addReminder(reminder: Reminder) {
    this.store.dispatch(reminderAction.createReminder({reminder}));
    this.calendarForm.resetForm();
  }


  openDetails(selectedReminder: Reminder) {
    this.selectedReminder = selectedReminder;
    this.selectedReminderCopy = JSON.parse(JSON.stringify(selectedReminder));
    this.modal = this.modalService.open(this.modalContent, {size: 'lg'});
    // onClose change back to edit
    this.modal.result.then(
      () => this.editReminder = false,
      () => this.editReminder = false);
  }

  deleteReminder(reminder: Reminder) {
    this.store.dispatch(reminderAction.deleteReminder({reminder}));
    this.modal.close();
  }

  toggleEdit() {
    this.editReminder = !this.editReminder;
    this.selectedReminderCopy = JSON.parse(JSON.stringify(this.selectedReminder));
  }

  updateEditedReminder() {
    const reminder: Reminder = {
      ...this.selectedReminderCopy,
      end: new Date(this.selectedReminderCopy.end),
      start: new Date(this.selectedReminderCopy.start)
    };

    this.store.dispatch(reminderAction.editReminder({reminder}));
    // changed displayed old to new
    this.editReminder = false;
    this.selectedReminder = reminder;
    this.selectedReminderCopy = JSON.parse(JSON.stringify(reminder));
  }

  dateChange(event: ReminderDateContainer) {
    this.store.dispatch(reminderAction.editReminder({
      reminder: {
        ...event.reminder,
        start: !event.start ? event.reminder.start : event.start,
        end: !event.end ? event.reminder.end : event.end
      }
    }));
  }

}
