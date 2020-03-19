import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {CustomDocument, Request} from "../../../../../core/model/Request";
import {RequestService} from "../../../../../core/services/request.service";
import {SwallNotificationService} from "../../../../../shared/services/swall-notification.service";
import {UserStoreService} from "../../../../../core/services/user-store.service";
import * as RequestAction from '../../../store/request.action';
import {Store} from "@ngrx/store";
import {RequestState} from "../../../../../core/model/appState.model";
import {getRequestById} from "../../../store/request.reducer";

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


  constructor(private requestService: RequestService,
              private swallNotification: SwallNotificationService,
              private userStoreService: UserStoreService,
              private store: Store<RequestState>) {
  }

  ngOnInit() {
    this.isGhost$ = this.userStoreService.isGhost();
    this.isSolver$ = this.userStoreService.isSolver();
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

  assignOnMe(request: Request) {
    this.swallNotification.generateQuestion(`Naozaj chcetete prideliť na seba požiadavku s id : ${request.id} ?`)
      .then((result) => {
        if (result.value) {
          this.store.dispatch(RequestAction.assignMeOnRequest({
            request,
            userSimpleDTO: this.userStoreService.getUserSimple()
          }));
        }
      });
  }

}
