import {ApplicationPrivilege} from "../../privilege/model/Privilege";

export interface UserSimpleDTO {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  fullNameShort: string;
}

export interface UserSimple {
  username: string;
  firstName: string;
  lastName: string;
  photoBytes: string;
}

export interface User {
  username: string;
  firstName: string;
  lastName: string;
  fullName: string;
  photo: string;
  photoBytes: string;
  email: string;
  active: boolean;
  dateCreation: string;
  dateEnding: string;
  groupsToManage: string[];
  groupsActivityWatched: string[];
  groupsInvolved: string[];
  applicationPrivilegeDTO: ApplicationPrivilege;
}

export interface ImageDTO {
  imageBytes: string;
  name: string;
}

export interface PasswordContainer{
  oldPassword: string;
  newPassword1: string;
  newPassword2: string;
}
