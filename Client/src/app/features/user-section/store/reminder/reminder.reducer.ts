import {Action, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";

import * as reminderAction from './reminder.action';
import * as authAction from "../../../../core/store/auth/auth.action";
import {ReminderState, RequestState, UserSection} from "../../../../core/model/appState.model";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {CalendarEvent} from "angular-calendar";
import {Reminder} from "../../model/Reminder.model";


export const reminderAdapter: EntityAdapter<Reminder> = createEntityAdapter<Reminder>({
  // selectId: (reminderContainer: ReminderContainer) => reminderContainer.reminder.id,
});

const initialState = reminderAdapter.getInitialState();

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
    (state, {reminderContainer}) => reminderAdapter.addOne(reminderContainer, {...state})
  ),
  on(
    reminderAction.getRemindersSuccess,
    (state, {reminderContainers}) => reminderAdapter.addMany(reminderContainers, ({...state}))
  ),
  on(
    reminderAction.editReminderSuccess,
    (state, {reminderContainer}) => reminderAdapter.upsertOne(reminderContainer, ({...state}))
  ),
  on(
    reminderAction.deleteReminderSuccess,
    (state, {reminderContainer}) => reminderAdapter.removeOne(reminderContainer.reminder.id, ({...state}))
  ),
  on(authAction.logout, (state) => (initialState)),
);


export function reducer(state: ReminderState | undefined, action: Action) {
  return reminderReducer(state, action);
}


export const userSectionModuleState = createFeatureSelector<UserSection>('userSection');
export const reminderState = createSelector(userSectionModuleState, (state) => state.reminderState);
const getAllEntities = createSelector(reminderState, (item => item.entities));

export const getAllReminderContainers =
  createSelector(reminderState, reminder => Object.keys(reminder.entities).map(key => reminder.entities[key]));

export const getReminderContainerById =
  createSelector(getAllEntities, (entities, id: number) => entities[id]);

export const getReminderContainerByCalendarEvent =
  createSelector(getAllReminderContainers,
    (reminderContainer, props) =>
      reminderContainer.find(container => container.calendarEvent === props.event));
