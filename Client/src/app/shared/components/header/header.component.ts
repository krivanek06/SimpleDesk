import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { Router } from '@angular/router';
import { UserService } from 'app/core/services/user.service';
import { RequestModificationService } from 'app/core/services/request-modification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthenticationService , 
              private router: Router, 
              public userService: UserService,
              private requestService: RequestModificationService) { }

  ngOnInit() {
  }

  public logout(): void{
    this.authService.logout();
    this.userService.removeUserFromLocalStorage();
    this.requestService.removeRequestDetails();
    this.router.navigateByUrl("/login");

  }

}
