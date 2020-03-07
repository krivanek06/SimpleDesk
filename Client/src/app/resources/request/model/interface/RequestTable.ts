export interface RequestDashboard {
  myOpen: RequestTable[];
  assignedOnMe: RequestTable[];
  otherOpen: RequestTable[];
}

export interface RequestTable {
  id: number;
  additionalInformation: string;
  timestampCreation: Date;
  timestampClosed: Date;
  name: string;
  requestPriority: string;
  requestPosition: string;
  requestType: string;
  creatorImageByte: string;
  creatorImageString: string;
  creator: string;
  assignedImageByte: string;
  assignedImageString: string;
  assigned: string;
  closedImageByte: string;
  closedImageString: string;
  closed: string;
  logs: string;

}

export interface FilterRequests {
  type: string;
  creator: string;
  closed: string;
  name: string;
  priority: string;
}
