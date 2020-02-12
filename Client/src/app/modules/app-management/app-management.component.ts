import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { UserStoreService } from 'app/core/services/user-store.service';

@Component({
  selector: 'app-app-management',
  templateUrl: './app-management.component.html',
  styleUrls: ['./app-management.component.scss']
})
export class AppManagementComponent implements OnInit {
  isAdmin$: Observable<boolean>;
  hasPrivilegeAccess$: Observable<boolean>;
  
  constructor(private userStoreService: UserStoreService) {
    this.isAdmin$ = this.userStoreService.isAdmin();
    this.hasPrivilegeAccess$ = this.userStoreService.hasPrivilegeAccess();
   }

  ngOnInit() {
  }

}
