import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { Observable } from 'rxjs';
import { UserStoreService } from 'app/core/services/user-store.service';

@Component({
  selector: 'app-request-forms',
  templateUrl: './request-forms.component.html',
  styleUrls: ['./request-forms.component.scss']
})
export class RequestFormsComponent implements OnInit {
  public hasFinanceModuleAccess$: Observable<boolean>;
  public hasTicketModuleAccess$: Observable<boolean>;
  public hasReportModuleAccess$: Observable<boolean>;

  constructor( private userStoreService: UserStoreService ) { }

  ngOnInit() {
    this.hasFinanceModuleAccess$ = this.userStoreService.hasFinanceModuleAccess();
    this.hasTicketModuleAccess$ = this.userStoreService.hasTicketModuleAccess();
    this.hasReportModuleAccess$ = this.userStoreService.hasReportModuleAccess();
  }

}
