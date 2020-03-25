import {FilterRequest, Request} from "./Request";
import {EntityState} from "@ngrx/entity";
import {Params} from "@angular/router";
import {routerReducer, RouterReducerState} from "@ngrx/router-store";

export interface AppState {
  requirement: RequestState;
  router: RouterReducerState<RouterStateUrl>;
  loader: Loading;
}

export interface RequestState extends EntityState<Request> {
  error?: Error;
  loadedDashboard: boolean;
  loadedClosed: boolean;
  customDate: CustomDate;
  closedFilterRequests: FilterRequest;
}

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface CustomDate {
  dateFrom: string;
  dateTo: string;
}

export interface Loading {
  loading: boolean;
}

/*
export interface RequestState {
  readonly requests: Request[];
  readonly loading: boolean;
  readonly loadedDashboard: boolean;
  readonly loadedClosed: boolean;
  readonly error?: undefined;
}
*/
