import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from "@ngrx/store";
import {Auth} from "../../../../core/model/appState.model";

import * as fromUser from '../../../../core/store/user/user.reducer';

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

  constructor( private storeAuth: Store<Auth> ) { }

  ngOnInit() {
    this.hasFinanceModuleAccess$ = this.storeAuth.select(fromUser.hasFinanceModuleAccess);
    this.hasTicketModuleAccess$ = this.storeAuth.select(fromUser.hasTicketModuleAccess);
    this.hasReportModuleAccess$ = this.storeAuth.select(fromUser.hasReportModuleAccess);
  }


}
