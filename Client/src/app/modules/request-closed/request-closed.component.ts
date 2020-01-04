import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { RequestTable } from 'app/shared/models/RequestTable';
import { RequestTableComponent } from 'app/shared/components/request-table/request-table.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';
import { RequestFilterComponent } from 'app/shared/components/request-filter/request-filter.component';


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
  public viewTable = ['id',   'additionalInformation',  'creator',  'name',
                      'priority', 'closed' ,'timeCreated' ,'timeClosed' ,'details'];
  @ViewChild('closedRequests',  {static: false}) closedRequests: RequestTableComponent;
  @ViewChild('requestFilter',  {static: false}) requestFilter: RequestFilterComponent;

  
  
  constructor(private http: HttpClient ,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    this.loadClosedRequests();
  }

  private loadClosedRequests(){
    this.spinner.show();
    
    let params = new HttpParams().set('dateFrom' , this.requestFilter.dateFrom).set('dateTo' , this.requestFilter.dateTo) ;
    this.http.get<RequestTable[]>(environment.apiUrl + "requests/closed", {params: params}).subscribe(requests =>{
      console.log(requests);
      this.closedRequests.dataSource.data = requests  as RequestTable[];
      this.spinner.hide();
    });
  }


}
