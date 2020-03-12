
import {UserSimpleDTO} from "./User";
import {ApplicationPrivilege} from "./Request";

export interface Group {
  name: string;
  email: string;
  description: string;
  groupManager: UserSimpleDTO;
  usersInGroup: UserSimpleDTO[];
  usersWatchGroup: UserSimpleDTO[];
  applicationPrivilegeDTO: ApplicationPrivilege;
  unsetApplicationPrivilegeDTO: ApplicationPrivilege;
}

export interface GroupContainer {
  userInGroups: string[];
  watchedGroupActivity: string[];
  managerOfGroups: string[];
}

