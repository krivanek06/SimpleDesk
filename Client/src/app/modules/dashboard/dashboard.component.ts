import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { RequestTable, RequestDashboard } from 'app/shared/models/RequestTable';
import { RequestTableComponent } from 'app/shared/components/request-table/request-table.component';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private dashboardRequestURL = "requests/dashboard";

  public viewTable = ['id',   'additionalInformation',  'creator',  'name',
                      'priority', 'assigned' ,'timeCreated' , 'details'];
  public modifyTable = ['id', 'additionalInformation', 'creator',  'name', 
                         'priority', 'assigned', 'userAction' ,'timeCreated' , 'details'];

  @ViewChild('myOpenRequests',  {static: false}) myOpenRequests: RequestTableComponent;
  @ViewChild('meAssignedRequests',  {static: false}) meAssignedRequests: RequestTableComponent;
  @ViewChild('teamAssignedRequests',  {static: false}) teamAssignedRequests: RequestTableComponent;
  @ViewChild('teamRequests',  {static: false}) teamRequests: RequestTableComponent;
  @ViewChild('otherOpenRequests',  {static: false}) otherOpenRequests: RequestTableComponent;



  constructor(private authService : AuthenticationService, private http: HttpClient, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.authService.getDecodedToken().subscribe(x => console.log(x)).unsubscribe();
    this.getRequestOnDashboard();
  }

  private getRequestOnDashboard(){
      this.spinner.show();
      this.http.get<RequestDashboard>(environment.apiUrl + this.dashboardRequestURL).subscribe(requests =>{
        this.myOpenRequests.dataSource.data = requests.myOpen as RequestTable[];
        this.meAssignedRequests.dataSource.data = requests.assignedOnMe as RequestTable[];
        this.teamAssignedRequests.dataSource.data = requests.assignedOnMyTeam as RequestTable[];
        this.teamRequests.dataSource.data = requests.sentByMyTeam as RequestTable[];
        this.otherOpenRequests.dataSource.data = requests.otherOpen as RequestTable[];

        this.spinner.hide();
      })
  }

}
