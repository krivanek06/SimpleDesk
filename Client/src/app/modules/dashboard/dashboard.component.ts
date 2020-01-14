import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { RequestTable, RequestDashboard } from 'app/shared/models/RequestTable';
import { RequestTableComponent } from 'app/shared/components/request-table/request-table.component';
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from 'rxjs';

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

  public isAdmin$: Observable<boolean>;
  public isGhost$: Observable<boolean>;
  public isSolver$: Observable<boolean>;
  public isManager$: Observable<boolean>;
  public isManagerRightHand$: Observable<boolean>;


  constructor( private http: HttpClient, private spinner: NgxSpinnerService, private authService: AuthenticationService ) { }

  ngOnInit() {
    this.getRequestOnDashboard();

    this.isAdmin$ = this.authService.isAdmin();
    this.isGhost$ = this.authService.isGhost();
    this.isSolver$ = this.authService.isSolver();
    this.isManager$ = this.authService.isManager();
    this.isManagerRightHand$ = this.authService.isManagerRightHand();
  }

  private getRequestOnDashboard(){
      this.spinner.show();
      this.http.get<RequestDashboard>(environment.apiUrl + this.dashboardRequestURL).subscribe(requests =>{
        this.myOpenRequests.dataSource.data = requests.myOpen as RequestTable[];
        this.meAssignedRequests.dataSource.data = requests.assignedOnMe as RequestTable[];
        

        if(this.teamAssignedRequests !== undefined){
          this.teamAssignedRequests.dataSource.data = requests.assignedOnMyTeam as RequestTable[];
        }
        if(this.teamRequests !== undefined){
          this.teamRequests.dataSource.data = requests.sentByMyTeam as RequestTable[];
        }
        if(this.otherOpenRequests !== undefined){
          this.otherOpenRequests.dataSource.data = requests.otherOpen as RequestTable[];
        }

        this.spinner.hide();
      })
  }

}
