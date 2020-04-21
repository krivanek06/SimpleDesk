// @ts-ignore
import {createAction, props} from "@ngrx/store";
// @ts-ignore
import {Reminder, ReminderContainer} from "../../model/Reminder.model";


export const getReminders = createAction(
  '[Reminder] get reminders for user'
);

export const getRemindersSuccess = createAction(
  '[Reminder] get reminders for user success',
  props<{ reminderContainers: ReminderContainer[] }>()
);

export const getRemindersError = createAction(
  '[Reminder] get reminders for user error',
  props<{ error: Error }>()
);

export const createReminder = createAction(
  '[Reminder] create',
  props<{ reminder: Reminder }>()
);

export const createReminderSuccess = createAction(
  '[Reminder] create success',
  props<{ reminderContainer: ReminderContainer  }>()
);

export const createReminderError = createAction(
  '[Reminder] create error',
  props<{ error: Error }>()
);

export const editReminder = createAction(
  '[Reminder] edit',
  props<{ reminderContainer: ReminderContainer }>()
);

export const editReminderSuccess = createAction(
  '[Reminder] edit success',
  props<{ reminderContainer: ReminderContainer }>()
);

export const editReminderError = createAction(
  '[Reminder] edit error',
  props<{ error: Error }>()
);

export const deleteReminder = createAction(
  '[Reminder] delete',
  props<{ reminderContainer: ReminderContainer }>()
);

export const deleteReminderSuccess = createAction(
  '[Reminder] delete success',
  props<{ reminderContainer: ReminderContainer }>()
);

export const deleteReminderError = createAction(
  '[Reminder] delete error',
  props<{ error: Error }>()
);

