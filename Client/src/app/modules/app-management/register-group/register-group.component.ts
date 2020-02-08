import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'app/core/services/user.service';
import { UserSimpleDTO, ApplicationPrivilege, Group } from 'app/shared/models/UserGroups';
import { RequestTypeService } from 'app/core/services/request-type.service';
import { FinanceType } from 'app/shared/models/FinanceType';
import { TicketType } from 'app/shared/models/TicketSubtype';
import { GroupService } from 'app/core/services/group.service';
import Swal from 'sweetalert2';
import { SwallNotificationService } from 'app/shared/services/swall-notification.service';

@Component({
  selector: 'app-register-group',
  templateUrl: './register-group.component.html',
  styleUrls: ['./register-group.component.scss']
})
export class RegisterGroupComponent implements OnInit {
  groupRegistrationForm: FormGroup;
  public allAvailableUsers: UserSimpleDTO[] = [];
  public financeTypes: FinanceType[] = [];
  public softwares: TicketType[];
  public hardwares: TicketType[];
  public servers: TicketType[];   
  @ViewChild('groupFormViewChild',  {static: true}) groupFormViewChild;

  constructor(private formBuilder: FormBuilder, 
              public userService: UserService, 
              public requestTypeService: RequestTypeService, 
              private groupService: GroupService,
              private swallNotification: SwallNotificationService) { }

  ngOnInit() {
    this.initFormGroup();

    this.userService.getAllActiveUsers().subscribe(users => this.allAvailableUsers = users);
    this.requestTypeService.getFinanceTypesAll().subscribe(types => this.financeTypes = types);
    this.requestTypeService.getTicketSubtype("Software").subscribe(x => this.softwares = x);
    this.requestTypeService.getTicketSubtype("Hardware").subscribe(x => this.hardwares = x);
    this.requestTypeService.getTicketSubtype("Server").subscribe(x => this.servers = x);
  }

  private initFormGroup(){
    this.groupRegistrationForm = this.formBuilder.group({
      groupName: ['' , [
        Validators.required,
        Validators.minLength(3),
      ]],
      groupEmail: ['' , [
        Validators.email
      ]],
      groupDescription: ['' , [
        Validators.required,
        Validators.minLength(10),
      ]],
      groupManager: [ null , [
        Validators.required
      ]],
      usersWatchGroup: [],
      usersInGroup: [ null , [
        Validators.required
      ]],
      moduleTypesToUse: [],
      submitFinanceRequests: [],
      requestTypesToSolve: [],
      solveTickets: [],
      solveSoftware: [],
      solveHardware: [],
      solveServer: []
    })
  }

 submit(){
    if(this.groupRegistrationForm.invalid){
        return;
    }
    this.swallNotification.generateQuestion(`Naozaj chcetete vytvoriť skupinu ?`).then((res) => {
      if(res.value){
        this.swallNotification.generateNotification(`Žiadosť o vytvorenie skupiny bolo zaslané`);
        const group = this.consructGroup();
        this.groupService.registerGroup(group).subscribe(() => {
          this.groupFormViewChild.resetForm();
          this.swallNotification.generateNotification(`Skupina ${group.name} bola vytvorená`);
        })
      }
    });
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
