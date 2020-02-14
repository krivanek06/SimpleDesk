import {Component, OnInit, ViewChild} from '@angular/core';
import {FileServiceService} from "../../../../core/services/file-service.service";
import {NgxSpinnerService} from "ngx-spinner";
import {SwallNotificationService} from "../../../../shared/services/swall-notification.service";
import {FinanceForm, FinanceType} from "../../../../resources/request/model/Finance";
import {RequestFinanceFormComponent} from "../../../../resources/request/view/form/request-finance-form/request-finance-form.component";
import {FinanceHttpService} from "../../../../resources/request/service/finance-http.service";
import {FileUploadComponent} from "../../../../shared/components/file-upload/file-upload.component";

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

  constructor(private financeHttp: FinanceHttpService,
              private fileService: FileServiceService,
              private spinner: NgxSpinnerService,
              private swallNotification: SwallNotificationService) {
  }

  ngOnInit() {
    this.financeHttp.getFinanceTypes().subscribe(financeTypes => this.financeTypeArray = financeTypes);
  }

  fileInserted(fileList: FileList) {
    this.fileList = fileList;
  }

  submitFinance(financeForm: FinanceForm) {
    this.swallNotification.generateQuestion(`Naozaj chcetete odoslať na účtáreň ?`).then((result) => {
      if (result.value) {
        this.spinner.show();
        this.financeHttp.submitFinance(financeForm).subscribe((id: number) => {
          this.fileService.postFileForRequest(id, this.fileList).subscribe(() => {
            this.financeFormComponent.resetForm();
            this.fileUploadComponent.removeFiles();
            this.spinner.hide();
            this.swallNotification.generateNotification(`Vaša požiadavka s id : ${id}. bola zaznamenaná. `);
          });
        });
      }
    });
  }

}
