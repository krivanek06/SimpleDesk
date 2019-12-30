import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { UserService } from 'app/core/services/user.service';
import { GroupService } from 'app/core/services/group.service';
import { PrivilegesComponent } from './privileges/privileges.component';
import { GroupContainer, Group, ApplicationPrivilege } from 'app/shared/models/Group';
import { GroupDetailsComponent } from './group-details/group-details.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit , AfterViewInit{
  public displayAvatarts : boolean = false;
  @ViewChild('userPrivileges',  {static: false}) userPrivileges: PrivilegesComponent;
  @ViewChild('groupPrivileges',  {static: false}) groupPrivileges: PrivilegesComponent;
  @ViewChild('groupDetails',  {static: false}) groupDetails: GroupDetailsComponent;

  
  constructor(private authService : AuthenticationService, private userService : UserService) { }

  ngOnInit() {
    this.authService.getDecodedToken().subscribe(x => console.log(x)).unsubscribe();
    console.log(this.userService.user);
    
    
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initUserPrivileges();
    });
  }

  private initUserPrivileges(): void{
    this.authService.getDecodedToken().subscribe(token =>{
      this.userPrivileges.FINANCE_TYPE_TO_SUBMIT = token.FINANCE_TYPE_TO_SUBMIT;
      this.userPrivileges.MODULE_TYPES_TO_USE = token.MODULE_TYPES_TO_USE;
      this.userPrivileges.REQUEST_TYPE_TO_SOLVE = token.REQUEST_TYPE_TO_SOLVE;
      this.userPrivileges.TICKET_HARDWARE_PRIVILEGES = token.TICKET_HARDWARE_PRIVILEGES;
      this.userPrivileges.TICKET_OTHER_PRIVILEGES = token.TICKET_OTHER_PRIVILEGES;
      this.userPrivileges.TICKET_SERVER_PRIVILEGES = token.TICKET_SERVER_PRIVILEGES;
      this.userPrivileges.TICKET_SOFTWARE_PRIVILEGES = token.TICKET_SOFTWARE_PRIVILEGES;
      this.userPrivileges.TICKET_USER_PRIVILEGES = token.TICKET_USER_PRIVILEGES;
    })
  }


  private initGroupPrivileges(group: Group):void{
    console.log(group);
      let priv : ApplicationPrivilege = group.applicationPrivilegeDTO;
      this.groupPrivileges.FINANCE_TYPE_TO_SUBMIT = priv.submitFinanceRequests !== undefined ?  priv.submitFinanceRequests : [];
      this.groupPrivileges.MODULE_TYPES_TO_USE = priv.moduleTypesToUse !== undefined ? priv.moduleTypesToUse : [];
      this.groupPrivileges.REQUEST_TYPE_TO_SOLVE = priv.requestTypesToSolve !== undefined ? priv.requestTypesToSolve : [];

      this.groupPrivileges.TICKET_HARDWARE_PRIVILEGES = priv.solveTickets["Hardware"] !== undefined ? priv.solveTickets["Hardware"]: [];
      this.groupPrivileges.TICKET_OTHER_PRIVILEGES = priv.solveTickets["Iné"] != undefined ? priv.solveTickets["Iné"] : false ;
      this.groupPrivileges.TICKET_SERVER_PRIVILEGES = priv.solveTickets["Server"] != undefined ? priv.solveTickets["Server"] : [] ;
      this.groupPrivileges.TICKET_SOFTWARE_PRIVILEGES = priv.solveTickets["Software"] != undefined ? priv.solveTickets["Software"] :[] ;
      this.groupPrivileges.TICKET_USER_PRIVILEGES = priv.solveTickets["Užívateľ"] != undefined ? priv.solveTickets["Užívateľ"] : false;
      this.groupPrivileges.name = "skupiny";
      
      this.groupDetails.group = group;
  }

  private changeFrames(change: boolean): void{
    this.displayAvatarts = change;
  }

}
