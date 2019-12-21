import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  userRegistrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initFormGroup();
  }

  private initFormGroup(){
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

  private submit(){
    if(this.userRegistrationForm.invalid){
      return;
    }
    
    const formValues = this.userRegistrationForm.value;
    console.log(formValues);
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
