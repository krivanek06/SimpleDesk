import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { RequestDetails, TicketDetails, ReportDetails, FinanceDetails } from 'app/shared/models/RequestDetails';
import { FileUploadComponent } from 'app/shared/components/file-upload/file-upload.component';
import { FileServiceService } from 'app/core/services/file-service.service';
import { CustomDocument} from '../../../shared/models/RequestDetails';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request-side-information',
  templateUrl: './request-side-information.component.html',
  styleUrls: ['./request-side-information.component.scss']
})
export class RequestSideInformationComponent implements OnInit {
  public ticketDetails: TicketDetails;
  public reportDetails: ReportDetails;
  public financeDetails: FinanceDetails;
  public requestDetails: RequestDetails;

  constructor( private fileService: FileServiceService, private http: HttpClient) { }

  ngOnInit() {
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

}
