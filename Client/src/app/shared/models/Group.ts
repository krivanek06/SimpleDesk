
export interface Group{
    name: string,
    email: string,
    description: string,
    groupManager: UserSimpleDTO,
    usersInGroup: UserSimpleDTO[];
    usersWatchGroup: UserSimpleDTO[];
    applicationPrivilegeDTO: ApplicationPrivilege;
}

export interface UserSimpleDTO{
    username: string,
    firstName: string,
    lastName: string,
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