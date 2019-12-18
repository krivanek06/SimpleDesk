import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { CustomRequest } from 'app/shared/models/CustomRequest';


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

}
