import {Component, OnInit, ViewChild} from '@angular/core';
import {FileUploadComponent} from "../../../../../shared/components-presentation/file-upload/file-upload.component";
import {SwallNotificationService} from "../../../../../shared/services/swall-notification.service";
import {RequestTicketFormComponent} from "../../presentation/request-ticket-form/request-ticket-form.component";
import {CustomDocument, TicketForm, TicketSubtype} from "../../../../../core/model/Request";
import {RequestHttpService} from "../../../../../api/request-http.service";
import {Store} from "@ngrx/store";
import {RequestState} from "../../../../../core/model/appState.model";
import * as RequestAction from '../../../store/request.action';

@Component({
  selector: 'app-ticket-form-page',
  templateUrl: './ticket-form-page.component.html',
  styleUrls: ['./ticket-form-page.component.scss']
})
export class TicketFormPageComponent implements OnInit {
  @ViewChild('ticketFormComponent', {static: true}) ticketFormComponent: RequestTicketFormComponent;
  @ViewChild('fileUploadComponent', {static: true}) fileUploadComponent: FileUploadComponent;

  private customDocuments: CustomDocument[];

  softwareTypes: TicketSubtype[] = [];
  hardwareTypes: TicketSubtype[] = [];
  serverTypes: TicketSubtype[] = [];

  constructor(private requestHttpService: RequestHttpService,
              private store: Store<RequestState>,
              private swallNotification: SwallNotificationService) {
  }

  ngOnInit() {
    this.requestHttpService.getTicketSubtype('Software').subscribe(software => this.softwareTypes = software);
    this.requestHttpService.getTicketSubtype('Hardware').subscribe(hardware => this.hardwareTypes = hardware);
    this.requestHttpService.getTicketSubtype('Server').subscribe(server => this.serverTypes = server);
  }

  fileInserted(customDocuments: CustomDocument[]) {
    this.customDocuments = customDocuments;
  }

  submitTicket(ticketForm: TicketForm) {
    this.swallNotification.generateQuestion(`Naozaj chcetete odoslať ticket ?`).then((result) => {
      if (result.value) {
        this.store.dispatch(RequestAction.createTicket({ticketForm, customDocuments: this.customDocuments}));
        this.ticketFormComponent.resetForm();
        this.fileUploadComponent.removeFiles();
      }
    });
  }
}
