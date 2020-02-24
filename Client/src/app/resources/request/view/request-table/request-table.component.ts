import {Component, OnInit, ViewChild, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import {RequestTable} from 'app/resources/request/model/interface/RequestTable';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.scss']
})
export class RequestTableComponent implements OnInit, AfterViewInit {
  @Input() displayedColumns = []; // table columns to diplay
  @Input() headerColor: string; // table header color
  @Input() displayAssignToMe = false;
  @Input() displayDownloadExcel = false;
  @Input() tableTitle: string;

  @Output() assignOnMeEmitter: EventEmitter<RequestTable> = new EventEmitter<RequestTable>();
  @Output() removeFromMeEmitter: EventEmitter<RequestTable> = new EventEmitter<RequestTable>();
  @Output() moveToDetails: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<RequestTable> = new MatTableDataSource<RequestTable>();
  @Input() numberOfRequests: number;

  dateFrom: string;
  dateTo: string;


  constructor() {
  }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  assignOnMe(request: RequestTable) {
    this.assignOnMeEmitter.emit(request);
  }


  removeFromMe(request: RequestTable) {
    this.removeFromMeEmitter.emit(request);
  }

  navigateToDetails(id: number) {
    this.moveToDetails.emit(id);
  }
}
