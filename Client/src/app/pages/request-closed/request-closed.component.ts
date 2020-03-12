import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {RequestTableComponent} from 'app/shared/components-presentation/request-table/request-table.component';
import {NgxSpinnerService} from 'ngx-spinner';
import {RequestFilterComponent} from 'app/shared/components-presentation/request-filter/request-filter.component';
import {RequestHttpService} from 'app/api/request-http.service';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {UserHttpService} from "../../api/user-http.service";
import {UserSimpleDTO} from "../../core/model/User";
import {FilterRequests, RequestTable} from "../../core/model/Request";

export interface SatDatepickerRangeValue<D> {
  begin: D | null;
  end: D | null;
}

@Component({
  selector: 'app-request-closed',
  templateUrl: './request-closed.component.html',
  styleUrls: ['./request-closed.component.scss']
})
export class RequestClosedComponent implements OnInit, AfterViewInit {
  private loadedRequests: RequestTable[] = [];

  allUsers$: Observable<UserSimpleDTO[]>;
  viewTable = ['id', 'additionalInformation', 'creator', 'name',
    'priority', 'closed', 'timeCreated', 'timeClosed', 'details'];

  @ViewChild('closedRequests') closedRequests: RequestTableComponent;
  @ViewChild('requestFilter') requestFilter: RequestFilterComponent;


  constructor(private spinner: NgxSpinnerService,
              private router: Router,
              private requestHttp: RequestHttpService,
              private userHttp: UserHttpService) {
  }

  ngOnInit() {
    this.allUsers$ = this.userHttp.getAllActiveUsers();
  }

  ngAfterViewInit(): void {
   //  this.loadClosedRequests();
    setTimeout(() => this.loadClosedRequests());
  }

  loadClosedRequests() {
    this.spinner.show();

    this.requestHttp.getClosedRequests(this.requestFilter.dateFrom, this.requestFilter.dateTo)
      .subscribe(requests => {
      //  this.closedRequests.dataSource.data = requests as RequestTable[];
        this.loadedRequests = [...requests];
        this.filterClosedRequests(this.requestFilter.filterForm.value);
        this.spinner.hide();
      });
  }

  filterClosedRequests(filter: FilterRequests) {

    // copy back original requests
    this.closedRequests.dataSource.data = [...this.loadedRequests];

    // filter requests
    this.loadedRequests.forEach(request => {
      if (filter.closed !== '' && filter.closed !== request.closed.userImageString) {
        this.closedRequests.dataSource.data.splice(this.closedRequests.dataSource.data.indexOf(request), 1);
      } else if (filter.creator !== '' && filter.creator !== request.creator.userImageString) {
        this.closedRequests.dataSource.data.splice(this.closedRequests.dataSource.data.indexOf(request), 1);
      } else if (filter.type !== '' && filter.type !== request.requestType) {
        this.closedRequests.dataSource.data.splice(this.closedRequests.dataSource.data.indexOf(request), 1);
      } else if (filter.priority !== '' && filter.priority !== request.requestPriority) {
        this.closedRequests.dataSource.data.splice(this.closedRequests.dataSource.data.indexOf(request), 1);
      } else if (!request.name.includes(filter.name)) {
        this.closedRequests.dataSource.data.splice(this.closedRequests.dataSource.data.indexOf(request), 1);
      }
    });

    // re-render table with data
    this.closedRequests.dataSource.data = this.closedRequests.dataSource.data as RequestTable[];
  }

  moveToDetials(id: number) {
    this.router.navigateByUrl(`request_details/${id}`);
  }


}
