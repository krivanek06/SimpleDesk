import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Request} from "../../model/Request";
import {RequestType} from "../../model/request.enum";
import {MatSort, Sort} from "@angular/material/sort";

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestTableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() displayedColumns = []; // table columns to diplay
  @Input() headerColor: string; // table header color
  @Input() displayAssignToMe = false;
  @Input() displayDownloadExcel = false;
  @Input() tableTitle: string;
  @Input() data: Request[] = [];

  @Output() assignOnMeEmitter: EventEmitter<Request> = new EventEmitter<Request>();
  @Output() removeFromMeEmitter: EventEmitter<Request> = new EventEmitter<Request>();
  @Output() seenLogsEmitter: EventEmitter<Request> = new EventEmitter<Request>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Request> = new MatTableDataSource<Request>();

  requestType: typeof RequestType = RequestType;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource.data = [...this.data];
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  removeLogs(request: Request) {
    this.seenLogsEmitter.emit(request);
  }


  assignOnMe(request: Request) {
    this.assignOnMeEmitter.emit(request);
  }

  removeFromMe(request: Request) {
    this.removeFromMeEmitter.emit(request);
  }

  trackBy(index: number, item: Request) {
    return item.id;
  }

  sortData($event: Sort) {

  }
}
