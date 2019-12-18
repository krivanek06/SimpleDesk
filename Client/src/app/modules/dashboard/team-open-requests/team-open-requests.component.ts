import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { CustomRequest } from 'app/shared/models/CustomRequest';


export interface SatDatepickerRangeValue<D> {
  begin: D | null;
  end: D | null;
}
@Component({
  selector: 'app-team-open-requests',
  templateUrl: './team-open-requests.component.html',
  styleUrls: ['./team-open-requests.component.scss']
})
export class TeamOpenRequestsComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['id', 'type','creator',  'name', 'information', 'priority', 'assigned' ,'timeCreated' , 'action'];
  public dataSource = new MatTableDataSource<CustomRequest>();
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
