import {User} from "../../../core/model/User";

export interface RequestStatistics {
  dateText: string[];
  sentRequests: number[];
  solvedRequests: number[];
}

export interface Request {
  id: number;
  timestampCreation: Date;
  timestampClosed: Date;
  name: string;
  solutionComment: number;
  allowCommenting: boolean;
  requestPriority: string;
  requestPosition: string;
  additionalInformation: string;
  requestType: string;
  creator: User;
  assigned?: User;
  closed?: User;
  requestCommentDTOS?: RequestComment[];
  documents?: CustomDocument[];
  extendedInformation: TicketDetails | ReportDetails | FinanceDetails;
  logs?: string[];
}

export interface TicketDetails {
  ticketSubtypeName: string;
  problem: string;
  ticketType: string;
}

export interface ReportDetails {
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


export interface FinanceDetails {
  financeType: string;
}

export interface RequestComment {
  id: number;
  requestId: number;
  comment: string;
  creator: User;
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
  file?: File;
}

// ---------------------------------
// Tickets
export interface TicketForm {
  ticketType: string;
  ticketSubtypeName: string;
  requestPriority: string;
  name: string;
  problem: string;
}

// CV4, Keyboard etc.
export interface TicketSubtype {
  id: number;
  name: string;
  sequence: number;
  active: boolean;
  ticketType: TicketType;
}
// Software / Hardware etc.
export interface TicketType {
  id: number;
  name: string;
  sequence: number;
  active: boolean;
}

export interface TicketPrivilege {
  Software: string[];
  Hardware: string[];
  Server: string[];
  User: string[];
  Other: string[];
}


// ------------------------------------
// Finance
export interface FinanceForm {
  financeType: string;
  name: string;
  requestPriority: string;
}


export interface FinanceType {
  id: number;
  name: string;
  groupsToSubmitSpecificFinanceType: string[];
}

// ----------------------------------------
// Report

export interface ReportForm {
  name: string;
  requestPriority: string;
  owner: string;
  reportType: string;
  reportRefresh: string;
  purpose: string;
  criteria: string;
  visibleData: string;
  otherInformation: string;
  accessMethods: string;
  accessByPeople: string;
  deadline: string;
}

// -----------------------------


export interface FilterRequest {
  type: string;
  creator: string;
  closed: string;
  name: string;
  priority: string;
}

