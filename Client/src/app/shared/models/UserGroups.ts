
export interface Group{
    name: string,
    email: string,
    description: string,
    groupManager: UserSimpleDTO,
    usersInGroup: UserSimpleDTO[];
    usersWatchGroup: UserSimpleDTO[];
    applicationPrivilegeDTO: ApplicationPrivilege;
    unsetApplicationPrivilegeDTO: ApplicationPrivilege;
}

export interface UserSimpleDTO{
    username: string,
    firstName: string,
    lastName: string,
    email: string,
}

export interface GroupContainer{
    userInGroups: string[];
    watchedGroupActivity: string[];
    managerOfGroups: string[];
}

export interface ApplicationPrivilege{
    moduleTypesToUse: string[],
    submitFinanceRequests: string[],
    requestTypesToSolve: string[],
    solveTickets: ticketPriv
}

interface ticketPriv{
    Software : string[],
    Hardware : string[],
    Server : string[],
    User : string[],
    Other: string[],
}


export interface User{
    username: string,
    firstName: string,
    lastName: string,
    fullName: string,
    photo: string,
    photoBytes: string,
    email: string,
    active: boolean,
    dateCreation: string,
    dateEnding: string,
    groupsToManage: string[];
    groupsActivityWatched: string[];
    groupsInvolved: string[];
    applicationPrivilegeDTO: ApplicationPrivilege;
}

