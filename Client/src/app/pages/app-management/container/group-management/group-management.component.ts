import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {PrivilegesComponent} from 'app/resources/privilege/view/privileges/privileges.component';
import {GroupDetailsComponent} from 'app/resources/group/view/group-details/group-details.component';
import {GroupHttpService} from 'app/api/group-http.service';
import {Observable,} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserStoreService} from 'app/core/services/user-store.service';
import {SERDButtonsComponent} from 'app/shared/components/serdbuttons/serdbuttons.component';
import {SwallNotificationService} from 'app/shared/services/swall-notification.service';

@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.scss']
})
export class GroupManagementComponent implements OnInit, AfterViewInit {
  groups: Observable<string[]>;
  isGhost$: Observable<boolean>;

  @ViewChild('groupPrivileges', {static: false}) groupPrivileges: PrivilegesComponent;
  @ViewChild('groupDetails', {static: false}) groupDetails: GroupDetailsComponent;
  @ViewChild('serdbuttonsGroup', {static: false}) serdbuttonsGroup: SERDButtonsComponent;

  constructor(private groupService: GroupHttpService,
              private userService: UserStoreService,
              private swallNotification: SwallNotificationService,
  ) {
  }

  ngOnInit() {
    this.groups = this.groupService.getAllGroups();
    this.isGhost$ = this.userService.isGhost();
  }

  ngAfterViewInit(): void {
    this.groupPrivileges.hideUnassignedPriv = true;
  }

  public selectGroup(groupName: string) {
    this.groupService.getGroupDetailsWithUnsetPrivileges(groupName)
      .subscribe(group => {
        this.groupPrivileges.enabledPrivileges = group.applicationPrivilegeDTO;
        this.groupPrivileges.disabledPrivileges = group.unsetApplicationPrivilegeDTO;
        this.groupPrivileges.name = 'Skupiny';
        this.groupDetails.group = group;
      })
  }

  editGroup() {
    this.groupDetails.editGroup();
    this.groupPrivileges.editGroup();
  }

  resetGroup() {
    this.groupDetails.resetGroup();
    this.groupPrivileges.resetGroup();
  }


  saveGroup() {
    this.swallNotification.generateQuestion(`Naozaj chcetete editovať skupinu ?`).then((result) => {
      if (result.value) {
        this.swallNotification.generateNotification(`Požiadavka editovanie skupiny zaslaná`);
        this.groupService.modifyGroup(this.groupDetails.group).subscribe(() => {
          this.swallNotification.generateNotification(`Skupina bola editovaná`);
          this.groupDetails.editGroupActivated = false;
          this.groupPrivileges.activateUnableClick = false;
          this.groupPrivileges.hideUnassignedPriv = true;
          this.serdbuttonsGroup.editActivated = false;
        });
      }
    });
  }

  deleteGroup(): void {
    this.swallNotification.generateQuestion(`Naozaj chcetete vymazať skupinu ?`).then((result) => {
      if (result.value) {
        this.swallNotification.generateNotification(`Požiadavka zmazania skupiny zaslaná`);
        this.groupService.deleteGroup(this.groupDetails.group.name).subscribe(() => {

          const grouName = this.groupDetails.group.name;
          this.groups = this.groups.pipe(map(group => group.filter(name => name !== grouName)));
          this.groupPrivileges.enabledPrivileges = undefined;
          this.groupPrivileges.disabledPrivileges = undefined;
          this.groupPrivileges.name = undefined;
          this.groupDetails.group = undefined;
          this.serdbuttonsGroup.editActivated = false;
          this.swallNotification.generateNotification(`Skupina bola zmazaná`);
        });
      }
    });
  }

}
