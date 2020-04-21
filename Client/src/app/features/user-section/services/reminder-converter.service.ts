import {Injectable} from '@angular/core';
import {Reminder, ReminderContainer} from "../model/Reminder.model";
import {CalendarEvent, CalendarEventAction} from "angular-calendar";
import {addHours, startOfDay} from "date-fns";

@Injectable({
  providedIn: 'root'
})
export class ReminderConverterService {


  constructor() {
  }


  public convertReminderIntoCalendarEvent(reminder: Reminder): CalendarEvent {
    const newEvent: CalendarEvent = {
      start: addHours(startOfDay(new Date(reminder.timestampStart)), 2),
      end: addHours(new Date(reminder.timestampEnd), 2),
      title: reminder.title,
      color: {
        primary: '#e3bc08',
        secondary: '#FDF1BA',
      }
      /*resizable: {
     beforeStart: true,
     afterEnd: true,
     },
     draggable: true,*/
    };
    return newEvent;
  }

  public convertRemindersIntoReminderContainers(reminders: Reminder[]): ReminderContainer[] {
    let reminderContainer: ReminderContainer[] = [];
    reminders.forEach(reminder => {
      reminderContainer = [...reminderContainer, {calendarEvent: this.convertReminderIntoCalendarEvent(reminder), reminder}];
    });

    return reminderContainer;
  }

  public convertRemindersIntoReminderContainer(reminder: Reminder): ReminderContainer {
    return {reminder, calendarEvent: this.convertReminderIntoCalendarEvent(reminder)};

  }
}
