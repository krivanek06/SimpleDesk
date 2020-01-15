import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { UserService } from 'app/core/services/user.service';
import { GroupService } from 'app/core/services/group.service';
import { PrivilegesComponent } from './privileges/privileges.component';
import { Group, ApplicationPrivilege, GroupContainer } from 'app/shared/models/UserGroups';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit , AfterViewInit{
  public displayAvatarts : boolean = false;

  public groupContainer: Observable<GroupContainer>;

  @ViewChild('userDetials',  {static: false}) userDetials: UserDetailsComponent;
  @ViewChild('userPrivileges',  {static: false}) userPrivileges: PrivilegesComponent;
  @ViewChild('groupPrivileges',  {static: false}) groupPrivileges: PrivilegesComponent;
  @ViewChild('groupDetails',  {static: false}) groupDetails: GroupDetailsComponent;

  
  constructor(private authService : AuthenticationService, public userService : UserService, private groupService: GroupService) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    setTimeout(() => { this.initUserPrivileges(); });
  }

  private initUserPrivileges(): void{
    this.authService.getDecodedToken().subscribe(token =>{

      let priv : ApplicationPrivilege = {
        moduleTypesToUse : token.MODULE_TYPES_TO_USE,
        requestTypesToSolve : token.REQUEST_TYPE_TO_SOLVE,
        submitFinanceRequests : token.FINANCE_TYPE_TO_SUBMIT,
        solveTickets : {
          Software : token.TICKET_SOFTWARE_PRIVILEGES,
          Hardware : token.TICKET_HARDWARE_PRIVILEGES,
          Server :  token.TICKET_SERVER_PRIVILEGES,
          User : token.TICKET_USER_PRIVILEGES,
          Other : token.TICKET_OTHER_PRIVILEGES
        }
      };
      this.userPrivileges.disabledPrivileges = priv;
    })

    this.groupContainer = this.groupService.getAllGroupContainersForUser();
  }


  private initGroupPrivileges(group: Group):void{
      this.groupPrivileges.disabledPrivileges = group.applicationPrivilegeDTO;
      this.groupPrivileges.name = 'Skupiny';
      this.groupDetails.group = group;
  }

  private changeFrames(change: boolean): void{
    this.displayAvatarts = change;
  }

}
