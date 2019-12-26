import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { RequestTable, RequestDashboard } from 'app/shared/models/RequestTable';
import { MyOpenRequestsComponent } from './my-open-requests/my-open-requests.component';
import { MeAssignedRequestsComponent } from './me-assigned-requests/me-assigned-requests.component';
import { TeamAssignedRequestsComponent } from './team-assigned-requests/team-assigned-requests.component';
import { TeamOpenRequestsComponent } from './team-open-requests/team-open-requests.component';
import { OtherOpenRequestsComponent } from './other-open-requests/other-open-requests.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private dashboardRequestURL = "requests/dashboard";

  @ViewChild(MyOpenRequestsComponent,  {static: false}) myOpenRequests: MyOpenRequestsComponent;
  @ViewChild(MeAssignedRequestsComponent,  {static: false}) meAssignedRequests: MeAssignedRequestsComponent;
  @ViewChild(TeamAssignedRequestsComponent,  {static: false}) teamAssignedRequests: TeamAssignedRequestsComponent;
  @ViewChild(TeamOpenRequestsComponent,  {static: false}) teamRequests: TeamOpenRequestsComponent;
  @ViewChild(OtherOpenRequestsComponent,  {static: false}) otherOpenRequests: OtherOpenRequestsComponent;


  constructor(private authService : AuthenticationService, private http: HttpClient) { }

  ngOnInit() {
    this.authService.getDecodedToken().subscribe(x => console.log(x)).unsubscribe();
    this.getRequestOnDashboard();
  }

  private getRequestOnDashboard(){
      this.http.get<RequestDashboard>(environment.apiUrl + this.dashboardRequestURL).subscribe(requests =>{
        console.log(requests);
        this.myOpenRequests.dataSource.data = requests.myOpen as RequestTable[]; 
        this.meAssignedRequests.dataSource.data = requests.assignedOnMe as RequestTable[]; 
        this.teamAssignedRequests.dataSource.data = requests.assignedOnMyTeam as RequestTable[]; 
        this.teamRequests.dataSource.data = requests.sentByMyTeam as RequestTable[]; 
        this.otherOpenRequests.dataSource.data = requests.otherOpen as RequestTable[]; 

      })
  }

}
