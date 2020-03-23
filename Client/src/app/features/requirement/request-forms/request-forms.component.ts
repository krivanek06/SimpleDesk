import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { UserStoreService } from 'app/core/services/user-store.service';

@Component({
  selector: 'app-request-forms',
  templateUrl: './request-forms.component.html',
  styleUrls: ['./request-forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestFormsComponent implements OnInit {
  hasFinanceModuleAccess$: Observable<boolean>;
  hasTicketModuleAccess$: Observable<boolean>;
  hasReportModuleAccess$: Observable<boolean>;

  constructor( private userStoreService: UserStoreService ) { }

  ngOnInit() {
    this.hasFinanceModuleAccess$ = this.userStoreService.hasFinanceModuleAccess();
    this.hasTicketModuleAccess$ = this.userStoreService.hasTicketModuleAccess();
    this.hasReportModuleAccess$ = this.userStoreService.hasReportModuleAccess();
  }


}
