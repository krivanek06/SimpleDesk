import { Component, OnInit, Input } from '@angular/core';
import { ApplicationPrivilege } from 'app/shared/models/Group';

@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})
export class PrivilegesComponent implements OnInit {
  @Input() public name;

  public enabledPrivileges: ApplicationPrivilege;
  public disabledPrivileges: ApplicationPrivilege;
  
  constructor() { }

  ngOnInit() {
  }

  private canSolveTickets():boolean {
    return (this.enabledPrivileges !== undefined && (this.enabledPrivileges.solveTickets.Software.length > 0 ||
    this.enabledPrivileges.solveTickets.Hardware.length > 0 ||
    this.enabledPrivileges.solveTickets.Server.length > 0 || 
    this.enabledPrivileges.solveTickets.User.length > 0 || 
    this.enabledPrivileges.solveTickets.Other.length > 0)) ||

    (this.disabledPrivileges !== undefined && ( this.disabledPrivileges.solveTickets.Software.length > 0 ||
    this.disabledPrivileges.solveTickets.Hardware.length > 0 ||
    this.disabledPrivileges.solveTickets.Server.length > 0 || 
    this.disabledPrivileges.solveTickets.User.length > 0 || 
    this.disabledPrivileges.solveTickets.Other.length > 0 )); 
  }

}
