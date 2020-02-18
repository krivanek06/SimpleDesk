import {UserSimple} from "../../../user/model/User";

export interface Request {
  id: number;
  timestampCreation: Date;
  timestampClosed: Date;
  name: string;
  solutionComment: number;
  allowCommenting: boolean;
  requestPriority: string;
  requestPosition: string;
  requestType: string;
  creator: UserSimple;
  assigned: UserSimple;
  closed: UserSimple;
  userToWatchRequest: UserSimple[];
  requestCommentDTOS: RequestComment[];
  documents: CustomDocument[];
}

export interface TicketDetails extends Request {
  ticketSubtypeName: string;
  problem: string;
  ticketType: string;
}

export interface ReportDetails extends Request {
  owner: string;
  purpose: string;
  criteria: string;
  visibleData: string;
  otherInformation: string;
  accessByPeople: string;
  deadline: Date;
  evaluation: number;
  reportRefresh: string;
  reportType: string;
  accessMethods: string;
}


export interface FinanceDetails extends Request {
  financeType: string;
}

export interface RequestComment {
  id: number;
  requestId: number;
  comment: string;
  creator: UserSimple;
  isPrivate: boolean;
  groupsToShare: string[];
  timestamp: Date;
}

export interface RequestCommentWrapper {
  requestComment: RequestComment;
  solution: boolean;
  sendEmail: boolean;
}


export interface CustomDocument {
  name: string;
  lastModified: number;
}
