import {createAction, props} from "@ngrx/store";
import {ImageDTO, PasswordContainer, User} from "../../../core/model/User";
import {Group} from "../../../core/model/Group";

export const changeImage = createAction(
  '[User section] change image',
  props<{ image: ImageDTO }>()
);

export const changeImageError = createAction(
  '[User section] change image error',
  props<{ error: Error }>()
);

export const changePassword = createAction(
  '[User section] change password',
  props<{ password: PasswordContainer }>()
);

export const changePasswordSuccess = createAction(
  '[User section] change password success'
);

export const changePasswordFailure = createAction(
  '[User section] change password failure',
  props<{ error: Error }>()
);

export const getAvailableAvatars = createAction(
  '[User section] get available avatars'
);

export const getAvailableAvatarsSuccess = createAction(
  '[User section] get available avatars success',
  props<{ images: ImageDTO[] }>()
);

export const getAvailableAvatarsFailure = createAction(
  '[User section] get available avatars failure',
  props<{error: Error}>()
);


export const getGroupDetails = createAction(
  '[User section] get group details',
  props<{groupName: string}>()
);

export const getGroupDetailsSuccess = createAction(
  '[User section] get group details success',
  props<{ group: Group }>()
);

export const getGroupDetailsFailure = createAction(
  '[User section] get group details failure',
  props<{error: Error}>()
);
