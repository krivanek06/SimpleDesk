import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { RequestTable, RequestDashboard } from 'app/shared/models/RequestTable';
import { RequestTableComponent } from 'app/shared/components/request-table/request-table.component';
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { UserService } from 'app/core/services/user.service';
import { RequestModificationService } from 'app/core/services/request-modification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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


  constructor( private http: HttpClient, private spinner: NgxSpinnerService, private authService: AuthenticationService,
    private userService: UserService, private requestService: RequestModificationService ) { }

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
      this.http.get<RequestDashboard>(`${environment.apiUrl}requests/dashboard`).subscribe(requests =>{
        if(this.myOpenRequests !== undefined){
          this.myOpenRequests.dataSource.data = requests.myOpen as RequestTable[];
        }
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


  private assignOnMe(request: RequestTable){
    Swal.fire({
      text: "Naozaj chcetete prideliť na seba požiadavku s id : " + request.id + " ? ", icon: 'warning', showCancelButton: true,
      confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', cancelButtonText: "Zrušiť", confirmButtonText: 'Ano'
    }).then((result) => {
      if (result.value) {
        this.requestService.assignOrRemoveRequestOnMe(request.id, true).subscribe(result => {
          this.updateTableAssignMeOnRequest(request)
          Swal.fire({ position: 'top-end', text: 'Úspešne ste na seba pridelili požiadavku s id: ' + request.id, showConfirmButton: false, timer: 1200 })
        })
      }
    });  
  }

  private updateTableAssignMeOnRequest(request: RequestTable){
    request.assigned = this.userService.user.firstName + " " + this.userService.user.lastName;
    request.assignedImageByte = this.userService.user.photoBytes;

    this.meAssignedRequests.dataSource.data.push(request)
    this.otherOpenRequests.dataSource.data = this.otherOpenRequests.dataSource.data.filter(req => req.id !== request.id );
    this.teamRequests.dataSource.data = this.teamRequests.dataSource.data.filter(req => req.id !== request.id );

    this.meAssignedRequests.dataSource._updateChangeSubscription();
    this.teamRequests.dataSource._updateChangeSubscription();
    this.otherOpenRequests.dataSource._updateChangeSubscription();
  }

  private updateTableRemoveRequestFromMe(request: RequestTable){
    request.assigned = ' ';
    request.assignedImageString = null;
    request.assignedImageByte = null;

    this.meAssignedRequests.dataSource.data = this.meAssignedRequests.dataSource.data.filter(req => req.id !== request.id );
    this.otherOpenRequests.dataSource.data.push(request)
    
    this.meAssignedRequests.dataSource._updateChangeSubscription();
    this.otherOpenRequests.dataSource._updateChangeSubscription();
  }


  public removeFromMe(request: RequestTable): void{
    Swal.fire({
      text: "Naozaj chcetete odstrániť zo seba požiadavku s id : " + request.id + " ? ", icon: 'warning',
      showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', cancelButtonText: "Zrušiť", confirmButtonText: 'Ano'
    }).then((result) => {
      if (result.value) {
        this.requestService.assignOrRemoveRequestOnMe(request.id, false).subscribe(result => {
          this.updateTableRemoveRequestFromMe(request);
          Swal.fire({ position: 'top-end', text: 'Úspešne ste odstránili zo seba požiadavku s id : ' + request.id, showConfirmButton: false, timer: 1200 })
        })
      }
    })
}

}
