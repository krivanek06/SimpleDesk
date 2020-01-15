import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PrivilegesComponent } from 'app/modules/user-profile/privileges/privileges.component';
import { GroupDetailsComponent } from 'app/modules/user-profile/group-details/group-details.component';
import { GroupService } from 'app/core/services/group.service';
import { Observable, Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApplicationPrivilege, UserSimpleDTO, GroupContainer } from 'app/shared/models/UserGroups';
import Swal from 'sweetalert2';
import { UserService } from 'app/core/services/user.service';
import { UserDetailsComponent } from 'app/modules/user-profile/user-details/user-details.component';
import { UserGroupsComponent } from 'app/modules/user-profile/user-groups/user-groups.component';
import { AuthenticationService } from 'app/core/services/authentication.service';

@Component({
  selector: 'app-user-group-management',
  templateUrl: './user-group-management.component.html',
  styleUrls: ['./user-group-management.component.scss']
})
export class UserGroupManagementComponent implements OnInit, OnDestroy {
  public groups: Observable<string[]>;
  public users: Observable<UserSimpleDTO[]>;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  public isAdmin$: Observable<boolean>;
  public hasPrivilegeAccess$: Observable<boolean>;

  @ViewChild('userDetails',  {static: false}) userDetails: UserDetailsComponent;
  @ViewChild('userPrivileges',  {static: false}) userPrivileges: PrivilegesComponent;
  @ViewChild('userGroups',  {static: false}) userGroups: UserGroupsComponent;
  @ViewChild('groupPrivileges',  {static: false}) groupPrivileges: PrivilegesComponent;
  @ViewChild('groupDetails',  {static: false}) groupDetails: GroupDetailsComponent;

  constructor(private groupService: GroupService, private userService: UserService, private authService: AuthenticationService) { 
    this.isAdmin$ = this.authService.isAdmin();
    this.hasPrivilegeAccess$ = this.authService.hasPrivilegeAccess();
  }

  ngOnInit() {
    this.groups = this.groupService.getAllGroups();
    this.users = this.userService.getAllUsers();
  }

  public selectGroup(groupName: string){
    this.groupService.getGroupDetailsWithUnsetPrivileges(groupName).pipe(takeUntil(this.destroy$)).subscribe(group => {
      this.groupPrivileges.enabledPrivileges = group.applicationPrivilegeDTO;
      this.groupPrivileges.disabledPrivileges = group.unsetApplicationPrivilegeDTO;
      this.groupPrivileges.name = 'Skupiny';
      this.groupDetails.group = group;
      //this.groupPrivileges.activateUnableClick = true;
    })
  }

  public selectUser(username: string){
    this.userService.getUserDetials(username).pipe(takeUntil(this.destroy$)).subscribe(user => {
      console.log(user);
      this.userDetails.displayedUser = user;

      this.userPrivileges.disabledPrivileges = user.applicationPrivilegeDTO;
      this.userPrivileges.name = 'Uživateľa';

      const groupContainer: GroupContainer = {
        managerOfGroups: user.groupsToManage,
        watchedGroupActivity: user.groupsActivityWatched,
        userInGroups: user.groupsInvolved
      }

      this.userGroups.groupContainer = groupContainer;
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private resetGroupPrivileges(){
    this.groupService.getGroupDetailsWithUnsetPrivileges(this.groupDetails.group.name).pipe(takeUntil(this.destroy$))
    .subscribe(group => {
      this.groupPrivileges.enabledPrivileges = group.applicationPrivilegeDTO;
      this.groupPrivileges.disabledPrivileges = group.unsetApplicationPrivilegeDTO;
    })
  }

  private saveGroupPrivileges(priv: ApplicationPrivilege){
    Swal.fire({ position: 'top-end', text: 'Požiadavka o zmenu právomoci skupiny bola odoslaná',showConfirmButton: false,timer: 1500 })  
    this.groupService.modifyPrivileges(this.groupDetails.group.name, priv).subscribe(() =>{
      Swal.fire({ position: 'top-end', text: 'Pŕava skupiny boli zmenené',showConfirmButton: false,timer: 1500 })  
    })
  }

}
