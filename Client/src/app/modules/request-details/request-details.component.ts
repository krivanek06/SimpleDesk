import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestDetails, TicketDetails, FinanceDetails, ReportDetails } from 'app/shared/models/RequestDetails';
import { environment } from 'environments/environment';
import { RequestSideInformationComponent } from './request-side-information/request-side-information.component';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {
  public ticketDetails: TicketDetails;
  public reportDetails: ReportDetails;
  public financeDetails: FinanceDetails;

  @ViewChild('sideDetails', {static: false}) sideDetails: RequestSideInformationComponent;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRequstDetails();
  }

  private getRequstDetails(){
    let url = window.location.pathname;
    let id = url.substring(url.lastIndexOf('/') + 1);
    
    this.http.get<RequestDetails>(environment.apiUrl + `requests/requestDetails/${id}`)
      .subscribe(requestDetails => {
        console.log(requestDetails);

        if(requestDetails.requestType === 'Ticket'){
          this.ticketDetails =  <TicketDetails> requestDetails;
          this.sideDetails.ticketDetails =  <TicketDetails> requestDetails;
        }else if(requestDetails.requestType === 'Report'){
          this.reportDetails =  <ReportDetails> requestDetails;
          this.sideDetails.reportDetails =  <ReportDetails> requestDetails;
        }else if(requestDetails.requestType === 'Finance'){
          this.financeDetails =  <FinanceDetails> requestDetails;
          this.sideDetails.financeDetails = <FinanceDetails> requestDetails;
        }
        this.sideDetails.requestDetails = requestDetails;
      
      })
    
  }

}
