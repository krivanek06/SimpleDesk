import {Injectable} from '@angular/core';
import {Subscription} from 'rxjs';
import {UserStoreService} from '../../../core/services/user-store.service';
import {RxStompService} from "@stomp/ng2-stompjs";
import {RequestState} from "../../../core/model/appState.model";
import {Store} from "@ngrx/store";
import * as RequestAction from '../store/request.action';
import {Request} from "../../../core/model/Request";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private requestWebsockets$: Subscription;

  constructor(private userStore: UserStoreService,
              private rxStompService: RxStompService,
              private store: Store<RequestState>) {

  }

  public activateConnection(): void {
    if (this.requestWebsockets$ || !this.userStore.user) {
      console.log('already subscibed');
      return;
    }

    this.requestWebsockets$ = this.rxStompService.watch('/request/' + this.userStore.user.username).subscribe(response => {
      const request: Request = JSON.parse(response.body);

      if (!request.logs || request.logs[request.logs.length - 1] !== 'DELETE') {
        this.store.dispatch(RequestAction.updateRequestFromAPI({request}));
      } else {
        this.store.dispatch(RequestAction.deleteRequestFromAPI({request}));
      }
    });
  }

  public disconnectWebsockets() {
    this.requestWebsockets$.unsubscribe();
    this.requestWebsockets$ = undefined;
  }

}
