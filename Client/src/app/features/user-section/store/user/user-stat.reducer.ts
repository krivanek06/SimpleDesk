import {UserSection} from "../../../../core/model/appState.model";
import {Action, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";

import * as userSectionAction from './user-stat.action';
import * as authAction from "../../../../core/store/auth/auth.action";
import {Group} from "../../../../core/model/Group";
import {ImageDTO} from "../../../../core/model/User";
import {RequestStatistics} from "../../../requirement/model/Request";

export interface UserStat {
  group: Group;
  userImages: ImageDTO[];
  requestStatistics: RequestStatistics;
}

const initialState: UserStat = {
  group: undefined,
  userImages: undefined,
  requestStatistics: undefined
};


// Reducer
export const userReducer = createReducer(
  initialState,
  on(
    userSectionAction.changeImage,
    userSectionAction.getAvailableAvatars,
    userSectionAction.getAvailableAvatarsFailure,
    userSectionAction.changePassword,
    userSectionAction.changePasswordFailure,
    userSectionAction.changePasswordSuccess,
    userSectionAction.getGroupDetails,
    userSectionAction.getGroupDetailsFailure,
    userSectionAction.getRequestMonthlyStatistics,
    userSectionAction.getRequestMonthlyStatisticsError,
    (state) => ({...state})
  ),
  on(
    userSectionAction.getRequestMonthlyStatisticsSuccess,
    (state, {requestStatistics}) => ({...state, requestStatistics})
  ),
  on(
    userSectionAction.getAvailableAvatarsSuccess,
    (state, {images}) => ({...state, userImages: images})
  ),
  on(
    userSectionAction.getGroupDetailsSuccess,
    (state, {group}) => ({...state, group})
  ),
  on(
    authAction.logout,
    (state) => (initialState)
  ),
);


export function reducer(state: UserStat | undefined, action: Action) {
  return userReducer(state, action);
}


// Selectors
export const userSectionModuleState = createFeatureSelector<UserSection>('userSection');
export const userState = createSelector(userSectionModuleState, (state) => state.userStat);

export const getAvailableAvatars = createSelector(userState, (state) => state.userImages);
export const getGroup = createSelector(userState, (state) => state.group);
export const isAvailableAvatarsLoaded = createSelector(userState, (state) => state && !!state.userImages);
export const getRequestMonthlyStatistics = createSelector(userState, (state) => state.requestStatistics);
