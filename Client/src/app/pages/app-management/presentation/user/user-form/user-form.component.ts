import {Component, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {UserSimpleDTO} from 'app/resources/user/model/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userRegistrationForm: FormGroup;

  @Output() userRegistrationEmitter: EventEmitter<UserSimpleDTO> = new EventEmitter();
  @ViewChild('userFormViewChild', {static: true}) userFormViewChild;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.userRegistrationForm = this.formBuilder.group({
      firstname: ['', [
        Validators.required,
      ]],
      lastname: ['', [
        Validators.required,
      ]],
      username: ['', [
        Validators.required,
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
    });
  }

  submit() {
    if (this.userRegistrationForm.invalid) {
      return;
    }

    const formValues = this.userRegistrationForm.value;
    const userRegistraion: UserSimpleDTO = {
      username: formValues.username.trim().toLowerCase(),
      firstName: formValues.firstname.trim(),
      lastName: formValues.lastname.trim(),
      email: formValues.email.trim(),
      fullNameShort: null,
    };

    this.userRegistrationEmitter.emit(userRegistraion);


  }

  public resetForm() {
    this.userFormViewChild.resetForm();
  }

  get firstname() {
    return this.userRegistrationForm.get("firstname");
  }

  get lastname() {
    return this.userRegistrationForm.get("lastname");
  }

  get username() {
    return this.userRegistrationForm.get("username");
  }

  get email() {
    return this.userRegistrationForm.get("email");
  }

}
