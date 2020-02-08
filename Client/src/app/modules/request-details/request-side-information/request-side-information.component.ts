import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { RequestDetails, TicketDetails, ReportDetails, FinanceDetails } from 'app/shared/models/RequestDetails';
import { FileUploadComponent } from 'app/shared/components/file-upload/file-upload.component';
import { FileServiceService } from 'app/core/services/file-service.service';
import { CustomDocument} from '../../../shared/models/RequestDetails';
import { HttpClient } from '@angular/common/http';
import { RequestModificationService } from 'app/core/services/request-modification.service';
import { UserService } from 'app/core/services/user.service';
import Swal from 'sweetalert2';
import { Subscription, Observable } from 'rxjs';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { RequestPosition } from 'app/shared/enums/request-position.enum';
import { SwallNotificationService } from 'app/shared/services/swall-notification.service';

@Component({
  selector: 'app-request-side-information',
  templateUrl: './request-side-information.component.html',
  styleUrls: ['./request-side-information.component.scss']
})
export class RequestSideInformationComponent implements OnInit {
  public requestDetails$: Observable<RequestDetails>;
  public isSolver$: Observable<boolean>;
  public isGhost$: Observable<boolean>;

  constructor( private fileService: FileServiceService, 
              private userService: UserService, 
              private requestService: RequestModificationService , 
              private authService: AuthenticationService,
              private swallNotification: SwallNotificationService) { }

  ngOnInit() {
    this.requestDetails$ =  this.requestService.getRequestDetials();
    this.isSolver$ = this.authService.isSolver();
    this.isGhost$ = this.authService.isGhost();
  }

  calculateOpenDays(requestDetails: RequestDetails): number{
    let open = new Date(requestDetails.timestampCreation);
    let result = 0;
    let one_day=1000*60*60*24; //Get 1 day in milliseconds

    if(requestDetails.timestampClosed === null){
      let today = new Date();
      result = today.getTime() - open.getTime() ;
    }else{
      let closed = new Date(requestDetails.timestampClosed);
      result = closed.getTime() - open.getTime() ;
    }
    return Math.round(result/one_day); 
  }

  uploadFile(requestDetails: RequestDetails, file: File){
    this.fileService.postFileForRequest(requestDetails.id, [file]).subscribe(() => {
      requestDetails.documents.push({
        name: file.name,
        lastModified: new Date().getTime()
      });
    });
  }

  downloadFile(requestDetails: RequestDetails, name: string){
    this.fileService.downloadFileForRequest(requestDetails.id, name);
  }

  assignOnMe(requestDetails: RequestDetails){
    this.swallNotification.generateQuestion(`Naozaj chcetete prideliť na seba požiadavku s id : ${requestDetails.id} ?`)
    .then((result) => {
      if (result.value) {
        this.requestService.assignOrRemoveRequestOnMe(requestDetails.id, true).subscribe(() => {
          this.swallNotification.generateNotification(`Pridelené`);
          requestDetails.assigned = this.userService.getUserSimple(); 
          requestDetails.requestPosition = RequestPosition.Assigned;
        })
      }
    });   
  }

}
