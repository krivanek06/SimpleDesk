import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Group} from "../../../../../core/model/Group";
import {FinanceType, TicketPrivilege, TicketType} from "../../../../requirement/model/Request";
import {ApplicationPrivilege, User} from "../../../../../core/model/User";
import {UserConstructorService} from "../../../../../core/services/user-constructor.service";
import {GroupConstructorService} from "../../../../../core/services/group-constructor.service";

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupFormComponent implements OnInit {

  groupRegistrationForm: FormGroup;


  @Input() allAvailableUsers: User[] = [];
  @Input() financeTypes: FinanceType[] = [];
  @Input() softwares: TicketType[];
  @Input() hardwares: TicketType[];
  @Input() servers: TicketType[];

  @Output() groupRegistrationEmitter: EventEmitter<Group> = new EventEmitter();

  @ViewChild('groupFormViewChild') groupFormViewChild;

  constructor(private formBuilder: FormBuilder,
              private groupConstructorService: GroupConstructorService) {
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
    let ticketpriv: TicketPrivilege;

    if (this.solveTickets.value !== null) {
      ticketpriv = UserConstructorService.constructTicketPrivilege(
        this.solveSoftware.value,
        this.solveHardware.value,
        this.solveServer.value,
        this.solveTickets.value
      );
    }
    const privilege: ApplicationPrivilege = UserConstructorService.constructApplicationPrivilege(
      this.moduleTypesToUse.value,
      this.requestTypesToSolve.value,
      ticketpriv,
      this.submitFinanceRequests.value);

    return this.groupConstructorService.constructGroup(
      this.groupName.value.charAt(0).toUpperCase() + this.groupName.value.slice(1),
      this.groupDescription.value,
      this.groupEmail.value,
      this.groupManager.value,
      this.usersInGroup.value,
      this.usersWatchGroup.value,
      privilege
    );
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
