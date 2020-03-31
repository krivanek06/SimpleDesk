import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as appManagementAction from "../../store/app-management.action";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../core/model/appState.model";

@Component({
  selector: 'app-user-group-management',
  templateUrl: './user-group-management.component.html',
  styleUrls: ['./user-group-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserGroupManagementComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(appManagementAction.getAllUsers());
    this.store.dispatch(appManagementAction.getAllGroupNames());
  }

}
