import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {SwallNotificationService} from "../../../../../../core/services/swall-notification.service";
import {RequestFinanceFormComponent} from "../../presentation/request-finance-form/request-finance-form.component";
import {FileUploadComponent} from "../../../../../../shared/components/file-upload/file-upload.component";
import {CustomDocument, FinanceForm, FinanceType} from "../../../../model/Request";
import {RequestHttpService} from "../../../../../../core/api/request-http.service";
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

  private customDocuments: CustomDocument[];
  @ViewChild('financeFormComponent') financeFormComponent: RequestFinanceFormComponent;
  @ViewChild('fileUploadComponent') fileUploadComponent: FileUploadComponent;

  financeType$: Observable<string[]>;

  constructor(private requestHttpService: RequestHttpService,
              private store: Store<AppState>,
              private swallNotification: SwallNotificationService) {
  }

  ngOnInit() {
    this.financeType$ = this.store.select(fromUser.getFinanceTypesToSubmit);
  }

  fileInserted(customDocuments: CustomDocument[]) {
    this.customDocuments = customDocuments;
  }

  submitFinance(financeForm: FinanceForm) {
    this.swallNotification.generateQuestion(`Naozaj chcetete odoslať na účtáreň ?`).then((result) => {
      if (result.value) {
        this.store.dispatch(RequestAction.createFinance({financeForm, customDocuments: this.customDocuments}));
        this.financeFormComponent.resetForm();
        this.fileUploadComponent.removeFiles();
      }
    });
  }

}
