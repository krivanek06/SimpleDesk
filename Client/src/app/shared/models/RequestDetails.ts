export interface RequestDetails{
    id: number,
    timestampCreation: Date,
    timestampClosed: Date,
    name: string,
    solutionComment: number,
    allowCommenting: boolean,
    requestPriority: string,
    requestPosition: string
    requestType: string,
    creator: UserSimple,
    assigned: UserSimple,
    closed: UserSimple,
    userToWatchRequest: UserSimple[],
    requestCommentDTOS: RequestComment[],
    documents: CustomDocument[],
}

export interface TicketDetails extends RequestDetails {
    ticketSubtypeName: string,
    problem: string,
    ticketType: string
}

export interface ReportDetails extends RequestDetails {
    owner: string
    purpose: string,
    criteria: string,
    visibleData: string,
    otherInformation: string,
    accessBy: string,
    deadline: Date,
    evaluation: number,
    reportRefresh: string,
    reportType: string,
}

export interface FinanceDetails extends RequestDetails {
    financeType: string
}

export interface RequestComment{
    id: number,
    requestId: number,
    comment: string,
    creator: UserSimple,
    isPrivate: boolean,
    groupsToShare: string[],
    timestamp: Date,
}
export interface UserSimple{
    username: string,
    firstName: string,
    lastName: string,
    photoBytes: string,
}

export interface CustomDocument{
    name: string,
    lastModified: number,
}