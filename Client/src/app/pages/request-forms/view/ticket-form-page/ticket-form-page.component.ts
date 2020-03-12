  import {Component, OnInit, ViewChild} from '@angular/core';
import {FileUploadComponent} from "../../../../shared/components-presentation/file-upload/file-upload.component";
import {FileServiceService} from "../../../../core/services/file-service.service";
import {NgxSpinnerService} from "ngx-spinner";
import {SwallNotificationService} from "../../../../shared/services/swall-notification.service";
import {TicketHttpService} from "../../../../api/ticket-http.service";
import {RequestTicketFormComponent} from "../../presentation/request-ticket-form/request-ticket-form.component";
  import {TicketForm, TicketSubtype} from "../../../../core/model/Request";

@Component({
  selector: 'app-ticket-form-page',
  templateUrl: './ticket-form-page.component.html',
  styleUrls: ['./ticket-form-page.component.scss']
})
export class TicketFormPageComponent implements OnInit {
  @ViewChild('ticketFormComponent', {static: true}) ticketFormComponent: RequestTicketFormComponent;
  @ViewChild('fileUploadComponent', {static: true}) fileUploadComponent: FileUploadComponent;

  fileList: FileList;

  softwareTypes: TicketSubtype[] = [];
  hardwareTypes: TicketSubtype[] = [];
  serverTypes: TicketSubtype[] = [];

  constructor(private ticketHttp: TicketHttpService,
              private fileService: FileServiceService,
              private spinner: NgxSpinnerService,
              private swallNotification: SwallNotificationService) {
  }

  ngOnInit() {
    this.ticketHttp.getTicketSubtype('Software').subscribe(software => this.softwareTypes = software);
    this.ticketHttp.getTicketSubtype('Hardware').subscribe(hardware => this.hardwareTypes = hardware);
    this.ticketHttp.getTicketSubtype('Server').subscribe(server => this.serverTypes = server);
  }

  fileInserted(fileList: FileList) {
    this.fileList = fileList;
  }

  submitTicket(ticketForm: TicketForm) {
    this.swallNotification.generateQuestion(`Naozaj chcetete odoslať ticket ?`).then((result) => {
      if (result.value) {
        this.spinner.show();
        this.ticketHttp.submitTicket(ticketForm).subscribe(id => {
          this.fileService.postFileForRequest(id, this.fileList).subscribe(() => {
            this.ticketFormComponent.resetForm();
            this.fileUploadComponent.removeFiles();
            this.spinner.hide();
            this.swallNotification.generateNotification(`Vaša požiadavka s id : ${id}. bola zaznamenaná. `);
          }, err => this.spinner.hide());
        });
      }
    });
  }
}
