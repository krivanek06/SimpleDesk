import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PrivilegesComponent } from 'app/modules/user-profile/privileges/privileges.component';
import { GroupDetailsComponent } from 'app/modules/user-profile/group-details/group-details.component';
import { GroupService } from 'app/core/services/group.service';
import { Observable, Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-group-management',
  templateUrl: './user-group-management.component.html',
  styleUrls: ['./user-group-management.component.scss']
})
export class UserGroupManagementComponent implements OnInit, OnDestroy {
  public groups: Observable<string[]>;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  @ViewChild('groupPrivileges',  {static: false}) groupPrivileges: PrivilegesComponent;
  @ViewChild('groupDetails',  {static: false}) groupDetails: GroupDetailsComponent;

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.groups = this.groupService.getAllGroups();
  }

  public selectGroup(groupName: string){
    this.groupService.getGroupDetailsWithUnsetPrivileges(groupName).pipe(takeUntil(this.destroy$)).subscribe(group => {
      console.log(group)
      this.groupPrivileges.enabledPrivileges = group.applicationPrivilegeDTO;
      this.groupPrivileges.disabledPrivileges = group.unsetApplicationPrivilegeDTO;
      this.groupPrivileges.name = 'Skupiny';
      this.groupDetails.group = group;
      this.groupPrivileges.activateUnableClick = true;
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
