import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { RequestTable } from 'app/shared/models/RequestTable';
import { UserService } from 'app/core/services/user.service';
import Swal from 'sweetalert2';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RequestModificationService } from 'app/core/services/request-modification.service';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.scss']
})
export class RequestTableComponent implements OnInit {
  @Input() public displayedColumns = [];
  @Input() public headerColor:string;
  @Input() public displayAssignToMe: boolean = false;
  @Input() public tableTitle: string;

  @Output() assignOnMeEmitter: EventEmitter<RequestTable> = new EventEmitter<RequestTable>();
  @Output() removeFromMeEmitter: EventEmitter<RequestTable> = new EventEmitter<RequestTable>();

  public dataSource = new MatTableDataSource<RequestTable>();
  public dateFrom: string;
  public dateTo: string;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  
  constructor(public userService: UserService, private requestService: RequestModificationService, private router:Router) { }

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
