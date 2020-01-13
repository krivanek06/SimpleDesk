import { Component, OnInit, ViewChild, Input } from '@angular/core';
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

  public dataSource = new MatTableDataSource<RequestTable>();
  public dateFrom: string;
  public dateTo: string;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  
  constructor(public userService: UserService, private requestService: RequestModificationService, private router:Router) { }

  ngOnInit() {  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  public assignOnMe(requestId: number): void{
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
         this.requestService.assignOrRemoveRequestOnMe(requestId, true).subscribe(result => {
           Swal.fire( 'Pridelené', 'Úspešne ste na seba pridelili požiadavku s id: ' + requestId,'success' );
         })
       }
     });   
  }


   public removeFromMe(requestId: number): void{
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
          this.requestService.assignOrRemoveRequestOnMe(requestId, false).subscribe(result => {
            Swal.fire( 'Odstranené', 'Úspešne ste odstránili zo seba požiadavku s id : ' + requestId,'success' );
          })
        }
      })
  }

  private navigateToDetails(id : number){
    this.router.navigateByUrl(`request_details/${id}`);
  }

}
