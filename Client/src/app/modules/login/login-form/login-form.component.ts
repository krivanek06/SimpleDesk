import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/core/services/authentication/Authentication.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb:FormBuilder,  private authService: AuthenticationService,  private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
  });
  }


  private login(): void{
    const val = this.form.value;
    if (val.username && val.password) {
        this.authService.login(val.username, val.password).subscribe(() => {
            console.log("User is logged in");
            this.router.navigateByUrl('/dashboard');
        }
      );
    }    
  }

}
