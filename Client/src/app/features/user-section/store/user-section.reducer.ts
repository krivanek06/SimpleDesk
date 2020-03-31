import {UserSection} from "../../../core/model/appState.model";
import {Action, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";

import * as userSectionAction from './user-section.action';
import * as authAction from "../../../core/store/auth/auth.action";


const initialState: UserSection = {
  group: undefined,
  userImages: undefined
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
    (state) => ({...state})
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


export function reducer(state: UserSection | undefined, action: Action) {
  return userReducer(state, action);
}


// Selectors
export const userState = createFeatureSelector<UserSection>('userSection');


export const getAvailableAvatars = createSelector(userState, (state) => state.userImages);
export const getGroup = createSelector(userState, (state) => state.group);
export const isAvailableAvatarsLoaded = createSelector(userState, (state) => state && !!state.userImages);
