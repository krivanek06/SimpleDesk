import {createAction, props} from "@ngrx/store";


export const login = createAction(
  '[Auth] login',
  props<{ username: string, password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] login success',
  props<{ token: string }>()
);

export const loginError = createAction(
  '[Auth] login error',
  props<{ error: Error }>()
);

export const logout = createAction(
  '[Auth] logout'
);
export const logoutSuccess = createAction(
  '[Auth] logout success'
);




