import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { RequestDetails,  RequestComment } from 'app/shared/models/RequestDetails';
import { RequestSideInformationComponent } from './container/request-side-information/request-side-information.component';
import { RequestStoreService } from 'app/core/services/request-store.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { UserStoreService } from 'app/core/services/user-store.service';
import { RequestCommentBodyComponent } from 'app/resources/request-comment/request-comment-body/request-comment-body.component';
import { RequestService } from 'app/core/services/request.service';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit, OnDestroy {
  
  sideBarBoolean = false;
  public isGhost$: Observable<boolean>;
  public isAdmin$: Observable<boolean>;
  public requestDetail$: Observable<RequestDetails>;

  @ViewChild('sideDetails', {static: false}) sideDetails: RequestSideInformationComponent;
  @ViewChild('requestComments', {static: false}) requestComments: RequestCommentBodyComponent;


  constructor(private requestStoreService: RequestStoreService, 
              private spinner: NgxSpinnerService, 
              public userStoreService: UserStoreService,) {

      this.isGhost$ = this.userStoreService.isGhost();
      this.isAdmin$ = this.userStoreService.isAdmin();
      this.requestDetail$ = this.requestStoreService.getRequestDetials();
    }

  openSideBar(){
    this.sideBarBoolean = !this.sideBarBoolean;
  }

  ngOnInit() {
    let url = window.location.pathname;
    let id = url.substring(url.lastIndexOf('/') + 1);

    this.spinner.show();
    this.requestStoreService.addRequestDetails(id).subscribe(
        value => this.spinner.hide(),
        err =>  this.spinner.hide()
    );
  }

  ngOnDestroy(): void {
    this.requestStoreService.removeRequestDetails();
  }

  addCommentToArray(requestComment: RequestComment){
    this.requestStoreService.requestDetails.requestComments.push(requestComment);
    //this.requestComments.requestComments.push(requestComment);
  }




}
