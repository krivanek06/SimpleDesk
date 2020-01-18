import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { RequestTable } from 'app/shared/models/RequestTable';
import { UserService } from 'app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.scss']
})
export class RequestTableComponent implements OnInit {
  @Input() public displayedColumns = []; // table columne to diplay
  @Input() public headerColor:string; // table header color
  @Input() public displayAssignToMe: boolean = false; 
  @Input() public tableTitle: string;

  @Output() assignOnMeEmitter: EventEmitter<RequestTable> = new EventEmitter<RequestTable>();
  @Output() removeFromMeEmitter: EventEmitter<RequestTable> = new EventEmitter<RequestTable>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  public dataSource = new MatTableDataSource<RequestTable>();
  public dateFrom: string;
  public dateTo: string;
  
  
  constructor(public userService: UserService, private router:Router) { }

  ngOnInit() {  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  public assignOnMe(request: RequestTable): void{
    this.assignOnMeEmitter.emit(request);
  }


   public removeFromMe(request: RequestTable): void{
      this.removeFromMeEmitter.emit(request);
  }

  private navigateToDetails(id : number){
    this.router.navigateByUrl(`request_details/${id}`);
  }

}
