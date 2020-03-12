import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Request} from "../../../../core/model/Request";
import {RequestPosition} from "../../../../core/enum/request.enum";
import {FileServiceService} from "../../../../core/services/file-service.service";
import {RequestHttpService} from "../../../../api/request-http.service";
import {RequestService} from "../../../../core/services/request.service";
import {SwallNotificationService} from "../../../../shared/services/swall-notification.service";
import {UserStoreService} from "../../../../core/services/user-store.service";

@Component({
  selector: 'app-request-information-container',
  templateUrl: './request-information-container.component.html',
  styleUrls: ['./request-information-container.component.scss']
})
export class RequestInformationContainerComponent implements OnInit {

  isSolver$: Observable<boolean>;
  isGhost$: Observable<boolean>;

  @Input() requestDetails: Request;
  @Output() closeBarEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fileService: FileServiceService,
              private requestHttp: RequestHttpService,
              private requestService: RequestService,
              private swallNotification: SwallNotificationService,
              private userStoreService: UserStoreService) {
  }

  ngOnInit() {
    this.isGhost$ = this.userStoreService.isGhost();
    this.isSolver$ = this.userStoreService.isSolver();
  }

  closeSideBar() {
    this.closeBarEmitter.emit();
  }

  uploadFile(fileList: FileList) {
    this.fileService.postFileForRequest(this.requestDetails.id, fileList).subscribe(() => {
      this.requestService.addFilesToRequest(fileList);
    });
  }

  downloadFile(name: string) {
    this.fileService.downloadFileForRequest(this.requestDetails.id, name);
  }

  assignOnMe() {
    this.swallNotification.generateQuestion(`Naozaj chcetete prideliť na seba požiadavku s id : ${this.requestDetails.id} ?`)
      .then((result) => {
        if (result.value) {
          this.requestHttp.assignOrRemoveRequestOnMe(this.requestDetails.id, true).subscribe(() => {
            this.swallNotification.generateNotification(`Pridelené`);
            this.requestDetails.assigned = this.userStoreService.getUserSimple();
            this.requestDetails.requestPosition = RequestPosition.Assigned;
          });
        }
      });
  }

}
