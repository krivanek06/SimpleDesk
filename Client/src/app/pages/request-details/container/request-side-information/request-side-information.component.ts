import {Component, OnInit} from '@angular/core';
import {RequestDetails} from 'app/shared/models/RequestDetails';
import {FileServiceService} from 'app/core/services/file-service.service';
import {RequestStoreService} from 'app/core/services/request-store.service';
import {UserStoreService} from 'app/core/services/user-store.service';
import {Observable} from 'rxjs';
import {RequestPosition} from 'app/shared/enums/request-position.enum';
import {SwallNotificationService} from 'app/shared/services/swall-notification.service';
import {RequestHttpService} from 'app/api/request-http.service';
import {RequestService} from "../../../../core/services/request.service";

@Component({
  selector: 'app-request-side-information',
  templateUrl: './request-side-information.component.html',
  styleUrls: ['./request-side-information.component.scss']
})
export class RequestSideInformationComponent implements OnInit {
  requestDetails$: Observable<RequestDetails>;
  isSolver$: Observable<boolean>;
  isGhost$: Observable<boolean>;

  openDays: number;

  constructor(private fileService: FileServiceService,
              private userStoreService: UserStoreService,
              private requestStoreService: RequestStoreService,
              private requestHttp: RequestHttpService,
              private requestService: RequestService,
              private swallNotification: SwallNotificationService) {
  }

  ngOnInit() {
    this.requestDetails$ = this.requestStoreService.getRequestDetials();
    this.isSolver$ = this.userStoreService.isSolver();
    this.isGhost$ = this.userStoreService.isGhost();
    this.openDays = this.calculateOpenDays();
  }

  calculateOpenDays(): number {
    const open = new Date(this.requestStoreService.requestDetails.timestampCreation);
    let result = 0;
    const oneDay = 1000 * 60 * 60 * 24; // Get 1 day in milliseconds

    if (this.requestStoreService.requestDetails.timestampClosed === null) {
      const today = new Date();
      result = today.getTime() - open.getTime();
    } else {
      const closed = new Date(this.requestStoreService.requestDetails.timestampClosed);
      result = closed.getTime() - open.getTime();
    }
    return Math.round(result / oneDay);
  }

  uploadFile( fileList: FileList) {
    this.fileService.postFileForRequest(this.requestStoreService.requestDetails.id, fileList).subscribe(() => {
      this.requestService.addFilesToRequest(fileList);
    });
  }

  downloadFile(name: string) {
    this.fileService.downloadFileForRequest(this.requestStoreService.requestDetails.id, name);
  }

  assignOnMe(requestDetails: RequestDetails) {
    this.swallNotification.generateQuestion(`Naozaj chcetete prideliť na seba požiadavku s id : ${requestDetails.id} ?`)
      .then((result) => {
        if (result.value) {
          this.requestHttp.assignOrRemoveRequestOnMe(requestDetails.id, true).subscribe(() => {
            this.swallNotification.generateNotification(`Pridelené`);
            requestDetails.assigned = this.userStoreService.getUserSimple();
            requestDetails.requestPosition = RequestPosition.Assigned;
          });
        }
      });
  }

}
