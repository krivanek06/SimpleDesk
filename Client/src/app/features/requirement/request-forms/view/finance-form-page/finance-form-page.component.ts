import {Component, OnInit, ViewChild} from '@angular/core';
import {SwallNotificationService} from "../../../../../shared/services/swall-notification.service";
import {RequestFinanceFormComponent} from "../../presentation/request-finance-form/request-finance-form.component";
import {FileUploadComponent} from "../../../../../shared/components-presentation/file-upload/file-upload.component";
import {FinanceForm, FinanceType} from "../../../../../core/model/Request";
import {RequestHttpService} from "../../../../../api/request-http.service";
import {Store} from "@ngrx/store";
import {RequestState} from "../../../../../core/model/appState.model";
import * as RequestAction from '../../../store/request.action';

@Component({
  selector: 'app-finance-form-page',
  templateUrl: './finance-form-page.component.html',
  styleUrls: ['./finance-form-page.component.scss']
})
export class FinanceFormPageComponent implements OnInit {
  financeTypeArray: FinanceType[] = [];
  fileList: FileList;
  @ViewChild('financeFormComponent', {static: true}) financeFormComponent: RequestFinanceFormComponent;
  @ViewChild('fileUploadComponent', {static: true}) fileUploadComponent: FileUploadComponent;

  constructor(private requestHttpService: RequestHttpService,
              private store: Store<RequestState>,
              private swallNotification: SwallNotificationService) {
  }

  ngOnInit() {
    this.requestHttpService.getFinanceTypes().subscribe(financeTypes => this.financeTypeArray = financeTypes);
  }

  fileInserted(fileList: FileList) {
    this.fileList = fileList;
  }

  submitFinance(financeForm: FinanceForm) {
    this.swallNotification.generateQuestion(`Naozaj chcetete odoslať na účtáreň ?`).then((result) => {
      if (result.value) {
        this.store.dispatch(RequestAction.createFinance({financeForm, fileList: this.fileList}));
        this.financeFormComponent.resetForm();
        this.fileUploadComponent.removeFiles();
      }
    });
  }

}
