import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {Confirmable} from "../../../../../../shared/utils/swall-notification";
import {RequestReportFormComponent} from "../../presentation/request-report-form/request-report-form.component";
import {FileUploadComponent} from "../../../../../../shared/components/file-upload/file-upload.component";
import {CustomDocument, ReportForm} from "../../../../model/Request";
import {RequestState} from "../../../../../../core/model/appState.model";
import {Store} from "@ngrx/store";
import * as RequestAction from '../../../../store/request.action';


@Component({
  selector: 'app-report-form-page',
  templateUrl: './report-form-page.component.html',
  styleUrls: ['./report-form-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportFormPageComponent implements OnInit {
  @ViewChild('reportFormComponent', {static: true}) reportFormComponent: RequestReportFormComponent;
  @ViewChild('fileUploadComponent', {static: true}) fileUploadComponent: FileUploadComponent;

  private customDocuments: CustomDocument[];

  constructor(private store: Store<RequestState>) {
  }

  ngOnInit() {
  }

  fileInserted(customDocuments: CustomDocument[]) {
    this.customDocuments = customDocuments;
  }

  @Confirmable(`Naozaj chcetete odoslať report ?`)
  submitReport(reportForm: ReportForm) {
    this.store.dispatch(RequestAction.createReport({reportForm, customDocuments: this.customDocuments}));
    this.reportFormComponent.resetForm();
    this.fileUploadComponent.removeFiles();
  }

}
