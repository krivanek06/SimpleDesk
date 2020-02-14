import {Component, OnInit, ViewChild} from '@angular/core';
import {UserSimpleDTO} from 'app/shared/models/UserGroups';
import {UserHttpService} from 'app/api/user-http.service';
import {SwallNotificationService} from 'app/shared/services/swall-notification.service';
import {UserFormComponent} from 'app/resources/user/views/user-form/user-form.component';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  @ViewChild('userForm', {static: false}) userForm: UserFormComponent;

  constructor(private userHttp: UserHttpService, private swallNotification: SwallNotificationService) {
  }

  ngOnInit() {
  }

  userRegistration(userSimpleDTO: UserSimpleDTO): void {
    this.swallNotification.generateQuestion(`Naozaj chcetete vytvoriť uživateľa ?`).then((res) => {
      if (res.value) {
        this.swallNotification.generateNotification(`Žiadosť o vytvorenie uživateľa bolo zaslané`);

        this.userHttp.registerUser(userSimpleDTO).subscribe(() => {
          this.swallNotification.generateNotification(`Uživateľ bol zaregistrovaný, emailom sa bude notifikovať`);
          this.userForm.resetForm();
        });
      }
    });
  }
}