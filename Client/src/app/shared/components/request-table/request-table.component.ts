import {Component, OnInit, ViewChild, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import {RequestTable} from 'app/shared/models/RequestTable';
import {UserStoreService} from 'app/core/services/user-store.service';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.scss']
})
export class RequestTableComponent implements OnInit, AfterViewInit {
  @Input() displayedColumns = []; // table columns to diplay
  @Input() headerColor: string; // table header color
  @Input() displayAssignToMe = false;
  @Input() tableTitle: string;

  @Output() assignOnMeEmitter: EventEmitter<RequestTable> = new EventEmitter<RequestTable>();
  @Output() removeFromMeEmitter: EventEmitter<RequestTable> = new EventEmitter<RequestTable>();
  @Output() moveToDetails: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  dataSource: MatTableDataSource<RequestTable> = new MatTableDataSource<RequestTable>();
  @Input() numberOfRequests: number;

  dateFrom: string;
  dateTo: string;


  constructor(public userService: UserStoreService) {
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

  // whole dashboard lagged for this shit !!!
  /*getImage(bytes: string): SafeUrl {
    const objectURL = 'data:image/png;base64,' + bytes;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }*/


}
