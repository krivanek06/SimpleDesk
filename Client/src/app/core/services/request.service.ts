import {Injectable} from '@angular/core';
import {RequestStoreService} from './request-store.service';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {UserStoreService} from './user-store.service';
import {RxStompService} from "@stomp/ng2-stompjs";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private requestWebsockets$: Observable<any>;

  constructor(private requestStore: RequestStoreService,
              private userStore: UserStoreService,
              private rxStompService: RxStompService) {
  }

  public addFilesToRequest(fileList: FileList) {
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList.item(i);
      this.requestStore.requestDetails.documents.push({
        name: file.name,
        lastModified: new Date().getTime()
      });
    }
  }

  public connectWebsockets(): Observable<any> {
    if (!this.requestWebsockets$) {
      console.log("new subscription");
      this.requestWebsockets$ = this.rxStompService.watch('/request/' + this.userStore.user.username);
    }
    return this.requestWebsockets$;
  }

  public disconnectWebsockets() {
    this.requestWebsockets$ = null;
    this.rxStompService.deactivate();
  }


}
