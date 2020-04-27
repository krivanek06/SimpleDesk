import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {FileUploadComponent} from "../../../../../../shared/components/file-upload/file-upload.component";
import {CustomDocument, FinanceForm} from "../../../../model/Request";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../../../core/model/appState.model";

import {Observable} from "rxjs";

import * as RequestAction from '../../../../store/request.action';
import * as fromUser from '../../../../../../core/store/user/user.reducer';

@Component({
  selector: 'app-finance-form-page',
  templateUrl: './finance-form-page.component.html',
  styleUrls: ['./finance-form-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinanceFormPageComponent implements OnInit {
  @ViewChild('fileUploadComponent') fileUploadComponent: FileUploadComponent;

  private customDocuments: CustomDocument[];
  financeType$: Observable<string[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.financeType$ = this.store.select(fromUser.getFinanceTypesToSubmit);
  }

  fileInserted(customDocuments: CustomDocument[]) {
    this.customDocuments = customDocuments;
  }


  submitFinance(financeForm: FinanceForm) {
    this.store.dispatch(RequestAction.createFinance({financeForm, customDocuments: this.customDocuments}));
    this.fileUploadComponent.removeFiles();
  }

}
