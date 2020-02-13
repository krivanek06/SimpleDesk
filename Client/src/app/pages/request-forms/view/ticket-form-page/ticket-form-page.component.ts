import {Component, OnInit, ViewChild} from '@angular/core';
import {FileUploadComponent} from "../../../../shared/components/file-upload/file-upload.component";
import {FileServiceService} from "../../../../core/services/file-service.service";
import {NgxSpinnerService} from "ngx-spinner";
import {SwallNotificationService} from "../../../../shared/services/swall-notification.service";
import {TicketHttpService} from "../../../../resources/request/service/ticket-http.service";
import {TicketSubtype} from "../../../../shared/models/TicketSubtype";
import {TicketForm} from "../../../../resources/request/model/Ticket";
import {RequestTicketFormComponent} from "../../../../resources/request/view/form/request-ticket-form/request-ticket-form.component";

@Component({
  selector: 'app-ticket-form-page',
  templateUrl: './ticket-form-page.component.html',
  styleUrls: ['./ticket-form-page.component.scss']
})
export class TicketFormPageComponent implements OnInit {
  @ViewChild('ticketFormComponent', {static: true}) ticketFormComponent: RequestTicketFormComponent;

  @ViewChild('fileUploader', {static: true}) fileInput: FileUploadComponent;

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

  submitTicket(ticketForm: TicketForm) {
    this.swallNotification.generateQuestion(`Naozaj chcetete odoslať ticket ?`).then((result) => {
      if (result.value) {
        this.spinner.show();
        this.ticketHttp.submitTicket(ticketForm).subscribe(id => {
          this.fileService.postFileForRequest(id, this.fileInput.files).subscribe(succ => {
            this.ticketFormComponent.resetForm();
            this.spinner.hide();
            this.swallNotification.generateNotification(`Vaša požiadavka s id : ${id}. bola zaznamenaná. `);
          }, err => this.spinner.hide());
        });
      }
    });
  }
}
