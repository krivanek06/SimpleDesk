import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/core/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authService : AuthenticationService) { }

  ngOnInit() {
    this.authService.getDecodedToken().subscribe(x => console.log(x)).unsubscribe();
  }

}
