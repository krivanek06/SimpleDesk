import {AppManagement} from "../../../core/model/appState.model";
import {Action, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";

import * as authAction from "../../../core/store/auth/auth.action";
import * as appManagementAction from './app-management.action';

export const initialState: AppManagement = {
  allGroups: [],
  allUsers: [],
  groupDetails: undefined,
  userDetails: undefined,
  userRequestStatistics: undefined
};


export const appManagementReducer = createReducer(
  initialState,
  on(
    appManagementAction.getAllGroupNames,
    appManagementAction.getAllGroupNamesFailure,
    appManagementAction.getAllUsers,
    appManagementAction.getAllUsersFailure,
    appManagementAction.getUserDetails,
    appManagementAction.getUserDetailsFailure,
    appManagementAction.getGroupDetailsWithUnsetPrivileges,
    appManagementAction.getGroupDetailsWithUnsetPrivilegesFailure,
    appManagementAction.modifyUserState,
    appManagementAction.modifyUserStateFailure,
    appManagementAction.resetUserPassword,
    appManagementAction.resetUserPasswordSuccess,
    appManagementAction.resetUserPasswordFailure,
    appManagementAction.registerGroup,
    appManagementAction.registerGroupFailure,
    appManagementAction.registerUser,
    appManagementAction.registerUserFailure,
    appManagementAction.removeGroup,
    appManagementAction.removeGroupFailure,
    appManagementAction.editGroup,
    appManagementAction.editGroupFailure,
    appManagementAction.getRequestMonthlyStatisticsForUser,
    appManagementAction.getRequestMonthlyStatisticsErrorForUser,
    (state) => ({...state})
  ),
  on(
    appManagementAction.getRequestMonthlyStatisticsSuccessForUser,
    (state, {userRequestStatistics}) => ({...state, userRequestStatistics})
  ),
  on(
    appManagementAction.getAllGroupNamesSuccess,
    (state, {groups}) => ({...state, allGroups: groups})
  ),
  on(
    appManagementAction.getAllUsersSuccess,
    (state, {users}) => ({...state, allUsers: users})
  ),
  on(
    appManagementAction.getUserDetailsSuccess,
    (state, {user}) => ({...state, userDetails: user})
  ),
  on(
    appManagementAction.getGroupDetailsWithUnsetPrivilegesSuccess,
    (state, {group}) => ({...state, groupDetails: group})
  ),
  on(
    appManagementAction.modifyUserStateSuccess,
    (state) => ({
      ...state,
      userDetails: {
        ...state.userDetails,
        active: !state.userDetails.active,
        dateEnding: state.userDetails.active ? new Date() : undefined
      }
    })
  ),
  on(
    appManagementAction.editGroupSuccess,
    (state, {group}) => ({...state, groupDetails: group})
  ),
  on(
    appManagementAction.registerGroupSuccess,
    (state, {groupName}) => ({...state, allGroups: [...state.allGroups, groupName]})
  ),
  on(
    appManagementAction.registerUserSuccess,
    (state, {userSimple}) => ({...state, allUsers: [...state.allUsers, userSimple]})
  ),
  on(
    appManagementAction.removeGroupSuccess,
    (state, {groupName}) => ({
      ...state,
      groupDetails: undefined,
      allGroups: state.allGroups.filter(name => name !== groupName)
    })
  ),
  on(
    authAction.logout, (state) => (initialState)
  ),
);


export function reducer(state: AppManagement | undefined, action: Action) {
  return appManagementReducer(state, action);
}


// Selectors
export const appManagementState = createFeatureSelector<AppManagement>('app-management');
export const getAllUsers = createSelector(appManagementState, (state) => state.allUsers);
export const getAllActiveUsers = createSelector(getAllUsers, (state) => state.filter(user => !user.dateEnding));
export const getAllGroupNames = createSelector(appManagementState, (state) => state.allGroups);
export const getUserDetails = createSelector(appManagementState, (state) => state.userDetails);
export const getGroupDetails = createSelector(appManagementState, (state) => state.groupDetails);
export const getRequestMonthlyStatisticsForUser = createSelector(appManagementState, (state) => state.userRequestStatistics);

export const areUserLoaded = createSelector(getAllUsers, (state) => state.length !== 0);
export const areGroupsLoaded = createSelector(getAllGroupNames, (state) => state.length !== 0);
