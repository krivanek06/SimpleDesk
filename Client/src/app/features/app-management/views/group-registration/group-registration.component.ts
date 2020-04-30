import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {Group} from "../../../../core/model/Group";
import {FinanceType, TicketSubtype} from "../../../requirement/model/Request";
import {UserSimple} from "../../../../core/model/User";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../core/model/appState.model";
import {GroupFormComponent} from "../../presentation/group/group-form/group-form.component";

import * as appManagementAction from '../../store/app-management.action';
import * as fromAppManagement from '../../store/app-management.reducer';
import * as fromRequest from '../../../../features/requirement/store/request.reducer';
import * as requestAction from '../../../../features/requirement/store/request.action';
import {Confirmable} from "../../../../shared/utils/swall-notification";


@Component({
  selector: 'app-group-registration',
  templateUrl: './group-registration.component.html',
  styleUrls: ['./group-registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupRegistrationComponent implements OnInit {
  @ViewChild('groupForm') groupForm: GroupFormComponent;

  activeUsers$: Observable<UserSimple[]>;
  financeType$: Observable<FinanceType[]>;
  software$: Observable<TicketSubtype[]>;
  hardware$: Observable<TicketSubtype[]>;
  server$: Observable<TicketSubtype[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.activeUsers$ = this.store.select(fromAppManagement.getAllActiveUsers);
    this.financeType$ = this.store.select(fromRequest.getAllFinanceTypes);
    this.software$ = this.store.select(fromRequest.getSoftwareTypes);
    this.hardware$ = this.store.select(fromRequest.getHardwareTypes);
    this.server$ = this.store.select(fromRequest.getServerTypes);

    this.store.dispatch(requestAction.getFinanceTypes());
    this.store.dispatch(requestAction.getTicketSubtypes());
  }

  @Confirmable(`Naozaj chcetete vytvoriť skupinu ?`)
  registerGroup(group: Group): void {
    this.store.dispatch(appManagementAction.registerGroup({group}));
    this.groupForm.resetForm();
  }

}
