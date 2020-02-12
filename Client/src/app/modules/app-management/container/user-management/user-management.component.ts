import { Component, OnInit, ViewChild } from '@angular/core';
import { UserHttpService } from 'app/api/user-http.service';
import { UserSimpleDTO, GroupContainer } from 'app/shared/models/UserGroups';
import { Observable } from 'rxjs';
import { UserGroupsComponent } from 'app/resources/user/views/user-groups/user-groups.component';
import { PrivilegesComponent } from 'app/resources/privilege/view/privileges/privileges.component';
import { UserDetailsComponent } from 'app/resources/user/views/user-details/user-details.component';
import { UserStoreService } from 'app/core/services/user-store.service';
import { SwallNotificationService } from 'app/shared/services/swall-notification.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  isGhost$: Observable<boolean>;
  users: Observable<UserSimpleDTO[]>;
  @ViewChild('userDetails',  {static: false}) userDetails: UserDetailsComponent;
  @ViewChild('userPrivileges',  {static: false}) userPrivileges: PrivilegesComponent;
  @ViewChild('userGroups',  {static: false}) userGroups: UserGroupsComponent;

  
  constructor(private userHttp: UserHttpService, 
              private userService: UserStoreService,
              private swallNotification: SwallNotificationService) { }

  ngOnInit() {
    this.isGhost$ = this.userService.isGhost();
    this.users = this.userHttp.getAllUsers();
  }

  selectUser(username: string){
    this.userHttp.getUserDetials(username)
    .subscribe(user => {
        this.userDetails.displayedUser = user;
        this.userPrivileges.enabledPrivileges = user.applicationPrivilegeDTO;
        this.userPrivileges.name = 'Uživateľa';

        const groupContainer: GroupContainer = {
          managerOfGroups: user.groupsToManage,
          watchedGroupActivity: user.groupsActivityWatched,
          userInGroups: user.groupsInvolved
        }

        this.userGroups.groupContainer = groupContainer;
    })
  }

  resetUserPassword(){
    this.userHttp.resetUserPassword(this.userDetails.displayedUser.username).subscribe(() => {
      this.swallNotification.generateNotification(`Heslo uživateľa bolo resetované`);
    })
  }

  modifyUserState(){
    this.userHttp.modifyUserState(this.userDetails.displayedUser.username).subscribe(() => {
      this.userDetails.displayedUser.active = !this.userDetails.displayedUser.active;
      this.swallNotification.generateNotification(`Stav uživateľa bol zmeneý`);
    })
  }

}
