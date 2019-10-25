import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/core/services/authentication/Authentication.service';

@Component({
  selector: 'app-dashboard-background',
  templateUrl: './dashboard-background.component.html',
  styleUrls: ['./dashboard-background.component.scss']
})
export class DashboardBackgroundComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
   // this.authService.currentUserSubject.subscribe(x => console.log(x));
   this.authService.currentUserValue.subscribe(x => console.log(x))
  }

}
