export interface FinanceForm {
  financeType: string;
  name: string;
  requestPriority: string;
}


export interface FinanceType {
  id: number;
  name: string;
  groupsToSubmitSpecificFinanceType: string[];
}
