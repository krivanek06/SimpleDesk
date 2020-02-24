import {Component, OnInit, ViewChild, Output, EventEmitter, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UserSimpleDTO} from 'app/resources/user/model/User';
import {FinanceType} from "../../../../../resources/request/model/interface/Finance";
import {TicketType} from "../../../../../resources/request/model/interface/Ticket";
import {Group} from "../../../../../resources/group/model/Group";
import {ApplicationPrivilege} from "../../../../../resources/privilege/model/Privilege";

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {

  groupRegistrationForm: FormGroup;
  @Input() allAvailableUsers: UserSimpleDTO[] = [];
  @Input() financeTypes: FinanceType[] = [];
  @Input() softwares: TicketType[];
  @Input() hardwares: TicketType[];
  @Input() servers: TicketType[];

  @Output() groupRegistrationEmitter: EventEmitter<Group> = new EventEmitter();

  @ViewChild('groupFormViewChild', {static: true}) groupFormViewChild;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.groupRegistrationForm = this.formBuilder.group({
      groupName: ['', [
        Validators.required,
        Validators.minLength(3),
      ]],
      groupEmail: ['', [
        Validators.email
      ]],
      groupDescription: ['', [
        Validators.required,
        Validators.minLength(10),
      ]],
      groupManager: [null, [
        Validators.required
      ]],
      usersWatchGroup: [],
      usersInGroup: [null, [
        Validators.required
      ]],
      moduleTypesToUse: [],
      submitFinanceRequests: [],
      requestTypesToSolve: [],
      solveTickets: [],
      solveSoftware: [],
      solveHardware: [],
      solveServer: []
    });
  }

  submit() {
    if (this.groupRegistrationForm.invalid) {
      return;
    }

    const group = this.consructGroup();
    this.groupRegistrationEmitter.emit(group);


  }

  public resetForm(): void {
    this.groupFormViewChild.resetForm();
  }

  private consructGroup(): Group {
    let ticketpriv: any = {};
    if (this.solveTickets.value !== null) {
      ticketpriv = {
        Software: this.solveSoftware.value === null ? [] : this.solveSoftware.value,
        Hardware: this.solveHardware.value === null ? [] : this.solveHardware.value,
        Server: this.solveServer.value === null ? [] : this.solveServer.value,
        User: this.solveTickets.value.includes('User') ? ["True"] : [],
        Other: this.solveTickets.value.includes('Other') ? ["True"] : []
      };
    }

    const privilege: ApplicationPrivilege = {
      moduleTypesToUse: this.moduleTypesToUse.value === null ? [] : this.moduleTypesToUse.value,
      requestTypesToSolve: this.requestTypesToSolve.value === null ? [] : this.requestTypesToSolve.value,
      solveTickets: ticketpriv,
      submitFinanceRequests: this.submitFinanceRequests.value === null ? [] : this.submitFinanceRequests.value
    };

    const group: Group = {
      name: this.groupName.value.charAt(0).toUpperCase() + this.groupName.value.slice(1),
      description: this.groupDescription.value,
      email: this.groupEmail.value,
      groupManager: this.groupManager.value,
      usersInGroup: this.usersInGroup.value === null ? [] : this.usersInGroup.value,
      usersWatchGroup: this.usersWatchGroup.value === null ? [] : this.usersWatchGroup.value,
      applicationPrivilegeDTO: privilege,
      unsetApplicationPrivilegeDTO: null
    };
    return group;
  }

  changeModuleTypesToUse() {
    if (!this.moduleTypesToUse.value.includes("Finance")) {
      this.submitFinanceRequests.reset();
    }
  }

  changeTicketTypeToSolve() {
    if (!this.requestTypesToSolve.value.includes("Ticket")) {
      this.solveSoftware.reset();
      this.solveHardware.reset();
      this.solveServer.reset();
      this.solveTickets.reset();
    }
    if (this.solveTickets.value !== null) {
      if (!this.solveTickets.value.includes("Software")) {
        this.solveSoftware.reset();
      }
      if (!this.solveTickets.value.includes("Hardware")) {
        this.solveHardware.reset();
      }
      if (!this.solveTickets.value.includes("Server")) {
        this.solveServer.reset();
      }
    }
  }

  get groupName() {
    return this.groupRegistrationForm.get("groupName");
  }

  get groupEmail() {
    return this.groupRegistrationForm.get("groupEmail");
  }

  get groupDescription() {
    return this.groupRegistrationForm.get("groupDescription");
  }

  get groupManager() {
    return this.groupRegistrationForm.get("groupManager");
  }

  get usersWatchGroup() {
    return this.groupRegistrationForm.get("usersWatchGroup");
  }

  get usersInGroup() {
    return this.groupRegistrationForm.get("usersInGroup");
  }

  get moduleTypesToUse() {
    return this.groupRegistrationForm.get("moduleTypesToUse");
  }

  get submitFinanceRequests() {
    return this.groupRegistrationForm.get("submitFinanceRequests");
  }

  get requestTypesToSolve() {
    return this.groupRegistrationForm.get("requestTypesToSolve");
  }

  get solveTickets() {
    return this.groupRegistrationForm.get("solveTickets");
  }

  get solveSoftware() {
    return this.groupRegistrationForm.get("solveSoftware");
  }

  get solveHardware() {
    return this.groupRegistrationForm.get("solveHardware");
  }

  get solveServer() {
    return this.groupRegistrationForm.get("solveServer");
  }

}
