export interface Group{
    id: number,
    name: string,
    email: string,
    description: string,
    groupManager: UserSimple,
    usersInGroup: UserSimple[];
    applicationPrivilegeDTO: ApplicationPrivilege;
}

export interface UserSimple{
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