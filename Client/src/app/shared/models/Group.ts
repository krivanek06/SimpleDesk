export interface Group{
    id: number,
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
    solveTickets: Map<string, string[]>,
}