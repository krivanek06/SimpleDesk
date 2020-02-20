import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserStoreService} from "./core/services/user-store.service";
import {User} from "./resources/user/model/User";
import {RequestStoreService} from "./core/services/request-store.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "./core/services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'helpdesk';

  hasPrivilegeAccess$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  isGhost$: Observable<boolean>;
  hasFinanceModuleAccess$: Observable<boolean>;
  hasTicketModuleAccess$: Observable<boolean>;
  hasReportModuleAccess$: Observable<boolean>;
  user$: Observable<User>;

  constructor(private userStoreService: UserStoreService,
              private requestStoreService: RequestStoreService,
              private router: Router,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.hasPrivilegeAccess$ = this.userStoreService.hasPrivilegeAccess();
    this.isAdmin$ = this.userStoreService.isAdmin();
    this.isGhost$ = this.userStoreService.isGhost();
    this.hasFinanceModuleAccess$ = this.userStoreService.hasFinanceModuleAccess();
    this.hasTicketModuleAccess$ = this.userStoreService.hasTicketModuleAccess();
    this.hasReportModuleAccess$ = this.userStoreService.hasReportModuleAccess();
    this.user$ = this.userStoreService.getUser();
    this.user$.subscribe(x => console.log(x))
  }

  logout(): void {
    this.authService.logout();
    this.userStoreService.removeUserFromLocalStorage();
    this.requestStoreService.removeRequestDetails();
    this.router.navigateByUrl("/login");
  }


}
