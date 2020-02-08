import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RequestTable, FilterRequests } from 'app/shared/models/RequestTable';
import { RequestTableComponent } from 'app/shared/components/request-table/request-table.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { RequestFilterComponent } from 'app/shared/components/request-filter/request-filter.component';
import { RequestModificationService } from 'app/core/services/request-modification.service';
import { IgxExcelExporterService, IgxExcelExporterOptions } from "igniteui-angular";
import * as _ from 'lodash';

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
  public viewTable = ['id',   'additionalInformation',  'creator',  'name',
                      'priority', 'closed' ,'timeCreated' ,'timeClosed' ,'details'];
  @ViewChild('closedRequests',  {static: false}) closedRequests: RequestTableComponent;
  @ViewChild('requestFilter',  {static: false}) requestFilter: RequestFilterComponent;

  
  
  constructor(private spinner: NgxSpinnerService, private requestService: RequestModificationService, private excelExportService: IgxExcelExporterService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    this.loadClosedRequests();
  }

  loadClosedRequests(){
    this.spinner.show();
    
    this.requestService.getClosedRequests(this.requestFilter.dateFrom, this.requestFilter.dateTo)
    .subscribe(requests => {
      this.closedRequests.dataSource.data = requests  as RequestTable[];
      this.loadedRequests = requests;
      this.filterClosedRequests(this.requestFilter.filterForm.value);
      this.spinner.hide();
    });
  }

  filterClosedRequests(filter: FilterRequests){
    
    // copy back original requests
    this.closedRequests.dataSource.data = [...this.loadedRequests];

    // filter requests
    this.loadedRequests.forEach(request => {
        if(filter.closed !== '' && filter.closed !== request.closed ){
          this.closedRequests.dataSource.data.splice(this.closedRequests.dataSource.data.indexOf(request), 1);
        }

        else if(filter.creator !== '' && filter.creator !== request.creator ){
          this.closedRequests.dataSource.data.splice(this.closedRequests.dataSource.data.indexOf(request), 1);
        }

        else if(filter.type !== '' && filter.type !== request.requestType ){
          this.closedRequests.dataSource.data.splice(this.closedRequests.dataSource.data.indexOf(request), 1);
        }

        else if(filter.priority !== '' && filter.priority !== request.requestPriority ){
          this.closedRequests.dataSource.data.splice(this.closedRequests.dataSource.data.indexOf(request), 1);
        }

        else if(!request.name.includes(filter.name) ){
          this.closedRequests.dataSource.data.splice(this.closedRequests.dataSource.data.indexOf(request), 1);
        }
    });
    
    // re-render table with data
    this.closedRequests.dataSource.data = this.closedRequests.dataSource.data  as RequestTable[]
  }


  exportTOExcel(){ 
    // filter important fields
    let result = [];
    this.closedRequests.dataSource.data.forEach(x => {
      result.push(_.pick(x,  ['id', 'timestampCreation', 'timestampClosed' , 'additionalInformation' , 'name', 'requestPriority', 'requestType', 'creator', 'closed']));
    });
    this.excelExportService.exportData(result, new IgxExcelExporterOptions("ExportedDataFile"));
  }


}
