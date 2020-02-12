import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserStoreService } from 'app/core/services/user-store.service';
import { UserSimpleDTO, ApplicationPrivilege, Group } from 'app/shared/models/UserGroups';
import { FinanceType } from 'app/shared/models/FinanceType';
import { TicketType } from 'app/shared/models/TicketSubtype';
import { GroupHttpService } from 'app/api/group-http.service';
import Swal from 'sweetalert2';
import { SwallNotificationService } from 'app/shared/services/swall-notification.service';
import { UserHttpService } from 'app/api/user-http.service';
import { RequestHttpService } from 'app/api/request-http.service';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {
  @Output() groupRegistrationEmitter: EventEmitter<Group> = new EventEmitter();
  @Input() groupRegistrationForm: FormGroup;
  allAvailableUsers: UserSimpleDTO[] = [];
  financeTypes: FinanceType[] = [];
  softwares: TicketType[];
  hardwares: TicketType[];
  servers: TicketType[];   
  @ViewChild('groupFormViewChild',  {static: true}) groupFormViewChild;

  constructor(private formBuilder: FormBuilder, 
              public userService: UserStoreService, 
              public requestHttp: RequestHttpService, 
              private swallNotification: SwallNotificationService,
              private userHttp: UserHttpService) { }

  ngOnInit() {
    //this.initFormGroup();

    this.userHttp.getAllActiveUsers().subscribe(users => this.allAvailableUsers = users);
    this.requestHttp.getFinanceTypesAll().subscribe(types => this.financeTypes = types);
    this.requestHttp.getTicketSubtype("Software").subscribe(x => this.softwares = x);
    this.requestHttp.getTicketSubtype("Hardware").subscribe(x => this.hardwares = x);
    this.requestHttp.getTicketSubtype("Server").subscribe(x => this.servers = x);
  }

  private initFormGroup(){
    
  }

 submit(){
    if(this.groupRegistrationForm.invalid){
        return;
    }
    this.swallNotification.generateQuestion(`Naozaj chcetete vytvoriť skupinu ?`).then((res) => {
      if(res.value){
        this.swallNotification.generateNotification(`Žiadosť o vytvorenie skupiny bolo zaslané`);
        const group = this.consructGroup();
        this.groupRegistrationEmitter.emit(group);
       /* this.groupService.registerGroup(group).subscribe(() => {
          this.groupFormViewChild.resetForm();
          this.swallNotification.generateNotification(`Skupina ${group.name} bola vytvorená`);
        })*/
      }
    });
  }

  public resetForm(): void{
    this.groupFormViewChild.resetForm();
  }

  private consructGroup(): Group {
    let ticketpriv:any = {};
    if(this.solveTickets.value !== null){
        ticketpriv = {
          "Software" : this.solveSoftware.value === null ? [] : this.solveSoftware.value,
          "Hardware" : this.solveHardware.value === null ? [] : this.solveHardware.value,
          "Server" : this.solveServer.value === null ? [] : this.solveServer.value,
          "User" : this.solveTickets.value.includes('User') ? ["True"] : [],
          "Other" : this.solveTickets.value.includes('Other') ? ["True"] : []
      }
    }

    const privilege : ApplicationPrivilege = {
      moduleTypesToUse : this.moduleTypesToUse.value === null ? [] : this.moduleTypesToUse.value,
      requestTypesToSolve: this.requestTypesToSolve.value === null ? [] : this.requestTypesToSolve.value,
      solveTickets: ticketpriv,
      submitFinanceRequests: this.submitFinanceRequests.value === null ? [] : this.submitFinanceRequests.value
    }

    const group : Group = {
      name :  this.groupName.value.charAt(0).toUpperCase() + this.groupName.value.slice(1),
      description: this.groupDescription.value,
      email : this.groupEmail.value,
      groupManager : this.groupManager.value,
      usersInGroup : this.usersInGroup.value === null ? [] : this.usersInGroup.value,
      usersWatchGroup : this.usersWatchGroup.value === null ? [] : this.usersWatchGroup.value,
      applicationPrivilegeDTO : privilege,
      unsetApplicationPrivilegeDTO: null
    }
    return group;
  }

  changeModuleTypesToUse(){
    if( !this.moduleTypesToUse.value.includes("Finance")){
      this.submitFinanceRequests.reset();
    }
  }

  changeTicketTypeToSolve(){
    if(!this.requestTypesToSolve.value.includes("Ticket")){
      this.solveSoftware.reset();
      this.solveHardware.reset();
      this.solveServer.reset();
      this.solveTickets.reset();
    } 
    if(this.solveTickets.value !== null){
      if(!this.solveTickets.value.includes("Software")){
        this.solveSoftware.reset();
      } 
      if(!this.solveTickets.value.includes("Hardware")){
        this.solveHardware.reset();
      } 
      if(!this.solveTickets.value.includes("Server")){
        this.solveServer.reset();
      }
    }
  }

  get groupName(){
    return this.groupRegistrationForm.get("groupName");
  }

  get groupEmail(){
    return this.groupRegistrationForm.get("groupEmail");
  }

  get groupDescription(){
    return this.groupRegistrationForm.get("groupDescription");
  }

  get groupManager(){
    return this.groupRegistrationForm.get("groupManager");
  }

  get usersWatchGroup(){
    return this.groupRegistrationForm.get("usersWatchGroup");
  }

  get usersInGroup(){
    return this.groupRegistrationForm.get("usersInGroup");
  }

  get moduleTypesToUse(){
    return this.groupRegistrationForm.get("moduleTypesToUse");
  }

  get submitFinanceRequests(){
    return this.groupRegistrationForm.get("submitFinanceRequests");
  }

  get requestTypesToSolve(){
    return this.groupRegistrationForm.get("requestTypesToSolve");
  }

  get solveTickets(){
    return this.groupRegistrationForm.get("solveTickets");
  }

  get solveSoftware(){
    return this.groupRegistrationForm.get("solveSoftware");
  }

  get solveHardware(){
    return this.groupRegistrationForm.get("solveHardware");
  }

  get solveServer(){
    return this.groupRegistrationForm.get("solveServer");
  }

}
