import {Auth} from "../../model/appState.model";
import {Action, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as AuthAction from "../auth/auth.action";
import {JwtHelperService} from "@auth0/angular-jwt";
import {JWToken} from "../../model/User";
import * as authAction from "./auth.action";

const jwtHelper = new JwtHelperService();

const initialState: Auth = {
  jwtToken: undefined,
  rawToken: undefined,
  authenticating: false,
};


// Reducer
export const authReducer = createReducer(
  initialState,
  on(
    AuthAction.loginError,
    AuthAction.logoutSuccess,
    (state) => ({...state})
  ),
  on(
    AuthAction.login,
    (state) => ({...state, authenticating: true})
  ),
  on(
    AuthAction.loginSuccess,
    (state, {token}) => ({
      ...state,
      rawToken: token,
      jwtToken: (jwtHelper.decodeToken(token)) as JWToken,
      authenticating: false
    })
  ),
  on(
    AuthAction.loginError,
    (state) => ({...state, authenticating: false})
  ),
  on(
    authAction.logout,
    (state) => (initialState)
  )
);

export function reducer(state: Auth | undefined, action: Action) {
  return authReducer(state, action);
}


// Selector
export const authState = createFeatureSelector<Auth>('auth');
export const isTokenValid = createSelector(authState, (state) => !jwtHelper.isTokenExpired(state.rawToken));
export const isTokenLoaded = createSelector(authState, (state) => !!state.rawToken);
export const getAccessToken = createSelector(authState, (state) => state.rawToken);
export const getJwtToken = createSelector(authState, (state) => state.jwtToken);
export const isAuthenticating = createSelector(authState, (state) => state.authenticating);

export const isAdmin = createSelector(getJwtToken, (jwt) => jwt?.AUTHORITIES.includes("ROLE_ADMIN"));
export const isGhost = createSelector(getJwtToken, (jwt) => jwt?.AUTHORITIES.includes("ROLE_GHOST"));
export const isManager = createSelector(getJwtToken, (jwt) => jwt?.AUTHORITIES.includes("ROLE_MANAGER"));
export const isManagerRightHand = createSelector(getJwtToken, (jwt) => jwt?.AUTHORITIES.includes("ROLE_MANAGER_RIGHT_HAND"));
export const isSolver = createSelector(getJwtToken, (jwt) => jwt?.AUTHORITIES.includes("ROLE_SOLVER"));
export const isSolverRightHand = createSelector(isSolver, isManagerRightHand, isManager,
  (one, two, three) => (one && (two || three)));






