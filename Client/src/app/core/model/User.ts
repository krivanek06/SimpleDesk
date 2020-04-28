import {GroupContainer} from "./Group";
import {TicketPrivilege} from "../../features/requirement/model/Request";

export interface UserSimple {
  username: string;
  firstName: string;
  lastName: string;
  fullName: string;
  userShortedName: string;
  email: string;
  active: boolean;
  dateCreation: string;
  dateEnding: string;
}

export interface User extends UserSimple {
  userImageString: string;
  userImageByte: string;
  groupContainerDTO?: GroupContainer;
  applicationPrivilegeDTO?: ApplicationPrivilege;
}

export interface ImageDTO {
  imageBytes: string;
  name: string;
}

export interface PasswordContainer {
  oldPassword: string;
  newPassword1: string;
  newPassword2: string;
}

export interface JWToken {
  sub: string; // username
  IS_ADMIN: boolean;
  IS_GHOST: boolean;
  exp: number;
  AUTHORITIES: string[];
  /*MODULE_TYPES_TO_USE: string[];
  FINANCE_TYPE_TO_SUBMIT: string[];
  REQUEST_TYPE_TO_SOLVE: string[];
  TICKET_SOFTWARE_PRIVILEGES: string[];
  TICKET_HARDWARE_PRIVILEGES: string[];
  TICKET_SERVER_PRIVILEGES: string[];
  TICKET_USER_PRIVILEGES: string[];
  TICKET_OTHER_PRIVILEGES: string[];*/
}

export interface ApplicationPrivilege {
  moduleTypesToUse: string[];
  submitFinanceRequests: string[];
  requestTypesToSolve: string[];
  solveTickets: TicketPrivilege;
}


