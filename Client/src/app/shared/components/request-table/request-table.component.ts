import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { RequestTable } from 'app/shared/models/RequestTable';
import { UserService } from 'app/core/services/user.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.scss']
})
export class RequestTableComponent implements OnInit {
  @Input() public displayedColumns = []; // table columns to diplay
  @Input() public headerColor:string; // table header color
  @Input() public displayAssignToMe: boolean = false; 
  @Input() public tableTitle: string;

  @Output() assignOnMeEmitter: EventEmitter<RequestTable> = new EventEmitter<RequestTable>();
  @Output() removeFromMeEmitter: EventEmitter<RequestTable> = new EventEmitter<RequestTable>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
 // @ViewChild('TABLE', { static: false }) table: ElementRef;

  public dataSource:MatTableDataSource<RequestTable> = new MatTableDataSource<RequestTable>();
  dateFrom: string;
  dateTo: string;
  
  
  constructor(public userService: UserService, private router:Router, private sanitizer: DomSanitizer) { }

  ngOnInit() {  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  assignOnMe(request: RequestTable){
    this.assignOnMeEmitter.emit(request);
  }


  removeFromMe(request: RequestTable){
      this.removeFromMeEmitter.emit(request);
  }

  navigateToDetails(id : number){
    this.router.navigateByUrl(`request_details/${id}`);
  }

  getImage(bytes: string): SafeUrl{
    let objectURL = 'data:image/png;base64,' + bytes;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }


}
