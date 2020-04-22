import {Action, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";

import * as reminderAction from './reminder.action';
import * as authAction from "../../../../core/store/auth/auth.action";
import {ReminderState,  UserSection} from "../../../../core/model/appState.model";
import {createEntityAdapter, EntityAdapter} from "@ngrx/entity";
import {Reminder} from "../../model/Reminder.model";


export const reminderAdapter: EntityAdapter<Reminder> = createEntityAdapter<Reminder>({
  // selectId: (reminderContainer: ReminderContainer) => reminderContainer.reminder.id,
});

const initialState: ReminderState = reminderAdapter.getInitialState({
  areRemindersLoaded: false
});

export const reminderReducer = createReducer(
  initialState,
  on(
    reminderAction.createReminder,
    reminderAction.createReminderError,
    reminderAction.deleteReminder,
    reminderAction.deleteReminderError,
    reminderAction.getReminders,
    reminderAction.getRemindersError,
    reminderAction.editReminder,
    reminderAction.editReminderError,
    (state) => ({...state})
  ),
  on(
    reminderAction.createReminderSuccess,
    (state, {reminder}) => reminderAdapter.addOne(reminder, {...state})
  ),
  on(
    reminderAction.getRemindersSuccess,
    (state, {reminders}) => reminderAdapter.addMany(reminders, ({...state, areRemindersLoaded: true}))
  ),
  on(
    reminderAction.editReminderSuccess,
    (state, {reminder}) => reminderAdapter.upsertOne(reminder, ({...state}))
  ),
  on(
    reminderAction.deleteReminderSuccess,
    (state, {reminder}) => reminderAdapter.removeOne(reminder.id, ({...state}))
  ),
  on(authAction.logout, (state) => (initialState)),
);


export function reducer(state: ReminderState | undefined, action: Action) {
  return reminderReducer(state, action);
}


export const userSectionModuleState = createFeatureSelector<UserSection>('userSection');
export const reminderState = createSelector(userSectionModuleState, (state) => state.reminderState);
export const areRemindersLoaded = createSelector(reminderState, (state => state.areRemindersLoaded));

export const getAllReminderContainers =
  createSelector(reminderState, reminder => Object.keys(reminder.entities).map(key => reminder.entities[key]));




