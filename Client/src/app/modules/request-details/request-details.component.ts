import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestDetails, TicketDetails, FinanceDetails, ReportDetails } from 'app/shared/models/RequestDetails';
import { environment } from 'environments/environment';
import { RequestSideInformationComponent } from './request-side-information/request-side-information.component';
import { RequestSideOptionsComponent } from './request-side-options/request-side-options.component';
import { RequestModificationService } from 'app/core/services/request-modification.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {
  public sideBarBoolean = false;
  public deny = false;
  public allow = true;

  @ViewChild('sideDetails', {static: false}) sideDetails: RequestSideInformationComponent;


  constructor(private http: HttpClient, public requestService: RequestModificationService, private spinner: NgxSpinnerService) { }

  private openSideBar(){
    this.sideBarBoolean = !this.sideBarBoolean;
  }

  ngOnInit() {
    this.getRequstDetails();
  }

  private getRequstDetails(): void{
    let url = window.location.pathname;
    let id = url.substring(url.lastIndexOf('/') + 1);

    this.spinner.show();
    this.http.get<RequestDetails>(environment.apiUrl + `requests/requestDetails/${id}`).subscribe(requestDetails => {
        this.requestService.updateRequestDetails( requestDetails);
        this.requestService.getRequestDetials().subscribe(x => console.log(x));
        this.spinner.hide();
      }, 
      error => this.spinner.hide());
    
  }




}
