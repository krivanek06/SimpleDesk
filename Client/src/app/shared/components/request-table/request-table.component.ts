import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { RequestTable } from 'app/shared/models/RequestTable';
import { UserService } from 'app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.scss']
})
export class RequestTableComponent implements OnInit {
  @Input() public displayedColumns = [];
  @Input() public headerColor:string;
  @Input() public displayAssignToMe: boolean;
  @Input() public tableTitle: string;

  public dataSource = new MatTableDataSource<RequestTable>();
  public dateFrom: string;
  public dateTo: string;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  
  constructor(public userService: UserService) { }

  ngOnInit() {  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private assignOnMe(requestId: number){
    Swal.fire({
      text: "Naozaj chcetete prideliť na seba požiadavku s id : " + requestId + " ? ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Zrušiť",
      confirmButtonText: 'Ano'
    }).then((result) => {
      if (result.value) {
        Swal.fire( 'Pridelené', '','success' )
      }
    })
  }


  private removeFromMe(requestId: number){
    Swal.fire({
      text: "Naozaj chcetete odstrániť zo seba požiadavku s id : " + requestId + " ? ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Zrušiť",
      confirmButtonText: 'Ano'
    }).then((result) => {
      if (result.value) {
        Swal.fire( 'Odstránené', '','success' )
      }
    })
  }

}
