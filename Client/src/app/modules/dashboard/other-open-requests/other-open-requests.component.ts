import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { RequestTable } from 'app/shared/models/RequestTable';


export interface SatDatepickerRangeValue<D> {
  begin: D | null;
  end: D | null;
}


@Component({
  selector: 'app-other-open-requests',
  templateUrl: './other-open-requests.component.html',
  styleUrls: ['./other-open-requests.component.scss']
})
export class OtherOpenRequestsComponent implements OnInit, AfterViewInit {
  public displayedColumns = ['id', 'type','creator',  'name', 'additionalInformation', 'priority', 'assigned' ,'timeCreated' , 'action'];
  public dataSource = new MatTableDataSource<RequestTable>();
  public dateFrom: string;
  public dateTo: string;
  
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /*public filterLogsIntoTable() {
    this.backendAPI.authenticate().subscribe(() => {
      this.backendAPI.getFilteredLogs(this.dateFrom, this.dateTo, this.filterEventIdContainer, this.filterEvetNameContainer, this.filterUsername).subscribe(result => {
          this.dataSource.data = result as Log[];
        });
    });
  }*/

}
