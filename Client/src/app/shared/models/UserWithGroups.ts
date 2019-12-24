export interface UserWithGroups{
    username: string,
    firstName: string,
    lastName: string,
    fullName: string,
    photo: string,
    email: string,
    groupsInvolved: string[],
    groupsToMange: string[],
    active: boolean,
    dateCreation: string,
    dateEnding: string,


}