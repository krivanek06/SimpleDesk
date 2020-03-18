import {Injectable} from '@angular/core';
import {Subscription} from 'rxjs';
import {UserStoreService} from './user-store.service';
import {RxStompService} from "@stomp/ng2-stompjs";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private requestWebsockets$: Subscription;

  constructor(private userStore: UserStoreService,
              private rxStompService: RxStompService) {

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
