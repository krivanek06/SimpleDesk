import {Action, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import {User} from "../../model/User";
import * as userAction from './user.action';
import * as authAction from '../auth/auth.action';

export const initialState: User = {
  firstName: undefined,
  username: undefined,
  applicationPrivilegeDTO: {
    requestTypesToSolve: [],
    moduleTypesToUse: [],
    submitFinanceRequests: [],
    solveTickets: {
      Software: [],
      Hardware: [],
      Other: [],
      Server: [],
      User: []
    }
  },
  groupContainerDTO: {
    userInGroups: [],
    managerOfGroups: [],
    watchedGroupActivity: []
  },
  dateEnding: undefined,
  userImageString: undefined,
  active: undefined,
  dateCreation: undefined,
  email: undefined,
  fullName: undefined,
  lastName: undefined,
  userShortedName: undefined
};

// Reducer
export const userReducer = createReducer(
  initialState,
  on(
    userAction.loadUser,
    userAction.loadUserError,
    (state) => ({...state})
  ),
  on(
    userAction.loadUserSuccess,
    (state, {user}) => (user)
  ),
  on(
    userAction.changeImageSuccess,
    (state, {image}) => ({...state, userImageByte: image.imageBytes, userImageString: image.name})
  ),
  on(
    authAction.logout,
    (state) => (initialState)
  )
);


export function reducer(state: User | undefined, action: Action) {
  return userReducer(state, action);
}


// Selectors
export const getUser = createFeatureSelector<User>('user');
export const hasPrivilegeAccess = createSelector(getUser,
  (user) => user.applicationPrivilegeDTO.moduleTypesToUse.includes("Správa aplikácie"));

export const hasFinanceModuleAccess = createSelector(getUser,
  (user) => user.applicationPrivilegeDTO.moduleTypesToUse.includes("Finance"));

export const hasTicketModuleAccess = createSelector(getUser,
  (user) => user.applicationPrivilegeDTO.moduleTypesToUse.includes("Ticket"));

export const hasReportModuleAccess = createSelector(getUser,
  (user) => user.applicationPrivilegeDTO.moduleTypesToUse.includes("Report"));

export const getGroupContainer = createSelector(getUser, (user) => user.groupContainerDTO);

export const getModuleTypesToUse = createSelector(getUser, (user) => user.applicationPrivilegeDTO.moduleTypesToUse);
export const getRequestTypeToSolve = createSelector(getUser, (user) => user.applicationPrivilegeDTO.requestTypesToSolve);
export const getFinanceTypesToSubmit = createSelector(getUser, (user) => user.applicationPrivilegeDTO.submitFinanceRequests);




