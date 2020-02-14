import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { UserStoreService } from 'app/core/services/user-store.service';
import { Location } from '@angular/common';
import { environment } from 'environments/environment';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  public loggingIn: boolean = false;

  constructor(private fb:FormBuilder,  private router: Router, 
    private authService: AuthenticationService, private userService: UserStoreService, private location: Location) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
  });
  }


 login(): void{
    const val = this.form.value;
    if (val.username && val.password) {
      this.loggingIn = true;
        this.authService.login(val.username, val.password).subscribe((result) => {
          this.userService.loadLoggedInUser().subscribe(subs =>{
            this.loggingIn = false;
            if(result && subs ){ 
              //this.router.navigateByUrl('/dashboard');
             // this.location.replaceState('/'); // clears browser history so they can't navigate with back button
             // this.router.navigate(['/dashboard']); // tells them they've been logged out (somehow)
              window.location.href = `${environment.dashboard}dashboard`;
             // this.router.navigate(['dashboard'], {relativeTo: this.route});
             }
          })
        }
      );
    }    
  }

}
