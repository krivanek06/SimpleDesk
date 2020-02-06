import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { PrivilegesComponent } from 'app/modules/user-profile/privileges/privileges.component';
import { GroupDetailsComponent } from 'app/modules/user-profile/group-details/group-details.component';
import { GroupService } from 'app/core/services/group.service';
import { Observable, Subscription, Subject } from 'rxjs';
import { takeUntil, filter, map } from 'rxjs/operators';
import { ApplicationPrivilege, UserSimpleDTO, GroupContainer } from 'app/shared/models/UserGroups';
import Swal from 'sweetalert2';
import { UserService } from 'app/core/services/user.service';
import { UserDetailsComponent } from 'app/modules/user-profile/user-details/user-details.component';
import { UserGroupsComponent } from 'app/modules/user-profile/user-groups/user-groups.component';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { SERDButtonsComponent } from 'app/shared/components/serdbuttons/serdbuttons.component';

@Component({
  selector: 'app-user-group-management',
  templateUrl: './user-group-management.component.html',
  styleUrls: ['./user-group-management.component.scss']
})
export class UserGroupManagementComponent implements OnInit, OnDestroy, AfterViewInit {
  public groups: Observable<string[]>;
  public users: Observable<UserSimpleDTO[]>;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  isAdmin$: Observable<boolean>;
  isGhost$: Observable<boolean>;
  public hasPrivilegeAccess$: Observable<boolean>;

  @ViewChild('userDetails',  {static: false}) userDetails: UserDetailsComponent;
  @ViewChild('userPrivileges',  {static: false}) userPrivileges: PrivilegesComponent;
  @ViewChild('userGroups',  {static: false}) userGroups: UserGroupsComponent;
  @ViewChild('groupPrivileges',  {static: false}) groupPrivileges: PrivilegesComponent;
  @ViewChild('groupDetails',  {static: false}) groupDetails: GroupDetailsComponent;
  @ViewChild('serdbuttonsGroup',  {static: false}) serdbuttonsGroup: SERDButtonsComponent;

  constructor(private groupService: GroupService, private userService: UserService, private authService: AuthenticationService) { 
    this.isAdmin$ = this.authService.isAdmin();
    this.isGhost$ = this.authService.isGhost();
    this.hasPrivilegeAccess$ = this.authService.hasPrivilegeAccess();
  }

  ngOnInit() {
    this.groups = this.groupService.getAllGroups();
    this.users = this.userService.getAllUsers();

  }

  ngAfterViewInit(): void {
    this.groupPrivileges.hideUnassignedPriv = true;
  }

  public selectGroup(groupName: string){
    this.groupService.getGroupDetailsWithUnsetPrivileges(groupName)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(group => {
        this.groupPrivileges.enabledPrivileges = group.applicationPrivilegeDTO;
        this.groupPrivileges.disabledPrivileges = group.unsetApplicationPrivilegeDTO;
        this.groupPrivileges.name = 'Skupiny';
        this.groupDetails.group = group;
    })
  }

  selectUser(username: string){
    this.userService.getUserDetials(username)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(user => {
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

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  editGroup(){
    this.groupDetails.editGroup();  
    this.groupPrivileges.editGroup();
  }

  resetGroup(){
    this.groupDetails.resetGroup();
    this.groupPrivileges.resetGroup();
  }

  resetUserPassword(){
    this.userService.resetUserPassword(this.userDetails.displayedUser.username).subscribe(() => {
      Swal.fire({ position: 'top-end',  text: 'Heslo uživateľa bolo resetované',  showConfirmButton: false,timer: 1200 })
    })
  }

  modifyUserState(){
    this.userService.modifyUserState(this.userDetails.displayedUser.username).subscribe(() => {
      this.userDetails.displayedUser.active = !this.userDetails.displayedUser.active;
      Swal.fire({ position: 'top-end',  text: 'Stav uživateľa bol zmeneý',  showConfirmButton: false,timer: 1200 })
    })
  }

  saveGroup(){
    Swal.fire({ text: "Naozaj chcetete editovať skupinu ? ", icon: 'warning', showCancelButton: true,
      confirmButtonColor: '#3085d6',  cancelButtonColor: '#d33',  cancelButtonText: "Zrušiť",  confirmButtonText: 'Ano'
    }).then((result) => {
      if(result.value){
        Swal.fire({ position: 'top-end',  text: 'Požiadavka editovanie skupiny zaslaná',  showConfirmButton: false,timer: 1200 })
        this.groupService.modifyGroup(this.groupDetails.group).subscribe(() => {
          Swal.fire({ position: 'top-end',  text: 'Skupina bola editovaná',  showConfirmButton: false,timer: 1200 })
          this.groupDetails.editGroupActivated = false;
          this.groupPrivileges.activateUnableClick = false;
          this.groupPrivileges.hideUnassignedPriv = true;
          this.serdbuttonsGroup.editActivated = false;
        })
      }
    });
  }

  deleteGroup(): void{
    Swal.fire({ text: "Naozaj chcetete vymazať skupinu ? ", icon: 'warning', showCancelButton: true,
      confirmButtonColor: '#3085d6',  cancelButtonColor: '#d33',  cancelButtonText: "Zrušiť",  confirmButtonText: 'Ano'
    }).then((result) => {
      if(result.value){
          Swal.fire({ position: 'top-end',  text: 'Požiadavka zmazania skupiny zaslaná',  showConfirmButton: false,timer: 1200 })
          this.groupService.deleteGroup(this.groupDetails.group.name).subscribe(() => {
            
            const grouName = this.groupDetails.group.name;
            this.groups = this.groups.pipe(map(group => group.filter( name => name !== grouName)));
            this.groupPrivileges.enabledPrivileges = undefined;
            this.groupPrivileges.disabledPrivileges = undefined;
            this.groupPrivileges.name = undefined;
            this.groupDetails.group = undefined;
            this.serdbuttonsGroup.editActivated = false;
            
            Swal.fire({ position: 'top-end',  text: 'Skupina bola zmazaná',  showConfirmButton: false,timer: 1200 })
          })   
        }
      });
  }

}
