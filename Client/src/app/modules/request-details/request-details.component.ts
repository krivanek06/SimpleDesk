import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
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
export class RequestDetailsComponent implements OnInit, OnDestroy {
  public sideBarBoolean = false;
  public isGhost$: Observable<boolean>;
  public isAdmin$: Observable<boolean>;
  public requestDetail$: Observable<RequestDetails>;

  @ViewChild('sideDetails', {static: false}) sideDetails: RequestSideInformationComponent;
  @ViewChild('requestComments', {static: false}) requestComments: CommentComponent;


  constructor(private requestService: RequestModificationService, private spinner: NgxSpinnerService, private authService: AuthenticationService) {
      this.isGhost$ = this.authService.isGhost();
      this.isAdmin$ = this.authService.isAdmin();
      this.requestDetail$ = this.requestService.getRequestDetials();
    }

  openSideBar(){
    this.sideBarBoolean = !this.sideBarBoolean;
  }

  ngOnInit() {
    let url = window.location.pathname;
    let id = url.substring(url.lastIndexOf('/') + 1);

    this.spinner.show();
    this.requestService.loadRequestDetails(id).subscribe(
        value => this.spinner.hide(),
        err =>  this.spinner.hide()
    );
  }

  ngOnDestroy(): void {
    this.requestService.removeRequestDetails();
  }

  addCommentToArray(requestComment: RequestComment){
    this.requestComments.requestComments.push(requestComment);
  }




}
