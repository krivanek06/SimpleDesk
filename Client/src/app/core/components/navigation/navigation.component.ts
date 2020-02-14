import { Component, OnInit, ElementRef, ViewChild, HostListener, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { Observable } from 'rxjs';
import { UserStoreService } from 'app/core/services/user-store.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public hasFinanceModuleAccess$: Observable<boolean>;
  public hasTicketModuleAccess$: Observable<boolean>;
  public hasReportModuleAccess$: Observable<boolean>;
  public hasPrivilegeAccess$: Observable<boolean>;

  public isAdmin$: Observable<boolean>;

  public isGhost$: Observable<boolean>;

  constructor( private userStoreService: UserStoreService) { }

  ngOnInit() { 
    this.hasPrivilegeAccess$ = this.userStoreService.hasPrivilegeAccess();
    this.isAdmin$ = this.userStoreService.isAdmin();
    this.isGhost$ = this.userStoreService.isGhost();
    this.hasFinanceModuleAccess$ = this.userStoreService.hasFinanceModuleAccess();
    this.hasTicketModuleAccess$ = this.userStoreService.hasTicketModuleAccess();
    this.hasReportModuleAccess$ = this.userStoreService.hasReportModuleAccess();
  }

}
