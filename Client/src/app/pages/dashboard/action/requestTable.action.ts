import {Action} from "@ngrx/store";
import {RequestTable} from "../../../core/model/Request";

export const ASSIGN_REQUEST = '[Dashboard] Assign on me';
export const REMOVE_REQUEST = '[Dashboard] Remove from me';
export const GET_REQUESTS = '[Dashboard] Get current';

export class AssignRequest implements Action {
  readonly type = ASSIGN_REQUEST;

  constructor(public payload: RequestTable) {
  }
}

export class RemoveRequest implements Action {
  readonly type = REMOVE_REQUEST;

  constructor(public payload: RequestTable) {
  }
}

export class GetRequests implements Action {
  readonly type = GET_REQUESTS;
}

export type All =
  AssignRequest |
  RemoveRequest |
  GetRequests;
