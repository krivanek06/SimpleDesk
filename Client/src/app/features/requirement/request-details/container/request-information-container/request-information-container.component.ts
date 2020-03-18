import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Request} from "../../../../../core/model/Request";
import {RequestService} from "../../../../../core/services/request.service";
import {SwallNotificationService} from "../../../../../shared/services/swall-notification.service";
import {UserStoreService} from "../../../../../core/services/user-store.service";
import * as RequestAction from '../../../store/request.action';
import {Store} from "@ngrx/store";
import {RequestState} from "../../../../../core/model/appState.model";
import {getRequestById} from "../../../store/request.reducer";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-request-information-container',
  templateUrl: './request-information-container.component.html',
  styleUrls: ['./request-information-container.component.scss']
})
export class RequestInformationContainerComponent implements OnInit, OnDestroy {

  isSolver$: Observable<boolean>;
  isGhost$: Observable<boolean>;
  destroy$: Subject<boolean> = new Subject<boolean>();
  request: Request;

  @Output() closeBarEmitter: EventEmitter<any> = new EventEmitter<any>();


  constructor(private requestService: RequestService,
              private swallNotification: SwallNotificationService,
              private userStoreService: UserStoreService,
              private store: Store<RequestState>) {
  }

  ngOnInit() {
    this.isGhost$ = this.userStoreService.isGhost();
    this.isSolver$ = this.userStoreService.isSolver();
    this.store.select(getRequestById).pipe(
      takeUntil(this.destroy$)
    ).subscribe(request => this.request = request);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  closeSideBar() {
    this.closeBarEmitter.emit();
  }

  uploadFile(fileList: FileList) {
    this.store.dispatch(RequestAction.uploadFile({requestId: this.request.id, fileList}));
  }

  downloadFile(fileName: string) {
    this.store.dispatch(RequestAction.downloadFiles({id: this.request.id, fileName}));
  }

  assignOnMe() {
    this.swallNotification.generateQuestion(`Naozaj chcetete prideliť na seba požiadavku s id : ${this.request.id} ?`)
      .then((result) => {
        if (result.value) {
          this.store.dispatch(RequestAction.assignMeOnRequest({
            request: this.request,
            userSimpleDTO: this.userStoreService.getUserSimple()
          }));
        }
      });
  }

}
