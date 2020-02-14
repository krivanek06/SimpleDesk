import {Component, OnInit, ViewChild} from '@angular/core';
import {FileServiceService} from "../../../../core/services/file-service.service";
import {NgxSpinnerService} from "ngx-spinner";
import {SwallNotificationService} from "../../../../shared/services/swall-notification.service";
import {ReportForm} from "../../../../resources/request/model/Report";
import {ReportHttpService} from "../../../../resources/request/service/report-http.service";
import {RequestReportFormComponent} from "../../../../resources/request/view/form/request-report-form/request-report-form.component";
import {FileUploadComponent} from "../../../../shared/components/file-upload/file-upload.component";

@Component({
  selector: 'app-report-form-page',
  templateUrl: './report-form-page.component.html',
  styleUrls: ['./report-form-page.component.scss']
})
export class ReportFormPageComponent implements OnInit {
  @ViewChild('reportFormComponent', {static: true}) reportFormComponent: RequestReportFormComponent;
  @ViewChild('fileUploadComponent', {static: true}) fileUploadComponent: FileUploadComponent;

  fileList: FileList;

  constructor(private reportHttp: ReportHttpService,
              private fileService: FileServiceService,
              private spinner: NgxSpinnerService,
              private swallNotification: SwallNotificationService) {
  }

  ngOnInit() {
  }

  fileInserted(fileList: FileList) {
    this.fileList = fileList;
  }

  submitReport(reportForm: ReportForm) {
    console.log(reportForm);
    this.swallNotification.generateQuestion(`Naozaj chcetete odoslať report ?`).then((result) => {
      if (result.value) {
        this.spinner.show();
        this.reportHttp.submitReport(reportForm).subscribe(id => {
          this.fileService.postFileForRequest(id, this.fileList).subscribe(() => {
            this.reportFormComponent.resetForm();
            this.fileUploadComponent.removeFiles();
            this.spinner.hide();
            this.swallNotification.generateNotification(`Vaša požiadavka s id : ${id}. bola zaznamenaná. `);
          });
        });
      }
    });
  }

}