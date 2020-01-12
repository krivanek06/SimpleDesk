import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApplicationPrivilege } from 'app/shared/models/Group';

@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})
export class PrivilegesComponent implements OnInit {
  @Input() public name;
  @Output() public resetButton: EventEmitter<any> = new EventEmitter();
  @Output() public saveButton: EventEmitter<ApplicationPrivilege> = new EventEmitter();

  public activateUnableClick = false;
  public enabledPrivileges: ApplicationPrivilege;
  public disabledPrivileges: ApplicationPrivilege;
  
  constructor() { 
    this.enabledPrivileges = {
      moduleTypesToUse : [],
      requestTypesToSolve : [],
      submitFinanceRequests: [],
      solveTickets: {
        Software : null,
        Hardware: null,
        Server: null,
        Other: [],
        User: []
      }
    }

    this.disabledPrivileges = {
      moduleTypesToUse : [],
      requestTypesToSolve : [],
      submitFinanceRequests: [],
      solveTickets: {
        Software : [],
        Hardware: [],
        Server: [],
        Other: [],
        User: []
      }
    }

  }

  private resetButtonClicked(){
    this.resetButton.emit();
  }

  private saveButtonClicked(){
    console.log(this.enabledPrivileges)
    this.saveButton.emit(this.enabledPrivileges);
  }

  ngOnInit() {
  }

  public changeModuleTypeToUse(name: string){
    if(!this.activateUnableClick){
      return;
    }

    if(this.enabledPrivileges.moduleTypesToUse.includes(name)){
      const index: number = this.enabledPrivileges.moduleTypesToUse.indexOf(name);
      this.enabledPrivileges.moduleTypesToUse.splice(index , 1);
      this.disabledPrivileges.moduleTypesToUse.push(name);
    }else{
      const index: number = this.disabledPrivileges.moduleTypesToUse.indexOf(name);
      this.disabledPrivileges.moduleTypesToUse.splice(index , 1);
      this.enabledPrivileges.moduleTypesToUse.push(name);
    }
    if(name === 'Financie'){
      this.changesubmitFinanceRequestsAll();
    }
  }

  public changeRequestTypeToSolve(name: string){
    if(!this.activateUnableClick){
      return;
    }

    if(this.enabledPrivileges.requestTypesToSolve.includes(name)){
      const index: number = this.enabledPrivileges.requestTypesToSolve.indexOf(name);
      this.enabledPrivileges.requestTypesToSolve.splice(index , 1);
      this.disabledPrivileges.requestTypesToSolve.push(name);
    }else{
      const index: number = this.disabledPrivileges.requestTypesToSolve.indexOf(name);
      this.disabledPrivileges.requestTypesToSolve.splice(index , 1);
      this.enabledPrivileges.requestTypesToSolve.push(name); 
    }
    if(name === 'Ticket'){
      this.changeTicketsAll();
    }
  }

  public changeTicketsAll(){
    if(!this.activateUnableClick){
      return;
    }
    this.disabledPrivileges.solveTickets.Software = this.disabledPrivileges.solveTickets.Software.concat(this.enabledPrivileges.solveTickets.Software);
    this.enabledPrivileges.solveTickets.Software = null;

    this.disabledPrivileges.solveTickets.Hardware = this.disabledPrivileges.solveTickets.Hardware.concat(this.enabledPrivileges.solveTickets.Hardware);
    this.enabledPrivileges.solveTickets.Hardware = null;

    this.disabledPrivileges.solveTickets.Server = this.disabledPrivileges.solveTickets.Server.concat(this.enabledPrivileges.solveTickets.Server);
    this.enabledPrivileges.solveTickets.Server = null;

    this.enabledPrivileges.solveTickets.Other = [];
    this.disabledPrivileges.solveTickets.Other.push('True');

    this.enabledPrivileges.solveTickets.User = [];
    this.disabledPrivileges.solveTickets.User.push('True');
    
  }

  public changesubmitFinanceRequests(name: string){
    if(!this.activateUnableClick || !this.enabledPrivileges.moduleTypesToUse.includes("Financie")){
      return;
    }

    if(this.enabledPrivileges.submitFinanceRequests.includes(name)){
      const index: number = this.enabledPrivileges.submitFinanceRequests.indexOf(name);
      this.enabledPrivileges.submitFinanceRequests.splice(index , 1);
      this.disabledPrivileges.submitFinanceRequests.push(name);
    }else{
      const index: number = this.disabledPrivileges.submitFinanceRequests.indexOf(name);
      this.disabledPrivileges.submitFinanceRequests.splice(index , 1);
      this.enabledPrivileges.submitFinanceRequests.push(name);
    }
  }

  public changesubmitFinanceRequestsAll(){
    if(!this.activateUnableClick ){
      return;
    }

    this.disabledPrivileges.submitFinanceRequests = this.disabledPrivileges.submitFinanceRequests.concat(this.enabledPrivileges.submitFinanceRequests);     
    this.enabledPrivileges.submitFinanceRequests = [];
    
  }

