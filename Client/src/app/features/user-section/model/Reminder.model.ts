import {CalendarEvent} from "angular-calendar";

export interface Reminder extends CalendarEvent {
  id: number;
  start: Date;
  end: Date;
  title: string;
  description: string;
}

/*
export interface ReminderContainer {
  calendarEvent: ;
  reminder: Reminder;
}*/
