import {Injectable} from '@angular/core';
import {Group, GroupContainer} from "../model/Group";
import {ApplicationPrivilege, User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class GroupConstructorService {

  constructor() {
  }

  public constructGroupContainer(groupsToManage: string[], groupsActivityWatched: string[], groupsInvolved: string[]): GroupContainer {
    const groupContainer: GroupContainer = {
      managerOfGroups: groupsToManage,
      watchedGroupActivity: groupsActivityWatched,
      userInGroups: groupsInvolved
    };
    return groupContainer;
  }

  public constructGroup(name: string,
                        description: string,
                        email: string,
                        groupManager: User,
                        usersInGroup: User[],
                        usersWatchGroup: User[],
                        applicationPrivilegeDTO: ApplicationPrivilege): Group {
    const group: Group = {
      name,
      description,
      email,
      groupManager,
      usersInGroup,
      usersWatchGroup: usersWatchGroup === null ? [] : usersWatchGroup,
      applicationPrivilegeDTO,
      unsetApplicationPrivilegeDTO: null
    };
    return group;
  }

  public createGroupCopy(group: Group, applicationPrivilegeDTO: ApplicationPrivilege, unsetApplicationPrivilegeDTO: ApplicationPrivilege) {
    const copy: Group = {
      name: group.name,
      description: group.description,
      email: group.email,
      groupManager: group.groupManager,
      usersInGroup: group.usersInGroup,
      usersWatchGroup: group.usersWatchGroup,
      applicationPrivilegeDTO,
      unsetApplicationPrivilegeDTO
    };
    return copy;
  }
}
