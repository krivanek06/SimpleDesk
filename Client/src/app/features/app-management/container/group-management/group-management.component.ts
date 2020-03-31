import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {PrivilegesComponent} from 'app/shared/components/privileges/privileges.component';
import {GroupDetailsComponent} from 'app/shared/components/group-details/group-details.component';
import {Observable} from 'rxjs';
import {SwallNotificationService} from 'app/core/services/swall-notification.service';
import {UserSimple} from "../../../../core/model/User";
import {Store} from "@ngrx/store";
import {Group} from "../../../../core/model/Group";
import {GroupConstructorService} from "../../../../core/services/group-constructor.service";

import * as fromAuth from '../../../../core/store/auth/auth.reducer';
import * as fromAppManagement from '../../store/app-management.reducer';
import * as appManagementAction from '../../store/app-management.action';


@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupManagementComponent implements OnInit {
  groupNames$: Observable<string[]>;
  activeUsers$: Observable<UserSimple[]>;
  groupDetails$: Observable<Group>;
  isGhost$: Observable<boolean>;

  @ViewChild('appGroupPrivileges') groupPrivileges: PrivilegesComponent;
  @ViewChild('appGroupDetails') groupDetails: GroupDetailsComponent;

  editGroupActivated = false;

  constructor(private store: Store<Store>,
              private swallNotification: SwallNotificationService,
              private groupConstructorService: GroupConstructorService) {
  }

  ngOnInit() {
    this.groupNames$ = this.store.select(fromAppManagement.getAllGroupNames);
    this.activeUsers$ = this.store.select(fromAppManagement.getAllActiveUsers);
    this.groupDetails$ = this.store.select(fromAppManagement.getGroupDetails);
    this.isGhost$ = this.store.select(fromAuth.isGhost);

  }


  selectGroup(groupName: string) {
    this.store.dispatch(appManagementAction.getGroupDetailsWithUnsetPrivileges({groupName}));
  }

  editGroup() {
    this.editGroupActivated = !this.editGroupActivated;
    this.groupDetails.edit();
    this.groupPrivileges.edit();
  }

  saveGroup() {
    this.swallNotification.generateQuestion(`Naozaj chcetete editovať skupinu ?`).then((result) => {
      if (result.value) {

        const groupCopy = this.groupConstructorService.createGroupCopy(
          this.groupDetails.groupCopy,
          this.groupPrivileges.enabledPrivilegesCopy,
          this.groupPrivileges.disabledPrivilegesCopy
        );

        this.store.dispatch(appManagementAction.editGroup({group: groupCopy}));
        this.editGroupActivated = false;
      }
    });
  }

  deleteGroup() {
    this.swallNotification.generateQuestion(`Naozaj chcetete vymazať skupinu ?`).then((result) => {
      if (result.value) {
        this.store.dispatch(appManagementAction.removeGroup());
        this.editGroupActivated = false;
      }
    });
  }

}
