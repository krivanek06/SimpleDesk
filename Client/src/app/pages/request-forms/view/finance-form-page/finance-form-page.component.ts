import {Component, OnInit, ViewChild} from '@angular/core';
import {FileUploadComponent} from "../../../../shared/components/file-upload/file-upload.component";
import {HttpClient} from "@angular/common/http";
import {FileServiceService} from "../../../../core/services/file-service.service";
import {NgxSpinnerService} from "ngx-spinner";
import {SwallNotificationService} from "../../../../shared/services/swall-notification.service";
import {FinanceForm, FinanceType} from "../../../../resources/request/model/Finance";
import {RequestFinanceFormComponent} from "../../../../resources/request/view/form/request-finance-form/request-finance-form.component";
import {FinanceHttpService} from "../../../../resources/request/service/finance-http.service";

@Component({
  selector: 'app-finance-form-page',
  templateUrl: './finance-form-page.component.html',
  styleUrls: ['./finance-form-page.component.scss']
})
export class FinanceFormPageComponent implements OnInit {
  financeTypeArray: FinanceType[] = []

  @ViewChild('financeFormComponent', {static: true}) financeFormComponent: RequestFinanceFormComponent
  @ViewChild('fileUploader', {static: true}) fileInput: FileUploadComponent;

  constructor(private financeHttp: FinanceHttpService,
              private fileService: FileServiceService,
              private spinner: NgxSpinnerService,
              private swallNotification: SwallNotificationService) {
  }

  ngOnInit() {
    this.financeHttp.getFinanceTypes().subscribe(financeTypes => this.financeTypeArray = financeTypes);
  }

  submitFinance(financeForm: FinanceForm) {
    this.swallNotification.generateQuestion(`Naozaj chcetete odoslať na účtáreň ?`).then((result) => {
      if (result.value) {
        this.spinner.show();
        this.financeHttp.submitFinance(financeForm).subscribe((id: number) =>
          this.fileService.postFileForRequest(id, this.fileInput.files).subscribe(() => {
            this.financeFormComponent.resetForm();
            this.spinner.hide();
            this.swallNotification.generateNotification(`Vaša požiadavka s id : ${id}. bola zaznamenaná. `);
          }));
      }
    });
  }

}
