import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User, UserSimple} from "../../../../../core/model/User";
import {UserConstructorService} from "../../../../../core/services/user-constructor.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit {

  userRegistrationForm: FormGroup;

  @Output() userSimpleRegistrationEmitter: EventEmitter<UserSimple> = new EventEmitter();
  @ViewChild('userFormViewChild') userFormViewChild;

  constructor(private formBuilder: FormBuilder,
              private converterService: UserConstructorService) {
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
    const userRegistraion = this.converterService.constructUserRegistrationDTO(
      formValues.username.trim().toLowerCase(),
      formValues.firstname.trim(),
      formValues.lastname.trim(),
      formValues.email.trim()
    );
    this.userSimpleRegistrationEmitter.emit(userRegistraion);
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
