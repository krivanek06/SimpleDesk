import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {CustomDocument, Request} from "../../../../model/Request";
import {Store} from "@ngrx/store";
import {Auth, RequestState} from "../../../../../../core/model/appState.model";
import {getRequestById} from "../../../../store/request.reducer";

import * as RequestAction from '../../../../store/request.action';
import * as fromAuth from '../../../../../../core/store/auth/auth.reducer';
import {Confirmable} from "../../../../../../shared/utils/swall-notification";

@Component({
  selector: 'app-request-information-container',
  templateUrl: './request-information-container.component.html',
  styleUrls: ['./request-information-container.component.scss']
})
export class RequestInformationContainerComponent implements OnInit {

  isSolver$: Observable<boolean>;
  isGhost$: Observable<boolean>;
  request$: Observable<Request>;

  @Output() closeBarEmitter: EventEmitter<any> = new EventEmitter<any>();


  constructor(private store: Store<RequestState>) {
  }

  ngOnInit() {
    this.isGhost$ = this.store.select(fromAuth.isGhost);
    this.isSolver$ = this.store.select(fromAuth.isSolver);
    this.request$ = this.store.select(getRequestById);
  }

  closeSideBar() {
    this.closeBarEmitter.emit();
  }

  uploadFile(request: Request, customDocuments: CustomDocument[]) {
    this.store.dispatch(RequestAction.uploadFile({requestId: request.id, customDocuments}));
  }

  downloadFile(request: Request, fileName: string) {
    this.store.dispatch(RequestAction.downloadFiles({id: request.id, fileName}));
  }

  @Confirmable(`Naozaj chcetete na seba prideliť požiadavku  ?`)
  assignOnMe(request: Request) {
    this.store.dispatch(RequestAction.assignMeOnRequest({request, assign: true}));
  }

}
