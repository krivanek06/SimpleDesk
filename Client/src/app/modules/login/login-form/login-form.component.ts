import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { UserService } from 'app/core/services/user.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb:FormBuilder,  private router: Router, 
    private authService: AuthenticationService, private userService: UserService) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
  });
  }


  private login(): void{
    const val = this.form.value;
    if (val.username && val.password) {
        this.authService.login(val.username, val.password).subscribe((result) => {
          this.userService.loadLoggedInUser().subscribe(subs =>{
            if(result &&subs ){
              this.router.navigateByUrl('/dashboard');
             }
          })
        }
      );
    }    
  }

}
