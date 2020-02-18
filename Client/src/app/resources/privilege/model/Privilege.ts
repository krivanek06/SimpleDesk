export interface ApplicationPrivilege {
  moduleTypesToUse: string[];
  submitFinanceRequests: string[];
  requestTypesToSolve: string[];
  solveTickets: TicketPriv;
}

interface TicketPriv {
  Software: string[];
  Hardware: string[];
  Server: string[];
  User: string[];
  Other: string[];
}
