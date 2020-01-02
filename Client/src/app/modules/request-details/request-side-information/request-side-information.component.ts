import { Component, OnInit } from '@angular/core';
import { RequestDetails, TicketDetails, ReportDetails, FinanceDetails } from 'app/shared/models/RequestDetails';

@Component({
  selector: 'app-request-side-information',
  templateUrl: './request-side-information.component.html',
  styleUrls: ['./request-side-information.component.scss']
})
export class RequestSideInformationComponent implements OnInit {
  public ticketDetails: TicketDetails;
  public reportDetails: ReportDetails;
  public financeDetails: FinanceDetails;
  public requestDetails: RequestDetails;

  public openDays: number;

  constructor() { }

  ngOnInit() {
  }
  

  private calculateOpenDays(): number{
    let open = new Date(this.requestDetails.timestampCreation);
    let result = 0;
    let one_day=1000*60*60*24; //Get 1 day in milliseconds

    if(this.requestDetails.timestampClosed === null){
      let today = new Date();
      result = today.getTime() - open.getTime() ;
    }else{
      let closed = new Date(this.requestDetails.timestampClosed);
      result = closed.getTime() - open.getTime() ;
    }
    return Math.round(result/one_day); 
  }

}
