import {createAction, props} from "@ngrx/store";
import {ImageDTO, PasswordContainer, User} from "../../../../core/model/User";
import {Group} from "../../../../core/model/Group";
import {RequestStatistics} from "../../../requirement/model/Request";

export const changeImage = createAction(
  '[User stat] change image',
  props<{ image: ImageDTO }>()
);

export const changeImageError = createAction(
  '[User stat] change image error',
  props<{ error: Error }>()
);

export const changePassword = createAction(
  '[User stat] change password',
  props<{ password: PasswordContainer }>()
);

export const changePasswordSuccess = createAction(
  '[User stat] change password success'
);

export const changePasswordFailure = createAction(
  '[User stat] change password failure',
  props<{ error: Error }>()
);

export const getAvailableAvatars = createAction(
  '[User stat] get available avatars'
);

export const getAvailableAvatarsSuccess = createAction(
  '[User stat] get available avatars success',
  props<{ images: ImageDTO[] }>()
);

export const getAvailableAvatarsFailure = createAction(
  '[User stat] get available avatars failure',
  props<{ error: Error }>()
);


export const getGroupDetails = createAction(
  '[User stat] get group details',
  props<{ groupName: string }>()
);

export const getGroupDetailsSuccess = createAction(
  '[User stat] get group details success',
  props<{ group: Group }>()
);

export const getGroupDetailsFailure = createAction(
  '[User stat] get group details failure',
  props<{ error: Error }>()
);

// statistics

export const getRequestMonthlyStatistics = createAction(
  '[User stat] get request monthly statistics',
);

export const getRequestMonthlyStatisticsSuccess = createAction(
  '[User stat] get request monthly statistics success',
  props<{ requestStatistics: RequestStatistics }>()
);

export const getRequestMonthlyStatisticsError = createAction(
  '[User stat] get request monthly statistics error',
  props<{ error: Error }>()
);
