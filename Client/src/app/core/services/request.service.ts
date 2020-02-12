import { Injectable } from '@angular/core';
import { RequestStoreService } from './request-store.service';
import { Observable, of } from 'rxjs';
import { UserStoreService } from './user-store.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private requestStore: RequestStoreService,
              private userStore: UserStoreService) { }



  isAssignedOnMe(): Observable<boolean>{
    return of(this.requestStore.requestDetails.assigned != null && 
          this.requestStore.requestDetails.assigned.username === this.userStore.user.username);
  }

  amICreator(): Observable<boolean>{
    return of(this.requestStore.requestDetails.creator.username === this.userStore.user.username);
  }
}
