import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/core/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
