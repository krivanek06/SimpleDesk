import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { UserService } from 'app/core/services/user.service';
import { GroupService } from 'app/core/services/group.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private authService : AuthenticationService, private userService : UserService) { }

  ngOnInit() {
    this.authService.getDecodedToken().subscribe(x => console.log(x)).unsubscribe();
    console.log(this.userService.user);
    
  
  }

}
