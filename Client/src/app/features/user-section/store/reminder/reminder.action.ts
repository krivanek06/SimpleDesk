// @ts-ignore
import {createAction, props} from "@ngrx/store";
// @ts-ignore
import {Reminder, ReminderContainer} from "../../model/Reminder.model";


export const getReminders = createAction(
  '[Reminder] get reminders for user'
);

export const getRemindersSuccess = createAction(
  '[Reminder] get reminders for user success',
  props<{ reminders: Reminder[] }>()
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
  props<{ reminder: Reminder   }>()
);

export const createReminderError = createAction(
  '[Reminder] create error',
  props<{ error: Error }>()
);

export const editReminder = createAction(
  '[Reminder] edit',
  props<{ reminder: Reminder  }>()
);

export const editReminderSuccess = createAction(
  '[Reminder] edit success',
  props<{ reminder: Reminder  }>()
);

export const editReminderError = createAction(
  '[Reminder] edit error',
  props<{ error: Error }>()
);

export const deleteReminder = createAction(
  '[Reminder] delete',
  props<{ reminder: Reminder  }>()
);

export const deleteReminderSuccess = createAction(
  '[Reminder] delete success',
  props<{ reminder: Reminder  }>()
);

export const deleteReminderError = createAction(
  '[Reminder] delete error',
  props<{ error: Error }>()
);

