import {
  FilterRequest,
  FinanceType,
  Request,
  TicketSubtype,
} from "../../features/requirement/model/Request";
import {EntityState} from "@ngrx/entity";
import {Params} from "@angular/router";
import {routerReducer, RouterReducerState} from "@ngrx/router-store";
import {ImageDTO, JWToken, User, UserSimple} from "./User";
import {Group} from "./Group";

export interface AppState {
  requirement: RequestState;
  router: RouterReducerState<RouterStateUrl>;
  loader: Loading;
  auth: Auth;
  user: User;
  userSection: UserSection;
  appManagement: AppManagement;
}

export interface RequestState extends EntityState<Request> {
  loadedDashboard: boolean;
  websocketConnected: boolean;
  customDate: CustomDate;
  closedFilterRequests: FilterRequest;
  requestType: RequestType;
  shareGroup: Group;
}

export interface RequestType {
  ticketSubtype: TicketSubtype[];
  financeType: FinanceType[];
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

export interface Auth {
  rawToken: string;
  jwtToken: JWToken;
  authenticating: boolean;
}

export interface UserSection {
  group: Group;
  userImages: ImageDTO[];
}

export interface AppManagement {
  allUsers: UserSimple[];
  allGroups: string[];
  userDetails: User;
  groupDetails: Group;
}
