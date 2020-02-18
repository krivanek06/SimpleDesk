import {ApplicationPrivilege} from "../../privilege/model/Privilege";
import {UserSimpleDTO} from "../../user/model/User";

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

