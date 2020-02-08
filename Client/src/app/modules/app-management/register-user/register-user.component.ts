import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserSimpleDTO } from 'app/shared/models/UserGroups';
import { UserService } from 'app/core/services/user.service';
import Swal from 'sweetalert2';
import { SwallNotificationService } from 'app/shared/services/swall-notification.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  userRegistrationForm: FormGroup;

  @ViewChild('userFormViewChild',  {static: true}) userFormViewChild;

  constructor(private formBuilder: FormBuilder, 
              private userService: UserService,
              private swallNotification: SwallNotificationService) { }

  ngOnInit() {
    this.userRegistrationForm = this.formBuilder.group({
      firstname: ['' , [
        Validators.required,
      ]],
      lastname: ['' , [
        Validators.required,
      ]],
      username: ['' , [
        Validators.required,
      ]],
      email: ['' , [
        Validators.required,
        Validators.email
      ]],
    })
  }

  submit(){
    if(this.userRegistrationForm.invalid){
      return;
    }
    
    const formValues = this.userRegistrationForm.value;
    const userRegistraion: UserSimpleDTO = {
      username : formValues.username.trim().toLowerCase(),
      firstName : formValues.firstname.trim(),
      lastName : formValues.lastname.trim(),
      email : formValues.email.trim()
    }

    this.swallNotification.generateQuestion(`Naozaj chcetete vytvoriť uživateľa ?`).then((res) => {
      if(res.value){
        this.swallNotification.generateNotification(`Žiadosť o vytvorenie uživateľa bolo zaslané`);
        this.userService.registerUser(userRegistraion).subscribe(() => {
          this.swallNotification.generateNotification(`Uživateľ bol zaregistrovaný, emailom sa bude notifikovať`);
           this.userFormViewChild.resetForm();
        })
      }
    });
  }

  get firstname(){
    return this.userRegistrationForm.get("firstname");
  }

  get lastname(){
    return this.userRegistrationForm.get("lastname");
  }

  get username(){
    return this.userRegistrationForm.get("username");
  }

  get email(){
    return this.userRegistrationForm.get("email");
  }

}
