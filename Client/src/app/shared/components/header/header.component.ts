import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthenticationService , private router: Router) { }

  ngOnInit() {
  }

  public logout(): void{
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }

}
