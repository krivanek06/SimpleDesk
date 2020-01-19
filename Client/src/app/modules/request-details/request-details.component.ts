import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestDetails,  RequestComment } from 'app/shared/models/RequestDetails';
import { environment } from 'environments/environment';
import { RequestSideInformationComponent } from './request-side-information/request-side-information.component';
import { RequestModificationService } from 'app/core/services/request-modification.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { Observable } from 'rxjs';
import { CommentComponent } from './comment/comment.component';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {
  public sideBarBoolean = false;
  public deny = false;
  public allow = true;

  public isGhost$: Observable<boolean>;
  public isAdmin$: Observable<boolean>;

  @ViewChild('sideDetails', {static: false}) sideDetails: RequestSideInformationComponent;
  @ViewChild('requestComments', {static: false}) requestComments: CommentComponent;


  constructor(private http: HttpClient, public requestService: RequestModificationService, private spinner: NgxSpinnerService,
     private authService: AuthenticationService) {
      this.isGhost$ = this.authService.isGhost();
      this.isAdmin$ = this.authService.isAdmin();
    }

  private openSideBar(){
    this.sideBarBoolean = !this.sideBarBoolean;
  }

  ngOnInit() {
    this.getRequstDetails();
  }

  private getRequstDetails(): void{
    let url = window.location.pathname;
    let id = url.substring(url.lastIndexOf('/') + 1);

    this.spinner.show();
    this.http.get<RequestDetails>(environment.apiUrl + `requests/requestDetails/${id}`).subscribe(requestDetails => {
        console.log(requestDetails)
        this.requestService.updateRequestDetails( requestDetails);
        this.spinner.hide();
      }, 
      error => this.spinner.hide());
    
  }

  private addCommentToArray(requestComment: RequestComment){
    this.requestComments.requestComments.push(requestComment);
  }




}
