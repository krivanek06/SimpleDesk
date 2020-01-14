import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserSimpleDTO } from 'app/shared/models/UserGroups';
import { UserService } from 'app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  userRegistrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

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
    const userRegistraion: UserSimpleDTO = {
      username : formValues.username,
      firstName : formValues.firstname,
      lastName : formValues.lastname,
      email : formValues.email
    }

    Swal.fire({ text: "Naozaj chcetete vytvoriť uživateľa ? ", icon: 'warning', showCancelButton: true,
      confirmButtonColor: '#3085d6',  cancelButtonColor: '#d33',  cancelButtonText: "Zrušiť",  confirmButtonText: 'Ano'
    }).then((res) => {
      if(res.value){
        Swal.fire({ position: 'top-end', text: 'Žiadosť o vytvorenie uživateľa bolo zaslané', showConfirmButton: false, timer: 1500 })
        this.userService.registerUser(userRegistraion).subscribe(x => {
          Swal.fire({ position: 'top-end',icon: 'success', text: 'Uživateľ bol zaregistrovaný, emailom sa bude notifikovať', showConfirmButton: false, timer: 1500 })
          this.userRegistrationForm.reset();
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
