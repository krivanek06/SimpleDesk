
import {ApplicationPrivilege, User} from "./User";

export interface Group {
  name: string;
  email: string;
  description: string;
  groupManager: User;
  usersInGroup: User[];
  usersWatchGroup: User[];
  applicationPrivilegeDTO: ApplicationPrivilege;
  unsetApplicationPrivilegeDTO: ApplicationPrivilege;
}

export interface GroupContainer {
  userInGroups: string[];
  watchedGroupActivity: string[];
  managerOfGroups: string[];
}

