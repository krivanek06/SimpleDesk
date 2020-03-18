import {Component, OnInit, ViewChild} from '@angular/core';
import {SwallNotificationService} from "../../../../../shared/services/swall-notification.service";
import {RequestReportFormComponent} from "../../presentation/request-report-form/request-report-form.component";
import {FileUploadComponent} from "../../../../../shared/components-presentation/file-upload/file-upload.component";
import {ReportForm} from "../../../../../core/model/Request";
import {RequestState} from "../../../../../core/model/appState.model";
import {Store} from "@ngrx/store";
import * as RequestAction from '../../../store/request.action';


@Component({
  selector: 'app-report-form-page',
  templateUrl: './report-form-page.component.html',
  styleUrls: ['./report-form-page.component.scss']
})
export class ReportFormPageComponent implements OnInit {
  @ViewChild('reportFormComponent', {static: true}) reportFormComponent: RequestReportFormComponent;
  @ViewChild('fileUploadComponent', {static: true}) fileUploadComponent: FileUploadComponent;

  fileList: FileList;

  constructor(private swallNotification: SwallNotificationService,
              private store: Store<RequestState>) {
  }

  ngOnInit() {
  }

  fileInserted(fileList: FileList) {
    this.fileList = fileList;
  }

  submitReport(reportForm: ReportForm) {
    this.swallNotification.generateQuestion(`Naozaj chcetete odoslať report ?`).then((result) => {
      if (result.value) {
        this.store.dispatch(RequestAction.createReport({reportForm, fileList: this.fileList}));
        this.reportFormComponent.resetForm();
        this.fileUploadComponent.removeFiles();
        /* this.reportHttp.submitReport(reportForm).subscribe(id => {
           this.fileService.postFileForRequest(id, this.fileList).subscribe(() => {
             this.reportFormComponent.resetForm();
             this.fileUploadComponent.removeFiles();
             this.spinner.hide();
             this.swallNotification.generateNotification(`Vaša požiadavka s id : ${id}. bola zaznamenaná. `);
           });
         });*/
      }
    });
  }

}
