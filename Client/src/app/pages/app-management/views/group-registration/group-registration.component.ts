import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Group } from 'app/shared/models/UserGroups';
import { GroupFormComponent } from 'app/resources/group/view/group-form/group-form.component';
import { GroupHttpService } from 'app/api/group-http.service';
import { SwallNotificationService } from 'app/shared/services/swall-notification.service';

@Component({
  selector: 'app-group-registration',
  templateUrl: './group-registration.component.html',
  styleUrls: ['./group-registration.component.scss']
})
export class GroupRegistrationComponent implements OnInit {
  @ViewChild('groupForm',  {static: false}) groupForm: GroupFormComponent;
  groupRegistrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder, 
              private groupHttp: GroupHttpService,
              private swallNotification: SwallNotificationService) { }

  ngOnInit() {
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

  registerGroup(group: Group): void{
    console.log(group);
    this.groupHttp.registerGroup(group).subscribe(() => {
      this.groupForm.resetForm();
      this.swallNotification.generateNotification(`Skupina ${group.name} bola vytvorená`);
    })
  }

}
