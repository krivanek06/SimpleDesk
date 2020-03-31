import {createAction, props} from "@ngrx/store";
import {Group} from "../../../core/model/Group";
import {User, UserSimple} from "../../../core/model/User";

export const getAllGroupNames = createAction(
  '[App-management] get all group names'
);

export const getAllGroupNamesSuccess = createAction(
  '[App-management] get all group names success',
  props<{ groups: string[] }>()
);

export const getAllGroupNamesFailure = createAction(
  '[App-management] get all group names failure',
  props<{ error: Error }>()
);

export const getAllUsers = createAction(
  '[App-management] get all users'
);

export const getAllUsersSuccess = createAction(
  '[App-management] get all users success',
  props<{ users: UserSimple[] }>()
);

export const getAllUsersFailure = createAction(
  '[App-management] get all users failure',
  props<{ error: Error }>()
);

export const getUserDetails = createAction(
  '[App-management] get user details',
  props<{ username: string }>()
);

export const getUserDetailsSuccess = createAction(
  '[App-management] get user details success',
  props<{ user: User }>()
);

export const getUserDetailsFailure = createAction(
  '[App-management] get user details failure',
  props<{ error: Error }>()
);

export const getGroupDetailsWithUnsetPrivileges = createAction(
  '[App-management] get group details',
  props<{ groupName: string }>()
);

export const getGroupDetailsWithUnsetPrivilegesSuccess = createAction(
  '[App-management] get group details success',
  props<{ group: Group }>()
);

export const getGroupDetailsWithUnsetPrivilegesFailure = createAction(
  '[App-management] get group details failure',
  props<{ error: Error }>()
);

export const resetUserPassword = createAction(
  '[App-management] reset user password',
  props<{ username: string }>()
);

export const resetUserPasswordSuccess = createAction(
  '[App-management] reset user password success'
);

export const resetUserPasswordFailure = createAction(
  '[App-management] reset user password failure',
  props<{ error: Error }>()
);

export const modifyUserState = createAction(
  '[App-management] modify user state',
  props<{ user: User }>()
);

export const modifyUserStateSuccess = createAction(
  '[App-management] modify user state success'
);

export const modifyUserStateFailure = createAction(
  '[App-management] modify user state failure',
  props<{ error: Error }>()
);

export const registerUser = createAction(
  '[App-management] register user',
  props<{ userSimple: UserSimple }>()
);

export const registerUserSuccess = createAction(
  '[App-management] register user success',
  props<{ userSimple: UserSimple }>()
);

export const registerUserFailure = createAction(
  '[App-management] register user failure',
  props<{ error: Error }>()
);

export const registerGroup = createAction(
  '[App-management] register group',
  props<{ group: Group }>()
);

export const registerGroupSuccess = createAction(
  '[App-management] register group success',
  props<{ groupName: string }>()
);

export const registerGroupFailure = createAction(
  '[App-management] register group failure',
  props<{ error: Error }>()
);

export const removeGroup = createAction(
  '[App-management] remove group'
);

export const removeGroupSuccess = createAction(
  '[App-management] remove group success',
  props<{ groupName: string }>()
);

export const removeGroupFailure = createAction(
  '[App-management] remove group failure',
  props<{ error: Error }>()
);

export const editGroup = createAction(
  '[App-management] edit group',
  props<{ group: Group }>()
);

export const editGroupSuccess = createAction(
  '[App-management] edit group success',
  props<{ group: Group }>()
);

export const editGroupFailure = createAction(
  '[App-management] edit group failure',
  props<{ error: Error }>()
);




