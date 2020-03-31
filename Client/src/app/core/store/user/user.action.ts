import {createAction, props} from "@ngrx/store";
import {ImageDTO, User} from "../../model/User";



export const loadUser = createAction(
  '[User] load user-section'
);

export const loadUserSuccess = createAction(
  '[User] load user-section success',
  props<{ user: User }>()
);

export const loadUserError = createAction(
  '[User] load user-section error',
  props<{ error: Error }>()
);

export const changeImageSuccess = createAction(
  '[User] change image success',
  props<{ image: ImageDTO }>()
);

