import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'app/core/services/authentication.service';

@Component({
  selector: 'app-app-management',
  templateUrl: './app-management.component.html',
  styleUrls: ['./app-management.component.scss']
})
export class AppManagementComponent implements OnInit {
  isAdmin$: Observable<boolean>;
  hasPrivilegeAccess$: Observable<boolean>;
  
  constructor(private authService: AuthenticationService) {
    this.isAdmin$ = this.authService.isAdmin();
    this.hasPrivilegeAccess$ = this.authService.hasPrivilegeAccess();
   }

  ngOnInit() {
  }

}
