import {Component, OnInit, ViewChild} from '@angular/core';
import {UserHttpService} from 'app/api/user-http.service';
import {UserSimpleDTO} from 'app/core/model/User';
import {Observable} from 'rxjs';
import {UserGroupsComponent} from 'app/shared/components-presentation/user-groups/user-groups.component';
import {PrivilegesComponent} from 'app/shared/components-presentation/privileges/privileges.component';
import {UserDetailsComponent} from 'app/shared/components-presentation/user-details/user-details.component';
import {UserStoreService} from 'app/core/services/user-store.service';
import {SwallNotificationService} from 'app/shared/services/swall-notification.service';
import {GroupContainer} from "../../../../core/model/Group";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  isGhost$: Observable<boolean>;
  users: Observable<UserSimpleDTO[]>;
  @ViewChild('userDetails') userDetails: UserDetailsComponent;
  @ViewChild('userPrivileges') userPrivileges: PrivilegesComponent;
  @ViewChild('userGroups') userGroups: UserGroupsComponent;


  constructor(private userHttp: UserHttpService,
              private userService: UserStoreService,
              private swallNotification: SwallNotificationService) {
  }

  ngOnInit() {
    this.isGhost$ = this.userService.isGhost();
    this.users = this.userHttp.getAllUsers();
  }

  selectUser(username: string) {
    this.userHttp.getUserDetials(username)
      .subscribe(user => {
        this.userDetails.displayedUser = user;
        this.userPrivileges.enabledPrivileges = user.applicationPrivilegeDTO;
        this.userPrivileges.name = 'Uživateľa';

        const groupContainer: GroupContainer = {
          managerOfGroups: user.groupsToManage,
          watchedGroupActivity: user.groupsActivityWatched,
          userInGroups: user.groupsInvolved
        };

        this.userGroups.groupContainer = groupContainer;
      });
  }

  resetUserPassword() {
    this.userHttp.resetUserPassword(this.userDetails.displayedUser.username).subscribe(() => {
      this.swallNotification.generateNotification(`Heslo uživateľa bolo resetované`);
    });
  }

  modifyUserState() {
    this.userHttp.modifyUserState(this.userDetails.displayedUser.username).subscribe(() => {
      this.userDetails.displayedUser.active = !this.userDetails.displayedUser.active;
      this.swallNotification.generateNotification(`Stav uživateľa bol zmeneý`);
    });
  }

}
