import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {FileUploadComponent} from "../../../../../../shared/components/file-upload/file-upload.component";
import {RequestTicketFormComponent} from "../../presentation/request-ticket-form/request-ticket-form.component";
import {CustomDocument, TicketForm, TicketSubtype} from "../../../../model/Request";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../../../core/model/appState.model";
import {Observable} from "rxjs";

import * as RequestAction from '../../../../store/request.action';
import * as fromRequest from '../../../../store/request.reducer';
import {Confirmable} from "../../../../../../shared/utils/swall-notification";

@Component({
  selector: 'app-ticket-form-page',
  templateUrl: './ticket-form-page.component.html',
  styleUrls: ['./ticket-form-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketFormPageComponent implements OnInit {
  @ViewChild('ticketFormComponent') ticketFormComponent: RequestTicketFormComponent;
  @ViewChild('fileUploadComponent') fileUploadComponent: FileUploadComponent;

  private customDocuments: CustomDocument[];

  softwareTypes$: Observable<TicketSubtype[]>;
  hardwareTypes$: Observable<TicketSubtype[]>;
  serverTypes$: Observable<TicketSubtype[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.softwareTypes$ = this.store.select(fromRequest.getSoftwareTypes);
    this.hardwareTypes$ = this.store.select(fromRequest.getHardwareTypes);
    this.serverTypes$ = this.store.select(fromRequest.getServerTypes);

    this.store.dispatch(RequestAction.getTicketSubtypes());
  }

  fileInserted(customDocuments: CustomDocument[]) {
    this.customDocuments = customDocuments;
  }

  @Confirmable(`Naozaj chcetete odoslať ticket ?`)
  submitTicket(ticketForm: TicketForm) {
    this.store.dispatch(RequestAction.createTicket({ticketForm, customDocuments: this.customDocuments}));
    this.ticketFormComponent.resetForm();
    this.fileUploadComponent.removeFiles();
  }
}
