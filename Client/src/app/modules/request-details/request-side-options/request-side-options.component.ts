import { Component, OnInit, Input } from '@angular/core';
import { UserSimpleDTO } from 'app/shared/models/Group';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { RequestDetails, UserSimple } from 'app/shared/models/RequestDetails';
import { UserService } from 'app/core/services/user.service';
import { RequestModificationService } from 'app/core/services/request-modification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-side-options',
  templateUrl: './request-side-options.component.html',
  styleUrls: ['./request-side-options.component.scss']
})
export class RequestSideOptionsComponent implements OnInit {
  
  public allusers: UserSimpleDTO[] = [];
  private priority: string;
  private userSimple: UserSimple;

  @Input() public requestDetails: RequestDetails;

  constructor(private http: HttpClient, private userService: UserService, private requestService: RequestModificationService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  private getAllUsers(){
    this.http.get<UserSimpleDTO[]>(environment.apiUrl + "user/secure/all").subscribe(users =>{
      this.allusers = users;
    })
  }

  private changePriority(){
    if(this.priority === undefined){
      return;
    }

    this.requestService.changePriority(this.requestDetails.id, this.priority).subscribe(() => {
      this.requestDetails.requestPriority = this.priority;
      Swal.fire({ position: 'top-end',icon: 'success', title: 'Priorita bola zmenená', showConfirmButton: false, timer: 1500 })
    })
  }

  private changeAssignedUser(){
    if(this.userSimple === undefined){
      return;
    }
    
    this.requestService.assignSolver(this.requestDetails.id, this.userSimple).subscribe((userSimple) => {
      this.requestDetails.assigned = userSimple;
      Swal.fire({ position: 'top-end',icon: 'success', title: 'Riešiteľ zmenený', showConfirmButton: false, timer: 1500 })
    })
  }

  private changeCommenting(){
    this.requestService.changeCommenting(this.requestDetails.id).subscribe(() => {
      this.requestDetails.allowCommenting = ! this.requestDetails.allowCommenting;
      if(this.requestDetails.allowCommenting){
        Swal.fire({ position: 'top-end',icon: 'success', title: 'Komentovanie požiadavky sa zakázalo', showConfirmButton: false, timer: 1500 })
      }else{
        Swal.fire({ position: 'top-end',icon: 'success', title: 'Komentovanie požiadavky sa povolilo', showConfirmButton: false, timer: 1500 })
      }
    })

  }

  private closeRequest(){
    Swal.fire({ text: "Naozaj chcetete uzatvoriť požiadavku ?", icon: 'warning', showCancelButton: true,
    confirmButtonColor: '#3085d6',  cancelButtonColor: '#d33',  cancelButtonText: "Zrušiť",  confirmButtonText: 'Ano'
  }).then((result) => {
    if (result.value) {
      this.requestService.changeState(this.requestDetails.id, true).subscribe(() =>{
        this.requestDetails.closed = this.userService.getUserSimple();
        this.requestDetails.timestampClosed = new Date();
        Swal.fire(  '', 'Požiadavka ' + this.requestDetails.id + ". bola uzavretá.", 'success'  )
      }) 
    }
  })
    
  }

  private reopenRequest(){
    Swal.fire({ text: "Naozaj chcetete znovu otvoriť požiadavku ?", icon: 'warning', showCancelButton: true,
    confirmButtonColor: '#3085d6',  cancelButtonColor: '#d33',  cancelButtonText: "Zrušiť",  confirmButtonText: 'Ano'
  }).then((result) => {
    if (result.value) {
        this.requestService.changeState(this.requestDetails.id, false).subscribe(() =>{
          this.requestDetails.closed = null;
          this.requestDetails.timestampClosed = null;
          Swal.fire(  '', 'Požiadavka ' + this.requestDetails.id + ". bola otvorená.", 'success'  );
        }) 
      }
    })
  }

  private selectedPriority(priority: string){
    this.priority = priority;
   
  }

  private selectedUser(userSimple: UserSimple){
    this.userSimple = userSimple;
  }


}
