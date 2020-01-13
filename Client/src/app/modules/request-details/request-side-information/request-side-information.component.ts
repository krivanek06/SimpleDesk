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

@Component({
  selector: 'app-request-side-information',
  templateUrl: './request-side-information.component.html',
  styleUrls: ['./request-side-information.component.scss']
})
export class RequestSideInformationComponent implements OnInit, OnDestroy {
  public requestDetails: RequestDetails;
  private subscription: Subscription;
  public isSolver$: Observable<boolean>;

  constructor( private fileService: FileServiceService, private userService: UserService, 
    private requestService: RequestModificationService , private authService: AuthenticationService) { }

  ngOnInit() {
    this.subscription = this.requestService.getRequestDetials().subscribe( requestDetails => {
      this.requestDetails = requestDetails;
    });

    this.isSolver$ = this.authService.isSolver();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  private calculateOpenDays(): number{
    let open = new Date(this.requestDetails.timestampCreation);
    let result = 0;
    let one_day=1000*60*60*24; //Get 1 day in milliseconds

    if(this.requestDetails.timestampClosed === null){
      let today = new Date();
      result = today.getTime() - open.getTime() ;
    }else{
      let closed = new Date(this.requestDetails.timestampClosed);
      result = closed.getTime() - open.getTime() ;
    }
    return Math.round(result/one_day); 
  }

  public uploadFile(file: File){
    this.fileService.postFileForRequest(this.requestDetails.id, [file]).subscribe(result => {
      let document: CustomDocument = {
        name: file.name,
        lastModified: new Date().getMilliseconds()
      }
      this.requestDetails.documents.push(document);
    });
  }

  private downloadFile(name: string){
    this.fileService.downloadFileForRequest(this.requestDetails.id, name);
  }

  private assignOnMe(){
    Swal.fire({
      text: "Naozaj chcetete prideliť na seba požiadavku s id : " + this.requestDetails.id + " ? ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Zrušiť",
      confirmButtonText: 'Ano'
    }).then((result) => {
      if (result.value) {
        this.requestService.assignOrRemoveRequestOnMe(this.requestDetails.id, true).subscribe(result => {
          Swal.fire({ title: 'Pridelené', icon: 'success' , position: 'top-end', timer: 1200, showConfirmButton: false,});
          this.requestDetails.assigned = this.userService.getUserSimple(); 
        })
      }
    });   
  }

}
