import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {AuthenticationService} from 'app/core/services/authentication.service';
import {RequestTable} from 'app/shared/models/RequestTable';
import {RequestTableComponent} from 'app/shared/components/request-table/request-table.component';
import {NgxSpinnerService} from "ngx-spinner";
import {Observable} from 'rxjs';
import Swal from 'sweetalert2';
import {UserStoreService} from 'app/core/services/user-store.service';
import {RequestStoreService} from 'app/core/services/request-store.service';
import {SwallNotificationService} from 'app/shared/services/swall-notification.service';
import {RequestHttpService} from 'app/api/request-http.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private refreshIntervalId: any;
  viewTable = ['id', 'additionalInformation', 'creator', 'name',
    'priority', 'assigned', 'timeCreated', 'details'];
  modifyTable = ['id', 'additionalInformation', 'creator', 'name',
    'priority', 'assigned', 'userAction', 'timeCreated', 'details'];
  /*myOpenRequests: RequestTable[] = [];
  meAssignedRequests: RequestTable[] = [];
  otherOpenRequests: RequestTable[] = [];*/

  @ViewChild('myOpenRequests',  {static: false}) myOpenRequests: RequestTableComponent;
  @ViewChild('meAssignedRequests',  {static: false}) meAssignedRequests: RequestTableComponent;
  @ViewChild('otherOpenRequests',  {static: false}) otherOpenRequests: RequestTableComponent;

  isAdmin$: Observable<boolean>;
  isGhost$: Observable<boolean>;
  isSolver$: Observable<boolean>;
  isManager$: Observable<boolean>;
  isManagerRightHand$: Observable<boolean>;


  constructor(private spinner: NgxSpinnerService,
              private userStoreService: UserStoreService,
              private requestHttp: RequestHttpService,
              private router: Router,
              private swallNotification: SwallNotificationService) {
  }

  ngOnInit() {
    this.getRequestOnDashboard();

    this.isAdmin$ = this.userStoreService.isAdmin();
    this.isGhost$ = this.userStoreService.isGhost();
    this.isSolver$ = this.userStoreService.isSolver();
    this.isManager$ = this.userStoreService.isManager();
    this.isManagerRightHand$ = this.userStoreService.isManagerRightHand();

    this.refreshIntervalId = setInterval(() => this.getRequestOnDashboard(), 600000); // 10minutes 600000
  }

  ngOnDestroy(): void {
    clearInterval(this.refreshIntervalId);
  }

  private getRequestOnDashboard() {
    this.spinner.show();

    this.requestHttp.getRequestOnDashboard().subscribe(requests => {
      this.myOpenRequests.dataSource.data = requests.myOpen as RequestTable[];
      this.meAssignedRequests.dataSource.data = requests.assignedOnMe as RequestTable[];
      this.otherOpenRequests.dataSource.data = requests.otherOpen as RequestTable[];
      /*this.myOpenRequests = requests.myOpen as RequestTable[];
      this.meAssignedRequests = requests.assignedOnMe as RequestTable[];
      this.otherOpenRequests = requests.otherOpen as RequestTable[];*/
      this.spinner.hide();
    });
  }


  assignOnMe(request: RequestTable) {
    this.swallNotification.generateQuestion(`Naozaj chcetete prideliť na seba požiadavku s id: ${request.id}. ?`).then((result) => {
      if (result.value) {
        this.requestHttp.assignOrRemoveRequestOnMe(request.id, true).subscribe(() => {
          this.updateTableAssignMeOnRequest(request);
          this.swallNotification.generateNotification(`Úspešne ste na seba pridelili požiadavku s id:  ${request.id}.`);
        });
      }
    });
  }

  private updateTableAssignMeOnRequest(request: RequestTable) {
    request.assigned = this.userStoreService.user.fullName;
    request.assignedImageByte = this.userStoreService.user.photoBytes;

    this.meAssignedRequests.dataSource.data = [request].concat(this.meAssignedRequests.dataSource.data);
    this.otherOpenRequests.dataSource.data = this.otherOpenRequests.dataSource.data.filter(req => req.id !== request.id );

    this.meAssignedRequests.dataSource._updateChangeSubscription();
    this.otherOpenRequests.dataSource._updateChangeSubscription();
    /*this.meAssignedRequests = [request, ...this.meAssignedRequests];
    this.otherOpenRequests = this.otherOpenRequests.filter(req => req.id !== request.id);*/
  }

  private updateTableRemoveRequestFromMe(request: RequestTable) {
    request.assigned = ' ';
    request.assignedImageString = null;
    request.assignedImageByte = null;

     this.meAssignedRequests.dataSource.data = this.meAssignedRequests.dataSource.data.filter(req => req.id !== request.id );
     this.otherOpenRequests.dataSource.data.push(request)

     this.meAssignedRequests.dataSource._updateChangeSubscription();
     this.otherOpenRequests.dataSource._updateChangeSubscription();
    /*this.meAssignedRequests = this.meAssignedRequests.filter(req => req.id !== request.id);
    this.otherOpenRequests = [request, ...this.otherOpenRequests];*/
  }


  removeFromMe(request: RequestTable): void {
    this.swallNotification.generateQuestion(`Naozaj chcetete odstrániť zo seba požiadavku s id ${request.id} ?`).then((result) => {
      if (result.value) {
        this.requestHttp.assignOrRemoveRequestOnMe(request.id, false).subscribe(() => {
          this.updateTableRemoveRequestFromMe(request);
          this.swallNotification.generateNotification(`Úspešne ste odstránili zo seba požiadavku s id : ${+request.id}. `);
        });
      }
    });
  }

  moveToDetials(id: number) {
    this.router.navigateByUrl(`request_details/${id}`);
  }
}

