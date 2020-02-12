import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-group-form-details',
  templateUrl: './group-form-details.component.html',
  styleUrls: ['./group-form-details.component.scss']
})
export class GroupFormDetailsComponent implements OnInit {
  @Input() groupRegistrationForm: FormGroup;
  constructor() { }

  ngOnInit() {
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
