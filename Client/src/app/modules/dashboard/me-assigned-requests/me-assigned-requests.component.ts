import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { RequestTable } from 'app/shared/models/RequestTable';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export interface SatDatepickerRangeValue<D> {
  begin: D | null;
  end: D | null;
}


@Component({
  selector: 'app-me-assigned-requests',
  templateUrl: './me-assigned-requests.component.html',
  styleUrls: ['./me-assigned-requests.component.scss']
})
export class MeAssignedRequestsComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['id', 'type','creator',  'name',
   'additionalInformation', 'priority','assigned', 'userAction' ,'timeCreated' , 'action'];
  public dataSource = new MatTableDataSource<RequestTable>();
  public dateFrom: string;
  public dateTo: string;
  public imageBase64: SafeUrl;
  
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
