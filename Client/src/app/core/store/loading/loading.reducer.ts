import {Loading, RequestState} from "../../model/appState.model";
import {Action, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as CoreAction from './loading.action';

const initialState: Loading = {
  loading: false,
};

// Reducer
export const loadingReducer = createReducer(
  initialState,
  on(CoreAction.loadingStart, (state) => ({...state, loading: true})),
  on(CoreAction.loadingFinished, (state) => ({...state, loading: false}))
);


export function reducer(state: Loading | undefined, action: Action) {
  return loadingReducer(state, action);
}



// Selectors
export const getLoadingState = createFeatureSelector<Loading>('loader');
export const isLoading = createSelector(getLoadingState, (state) => state.loading);


