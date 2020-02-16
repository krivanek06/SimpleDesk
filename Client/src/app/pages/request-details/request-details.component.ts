import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {RequestDetails} from 'app/shared/models/RequestDetails';
import {RequestStoreService} from 'app/core/services/request-store.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Observable} from 'rxjs';
import {UserStoreService} from 'app/core/services/user-store.service';

@Component({
    selector: 'app-request-details',
    templateUrl: './request-details.component.html',
    styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit, OnDestroy {

    sideBarBoolean = false;
    isGhost$: Observable<boolean>;
    isAdmin$: Observable<boolean>;

    requestDetail$: Observable<RequestDetails>;

    constructor(private requestStoreService: RequestStoreService,
                private spinner: NgxSpinnerService,
                public userStoreService: UserStoreService) {

        this.isGhost$ = this.userStoreService.isGhost();
        this.isAdmin$ = this.userStoreService.isAdmin();
        this.requestDetail$ = this.requestStoreService.getRequestDetials();
    }

    openSideBar() {
        this.sideBarBoolean = !this.sideBarBoolean;
    }

    ngOnInit() {
        // init request details into behaviour subject
        const url = window.location.pathname;
        const id = url.substring(url.lastIndexOf('/') + 1);

        this.spinner.show();
        this.requestStoreService.addRequestDetails(id).subscribe(
            value => this.spinner.hide(),
            err => this.spinner.hide()
        );
    }

    ngOnDestroy(): void {
        this.requestStoreService.removeRequestDetails();
    }


}
