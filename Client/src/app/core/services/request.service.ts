import {Injectable} from '@angular/core';
import {RequestStoreService} from './request-store.service';
import {Subscription} from 'rxjs';
import {UserStoreService} from './user-store.service';
import {RxStompService} from "@stomp/ng2-stompjs";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private requestWebsockets$: Subscription;

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

  public activateConnection(): void {
    if (this.requestWebsockets$ || !this.userStore.user) {
      console.log('already subscibed');
      return;
    }

    this.requestWebsockets$ = this.rxStompService.watch('/request/' + this.userStore.user.username).subscribe(x => {
      console.log(JSON.parse(x.body));
    });
  }


  public disconnectWebsockets() {
    this.requestWebsockets$.unsubscribe();
    this.requestWebsockets$ = undefined;
  }


}