  public changeSolveTicketsSoftware(name: string){
    if(!this.activateUnableClick || !this.enabledPrivileges.requestTypesToSolve.includes("Ticket") ||
      this.enabledPrivileges.solveTickets.Software === null ){
      return;
    }

    if(this.enabledPrivileges.solveTickets.Software.includes(name)){
      const index: number = this.enabledPrivileges.solveTickets.Software.indexOf(name);
      this.enabledPrivileges.solveTickets.Software.splice(index , 1);
      this.disabledPrivileges.solveTickets.Software.push(name);
    }else{
      const index: number = this.disabledPrivileges.solveTickets.Software.indexOf(name);
      this.disabledPrivileges.solveTickets.Software.splice(index , 1);
      this.enabledPrivileges.solveTickets.Software.push(name);
    }
  }

  public changeSolveTicketsSoftwareAll(justClear ?:boolean){
    if(!this.activateUnableClick || !this.enabledPrivileges.requestTypesToSolve.includes("Ticket")){
      return;
    }
    if(this.enabledPrivileges.solveTickets.Software !== null || justClear){
      this.disabledPrivileges.solveTickets.Software = this.disabledPrivileges.solveTickets.Software.concat(this.enabledPrivileges.solveTickets.Software);
      this.enabledPrivileges.solveTickets.Software = null;
    }else{
      this.enabledPrivileges.solveTickets.Software = [];
    }
  }

  public changeSolveTicketsHardware(name: string){
    if(!this.activateUnableClick || !this.enabledPrivileges.requestTypesToSolve.includes("Ticket") || 
    this.enabledPrivileges.solveTickets.Hardware === null){
      return;
    }

    if(this.enabledPrivileges.solveTickets.Hardware.includes(name)){
      const index: number = this.enabledPrivileges.solveTickets.Hardware.indexOf(name);
      this.enabledPrivileges.solveTickets.Hardware.splice(index , 1);
      this.disabledPrivileges.solveTickets.Hardware.push(name);
    }else{
      const index: number = this.disabledPrivileges.solveTickets.Hardware.indexOf(name);
      this.disabledPrivileges.solveTickets.Hardware.splice(index , 1);
      this.enabledPrivileges.solveTickets.Hardware.push(name);
    }
  }

  public changeSolveTicketsHardwareAll(justClear ?:boolean){
    if(!this.activateUnableClick || !this.enabledPrivileges.requestTypesToSolve.includes("Ticket")){
      return;
    }
    if(this.enabledPrivileges.solveTickets.Hardware !== null || justClear){
      this.disabledPrivileges.solveTickets.Hardware = this.disabledPrivileges.solveTickets.Hardware.concat(this.enabledPrivileges.solveTickets.Hardware);
      this.enabledPrivileges.solveTickets.Hardware = null;
    }else{
      this.enabledPrivileges.solveTickets.Hardware = [];
    }
  }

  public changeSolveTicketsServer(name: string){
    if(!this.activateUnableClick || !this.enabledPrivileges.requestTypesToSolve.includes("Ticket") || 
     this.enabledPrivileges.solveTickets.Server === null){
      return;
    }

    if(this.enabledPrivileges.solveTickets.Server.includes(name)){
      const index: number = this.enabledPrivileges.solveTickets.Server.indexOf(name);
      this.enabledPrivileges.solveTickets.Server.splice(index , 1);
      this.disabledPrivileges.solveTickets.Server.push(name);
    }else{
      const index: number = this.disabledPrivileges.solveTickets.Server.indexOf(name);
      this.disabledPrivileges.solveTickets.Server.splice(index , 1);
      this.enabledPrivileges.solveTickets.Server.push(name);
    }
  }

  public changeSolveTicketsServerAll(justClear ?:boolean){
    if(!this.activateUnableClick || !this.enabledPrivileges.requestTypesToSolve.includes("Ticket")){
      return;
    }
    if(this.enabledPrivileges.solveTickets.Server !== null || justClear){
      this.disabledPrivileges.solveTickets.Server = this.disabledPrivileges.solveTickets.Server.concat(this.enabledPrivileges.solveTickets.Server);
      this.enabledPrivileges.solveTickets.Server = null;
    }else{
      this.enabledPrivileges.solveTickets.Server = [];
    }
  }

  public changeSolveTicketsUserAll(justClear ?: boolean){
    if(!this.activateUnableClick || !this.enabledPrivileges.requestTypesToSolve.includes("Ticket")){
      return;
    }

    if(this.enabledPrivileges.solveTickets.User.length > 0 || justClear){
      this.enabledPrivileges.solveTickets.User = [];
      this.disabledPrivileges.solveTickets.User.push('True');
    }else{
      this.disabledPrivileges.solveTickets.User = [];
      this.enabledPrivileges.solveTickets.User.push('True');
    }
  }


  public changeSolveTicketsOtherAll(justClear ?: boolean){
    if(!this.activateUnableClick || !this.enabledPrivileges.requestTypesToSolve.includes("Ticket")){
      return;
    }
    if(this.enabledPrivileges.solveTickets.Other.length > 0 || justClear){
      this.enabledPrivileges.solveTickets.Other = [];
      this.disabledPrivileges.solveTickets.Other.push('True');
    }else{
      this.disabledPrivileges.solveTickets.Other = [];
      this.enabledPrivileges.solveTickets.Other.push('True');
    }
  }
}