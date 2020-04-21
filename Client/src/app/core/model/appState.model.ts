import {
  FilterRequest,
  FinanceType,
  Request, RequestStatistics,
  TicketSubtype,
} from "../../features/requirement/model/Request";
import {EntityState} from "@ngrx/entity";
import {Params} from "@angular/router";
import {routerReducer, RouterReducerState} from "@ngrx/router-store";
import {ImageDTO, JWToken, User, UserSimple} from "./User";
import {Group} from "./Group";
import {UserStat} from "../../features/user-section/store/user/user-stat.reducer";
import {Reminder, ReminderContainer} from "../../features/user-section/model/Reminder.model";

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
  closedFilterDate: CustomDate;
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
  userStat: UserStat;
  reminderState: ReminderState;
}

export interface ReminderState extends EntityState<ReminderContainer> {

}



export interface AppManagement {
  allUsers: UserSimple[];
  allGroups: string[];
  userDetails: User;
  userRequestStatistics: RequestStatistics;
  groupDetails: Group;
}
