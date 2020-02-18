import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UserStoreService} from 'app/core/services/user-store.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  hasFinanceModuleAccess$: Observable<boolean>;
  hasTicketModuleAccess$: Observable<boolean>;
  hasReportModuleAccess$: Observable<boolean>;
  hasPrivilegeAccess$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  isGhost$: Observable<boolean>;

  constructor(private userStoreService: UserStoreService) {
  }

  ngOnInit() {
    this.hasPrivilegeAccess$ = this.userStoreService.hasPrivilegeAccess();
    this.isAdmin$ = this.userStoreService.isAdmin();
    this.isGhost$ = this.userStoreService.isGhost();
    this.hasFinanceModuleAccess$ = this.userStoreService.hasFinanceModuleAccess();
    this.hasTicketModuleAccess$ = this.userStoreService.hasTicketModuleAccess();
    this.hasReportModuleAccess$ = this.userStoreService.hasReportModuleAccess();
  }

}
