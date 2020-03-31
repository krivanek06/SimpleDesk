export enum RequestPosition {
    Created = "Vytvorené",
    Assigned = "Priradené",
    Closed = "Uzatvorené",
    UnAssigned = "Nepriradené",
   //  Solved = "Vyriešené",
}

export enum TicketSubtype {
  Software = 'Software',
  Hardware = 'Hardware',
  Server = 'Server',
  User = 'Užívateľ',
  Other = 'Iné',
}

export enum RequestType {
  Ticket = 'Ticket',
  Report = 'Report',
  Finance = 'Finance',
}

export enum RequestPriority {
  small = 'nízka',
  medium = 'stredná',
  high = 'vysoká',
}

export enum RequestCommentType {
  Notification = 'Notification',
  Private = 'Private',
  Solution = 'Solution',
}
