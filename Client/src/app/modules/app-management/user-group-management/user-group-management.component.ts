import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PrivilegesComponent } from 'app/modules/user-profile/privileges/privileges.component';
import { GroupDetailsComponent } from 'app/modules/user-profile/group-details/group-details.component';
import { GroupService } from 'app/core/services/group.service';
import { Observable, Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApplicationPrivilege, UserSimpleDTO } from 'app/shared/models/UserGroups';
import Swal from 'sweetalert2';
import { UserService } from 'app/core/services/user.service';

@Component({
  selector: 'app-user-group-management',
  templateUrl: './user-group-management.component.html',
  styleUrls: ['./user-group-management.component.scss']
})
export class UserGroupManagementComponent implements OnInit, OnDestroy {
  public groups: Observable<string[]>;
  public users: Observable<UserSimpleDTO[]>;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  @ViewChild('groupPrivileges',  {static: false}) groupPrivileges: PrivilegesComponent;
  @ViewChild('groupDetails',  {static: false}) groupDetails: GroupDetailsComponent;

  constructor(private groupService: GroupService, private userService: UserService) { }

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
      this.groupPrivileges.activateUnableClick = true;
    })
  }

  public selectUser(username: string){
    console.log(username);
    this.userService.getUserDetials(username).subscribe(user => {
      console.log(user);
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
