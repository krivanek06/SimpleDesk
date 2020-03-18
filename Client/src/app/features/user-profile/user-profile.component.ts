import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {AuthenticationService} from 'app/core/services/authentication.service';
import {UserStoreService} from 'app/core/services/user-store.service';
import {GroupHttpService} from 'app/api/group-http.service';
import {PrivilegesComponent} from '../../shared/components-presentation/privileges/privileges.component';
import {GroupDetailsComponent} from '../../shared/components-presentation/group-details/group-details.component';
import {UserDetailsComponent} from '../../shared/components-presentation/user-details/user-details.component';
import {Observable} from 'rxjs';
import {UserHttpService} from 'app/api/user-http.service';
import {SwallNotificationService} from 'app/shared/services/swall-notification.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {UserImagesComponent} from './presentation/user-images/user-images.component';
import {GroupContainer} from "../../core/model/Group";
import {ImageDTO, PasswordContainer} from "../../core/model/User";
import {ApplicationPrivilege} from "../../core/model/Request";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, AfterViewInit {

  displayAvatars = false;
  groupContainer$: Observable<GroupContainer>;

  @ViewChild('userDetials') userDetials: UserDetailsComponent;
  @ViewChild('userPrivileges') userPrivileges: PrivilegesComponent;
  @ViewChild('groupPrivileges') groupPrivileges: PrivilegesComponent;
  @ViewChild('groupDetails') groupDetails: GroupDetailsComponent;
  @ViewChild('userAvatars') userAvatars: UserImagesComponent;


  constructor(private authService: AuthenticationService,
              public userService: UserStoreService,
              private groupService: GroupHttpService,
              private userHttp: UserHttpService,
              private swallNotification: SwallNotificationService,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.groupContainer$ = this.groupService.getAllGroupContainersForUser();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initUserPrivileges();
    });
  }


  private initUserPrivileges(): void {
    const token = this.authService.decodedTokenValue;

    const priv: ApplicationPrivilege = {
      moduleTypesToUse: token.MODULE_TYPES_TO_USE,
      requestTypesToSolve: token.REQUEST_TYPE_TO_SOLVE,
      submitFinanceRequests: token.FINANCE_TYPE_TO_SUBMIT,
      solveTickets: {
        Software: token.TICKET_SOFTWARE_PRIVILEGES,
        Hardware: token.TICKET_HARDWARE_PRIVILEGES,
        Server: token.TICKET_SERVER_PRIVILEGES,
        User: token.TICKET_USER_PRIVILEGES,
        Other: token.TICKET_OTHER_PRIVILEGES
      }
    };
    this.userPrivileges.enabledPrivileges = priv;


  }


  initGroupPrivileges(groupName: string): void {
    this.groupService.getGroupDetails(groupName).subscribe(group => {
      this.groupPrivileges.enabledPrivileges = group.applicationPrivilegeDTO;
      this.groupPrivileges.name = 'Skupiny';
      this.groupDetails.group = group;
    });
  }

  changePassword(password: PasswordContainer): void {
    if (password.newPassword1 !== password.newPassword2) {
      this.swallNotification.generateErrorNotification(`Zadané heslá sa nezhodujú, požiadavka o zmenu hesla nebola odoslaná`);
    } else if (password.newPassword1.length < 6 || password.newPassword2.length < 6) {
      this.swallNotification.generateErrorNotification(`Minimálna dĺžka hesla je 6 znakov, požiadavka o zmenu hesla nebola odoslaná.`);
    } else {
      this.userHttp.changePassword(password).subscribe(() =>
        this.swallNotification.generateNotification(`Heslo bolo zmenené`));
    }
  }

  changeFrames(): void {
    this.displayAvatars = !this.displayAvatars;
    // load images first time
    if (!this.userAvatars.avatars) {
      this.spinner.show();
      this.userHttp.getAvailableAvatars().subscribe(avatars => {
        this.spinner.hide();
        this.userAvatars.avatars = avatars;
      });
    }
  }

  selectImage(imageDTO: ImageDTO) {
    this.swallNotification.selectImage(imageDTO.imageBytes).then(result => {
      if (result.value === true) {
        this.userHttp.changeImage(imageDTO).subscribe(() => {
          this.userService.changeUserImage(imageDTO);
          this.swallNotification.generateNotification(`Váš obrázok bol zmenený`);
        });
      }
    });

  }

}
